export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  condition: string;
  category: string;
  photos?: string[];
  seller:  {
    _id: string;
    fullName: string;
    rating?: number;
    email?: string;
    phone?: string;
  };
  ratings?: 0;
  likedBy?: string[];
  likes?: number;
  verificationStatus?: 'verified' | 'unverified';
  id?: string; // Added for compatibility with existing code
  healthScore?: number; // Added for health score
}


export type Order = {
  id?: string;
  productId: string;
  sellerId: string;
  buyerId: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  deliveryAddress: string; // Made non-optional
  paymentMethod: 'credit-card' | 'debit-card' | 'upi' | 'cash-on-delivery' | 'wallet';
  paymentStatus: 'paid' | 'pending' | 'failed';
};

export type Message = {
  id: string;
  from: {
    id: string;
    name: string;
    avatar: string;
  };
  to: {
    id: string;
    name: string;
  };
  content: string;
  timestamp: string;
  read: boolean;
  productId?: string;
  productTitle?: string;
};

