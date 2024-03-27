"use client";

// next components
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// css
import "../css/header.css";

// icons
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArticleIcon from "@mui/icons-material/Article";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneIcon from "@mui/icons-material/Phone";

// json
import routes from "@/assests/json/routes.json";

// custom components
import IconResolver from "@/components/js/icon_resolver";

export default function Header() {
  const [menuActive, setMenuActive] = React.useState(false);
  const pathname = usePathname();
  const curr_pathname = "/" + pathname.split("/")[1];

  console.log(curr_pathname);

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
      <Link
        href={routes.value[0].link}
        className="brand-name"
        onClick={brand_name_click_handler}
      >
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
        {routes.value.map((route) => {
          if (route.name !== "home") {
            return (
              <Link
                href={route.link}
                className={`nav-links${
                  curr_pathname === route.link ? " active" : ""
                }`}
                onClick={menu_toggler}
                key={route.id}
              >
                <IconResolver
                  iconName={route.icon}
                  className={`nav-links-icon`}
                />
                {route.name}
              </Link>
            );
          }
        })}
      </div>
    </nav>
  );
}
