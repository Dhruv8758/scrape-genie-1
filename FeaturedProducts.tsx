
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { dummyProducts } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/types/product";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    // For now, we'll use our dummy data
    setFeaturedProducts(dummyProducts.slice(0, 4));
    setTrendingProducts(dummyProducts.slice(4, 8));
    setNewArrivals(dummyProducts.slice(8, 12));
  }, []);

  const handleTabClick = (tabValue: string) => {
    // Handle special navigation for tabs
    if (tabValue === "trending") {
      navigate("/trending");
    } else if (tabValue === "new") {
      navigate("/new-arrivals");
    }
  };

  return (
    <section className="my-10">
      <Tabs defaultValue="featured" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Discover</h2>
          <TabsList>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="trending" onClick={() => handleTabClick("trending")}>Trending</TabsTrigger>
            <TabsTrigger value="new" onClick={() => handleTabClick("new")}>New Arrivals</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="featured" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
            {/* {featuredProducts.map((product) => (
              // <ProductCard key={product._id} product={product} />
            ))} */}
          </div>
        </TabsContent>
        
        <TabsContent value="trending" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
            {/* {trendingProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))} */}
          </div>
        </TabsContent>
        
        <TabsContent value="new" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
            {/* {newArrivals.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))} */}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default FeaturedProducts;
