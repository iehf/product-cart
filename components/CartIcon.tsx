"use client";

import styles from "@/components/CartIcon.module.css";
import { useState } from "react";
import CartModal from "./CartModal";
import cartImg from "@/public/cart.png";
import Image from "next/image";

export default function CartIcon() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={styles.btn} onClick={() => setShowModal(true)}>
        <Image src={cartImg} alt="cart" className={styles.icon} />
        <span className={styles.badge}>4</span>
      </button>

      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </>
  );
}
