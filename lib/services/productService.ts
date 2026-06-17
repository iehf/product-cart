import { productRepository } from "@/lib/repositories";
import { Product } from "../types";

export const productService = {
  getProducts() {
    return productRepository.getAll();
  },

  saveProduct(product: Product, file: File) {
    return productRepository.save(product, file);
  },
};
