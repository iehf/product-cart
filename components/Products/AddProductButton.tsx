"use client";

import classes from "@/components/Products/AddProductButton.module.css";
import AddProductModal from "./AddProductModal";
import { useState } from "react";

const AddProductButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className={classes.btn} onClick={() => setIsModalOpen(true)}>
        + Add Product
      </button>

      {isModalOpen && <AddProductModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default AddProductButton;
