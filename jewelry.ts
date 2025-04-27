
import { Product } from "@/types/product";

export const jewelryProducts: Product[] = [
  {
    id: "61",
    title: "Diamond Engagement Ring",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop",
    condition: "New",
    seller: {
      name: "LuxuryJewels",
      rating: 4.9
    },
    category: "jewelry",
    description: "1.5 carat diamond engagement ring set in 14k white gold. The center stone is a brilliant cut diamond of exceptional clarity."
  },
  {
    id: "62",
    title: "Silver Pendant Necklace",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&auto=format&fit=crop",
    condition: "New",
    seller: {
      name: "SilverWorks",
      rating: 4.7
    },
    category: "jewelry",
    description: "Elegant sterling silver pendant necklace with a delicate chain. Perfect for everyday wear or special occasions."
  },
  {
    id: "63",
    title: "Vintage Gold Bracelet",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&auto=format&fit=crop",
    condition: "Good",
    seller: {
      name: "VintageFinds",
      rating: 4.6
    },
    category: "jewelry",
    description: "Beautiful vintage gold bracelet from the 1950s. Shows minor signs of wear but in excellent condition for its age."
  }
];
