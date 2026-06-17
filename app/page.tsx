import ProductList from "@/components/Products/ProductList";
import { productService } from "@/lib/services/productService";

export const revalidate = 3600;

export default async function Home() {
  const products = await productService.getProducts();

  return <ProductList products={products} />;
}
