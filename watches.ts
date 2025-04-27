
import { Product } from "@/types/product";

export const watchesProducts: Product[] = [
  {
    id: "22",
    title: "Smart Watch - Health Tracker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop",
    condition: "Like New",
    seller: {
      name: "TechGadgets",
      rating: 4.7
    },
    category: "watches"
  },
  {
    id: "35",
    title: "Premium Digital Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&auto=format&fit=crop",
    condition: "New",
    seller: {
      name: "WatchCollector",
      rating: 4.9
    },
    category: "watches"
  }
];
