
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">What Are Cookies?</h2>
            <p className="text-gray-600">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">How We Use Cookies</h2>
            <p className="text-gray-600 mb-3">
              ScrapeGenie uses cookies for various purposes, including:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li><strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be turned off in our systems.</li>
              <li><strong>Performance cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong>Functionality cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
              <li><strong>Targeting cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads on other sites.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Managing Cookies</h2>
            <p className="text-gray-600 mb-3">
              Most web browsers allow some control of cookies through browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org.
            </p>
            <p className="text-gray-600">
              Please note that disabling cookies may affect the functionality of our website and your user experience.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Third-Party Cookies</h2>
            <p className="text-gray-600">
              Some cookies are placed by third parties on our website. These third parties may include analytics services, advertising networks, and social media platforms. These third parties may use cookies, web beacons, and similar technologies to collect information about your use of our website and other websites.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Changes to This Cookie Policy</h2>
            <p className="text-gray-600">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "last updated" date.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our Cookie Policy, please contact us at privacy@scrapegenie.com.
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

export default Cookies;
