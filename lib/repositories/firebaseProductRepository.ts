import { Product } from "@/lib/types";
import { ProductRepository } from "./productRepository.interface";
import log from "@/lib/logger/logger";

export class FirebaseProductRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    log.info("[repository] FirebaseProductRepository.getAll called");
    return [];
  }

  async save(product: Product, file: File): Promise<void> {
    log.info("[repository] FirebaseProductRepository.save called", { product, file });
  }
}
