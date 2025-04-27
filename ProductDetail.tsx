
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, dummyProducts } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Phone, 
  Mail, 
  Heart,
  ThumbsUp
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import MessageDialog from "@/components/MessageDialog";
import BuyProductDialog from "@/components/BuyProductDialog";
import { getCurrentUser, toggleProductLike, subscribeToEvent } from "@/utils/realTimeUtils";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Product ID:", id);
  
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { toast } = useToast();
  const currentUser = getCurrentUser();
  const [isLiked, setIsLiked] = useState(false);
  const fetchProduct = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }
      const data = await response.json();
      
      
      setProduct(data.data.product);
      console.log(`Product fetched:`, data.product);
      
    } catch (error) {
      console.error("Error fetching product:", error);
      toast({
        title: "Error",
        description: "Failed to load product details",
        variant: "destructive",
      });
    }
  }
  useEffect(() => {
    if (id) {
      // Fetch product details by ID
      fetchProduct(id);
     
    }
  }, [id]);

  // Subscribe to real-time product updates
  useEffect(() => {
    const unsubscribe = subscribeToEvent<Product>("productUpdated", (updatedProduct) => {
      if (updatedProduct.id === id) {
        setProduct(updatedProduct);
        
        // Check if the current user has liked the updated product
        if (currentUser) {
          const userId = currentUser.id || currentUser.email;
          setIsLiked((updatedProduct.likedBy || []).includes(userId));
        }
      }
    });
    
    return () => unsubscribe();
  }, [id]);

  const handleLikeProduct = () => {
    if (!currentUser || !product) {
      toast({
        title: "Authentication required",
        description: "Please sign in to like products",
        variant: "destructive",
      });
      return;
    }
    
    const userId = currentUser.id || currentUser.email;
    toggleProductLike(product.id, userId);
    
    // Optimistic UI update
    setIsLiked(!isLiked);
    
    toast({
      title: isLiked ? "Product unliked" : "Product liked",
      description: isLiked 
        ? "This product has been removed from your liked items" 
        : "This product has been added to your liked items",
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const priceInINR = product.price * 75;
  const sellerId = product.seller._id || product.seller.fullName.replace(/\s+/g, '').toLowerCase();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 text-sm text-gray-500">
            <Link to="/" className="hover:text-scrapeGenie-600">Home</Link> {" / "}
            <Link to="/categories" className="hover:text-scrapeGenie-600">Categories</Link> {" / "}
            <span>{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={`http://localhost:5000${product.photos[0]}`} 
                  alt={product.name}
                  className="w-full h-[400px] object-cover object-center"
                />
              </div>
              <div className="flex justify-between">
                <Button 
                  variant={isLiked ? "default" : "outline"} 
                  size="sm"
                  className={isLiked ? "bg-red-500 hover:bg-red-600" : ""}
                  onClick={handleLikeProduct}
                >
                  <Heart className={`h-5 w-5 mr-2 ${isLiked ? "fill-current" : ""}`} />
                  {isLiked ? "Liked" : "Like"} 
                  {product.likes | 0 && product.likes > 0 && (
                    <span className="ml-2 bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">
                      {product.likes}
                    </span>
                  )}
                </Button>
                
                <div className="flex items-center text-sm text-gray-500">
                  <ThumbsUp className="h-4 w-4 mr-1" /> 
                  {product.healthScore || 85}% Quality Score
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <div className="flex items-center mt-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    {product.condition}
                  </span>
                </div>
              </div>
              
              <Separator />
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-xl mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2 text-scrapeGenie-600" />
                  Seller Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="font-medium text-lg">{product.seller.fullName}</span>
                      <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                        Verified Seller
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    <p>Location: Mumbai, Maharashtra</p>
                    <p>Selling since: January 2023</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="outline" size="lg" className="w-full">
                          <Phone className="h-4 w-4 mr-2" /> Call
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-fit p-2">
                        <p className="text-sm font-medium">+91 98765 43210</p>
                      </HoverCardContent>
                    </HoverCard>
                    
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="outline" size="lg" className="w-full">
                          <Mail className="h-4 w-4 mr-2" /> {product.seller.email}
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-fit p-2">
                        <p className="text-sm font-medium">{product.seller.email.toLowerCase().replace(/\s/g, '')}</p>
                      </HoverCardContent>
                    </HoverCard>
                    
                    <MessageDialog
                      recipientId={sellerId}
                      recipientName={product.seller.fullName}
                      productId={product.id}
                      productTitle={product.name}
                      triggerComponent={
                        <Button variant="outline" size="lg" className="w-full">
                          <Mail className="h-4 w-4 mr-2" /> Message
                        </Button>
                      }
                    />
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-col space-y-3">
                  <p className="text-2xl font-bold text-gray-700">
                    ₹{priceInINR.toFixed(0)}
                  </p>
                  <BuyProductDialog
                    product={{
                      ...product,
                      price: priceInINR
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full">
                <TabsTrigger value="description" className="flex-1">Description</TabsTrigger>
                <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="pt-4">
                <p className="text-gray-700">
                  {product.description || `This is a high-quality second-hand item in ${product.condition} condition. 
                  The seller has taken great care of this item and it shows in its current state.
                  Perfect for anyone looking to save money while still getting a great product.`}
                </p>
              </TabsContent>
              
              <TabsContent value="details" className="pt-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Condition: {product.condition}</li>
                  <li>Original Purchase: 2 years ago</li>
                  <li>Signs of wear: Minimal</li>
                  <li>All original parts included</li>
                  {product.verificationStatus && (
                    <li>Verification Status: {product.verificationStatus}</li>
                  )}
                  {product.healthScore && (
                    <li>Health Score: {product.healthScore}%</li>
                  )}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
          
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <div className="product-card group">
                    <div className="relative overflow-hidden">
                      {product.photos[0]}
                      <img
                        src={`http://localhost:5000${product.photos[0]}`} 
                        alt={product.name}  
                        className="product-card-image group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="product-card-content">
                      <h3 className="product-card-title">{product.name}</h3>
                      <p className="product-card-price">₹{(product.price).toFixed(0)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
