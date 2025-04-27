
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SellerGuidelines = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Seller Guidelines</h1>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm mb-8">
          <p className="text-gray-600 mb-6">
            To ensure a safe and positive experience for all users, please follow these guidelines when selling on ScrapeGenie.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Prohibited Items</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">The following items are not allowed on ScrapeGenie:</p>
                <ul className="list-disc pl-5 text-gray-500 space-y-1">
                  <li>Illegal items or services</li>
                  <li>Counterfeit or replica items</li>
                  <li>Hazardous materials</li>
                  <li>Prescription medications</li>
                  <li>Weapons and ammunition</li>
                  <li>Adult content</li>
                  <li>Recalled items</li>
                  <li>Stolen property</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Listing Requirements</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">All listings must include:</p>
                <ul className="list-disc pl-5 text-gray-500 space-y-1">
                  <li>Clear, accurate photos of the actual item</li>
                  <li>Honest description of the item's condition</li>
                  <li>Any defects or issues clearly mentioned</li>
                  <li>Accurate dimensions and measurements</li>
                  <li>Reasonable pricing based on condition and market value</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Communication Guidelines</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 text-gray-500 space-y-1">
                  <li>Respond to buyer inquiries promptly (within 24 hours)</li>
                  <li>Be respectful and professional in all communications</li>
                  <li>Do not share personal contact information before a purchase is agreed upon</li>
                  <li>Keep all initial negotiations within the ScrapeGenie platform</li>
                  <li>Be clear about your policies regarding meetups, shipping, and returns</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">Transaction Safety</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 text-gray-500 space-y-1">
                  <li>Always meet buyers in safe, public locations during daylight hours</li>
                  <li>Consider using safe meetup spots like police station parking lots</li>
                  <li>Accept secure payment methods through the platform when possible</li>
                  <li>Be cautious of potential scams like overpayment or payment outside the platform</li>
                  <li>Trust your instincts - if something feels wrong, don't proceed with the transaction</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SellerGuidelines;
