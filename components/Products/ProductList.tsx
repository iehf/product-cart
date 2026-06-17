import styles from "@/components/Products/ProductList.module.css";
import ProductItem from "./ProductItem";
import { products } from "@/lib/data/products";

export default function ProductList() {
  return (
    <ul className={styles.grid}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductItem {...product} />
        </li>
      ))}
    </ul>
  );
}
