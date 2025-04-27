import { useState, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Upload, Camera, Plus, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Sell = () => {
  const { user } = useAuth();
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoError, setPhotoError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (photos.length === 0) {
      setPhotoError(true);
      toast({
        title: "Photos Required",
        description: "Please add at least one photo of your item",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      const form = e.target as HTMLFormElement;
      
      // Add form fields
      formData.append('title', (form.elements.namedItem('title') as HTMLInputElement).value);
      formData.append('price', (form.elements.namedItem('price') as HTMLInputElement).value);
      formData.append('condition', (form.elements.namedItem('condition') as HTMLSelectElement).value);
      formData.append('category', (form.elements.namedItem('category') as HTMLSelectElement).value);
      formData.append('description', (form.elements.namedItem('description') as HTMLTextAreaElement).value);

      // Add photos
      photos.forEach(photo => {
        formData.append('photos', photo);
      });
      console.log(formData);
      
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
       credentials: 'include',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create listing');
      }

      const data = await response.json();

      toast({
        title: "Listing Created",
        description: "Your item has been listed successfully!",
      });

      // Reset form
      setPhotos([]);
      form.reset();
    } catch (err) {
      setError(err.message);
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newPhotos = Array.from(e.target.files).slice(0, 8 - photos.length);
      setPhotos(prev => [...prev, ...newPhotos]);
      setPhotoError(false);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Sell an Item</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data"> 
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  name="title"
                  placeholder="What are you selling?" 
                  required 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price (₹)</Label>
                  <Input 
                    id="price" 
                    name="price"
                    type="number" 
                    placeholder="0" 
                    min="0" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="condition">Condition</Label>
                  <Select name="condition">
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="like-new">Like New</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category">
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="home">Home & Garden</SelectItem>
                    <SelectItem value="sports">Sports & Outdoors</SelectItem>
                    <SelectItem value="toys">Toys & Games</SelectItem>
                    <SelectItem value="books">Books & Media</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description"
                  placeholder="Describe your item in detail. Include information about brand, model, size, color, etc." 
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label className="flex items-center">
                  Photos <span className="text-red-500 ml-1">*</span>
                </Label>
                
                {photoError && (
                  <Alert variant="destructive" className="mb-3">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Required</AlertTitle>
                    <AlertDescription>
                      At least one photo is required to create a listing
                    </AlertDescription>
                  </Alert>
                )}
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  <div 
                    onClick={triggerFileInput}
                    className="aspect-square bg-gray-100 rounded border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
                  >
                    <Camera className="h-6 w-6 text-gray-400 mb-1" />
                    <span className="text-sm text-gray-500">Add Photo</span>
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      accept="image/*" 
                      className="hidden" 
                      onChange={handlePhotoChange}
                      multiple
                    />
                  </div>
                  
                  {photos.map((photo, index) => (
                    <div key={index} className="aspect-square bg-gray-100 rounded border overflow-hidden relative group">
                      <img 
                        src={URL.createObjectURL(photo)} 
                        alt={`Photo ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  ))}
                  
                  {photos.length > 0 && photos.length < 8 && (
                    <div 
                      onClick={triggerFileInput}
                      className="aspect-square bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50"
                    >
                      <Plus className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500">Add up to 8 photos. First photo will be the cover (main) image.</p>
              </div>
              
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-scrapeGenie-600 hover:bg-scrapeGenie-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="mr-2 h-4 w-4" />
                )}
                {isSubmitting ? "Creating Listing..." : "List Item for Sale"}
              </Button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sell;