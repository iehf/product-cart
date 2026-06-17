import { products } from "@/lib/data/products";
import { Product } from "@/lib/types";
import { ProductRepository } from "./productRepository.interface";
import log from "@/lib/logger/logger";

export class FileProductRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    try {
      return products;
    } catch (error) {
      log.error("[repository] FileProductRepository.getAll failed: ", error);

      throw error;
    }
  }
}
