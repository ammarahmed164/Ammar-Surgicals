
export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  specifications: { [key: string]: string };
  category: string;
  aiHint: string;
}

export interface CartItem extends Product {
  quantity: number;
}
