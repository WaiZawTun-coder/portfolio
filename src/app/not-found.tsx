"use client";

// Next components
import { usePathname } from "next/navigation";
import Link from "next/link";

// css
import "@/app/404.css";

// jsons
import routes from "@/assests/json/routes.json";

export default function Custom404() {
  const pathname = usePathname();
  return (
    <div className="not-found">
      <h2>404 - &quot;{pathname}&quot; Not Found</h2>
      <br />
      <h3>Here are the avaliable pages.</h3>
      <div className="links-list">
        {routes.value.map((route) => (
          <code key={route.id}>
            <Link
              href={route.link}
              className="nav-links error_404"
              key={route.id}
            >
              {route.name}
            </Link>
          </code>
        ))}
      </div>
    </div>
  );
}
