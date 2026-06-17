import { Product } from "@/lib/types";

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  save(product: Product, file: File): Promise<void>;
}
