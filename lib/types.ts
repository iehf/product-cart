import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface CartProduct {
  product: Product;
  quantity: number;
}

export interface TeamMember {
  name: string;
  avatar: StaticImageData;
  position: string;
}
