
import { Product } from "@/types/product";

export const kitchenProducts: Product[] = [
  {
    id: "kitchen1",
    title: "Cast Iron Dutch Oven",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1619740455993-a78253b04a62?w=800&auto=format&fit=crop",
    condition: "Like New",
    seller: {
      name: "KitchenPro",
      rating: 4.8
    },
    category: "kitchen",
    description: "Premium cast iron dutch oven, perfect for slow cooking and serving. Enameled interior for easy cleaning."
  },
  {
    id: "16",
    title: "Stainless Steel Knife Set",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1605296867304-46d6671c7862?w=800&auto=format&fit=crop",
    condition: "New",
    seller: {
      name: "CutleryCo",
      rating: 4.9
    },
    category: "kitchen"
  },
  {
    id: "17",
    title: "Non-Stick Frying Pan",
    price: 24.50,
    image: "https://images.unsplash.com/photo-1606744824163-985d37660543?w=800&auto=format&fit=crop",
    condition: "Like New",
    seller: {
      name: "CookwarePlus",
      rating: 4.7
    },
    category: "kitchen"
  },
  {
    id: "18",
    title: "Blender",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1625772452500-2a59935853c9?w=800&auto=format&fit=crop",
    condition: "Good",
    seller: {
      name: "ApplianceWorld",
      rating: 4.6
    },
    category: "kitchen"
  }
];
