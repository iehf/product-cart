"use client";

import Image from "next/image";
import { Product } from "@/lib/types";
import classes from "@/components/Products/ProductItem.module.css";
import { useCartStore } from "@/store/cartStore";

const ProductItem = ({ id, name, price, image, category }: Product) => {
  const hasHydrated = useCartStore((state) => state.hasHydrated);
  const addItem = useCartStore((state) => state.addItem);
  const isItemInCart = useCartStore((state) =>
    state.items.some((item) => item.product.id === id),
  );

  const handleAddToCart = () => {
    addItem({ id, name, price, image, category });
  };

  let buttonContent: React.ReactNode = "Add to Cart";

  if (!hasHydrated) {
    buttonContent = <span className={classes.spinner} />;
  } else if (isItemInCart) {
    buttonContent = "Already Added";
  }

  return (
    <div className={classes.card}>
      <div className={classes.imageWrapper}>
        <Image src={image} alt={name} fill />
      </div>
      <div className={classes.body}>
        <span className={classes.category}>{category}</span>
        <p className={classes.name}>{name}</p>
        <p className={classes.price}>${price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className={classes.btn}
          disabled={!hasHydrated || isItemInCart}
        >
          {buttonContent}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
