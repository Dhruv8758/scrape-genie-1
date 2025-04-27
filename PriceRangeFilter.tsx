
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { IndianRupee } from "lucide-react";

interface PriceRangeFilterProps {
  onPriceRangeChange: (min: number, max: number) => void;
  maxPrice: number;
}

const PriceRangeFilter = ({ onPriceRangeChange, maxPrice }: PriceRangeFilterProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);

  const handleSliderChange = (values: number[]) => {
    const [min, max] = values as [number, number];
    setPriceRange([min, max]);
    onPriceRangeChange(min, max);
  };

  const handleInputChange = (index: 0 | 1, value: string) => {
    const newValue = Number(value);
    if (isNaN(newValue)) return;

    const newRange = [...priceRange] as [number, number];
    newRange[index] = newValue;
    
    // Ensure min <= max
    if (index === 0 && newRange[0] > newRange[1]) {
      newRange[0] = newRange[1];
    }
    if (index === 1 && newRange[1] < newRange[0]) {
      newRange[1] = newRange[0];
    }

    setPriceRange(newRange);
    onPriceRangeChange(newRange[0], newRange[1]);
  };

  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg mb-4">Price Range (₹)</h3>
      
      <Slider
        defaultValue={[0, maxPrice]}
        max={maxPrice}
        step={100}
        value={priceRange}
        onValueChange={handleSliderChange}
        className="mb-4"
      />
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <IndianRupee className="h-3.5 w-3.5 text-gray-500" />
          </div>
          <Input
            type="number"
            value={priceRange[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
            className="pl-7 max-w-[100px]"
            min={0}
            max={maxPrice}
          />
        </div>
        <span className="text-gray-500">to</span>
        <div className="relative flex-1">
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <IndianRupee className="h-3.5 w-3.5 text-gray-500" />
          </div>
          <Input
            type="number"
            value={priceRange[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
            className="pl-7 max-w-[100px]"
            min={0}
            max={maxPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
