
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { dummyProducts } from "@/data/products";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/types/product";

const Trending = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');
  const { toast } = useToast();
  
  // Use a subset of products as trending products - different categories
  const trendingProducts = dummyProducts.filter((product, index) => 
    index % 3 === 0 || index % 5 === 0
  ).slice(0, 12);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(trendingProducts);

  useEffect(() => {
    if (categoryParam) {
      // Filter trending products by category if category parameter exists
      const filtered = trendingProducts.filter(
        product => product.category === categoryParam
      );
      
      setFilteredProducts(filtered);
      
      // Show notification if no products are found
      if (filtered.length === 0) {
        toast({
          title: "No trending products found",
          description: `No trending products found in the "${categoryParam}" category.`,
          variant: "destructive",
        });
      }
    } else {
      setFilteredProducts(trendingProducts);
    }
  }, [categoryParam, toast]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {categoryParam 
            ? `Trending in ${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)}`
            : "Trending Now"}
        </h1>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No trending products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Trending;
