import Image from "next/image";
import { Product } from "@/lib/types";
import styles from "@/components/ProductItem.module.css";

const ProductItem = ({ name, price, image, category }: Product) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={name} fill />
      </div>
      <div className={styles.body}>
        <span className={styles.category}>{category}</span>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <button className={styles.btn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
