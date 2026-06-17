"use client";

import { createPortal } from "react-dom";
import classes from "@/components/Cart/CartModal.module.css";
import CartList from "./CartList";

type CartModalProps = {
  onClose?: () => void;
};

const CartModal = ({ onClose }: CartModalProps) => {
  const rootModal = document.getElementById("rootModal");
  if (!rootModal) return null;

  return createPortal(
    <>
      <div className={classes.overlay} onClick={onClose} />
      <div className={classes.modal}>
        <div className={classes.header}>
          <h2>Your Cart</h2>
          <button className={classes.closeBtn} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={classes.body}>
          <CartList variant="modal" />
        </div>
      </div>
    </>,
    rootModal,
  );
};

export default CartModal;
