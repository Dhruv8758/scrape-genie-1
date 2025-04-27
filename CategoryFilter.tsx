
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export type Category = {
  id: string;
  name: string;
};

// Updated to match all categories in Categories.tsx
const categories: Category[] = [
  { id: "electronics", name: "Electronics" },
  { id: "clothing", name: "Clothing & Accessories" },
  { id: "home", name: "Home & Garden" },
  { id: "books", name: "Books & Media" },
  { id: "vehicles", name: "Vehicles" },
  { id: "kitchen", name: "Kitchen & Dining" },
  { id: "watches", name: "Watches & Accessories" },
  { id: "toys", name: "Toys & Hobbies" },
  { id: "business", name: "Business & Industrial" },
  { id: "music", name: "Musical Instruments" },
  { id: "baby", name: "Baby & Kids" },
  { id: "sports", name: "Sports & Outdoors" },
  { id: "tools", name: "Tools & Hardware" },
  { id: "health", name: "Health & Beauty" },
  { id: "food", name: "Food & Beverages" },
  { id: "computers", name: "Computers & Tablets" },
  { id: "art", name: "Art & Craft Supplies" },
];

interface CategoryFilterProps {
  onCategorySelect: (categoryId: string | null) => void;
  selectedCategory: string | null;
}

const CategoryFilter = ({ onCategorySelect, selectedCategory }: CategoryFilterProps) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string | null) => {
    onCategorySelect(categoryId);
    
    // Update the URL when a category is selected
    if (categoryId) {
      navigate(`/?category=${categoryId}`, { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">Categories</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="text-gray-500"
        >
          {expanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className={`grid transition-all duration-300 ${
        expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr] md:grid-rows-[1fr]"
      } overflow-hidden`}>
        <div className="min-h-0">
          <div className="flex flex-wrap gap-2 md:grid md:grid-cols-1">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              className={selectedCategory === null ? "bg-scrapeGenie-600 hover:bg-scrapeGenie-700" : ""}
              onClick={() => handleCategoryClick(null)}
              size="sm"
            >
              All Items
            </Button>
            
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id ? "bg-scrapeGenie-600 hover:bg-scrapeGenie-700" : ""}
                onClick={() => handleCategoryClick(category.id)}
                size="sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
