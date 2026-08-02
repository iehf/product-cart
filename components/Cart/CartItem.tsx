import { memo } from "react";
import Image from "next/image";
import { CartProduct } from "@/lib/types";
import classes from "@/components/Cart/CartItem.module.css";

interface CartItemProps extends CartProduct {
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

const CartItem = ({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) => {
  const total = (product.price * quantity).toFixed(2);

  return (
    <div className={classes.row}>
      <div className={classes.item}>
        <div className={classes.imageWrapper}>
          <Image src={product.image} alt={product.name} fill />
        </div>
        <div className={classes.info}>
          <p className={classes.name}>{product.name}</p>
          <p className={classes.category}>{product.category}</p>
        </div>
      </div>

      <p className={classes.price}>${product.price.toFixed(2)}</p>

      <div className={classes.qty}>
        <button
          className={classes.qtyBtn}
          onClick={() => onDecrease(product.id)}
        >
          −
        </button>
        <span>{quantity}</span>
        <button
          className={classes.qtyBtn}
          onClick={() => onIncrease(product.id)}
        >
          +
        </button>
      </div>

      <div className={classes.totalWrapper}>
        <p className={classes.total}>${total}</p>
        <button className={classes.removeBtn} onClick={() => onRemove(product.id)}>
          ×
        </button>
      </div>
    </div>
  );
};

export default memo(CartItem);
