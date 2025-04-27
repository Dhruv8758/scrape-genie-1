
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SellerTools = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Seller Tools</h1>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Tools to help you succeed</h2>
          <p className="text-gray-600 mb-6">
            ScrapeGenie provides various tools to help you list and sell your items effectively.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Photo Editor</h3>
              <p className="text-gray-600 mb-4">
                Enhance your product photos to make them more attractive to potential buyers.
              </p>
              <ul className="list-disc pl-5 text-gray-500 space-y-1">
                <li>Crop and resize images</li>
                <li>Adjust brightness and contrast</li>
                <li>Remove backgrounds</li>
                <li>Add filters</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Price Estimator</h3>
              <p className="text-gray-600 mb-4">
                Get suggestions on how to price your items based on similar listings.
              </p>
              <ul className="list-disc pl-5 text-gray-500 space-y-1">
                <li>Market-based pricing</li>
                <li>Condition assessment</li>
                <li>Demand analysis</li>
                <li>Seasonal trends</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Listing Analyzer</h3>
              <p className="text-gray-600 mb-4">
                Get recommendations to improve your listings and sell faster.
              </p>
              <ul className="list-disc pl-5 text-gray-500 space-y-1">
                <li>Title optimization</li>
                <li>Description enhancement</li>
                <li>Category suggestions</li>
                <li>Photo quality assessment</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Shipping Calculator</h3>
              <p className="text-gray-600 mb-4">
                Estimate shipping costs based on item size, weight, and destination.
              </p>
              <ul className="list-disc pl-5 text-gray-500 space-y-1">
                <li>Multiple carrier options</li>
                <li>Package size recommendations</li>
                <li>Delivery time estimates</li>
                <li>Cost-saving suggestions</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SellerTools;
