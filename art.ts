
import { Product } from "@/types/product";

export const artProducts: Product[] = [
  {
    id: "36",
    title: "Art Supplies Kit",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop",
    condition: "New",
    seller: {
      name: "ArtistSupply",
      rating: 4.7
    },
    category: "art"
  },
  {
    id: "37",
    title: "Handcrafted Pottery Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=800&auto=format&fit=crop",
    condition: "Like New",
    seller: {
      name: "CraftArtisan",
      rating: 4.8
    },
    category: "art"
  }
];
