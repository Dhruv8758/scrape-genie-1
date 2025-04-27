
import { Link } from "react-router-dom";
import { ShoppingBag, Heart, User, Mail, Github, Twitter, Facebook, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-scrapeGenie-600" />
              <span className="text-xl font-bold text-scrapeGenie-700">ScrapeGenie</span>
            </div>
            <p className="text-gray-600 text-sm">
              ScrapeGenie connects buyers and sellers of second-hand goods in a sustainable marketplace.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-scrapeGenie-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-scrapeGenie-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-scrapeGenie-600">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-scrapeGenie-600">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-scrapeGenie-600 text-sm">
                  All Categories
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-gray-600 hover:text-scrapeGenie-600 text-sm">
                  Deals & Discounts
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-600 hover:text-scrapeGenie-600 text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/trending" className="text-gray-600 hover:text-scrapeGenie-600 text-sm">
                  Trending Now
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Sell</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/start-selling" className="text-gray-600 hover:text-scrapeGenie-600 text-sm">
                  Start Selling
                </Link>
              </li>
              <li>
                <Link to="/seller-tools" className="text-gray-600 hover:text-scrapeGenie-600 text-sm">
                  Seller Tools
                </Link>
              </li>
              <li>
                <Link to="/seller-guidelines" className="text-gray-600 hover:text-scrapeGenie-600 text-sm">
                  Seller Guidelines
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-scrapeGenie-600 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-scrapeGenie-600 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-scrapeGenie-600 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-scrapeGenie-600 text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ScrapeGenie. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-scrapeGenie-600 text-sm">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-scrapeGenie-600 text-sm">
              Terms
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-scrapeGenie-600 text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
