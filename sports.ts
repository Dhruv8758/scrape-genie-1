
import { Product } from "@/types/product";

export const sportsProducts: Product[] = [
  {
    id: "sports1",
    title: "Professional Tennis Racket",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1595435742656-5272ce5f0a0b?w=800&auto=format&fit=crop",
    condition: "Like New",
    seller: {
      name: "SportsPro",
      rating: 4.8
    },
    category: "sports",
    description: "Professional-grade tennis racket with perfect balance and control. Used by competitive players."
  },
  {
    id: "34",
    title: "Mountain Climbing Gear Set",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1516914589923-f105f0580afb?w=800&auto=format&fit=crop",
    condition: "Good",
    seller: {
      name: "AdventureGear",
      rating: 4.8
    },
    category: "sports",
    description: "Complete mountain climbing gear set including harness, carabiners, ropes and helmet."
  }
];
