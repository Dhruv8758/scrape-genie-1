import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { toast } from "@/components/ui/use-toast";

const ProductCard = ({ product }: { product: Product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setIsInWishlist(wishlist.some((item: Product) => item._id === product._id));
  }, [product._id]);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();

    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    if (isInWishlist) {
      const newWishlist = wishlist.filter((item: Product) => item._id !== product._id);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      setIsInWishlist(false);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist`,
      });
    } else {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setIsInWishlist(true);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist`,
      });
    }
  };

  return (
    <div className="product-card group">
      <div className="relative overflow-hidden rounded-t-lg">
        
        <img
          src={`http://localhost:5000${product.photos[0]}`}
          alt={product.name}
          className="product-card-image group-hover:scale-105 transition-transform duration-300 h-48 w-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&auto=format&fit=crop";
            target.onerror = null;
          }}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full h-8 w-8"
          onClick={toggleWishlist}
        >
          <Heart
            className={`h-5 w-5 ${isInWishlist ? 'text-red-500 fill-red-500' : 'text-gray-600'} hover:text-red-500`}
          />
        </Button>
        <div className="absolute top-2 left-2 bg-scrapeGenie-500 text-white px-2 py-1 text-xs rounded-full">
          {formatCategoryName(product.category)}
        </div>
      </div>

      <div className="product-card-content p-4 bg-white rounded-b-lg shadow">
        <Link to={`/product/${product._id}`}>
          <h3 className="product-card-title font-medium hover:text-scrapeGenie-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="product-card-price font-bold text-lg mt-1">₹{(product.price * 75).toFixed(0)}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="product-card-seller text-sm text-gray-600">
            Seller: {typeof product.seller === "string" ? "User" : "User"}
          </p>
          <span className="product-card-condition text-xs bg-gray-100 px-2 py-1 rounded-full">
            {product.condition}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
