"use server";

import { Product } from "../types";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { productService } from "@/lib/services/productService";

export interface ProductFormValues {
  name?: string;
  price?: string;
  category?: string;
}

export interface ProductFormState {
  errors: {
    name?: string;
    price?: string;
    category?: string;
    image?: string;
    general?: string;
  };
  values?: ProductFormValues;
  success?: boolean;
}

export async function submitProduct(
  prevState: ProductFormState,
  formData: FormData,
): Promise<ProductFormState> {
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const category = formData.get("category") as string;
  const image = formData.get("image") as File;

  const values: ProductFormValues = { name, price, category };
  const errors: ProductFormState["errors"] = {};

  if (!name?.trim()) errors.name = "Name is required.";
  if (!price || isNaN(parseFloat(price)) || parseFloat(price) <= 0)
    errors.price = "Valid price is required.";
  if (!category?.trim()) errors.category = "Category is required.";
  if (!(image instanceof File) || image.size === 0)
    errors.image = "Image is required.";

  if (Object.keys(errors).length > 0) {
    return { errors, values };
  }

  const product: Product = {
    id: randomUUID(),
    name,
    price: parseFloat(price),
    image: "/products/placeholder.jpg",
    category,
  };

  try {
    await productService.saveProduct(product);
    revalidatePath("/");
  } catch {
    return { errors: { general: "Failed to save product. Try again." } };
  }

  return { errors: {}, success: true };
}
