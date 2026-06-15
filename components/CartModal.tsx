import styles from "@/components/CartModal.module.css";
import { createPortal } from "react-dom";

export default function CartModal() {
  const rootModal = document.getElementById("rootModal");
  if (!rootModal) {
    return null;
  }

  return createPortal(<div>Cart Modal</div>, rootModal);
}
