import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import PriceRangeFilter from "@/components/PriceRangeFilter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/types/product";
import { log } from "console";

// INR max price
const MAX_PRICE = 37500; 

const Index = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");
  const categoryParam = searchParams.get("category");
  const { toast } = useToast();

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, MAX_PRICE]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    
    filterProducts(selectedCategory, priceRange, searchQuery);
  }, [allProducts, selectedCategory, priceRange, searchQuery]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products"); // Update API if needed\

      const data = await res.json();
      console.log("Fetched products:", data);
      
      if (data && data.data?.products) {
        setAllProducts(data.data.products);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const filterProducts = (
    category: string | null,
    price: [number, number],
    search: string | null = null
  ) => {
    console.log(category, price, search);
  
    const filtered = allProducts.filter((product) => {
      const matchesCategory = !category || product.category === category;
      const productPriceINR = product.price * 0.1;
      const matchesPrice = productPriceINR >= price[0] && productPriceINR <= price[1];
      const matchesSearch = !search || product.name.toLowerCase().includes(search.toLowerCase());
  
      return matchesCategory && matchesPrice && matchesSearch;
    });
  
    setFilteredProducts(filtered); // ✅ store result
  };
  
  {filteredProducts.length > 0 ? (
    filteredProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))
  ) : (
    <p>No products found.</p>
  )}
  
  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {!searchQuery && !categoryParam && <Hero />}

        <div className="container mx-auto px-4 py-8">
          {!searchQuery && !categoryParam && <FeaturedProducts />}

          <section className="my-10" id="browse-items">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : categoryParam
                  ? `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Products`
                  : "Browse All Items"}
              </h2>
              <Button
                variant="outline"
                className="md:hidden flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <aside className={`md:w-1/4 ${showFilters ? "block" : "hidden"} md:block`}>
                <div className="sticky top-24 space-y-6 bg-white p-4 rounded-lg border">
                  <CategoryFilter
                    onCategorySelect={handleCategorySelect}
                    selectedCategory={selectedCategory}
                  />

                  <PriceRangeFilter
                    onPriceRangeChange={handlePriceRangeChange}
                    maxPrice={MAX_PRICE}
                  />
                </div>
              </aside>

              <div className="md:w-3/4">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">No products found matching your filters.</p>
                    <Button
                      onClick={() => {
                        setSelectedCategory(null);
                        setPriceRange([0, MAX_PRICE]);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product._id } product={product} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
