"use client";

// next components
import Link from "next/link";
import { usePathname } from "next/navigation";

// css
import "../css/header.css";
import React from "react";

// icons
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArticleIcon from "@mui/icons-material/Article";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Header() {
  const [menuActive, setMenuActive] = React.useState(false);
  const pathname = usePathname();

  const menu_toggler = () => {
    setMenuActive((prev) => !prev);
  };

  const brand_name_click_handler = () => {
    if (menuActive) {
      setMenuActive(false);
    }
  };

  return (
    <nav className="nav-container">
      <Link href="/" className="brand-name" onClick={brand_name_click_handler}>
        Portfolio
      </Link>
      <div
        className={`menu-toggler ${menuActive ? "active" : ""}`}
        onClick={menu_toggler}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-links-container ${menuActive ? "active" : ""}`}>
        {/* to do need to add icons on mobile */}
        <Link
          href="/project"
          className={`nav-links ${pathname === "/project" ? "active" : ""}`}
          onClick={menu_toggler}
        >
          <TaskAltIcon className="nav-links-icon" />
          Projects
        </Link>
        <Link
          href="/"
          className={`nav-links ${pathname === "/blog" ? "active" : ""}`}
          onClick={menu_toggler}
        >
          <ArticleIcon className="nav-links-icon" />
          Blog
        </Link>
        <Link
          href="/"
          className={`nav-links ${pathname === "/resume" ? "active" : ""}`}
          onClick={menu_toggler}
        >
          <DescriptionIcon className="nav-links-icon" />
          Resume
        </Link>
        <Link
          href="/"
          className={`nav-links ${pathname === "/contact" ? "active" : ""}`}
          onClick={menu_toggler}
        >
          <PhoneIcon className="nav-links-icon" />
          Contact
        </Link>
      </div>
    </nav>
  );
}
