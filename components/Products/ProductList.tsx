import classes from "@/components/Products/ProductList.module.css";
import ProductItem from "./ProductItem";
import { Product } from "@/lib/types";

interface ProductListProps{
  products: Product[];
}
const ProductList = ({products}: ProductListProps) => {
  return (
    <ul className={classes.grid}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductItem {...product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
