import { FileProductRepository } from "@/lib/repositories/fileProductRepository";
import { FirebaseProductRepository } from "@/lib/repositories/firebaseProductRepository";

export const productRepository =
  process.env.NODE_ENV === "production"
    ? new FirebaseProductRepository()
    : new FileProductRepository();