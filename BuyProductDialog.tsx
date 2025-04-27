import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingBag } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { storeOrder, getCurrentUser } from "@/utils/realTimeUtils";
import type { Order } from "@/utils/realTimeUtils";
import { Product } from "@/types/product";
import { useAuth } from "@/contexts/AuthContext";

interface BuyProductDialogProps {
  product: Product;
  triggerComponent?: React.ReactNode;
}

const BuyProductDialog: React.FC<BuyProductDialogProps> = ({
  product,
  triggerComponent,
}) => {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const { toast } = useToast();
  const currentUser = useAuth().user;

  const storeOrder = async (order: Order) => {
    const response = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      console.log(response);

      throw new Error("Failed to place order");
    }

  console.log(

    response.json()
  );
  };

  const handlePurchase = () => {
    if (!address.trim() || !phone.trim() || !currentUser) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    console.log("Current User:", currentUser);  
    
    // Create order object  
    const newOrder: Order = {
      productId: product._id,
      sellerId: product.seller._id,
      buyerId: currentUser._id ,
      date: new Date().toISOString(),
      status: "pending",
      deliveryAddress: address,
      paymentMethod: "cash-on-delivery",
      paymentStatus: "pending",
    };
    console.log("New Order:", newOrder);
    

    // Store and broadcast the order
    storeOrder(newOrder);

    // Show confirmation toast
    toast({
      title: "Order placed successfully!",
      description: `Your order for ${product.name} has been placed.`,
    });

    setAddress("");
    setPhone("");
    setOpen(false);
  };

  if (!currentUser) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerComponent || (
          <Button>
            <ShoppingBag className="h-4 w-4 mr-2" /> Buy Now
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
          <DialogDescription>
            Please provide delivery information for {product.name}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">
                  Seller: {product.seller.fullName}
                </p>
              </div>
              <div className="text-lg font-bold">
                ₹{product.price.toFixed(0)}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <Label htmlFor="address">Delivery Address</Label>
              <Textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your full address"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone">Contact Number</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Payment Method</Label>
              <div className="bg-white border rounded-lg mt-1 p-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="cod"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="h-4 w-4 text-blue-600"
                  />
                  <label htmlFor="cod" className="text-sm font-medium">
                    Cash on Delivery
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handlePurchase}>Place Order</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BuyProductDialog;
