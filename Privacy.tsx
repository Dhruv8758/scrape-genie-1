
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Introduction</h2>
            <p className="text-gray-600">
              At ScrapeGenie, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. By accessing or using our service, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <p className="text-gray-600 mb-3">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Create an account</li>
              <li>List items for sale</li>
              <li>Communicate with other users</li>
              <li>Contact our customer support</li>
              <li>Complete surveys or feedback forms</li>
            </ul>
            <p className="text-gray-600 mt-3">
              This information may include your name, email address, phone number, address, payment information, and any other information you choose to provide.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
            <p className="text-gray-600 mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Create and maintain your account</li>
              <li>Process transactions</li>
              <li>Connect buyers and sellers</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address fraud and other illegal activities</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Sharing of Information</h2>
            <p className="text-gray-600">
              We may share your personal information with:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Other users to facilitate transactions (such as sharing contact information between buyers and sellers)</li>
              <li>Service providers who perform services on our behalf</li>
              <li>Law enforcement or other third parties if required by law or to protect our rights or the rights of others</li>
              <li>In connection with a business transaction such as a merger, sale of assets, or acquisition</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Your Rights and Choices</h2>
            <p className="text-gray-600">
              You have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Accessing, correcting, or deleting your personal information</li>
              <li>Opting out of marketing communications</li>
              <li>Setting your browser to refuse cookies</li>
            </ul>
            <p className="text-gray-600 mt-3">
              To exercise these rights, please contact us at privacy@scrapegenie.com.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at privacy@scrapegenie.com.
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

export default Privacy;
