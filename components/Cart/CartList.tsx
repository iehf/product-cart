"use client";

import { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import styles from "@/components/Cart/CartList.module.css";
import { useCartStore } from "@/store/cartStore";
import { useShallow } from "zustand/react/shallow";

const TAX_RATE = 0.1;

interface CartListProps {
  variant?: "page" | "modal";
}

const CartList = ({ variant = "page" }: CartListProps) => {
  const { items, increaseQty, decreaseQty, removeItem } = useCartStore(
    useShallow((state) => ({
      items: state.items,
      increaseQty: state.increaseQty,
      decreaseQty: state.decreaseQty,
      removeItem: state.removeItem,
    })),
  );
  const [coupon, setCoupon] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const tax = subtotal * TAX_RATE;
  const grandTotal = subtotal + tax;

  const isCartEmty = items.length <= 0;
  return (
    <div
      className={variant === "page" ? styles.wrapperPage : styles.wrapperModal}
    >
      {isCartEmty && (
        <p className={styles.empty}>
          Your cart is empty. Add your first product!
        </p>
      )}
      {!isCartEmty && (
        <div className={styles.items}>
          {items.map((item) => (
            <CartItem
              key={item.product.id}
              {...item}
              onIncrease={() => increaseQty(item.product.id)}
              onDecrease={() => decreaseQty(item.product.id)}
              onRemove={() => removeItem(item.product.id)}
            />
          ))}
        </div>
      )}
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
