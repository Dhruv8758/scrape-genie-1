
import { Product } from "@/types/product";
import { clothingProducts } from "./clothing";
import { electronicsProducts } from "./electronics";
import { homeProducts } from "./home";
import { booksProducts } from "./books";
import { vehiclesProducts } from "./vehicles";
import { musicProducts } from "./music";
import { toolsProducts } from "./tools";
import { watchesProducts } from "./watches";
import { kitchenProducts } from "./kitchen";
import { toysProducts } from "./toys";
import { businessProducts } from "./business";
import { babyProducts } from "./baby";
import { sportsProducts } from "./sports";
import { artProducts } from "./art";
import { computersProducts } from "./computers";
import { foodProducts } from "./food";
import { healthProducts } from "./health";
import { jewelryProducts } from "./jewelry";
import { furnitureProducts } from "./furniture";

// Combine all products into a single array
export const dummyProducts: Product[] = [
  ...clothingProducts,
  ...electronicsProducts,
  ...homeProducts,
  ...booksProducts,
  ...vehiclesProducts,
  ...musicProducts,
  ...toolsProducts,
  ...watchesProducts,
  ...kitchenProducts,
  ...toysProducts,
  ...businessProducts,
  ...babyProducts,
  ...sportsProducts,
  ...artProducts,
  ...computersProducts,
  ...foodProducts,
  ...healthProducts,
  ...jewelryProducts,
  ...furnitureProducts
];

// Export each category separately
export {
  clothingProducts,
  electronicsProducts,
  homeProducts,
  booksProducts,
  vehiclesProducts,
  musicProducts,
  toolsProducts,
  watchesProducts,
  kitchenProducts,
  toysProducts,
  businessProducts,
  babyProducts,
  sportsProducts,
  artProducts,
  computersProducts,
  foodProducts,
  healthProducts,
  jewelryProducts,
  furnitureProducts
};

// Get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return dummyProducts.filter(product => product.category === category);
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return dummyProducts.find(product => product._id === id);
};

// Simple function to get featured products
export const getFeaturedProducts = (limit = 4): Product[] => {
  return dummyProducts
    .sort(() => 0.5 - Math.random()) // Simple randomization
    .slice(0, limit);
};
