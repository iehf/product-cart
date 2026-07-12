import { FileProductRepository } from "@/lib/repositories/fileProductRepository";
import { FirebaseProductRepository } from "@/lib/repositories/firebaseProductRepository";

export const productRepository =
  process.env.NODE_ENV === "development"
    ? new FirebaseProductRepository()
    : new FileProductRepository();
