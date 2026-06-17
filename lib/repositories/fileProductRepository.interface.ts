import { Product } from "@/lib/types";

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  save(product: Product): Promise<void>;
}