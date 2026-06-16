"use client";

import { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import styles from "@/components/CartList.module.css";
import { useCartStore } from "@/store/cartStore";

const TAX_RATE = 0.1;

interface CartListProps {
  variant?: "page" | "modal";
}

const CartList = ({ variant = "page" }: CartListProps) => {
  const itemsInCart = useCartStore((state) => state.items);
  const { increaseQty, decreaseQty, removeItem } = useCartStore();
  const [coupon, setCoupon] = useState(false);

  const subtotal = itemsInCart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const tax = subtotal * TAX_RATE;
  const grandTotal = subtotal + tax;

  return (
    <div
      className={variant === "page" ? styles.wrapperPage : styles.wrapperModal}
    >
      <div className={styles.items}>
        {itemsInCart.map((item) => (
          <CartItem
            key={item.product.id}
            {...item}
            onIncrease={() => increaseQty(item.product.id)}
            onDecrease={() => decreaseQty(item.product.id)}
            onRemove={() => removeItem(item.product.id)}
          />
        ))}
      </div>
      <CartSummary
        subtotal={subtotal}
        tax={tax}
        grandTotal={grandTotal}
        coupon={coupon}
        onCoupon={() => setCoupon(true)}
        variant={variant}
      />
    </div>
  );
};

export default CartList;
