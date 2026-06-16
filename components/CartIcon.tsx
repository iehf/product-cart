"use client";

import styles from "@/components/CartIcon.module.css";
import { useState } from "react";
import CartModal from "./CartModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <span>4</span>
      </button>

      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </>
  );
}
