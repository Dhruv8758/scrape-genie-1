
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { 
  Smartphone, 
  Shirt, 
  Home, 
  BookOpen, 
  Car, 
  Utensils, 
  Watch, 
  Gift, 
  Briefcase, 
  Music, 
  Baby, 
  Truck,
  ChevronRight,
  Wrench,
  Heart,
  Coffee,
  Laptop,
  Pencil
} from "lucide-react";

const categories = [
  { id: "electronics", name: "Electronics", icon: Smartphone, description: "Phones, laptops, cameras and more" },
  { id: "clothing", name: "Clothing & Accessories", icon: Shirt, description: "Fashion items, shoes, bags and jewelry" },
  { id: "home", name: "Home & Garden", icon: Home, description: "Furniture, decor, appliances and gardening" },
  { id: "books", name: "Books & Media", icon: BookOpen, description: "Books, textbooks, movies, music and games" },
  { id: "vehicles", name: "Vehicles", icon: Car, description: "Cars, bikes, spare parts and accessories" },
  { id: "kitchen", name: "Kitchen & Dining", icon: Utensils, description: "Cookware, tableware, small appliances" },
  { id: "watches", name: "Watches & Accessories", icon: Watch, description: "Watches, sunglasses, wallets and more" },
  { id: "toys", name: "Toys & Hobbies", icon: Gift, description: "Action figures, board games, collectibles" },
  { id: "business", name: "Business & Industrial", icon: Briefcase, description: "Office equipment, tools, supplies" },
  { id: "music", name: "Musical Instruments", icon: Music, description: "Guitars, keyboards, DJ equipment" },
  { id: "baby", name: "Baby & Kids", icon: Baby, description: "Clothing, toys, strollers, safety gear" },
  { id: "sports", name: "Sports & Outdoors", icon: Truck, description: "Sports equipment, outdoor gear, camping" },
  { id: "tools", name: "Tools & Hardware", icon: Wrench, description: "Power tools, hand tools, hardware supplies" },
  { id: "health", name: "Health & Beauty", icon: Heart, description: "Skincare, makeup, vitamins, supplements" },
  { id: "food", name: "Food & Beverages", icon: Coffee, description: "Gourmet foods, specialty drinks, snacks" },
  { id: "computers", name: "Computers & Tablets", icon: Laptop, description: "Desktops, laptops, tablets, accessories" },
  { id: "art", name: "Art & Craft Supplies", icon: Pencil, description: "Paints, canvas, crafting materials" },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/?category=${categoryId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Browse Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="bg-white p-6 rounded-lg border hover:border-scrapeGenie-300 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-scrapeGenie-50 rounded-full text-scrapeGenie-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-scrapeGenie-600">{category.name}</h3>
                    <p className="text-gray-500 text-sm">{category.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-scrapeGenie-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
