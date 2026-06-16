"use client";

import styles from "@/components/CartIcon.module.css";
import { useState } from "react";
import CartModal from "./CartModal";
import cartImg from "@/public/cart.png";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

export default function CartIcon() {
  const [showModal, setShowModal] = useState(false);
  const cartItems = useCartStore((state) => state.items);

  return (
    <>
      <button className={styles.btn} onClick={() => setShowModal(true)}>
        <Image src={cartImg} alt="cart" className={styles.icon} />
        <span className={styles.badge}>{cartItems.length}</span>
      </button>

      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </>
  );
}
