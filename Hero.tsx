
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToItems = () => {
    const browseSection = document.getElementById('browse-items');
    if (browseSection) {
      browseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-scrapeGenie-50 to-scrapeGenie-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Find Treasures, <span className="text-scrapeGenie-600">Create Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
            Discover unique second-hand items, connect with sellers, and give pre-loved goods a new life. Shop sustainably, save money, and reduce waste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToItems}
              className="bg-scrapeGenie-600 hover:bg-scrapeGenie-700 text-white py-6 px-8 text-lg w-full sm:w-auto"
            >
              Start Shopping
            </Button>
            <Link to="/sell" className="w-full sm:w-auto">
              <Button variant="outline" className="py-6 px-8 text-lg group w-full sm:w-auto">
                Sell an Item
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-scrapeGenie-200 -z-10 rounded-tl-3xl opacity-50 hidden lg:block"></div>
      <div className="absolute right-24 top-0 w-24 h-24 bg-scrapeGenie-300 -z-10 rounded-full opacity-30 hidden lg:block"></div>
    </div>
  );
};

export default Hero;
