"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface NavLink {
  id: number;
  title: string;
  href: string;
}

const NavLinks: NavLink[] = [
  {
    id: 1,
    title: "Home",
    href: "#home",
  },
  {
    id: 2,
    title: "About",
    href: "#about",
  },
  {
    id: 3,
    title: "Projects",
    href: "#projects",
  },
  { id: 4, title: "Skills", href: "#skills" },
  { id: 5, title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const lastScrollY = useRef<number>(
    typeof window !== "undefined" ? window.scrollY : 0,
  );
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);

  // handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsNavbarVisible(true);
        lastScrollY.current = 0;
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        // scrolling down
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // scrolling up
        setIsNavbarVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // toggle mobile menu
  const handleMobileMenuToggle = (): void => {
    setIsMobileMenuOpen((prev): boolean => !prev);
  };

  // update active link
  useEffect(() => {
    const updateCurrentPath = (): void => {
      const currentPath: string = window.location.hash || "#home";
      setActiveLink((): string => currentPath);
    };

    updateCurrentPath();

    window.addEventListener("hashchange", updateCurrentPath);

    return () => {
      window.removeEventListener("hashchange", updateCurrentPath);
    };
  }, []);

  // update last scroll position on active link change
  useEffect((): void => {
    // wait for 300ms to allow the page to scroll to target section
    const timeoutId: NodeJS.Timeout = setTimeout((): void => {
      lastScrollY.current = window.scrollY;
    }, 1000);

    return clearTimeout(timeoutId);
  }, [activeLink]);

  return (
    <header
      className={clsx(
        "h-16 w-full bg-primary z-50 fixed top-0 left-0 transition-transform duration-300",
        isNavbarVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="h-16 flex items-center justify-between px-4 md:px-8 py-2 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          <Link href="/" onClick={() => setActiveLink("#home")}>
            Wai Zaw Tun
          </Link>
        </div>
        {/* Navigation */}
        <nav
          className={clsx(
            "fixed top-16 right-0 z-40 flex flex-col gap-2 bg-primary p-4 w-64 h-screen transition-transform duration-300 md:static md:flex-row md:w-auto md:h-auto md:bg-transparent md:p-0",
            isMobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full md:translate-x-0",
          )}
        >
          <ul className="flex flex-col pt-4 md:pt-0 md:flex-row gap-4">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActiveLink(link.href);
                }}
                className={clsx(
                  "px-5 py-2 md:w-auto cursor-pointer rounded-md text-white hover:text-gray-300 transition-colors transition-background duration-300 z-40",
                  activeLink === link.href
                    ? "bg-surface hover:bg-surface-light"
                    : "bg-transparent hover:bg-gray-600",
                )}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </nav>

        {/* mobile menu button */}
        <button
          type="button"
          aria-label="Toggle Menu"
          className="md:hidden flex flex-col items-center justify-center gap-1.5 hover:bg-gray-600 p-2 rounded-md transitions-colors duration-300 cursor-pointer relative z-50"
          onClick={handleMobileMenuToggle}
          //   sx={{ padding: 0, width: "40px", height: "40px" }}
        >
          <span
            className={clsx(
              "block w-6 h-0.5 bg-white transition-transform duration-300",
              isMobileMenuOpen && "rotate-45 translate-y-2",
            )}
          ></span>
          <span
            className={clsx(
              "block w-6 h-0.5 bg-white transition-opacity duration-300",
              isMobileMenuOpen && "opacity-0",
            )}
          ></span>
          <span
            className={clsx(
              "block w-6 h-0.5 bg-white transition-transform duration-300",
              isMobileMenuOpen && "-rotate-45 -translate-y-2",
            )}
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
