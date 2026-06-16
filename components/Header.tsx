"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/Header.module.css";
import CartIcon from "@/components/CartIcon";
import logoImg from "@/public/logo.png";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const isCartPage = pathname === "/cart";

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
      <div className={styles.left}>
        <Image src={logoImg} alt="logo" className={styles.logo} />
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
      {!isCartPage && <CartIcon />}
      </div>
    </header>
  );
}
