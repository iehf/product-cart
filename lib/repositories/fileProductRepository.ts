import { Product } from "@/lib/types";
import { ProductRepository } from "./productRepository.interface";
import log from "@/lib/logger/logger";
import { readFile, writeFile } from "fs/promises";
import path from "path";

const dataFilepath = path.join(process.cwd(), "lib/data/products.json");
const uploadDir = path.join(process.cwd(), "public/products");

export class FileProductRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    try {
      const raw = await readFile(dataFilepath, "utf-8");
      return JSON.parse(raw);
    } catch (error) {
      log.error("[repository] FileProductRepository.getAll failed: ", error);
      throw error;
    }
  }

  async save(product: Product, file: File): Promise<void> {
    try {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(path.join(uploadDir, file.name), buffer);

      const productWithImage: Product = {
        ...product,
        image: `/products/${product.image}`,
      };

      const products = await this.getAll();
      products.push(productWithImage);
      await writeFile(dataFilepath, JSON.stringify(products, null, 2));
    } catch (error) {
      log.error("[repository] FileProductRepository.save failed: ", error);
      throw error;
    }
  }
}
