
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UIOrder } from '@/types/sellerDashboard';
import { CalendarIcon, CreditCard, MapPin, Phone, Mail, User } from 'lucide-react';

interface OrderDetailDialogProps {
  order: UIOrder | null;
  open: boolean;
  onClose: () => void;
}

const OrderDetailDialog: React.FC<OrderDetailDialogProps> = ({ order, open, onClose }) => {
  if (!order) return null;
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
          <DialogDescription>
            Order ID: {order.id}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Product Info */}
          <div className="space-y-2">
            <h3 className="font-medium text-sm text-gray-500">PRODUCT INFORMATION</h3>
            <div className="flex items-start space-x-3">
              <div className="h-16 w-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                <img 
                  src={order.productImage || '/placeholder.svg'} 
                  alt={order.product}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{order.product}</p>
                <p className="text-lg font-semibold text-gray-900">{order.price}</p>
                <Badge 
                  variant="outline" 
                  className={
                    order.status === 'delivered' ? 'bg-green-100 text-green-800' : 
                    order.status === 'shipped' ? 'bg-blue-100 text-blue-800' : 
                    order.status === 'processing' ? 'bg-purple-100 text-purple-800' : 
                    order.status === 'cancelled' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Customer Info */}
          <div className="space-y-2">
            <h3 className="font-medium text-sm text-gray-500">CUSTOMER INFORMATION</h3>
            <div className="space-y-1.5">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-gray-500" />
                <p>{order.customer}</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-500" />
                <p>{order.customerEmail}</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                <p>{order.customerPhone || order.contactNumber}</p>
              </div>
            </div>
          </div>
          
          {/* Delivery Info */}
          <div className="space-y-2">
            <h3 className="font-medium text-sm text-gray-500">DELIVERY INFORMATION</h3>
            <div className="space-y-1.5">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                <p className="flex-1">{order.deliveryAddress}</p>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
                <p>Ordered on {order.date}</p>
              </div>
            </div>
          </div>
          
          {/* Payment Info */}
          <div className="space-y-2">
            <h3 className="font-medium text-sm text-gray-500">PAYMENT INFORMATION</h3>
            <div className="space-y-1.5">
              <div className="flex items-center">
                <CreditCard className="h-4 w-4 mr-2 text-gray-500" />
                <p className="capitalize">{order.paymentMethod.replace(/-/g, ' ')}</p>
              </div>
              <div className="flex items-center">
                <Badge 
                  variant="outline" 
                  className={
                    order.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' : 
                    order.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }
                >
                  {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailDialog;
