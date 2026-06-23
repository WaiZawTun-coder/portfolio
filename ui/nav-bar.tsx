"use client";

import { Button } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// icons
import FileDownloadIcon from "@mui/icons-material/FileDownload";

interface NavLink {
  id: number;
  title: string;
  href: string;
}

const NavLinks: NavLink[] = [
  { id: 1, title: "Home", href: "#home" },
  { id: 2, title: "About", href: "#about" },
  { id: 3, title: "Skills", href: "#skills" },
  { id: 4, title: "Projects", href: "#projects" },
  // { id: 5, title: "Experience", href: "#experiences" },
  { id: 6, title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const lastScrollY = useRef<number>(
    typeof window !== "undefined" ? window.scrollY : 0,
  );
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);

  const indicatorRef = useRef<HTMLSpanElement | null>(null);

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
    const sections = Array.from(
      document.querySelectorAll("section[id]"),
    ) as HTMLElement[];

    console.log({ sections });

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // get all visible sections
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement);

        if (visibleSections.length === 0) return;

        console.log({ visibleSections });

        // pick FIRST visible section in DOM order
        const firstVisible = sections.find((section) =>
          visibleSections.includes(section),
        );

        if (firstVisible) {
          setActiveLink(`#${firstVisible.id}`);
        }
      },
      {
        root: null,
        threshold: 0.25, // better stability
      },
    );

    sections.forEach((section) => observer.observe(section));

    // ✅ Set initial active section on load
    const initialSection = sections[sections.length - 1];
    if (initialSection) {
      setActiveLink(`#${initialSection.id}`);
    }

    return () => observer.disconnect();
  }, []);

  // attach indicator to active link
  useEffect(() => {
    const activeEl = document.querySelector(
      `[data-nav="${activeLink}"]`,
    ) as HTMLElement | null;

    const indicator = indicatorRef.current;

    if (!activeEl || !indicator) return;

    requestAnimationFrame(() => {
      indicator.style.width = `${activeEl.offsetWidth}px`;
      indicator.style.transform = `translateX(${activeEl.offsetLeft}px)`;
    });
  }, [activeLink]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      lastScrollY.current = window.scrollY;
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [activeLink]);

  return (
    <header
      className={clsx(
        "h-16 w-full bg-primary z-50 fixed top-0 left-0 transition-transform duration-300",
        isNavbarVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="h-16 flex items-center justify-between px-4 lg:px-8 py-2 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          <Link href="/" onClick={() => setActiveLink("#home")}>
            Wai Zaw Tun
          </Link>
        </div>
        {/* Navigation */}
        <nav
          className={clsx(
            "fixed top-16 right-0 z-40 flex flex-col gap-2 bg-primary p-4 w-64 h-screen transition-transform duration-300 lg:static lg:flex-row lg:w-auto lg:h-auto lg:bg-transparent lg:p-0",
            isMobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full lg:translate-x-0",
          )}
        >
          <div className="relative flex lg:flex-row flex-col gap-4">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                data-nav={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActiveLink(link.href);
                }}
                className={clsx(
                  "px-5 py-2 cursor-pointer text-white transition-colors duration-300 border-b-2 md:border-0 border-transparent",
                  activeLink === link.href
                    ? "border-transparent border-b-secondary text-white"
                    : "text-gray-300 hover:text-white",
                )}
              >
                {link.title}
              </Link>
            ))}

            {/* sliding indicator */}
            <span
              ref={indicatorRef}
              className="hidden md:block absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ease-out"
            />
          </div>
          <Button
            variant="outlined"
            color="inherit"
            download={true}
            href="/cv-form/Wai_Zaw_Tun.pdf"
          >
            <div className="flex gap-2">
              Get Resume
              <FileDownloadIcon />
            </div>
          </Button>
        </nav>

        {/* mobile menu button */}
        <Button
          aria-label="Toggle Menu"
          onClick={handleMobileMenuToggle}
          sx={{
            width: 40,
            height: 40,
            minWidth: 40,
            p: 0,
            display: {
              xs: "flex",
              lg: "none",
            },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.8,
            borderRadius: 2,
            bgcolor: "transparent",
            zIndex: 50,
          }}
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
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
