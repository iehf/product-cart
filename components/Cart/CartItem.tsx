import Image from "next/image";
import { CartItemType } from "@/lib/types";
import styles from "@/components/Cart/CartItem.module.css";

interface CartItemProps extends CartItemType {
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CartItem = ({ product, quantity, onIncrease, onDecrease, onRemove }: CartItemProps) => {
  const total = (product.price * quantity).toFixed(2);

  return (
    <div className={styles.row}>
      <div className={styles.item}>
        <div className={styles.imageWrapper}>
          <Image src={product.image} alt={product.name} fill />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.category}>{product.category}</p>
        </div>
      </div>

      <p className={styles.price}>${product.price.toFixed(2)}</p>

      <div className={styles.qty}>
        <button className={styles.qtyBtn} onClick={onDecrease}>−</button>
        <span>{quantity}</span>
        <button className={styles.qtyBtn} onClick={onIncrease}>+</button>
      </div>

      <div className={styles.totalWrapper}>
        <p className={styles.total}>${total}</p>
        <button className={styles.removeBtn} onClick={onRemove}>×</button>
      </div>
    </div>
  );
};

export default CartItem;
