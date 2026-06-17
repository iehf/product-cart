import ProductList from "@/components/Products/ProductList";
import { productService } from "@/lib/services/productService";

export default async function Home() {
  const products = await productService.getProducts();

  return <ProductList products={products} />;
}
