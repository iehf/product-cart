"use client";

import { createPortal } from "react-dom";
import styles from "@/components/Cart/CartModal.module.css";
import CartList from "./CartList";

type CartModalProps = {
  onClose?: () => void;
};

const CartModal = ({ onClose }: CartModalProps) => {
  const rootModal = document.getElementById("rootModal");
  if (!rootModal) return null;

  return createPortal(
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Your Cart</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.body}>
          <CartList variant="modal" />
        </div>
      </div>
    </>,
    rootModal,
  );
};

export default CartModal;
