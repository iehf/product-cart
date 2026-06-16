import styles from "@/components/CartModal.module.css";
import { createPortal } from "react-dom";

type CartModalInterface = {
  onClose?: () => void;
};

const CartModal = ({ onClose }: CartModalInterface) => {
  const rootModal = document.getElementById("rootModal");
  if (!rootModal) {
    return null;
  }

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
          {/* cart items go here */}
        </div>
      </div>
    </>,
    rootModal,
  );
};

export default CartModal;
