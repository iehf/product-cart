"use client";

import styles from "@/components/Cart/CartIcon.module.css";
import { useState } from "react";
import CartModal from "./CartModal";
import cartImg from "@/public/cart.png";
import Image from "next/image";
import { useCartStore, selectCartTotalQuantity } from "@/store/cartStore";
import { usePathname } from "next/navigation";

const CartIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalQuantity = useCartStore(selectCartTotalQuantity);
  const showQuantiy = totalQuantity > 0;
  const pathname = usePathname();
  const isCartPage = pathname === "/cart";

  if (isCartPage) {
    return null;
  }

  return (
    <>
      <button className={styles.btn} onClick={() => setIsModalOpen(true)}>
        <Image src={cartImg} alt="cart" className={styles.icon} />
        {showQuantiy && <span className={styles.badge}>{totalQuantity}</span>}
      </button>

      {isModalOpen && <CartModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default CartIcon;
