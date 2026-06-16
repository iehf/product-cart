"use client";

import { useState } from "react";
import { CartItemType } from "@/lib/types";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import styles from "@/components/CartList.module.css";

const mockItems: CartItemType[] = [
  {
    product: {
      id: 1,
      name: "Running Shoes",
      price: 89.99,
      image: "/products/running-shoes.jpg",
      category: "Sport",
    },
    quantity: 1,
  },
  {
    product: {
      id: 3,
      name: "Dumbbell Set",
      price: 59.99,
      image: "/products/dumbbell-set.jpg",
      category: "Sport",
    },
    quantity: 2,
  },
];

const TAX_RATE = 0.1;

interface CartListProps {
  variant?: "page" | "modal";
}

const CartList = ({ variant = "page" }: CartListProps) => {
  const [items, setItems] = useState<CartItemType[]>(mockItems);
  const [coupon, setCoupon] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * TAX_RATE;
  const grandTotal = subtotal + tax;

  const increase = (id: number) =>
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decrease = (id: number) =>
    setItems((prev) =>
      prev
        .map((item) =>
          item.product.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );

  const remove = (id: number) =>
    setItems((prev) => prev.filter((item) => item.product.id !== id));

  const summary = (
    <CartSummary
      subtotal={subtotal}
      tax={tax}
      grandTotal={grandTotal}
      coupon={coupon}
      onCoupon={() => setCoupon(true)}
      variant={variant}
    />
  );

  return (
    <div className={variant === "page" ? styles.wrapperPage : styles.wrapperModal}>
      <div className={styles.items}>
        {items.map((item) => (
          <CartItem
            key={item.product.id}
            {...item}
            onIncrease={() => increase(item.product.id)}
            onDecrease={() => decrease(item.product.id)}
            onRemove={() => remove(item.product.id)}
          />
        ))}
      </div>
      {summary}
    </div>
  );
};

export default CartList;
