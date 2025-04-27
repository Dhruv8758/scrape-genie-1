
import { Product } from "@/types/product";

export const toolsProducts: Product[] = [
  {
    id: "tools1",
    title: "Power Driller Set",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572981779307-38571c09e16b?w=800&auto=format&fit=crop",
    condition: "Good",
    seller: {
      name: "ToolMaster",
      rating: 4.7
    },
    category: "tools",
    description: "Professional power drill set with multiple drill bits and accessories. Perfect for DIY projects."
  },
  {
    id: "81",
    title: "Cordless Screwdriver",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop",
    condition: "Like New",
    seller: {
      name: "HandyTools",
      rating: 4.6
    },
    category: "tools",
    description: "Compact and powerful cordless screwdriver with multiple bits. Ideal for quick repairs and assembly."
  },
  {
    id: "82",
    title: "Adjustable Wrench Set",
    price: 54.50,
    image: "https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=800&auto=format&fit=crop",
    condition: "New",
    seller: {
      name: "WrenchWorld",
      rating: 4.8
    },
    category: "tools",
    description: "High-quality adjustable wrench set with various sizes. Essential for plumbing and mechanical tasks."
  }
];
