"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import classes from "@/components/Header/NavLink.module.css";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path === href ? `${classes.active} ${classes.link}` : classes.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
