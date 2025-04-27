
import { Product } from "@/types/product";

export const musicProducts: Product[] = [
  {
    id: "9",
    title: "Vintage Record Player",
    price: 130.00,
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&auto=format&fit=crop",
    condition: "Good",
    seller: {
      name: "MusicVintage",
      rating: 4.6
    },
    category: "music"
  },
  {
    id: "16",
    title: "Acoustic Guitar",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&auto=format&fit=crop",
    condition: "Good",
    seller: {
      name: "MusicLover",
      rating: 4.7
    },
    category: "music"
  },
  {
    id: "43",
    title: "Electric Guitar with Amplifier",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?w=800&auto=format&fit=crop",
    condition: "Good",
    seller: {
      name: "MusicStore",
      rating: 4.9
    },
    category: "music"
  }
];
