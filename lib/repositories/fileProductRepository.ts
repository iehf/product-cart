import { Product } from "@/lib/types";
import { ProductRepository } from "./fileProductRepository.interface";
import log from "@/lib/logger/logger";
import { readFile, writeFile } from "fs/promises";
import path from "path";

const filepath = path.join(process.cwd(), "lib/data/products.json");

export class FileProductRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    try {
      const raw = await readFile(filepath, "utf-8");
      return JSON.parse(raw);
    } catch (error) {
      log.error("[repository] FileProductRepository.getAll failed: ", error);
      throw error;
    }
  }

  async save(product: Product): Promise<void> {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const products = await this.getAll();
      products.push(product);
      await writeFile(filepath, JSON.stringify(products, null, 2));
    } catch (error) {
      log.error("[repository] FileProductRepository.save failed: ", error);
      throw error;
    }
  }
}
