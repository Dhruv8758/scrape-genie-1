
import { Product } from "@/types/product";

export const toysProducts: Product[] = [
  {
    id: "toys1",
    title: "Remote Control Drone",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1581092671424-9f54e155d101?w=800&auto=format&fit=crop",
    condition: "New",
    seller: {
      name: "TechToys",
      rating: 4.9
    },
    category: "toys",
    description: "High-performance remote control drone with HD camera and stabilizer. Great for aerial photography."
  },
  {
    id: "41",
    title: "Building Blocks Set",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1587405170988-2532c0b89e5b?w=800&auto=format&fit=crop",
    condition: "New",
    seller: {
      name: "CreativeKids",
      rating: 4.7
    },
    category: "toys"
  },
  {
    id: "42",
    title: "Classic Board Game Collection",
    price: 39.50,
    image: "https://images.unsplash.com/photo-1588943219002-cbeca3959831?w=800&auto=format&fit=crop",
    condition: "Like New",
    seller: {
      name: "GameNight",
      rating: 4.6
    },
    category: "toys"
  },
  {
    id: "43",
    title: "Educational Robot Kit",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1614353393556-9de588992c65?w=800&auto=format&fit=crop",
    condition: "Like New",
    seller: {
      name: "FutureTech",
      rating: 4.8
    },
    category: "toys"
  }
];
