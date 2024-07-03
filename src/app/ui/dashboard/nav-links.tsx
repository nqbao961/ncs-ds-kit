"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-links.module.scss";

const links = [
  { name: "Home", href: "/dashboard", icon: "" },
  {
    name: "Button",
    href: "/dashboard/button",
    icon: "",
  },
  { name: "Text Field", href: "/dashboard/text-field", icon: "" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${styles.linkWrapper}
              ${pathname === link.href ? styles.active : ""}`}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
