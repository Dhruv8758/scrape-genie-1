
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Agreement to Terms</h2>
            <p className="text-gray-600">
              By accessing or using ScrapeGenie, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">User Accounts</h2>
            <p className="text-gray-600">
              When you create an account with us, you must provide accurate information. You are responsible for maintaining the security of your account and password. ScrapeGenie cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Listing and Selling Items</h2>
            <p className="text-gray-600 mb-3">
              When listing items for sale, you agree to:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Provide accurate descriptions and images of the items</li>
              <li>Have the legal right to sell the listed items</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not list prohibited items as outlined in our seller guidelines</li>
              <li>Honor the price and terms listed when a buyer agrees to purchase your item</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Buying Items</h2>
            <p className="text-gray-600 mb-3">
              When purchasing items, you agree to:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Pay the agreed-upon price for items you commit to purchase</li>
              <li>Communicate respectfully with sellers</li>
              <li>Complete the transaction as agreed</li>
              <li>Not engage in fraudulent activities</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Prohibited Activities</h2>
            <p className="text-gray-600 mb-3">
              You may not engage in any of the following activities:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Violating laws or regulations</li>
              <li>Violating intellectual property rights</li>
              <li>Engaging in fraudulent transactions</li>
              <li>Harassment or abuse of other users</li>
              <li>Attempting to compromise the security of the platform</li>
              <li>Creating multiple accounts for deceptive purposes</li>
              <li>Using the platform to distribute malware</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
            <p className="text-gray-600">
              ScrapeGenie is not liable for any disputes between buyers and sellers. We serve as a platform connecting users but do not guarantee the quality, safety, or legality of items listed, nor the ability of buyers to pay for items. Transactions are ultimately between the buyer and seller.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Termination</h2>
            <p className="text-gray-600">
              We reserve the right to terminate or suspend your account and access to the service without prior notice or liability for any reason, including if you breach these Terms of Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. We will provide notice of significant changes by posting the new Terms of Service on this page and updating the "last updated" date.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at legal@scrapegenie.com.
            </p>
          </section>
          
          <section className="text-sm text-gray-500">
            <p>Last updated: August 1, 2023</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
