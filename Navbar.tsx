
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag, User, Menu, X, Home } from "lucide-react";
import { 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem 
} from "@/components/ui/command";
import { dummyProducts } from "@/data/products";
import { Product } from "@/types/product";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Handle keyboard shortcut for search
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSelectProduct = (productId: string) => {
    setIsSearchOpen(false);
    navigate(`/product/${productId}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, redirect to a search results page
      // For now, we'll just close the search dialog
      setIsSearchOpen(false);
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const filteredProducts = dummyProducts.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );



  const { user, logout } = useAuth();
  // ... rest of your existing state
  
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* ... other nav elements ... */}

          {/* Updated Nav Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-scrapeGenie-600">
              <Home className="h-5 w-5" />
            </Link>
            <Link to="/sell" className="text-gray-600 hover:text-scrapeGenie-600">
              Sell
            </Link>
            <Link to="/categories" className="text-gray-600 hover:text-scrapeGenie-600">
              Categories
            </Link>
            
            {user ? (
              <>
                <Link to="/profile">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  onClick={logout}
                  className="bg-scrapeGenie-600 hover:bg-scrapeGenie-700"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/sign-in">
                <Button className="bg-scrapeGenie-600 hover:bg-scrapeGenie-700">
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Similarly update the mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 pb-3 space-y-3 animate-fadeIn">
              {/* ... other mobile elements ... */}
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="text-gray-600 hover:text-scrapeGenie-600 px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Button 
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="bg-scrapeGenie-600 hover:bg-scrapeGenie-700 w-full"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link 
                  to="/sign-in" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="bg-scrapeGenie-600 hover:bg-scrapeGenie-700 w-full">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};


export default Navbar;


// qgJughyRW0K69tLK
// dhruvbhuva942

