
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StartSelling = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Start Selling</h1>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">How to become a seller on ScrapeGenie</h2>
          <p className="text-gray-600 mb-6">
            Selling your pre-loved items on ScrapeGenie is easy and sustainable. Follow these simple steps to list your items and connect with buyers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border rounded-lg p-4 text-center">
              <div className="bg-scrapeGenie-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-scrapeGenie-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Create an account</h3>
              <p className="text-sm text-gray-500">Sign up and verify your identity</p>
            </div>
            
            <div className="border rounded-lg p-4 text-center">
              <div className="bg-scrapeGenie-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-scrapeGenie-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">List your items</h3>
              <p className="text-sm text-gray-500">Add photos, descriptions and set your price</p>
            </div>
            
            <div className="border rounded-lg p-4 text-center">
              <div className="bg-scrapeGenie-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-scrapeGenie-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Connect with buyers</h3>
              <p className="text-sm text-gray-500">Sell your items and arrange delivery</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link to="/sell">
              <Button size="lg" className="bg-scrapeGenie-600 hover:bg-scrapeGenie-700">
                Start Selling Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartSelling;
