"use client";

import { createPortal } from "react-dom";
import classes from "@/components/Products/AddProductModal.module.css";
import AddProductForm from "./AddProductForm";

interface AddProductModalProps {
  onClose: () => void;
}

const AddProductModal = ({ onClose }: AddProductModalProps) => {
  const rootModal = document.getElementById("rootModal");
  if (!rootModal) return null;

  return createPortal(
    <>
      <div className={classes.overlay} onClick={onClose} />
      <div className={classes.modal}>
        <div className={classes.header}>
          <h2>Add New Product</h2>
          <button className={classes.closeBtn} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={classes.body}>
          <AddProductForm onClose={onClose} />
        </div>
      </div>
    </>,
    rootModal,
  );
};

export default AddProductModal;
