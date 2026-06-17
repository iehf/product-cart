import { productRepository } from "@/lib/repositories";

export const productService = {
  getProducts() {
    return productRepository.getAll();
  },
};
