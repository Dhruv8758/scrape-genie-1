
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm mb-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">How do I create an account?</AccordionTrigger>
              <AccordionContent>
                <p>
                  To create an account, click on the "Sign In" button in the top right corner of the page, then select "Create an account". 
                  You'll need to provide your email address, create a password, and verify your email to complete the registration process.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Is it free to list items for sale?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, listing items for sale on ScrapeGenie is completely free. We only charge a small commission when your item sells successfully.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">How do I contact a seller?</AccordionTrigger>
              <AccordionContent>
                <p>
                  To contact a seller, click on the product you're interested in, and you'll find the seller's contact information on the product detail page. 
                  You can message them directly through our platform or use their provided contact details.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">Is my personal information secure?</AccordionTrigger>
              <AccordionContent>
                <p>
                  We take data security very seriously. Your personal information is encrypted and stored securely. We only share 
                  your contact information with buyers once you've agreed to a sale. For more information, please review our Privacy Policy.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">How do I report a problem?</AccordionTrigger>
              <AccordionContent>
                <p>
                  If you encounter any issues with a buyer, seller, or listing, please use the "Report" button on the relevant page 
                  or contact our customer support team through the Contact Us page. We take all reports seriously and will investigate promptly.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">What payment methods are supported?</AccordionTrigger>
              <AccordionContent>
                <p>
                  ScrapeGenie is primarily a platform that connects buyers and sellers. Payment methods are typically arranged between the buyer and seller. 
                  We recommend using secure payment methods and being cautious about payment requests that seem suspicious.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
