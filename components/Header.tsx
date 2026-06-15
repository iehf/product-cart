"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from '@/components/Header.module.css';
import CartIcon from "@/components/CartIcon";

export default function Home() {
  const pathname = usePathname();
  const isCartPage = pathname === "/cart";
  return (
    <main>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/cart">Cart</Link>
        </nav>
        {!isCartPage && <CartIcon />}
      </header>
    </main>
  );
}
