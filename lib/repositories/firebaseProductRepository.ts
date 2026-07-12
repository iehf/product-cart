import { Product } from "@/lib/types";
import { ProductRepository } from "./productRepository.interface";
import log from "@/lib/logger/logger";
import { getStorage } from "firebase-admin/storage";
import { getFirestore } from "firebase-admin/firestore";
import firebaseAdminApp from "@/lib/firebase/firebaseAdmin";

const COLLECTION = "products";

export class FirebaseProductRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    try {
      const db = getFirestore(firebaseAdminApp);
      const snapshot = await db.collection(COLLECTION).get();
      return snapshot.docs.map((doc) => doc.data() as Product);
    } catch (error) {
      log.error("[repository] FirebaseProductRepository.getAll failed: ", error);
      throw error;
    }
  }

  async save(product: Product, file: File): Promise<void> {
    try {
      const bucket = getStorage(firebaseAdminApp).bucket();
      const fileRef = bucket.file(`products/${file.name}`);
      await fileRef.save(Buffer.from(await file.arrayBuffer()));
      await fileRef.makePublic();

      const productWithImage: Product = {
        ...product,
        image: `https://storage.googleapis.com/${bucket.name}/products/${file.name}`,
      };

      const db = getFirestore(firebaseAdminApp);
      await db.collection(COLLECTION).doc(product.id).set(productWithImage);
    } catch (error) {
      log.error("[repository] FirebaseProductRepository.save failed: ", error);
      throw error;
    }
  }
}
