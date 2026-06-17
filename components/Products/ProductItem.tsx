"use client";

import Image from "next/image";
import { Product } from "@/lib/types";
import styles from "@/components/Products/ProductItem.module.css";
import { useCartStore } from "@/store/cartStore";
import { useShallow } from "zustand/react/shallow";

const ProductItem = ({ id, name, price, image, category }: Product) => {
  const { items, hasHydrated, addItem, } = useCartStore(
      useShallow((state) => ({
        items: state.items,
        hasHydrated: state.hasHydrated,
        addItem: state.addItem,
      })),
    );

  const isItemInCart =
    hasHydrated && items.some((item) => item.product.id === id);

  const handleAddToCart = () => {
    addItem({ id, name, price, image, category });
  };

  let buttonContent: React.ReactNode = "Add to Cart";

  if (!hasHydrated) {
    buttonContent = <span className={styles.spinner} />;
  } else if (isItemInCart) {
    buttonContent = "Already Added";
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={name} fill />
      </div>
      <div className={styles.body}>
        <span className={styles.category}>{category}</span>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className={styles.btn}
          disabled={!hasHydrated || isItemInCart}
        >
          {buttonContent}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
