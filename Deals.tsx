
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { dummyProducts } from "@/data/products";
import { Product } from "@/types/product";

const Deals = () => {
  // Use products with some randomization to simulate deals
  const dealProducts = dummyProducts
    .slice(0, 12)
    .map(product => ({
      ...product,
      price: product.price * 0.8 // Apply a 20% discount
    }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Deals & Discounts</h1>
        <p className="text-gray-600 mb-8">Great deals on second-hand items you'll love!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Deals;
