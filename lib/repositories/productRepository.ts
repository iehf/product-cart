import { products } from "@/lib/data/products";
import { Product } from "@/lib/types";
import { ProductRepository } from "./productRepository.interface";

export class FileProductRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    return products;
  }
}