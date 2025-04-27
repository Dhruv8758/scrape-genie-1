
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { dummyProducts } from "@/data/products";
import { Product } from "@/types/product";

const SimpleProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(
    new Set(dummyProducts.map((product) => product.category))
  );
  
  // Filter products based on search and category
  const filteredProducts = dummyProducts.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = 
      selectedCategory === null || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search bar */}
          <div className="w-full md:w-1/3">
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Simple product item component
const ProductItem = ({ product }: { product: Product }) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="py-4 flex-grow">
        <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
        <p className="text-lg font-bold mb-2">₹{(product.price * 75).toFixed(0)}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{product.seller.name}</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{product.condition}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Link to={`/product/${product.id}`} className="w-full">
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SimpleProducts;
