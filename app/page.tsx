import ProductList from "@/components/Products/ProductList";
import AddProductButton from "@/components/Products/AddProductButton";
import { productService } from "@/lib/services/productService";

export const revalidate = 3600;

export default async function Home() {
  const products = await productService.getProducts();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "24px" }}>
        <AddProductButton />
      </div>
      <ProductList products={products} />
    </div>
  );
}
