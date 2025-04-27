
import type { Product, Message, Order } from "./product";

// UI-specific types for the seller dashboard
export interface UIMessage {
  id: string;
  from: string;
  avatar: string;
  content: string;
  timestamp: string;
  read: boolean;
  productId?: string;
  productTitle?: string;
}

export interface UIOrder {
  id: string;
  product: string;
  productImage: string; // Added
  customer: string;
  customerEmail: string; // Added
  customerPhone: string; // Added
  price: string;
  status: Order['status'];
  date: string;
  deliveryAddress: string; // Added
  contactNumber: string; // Added
  paymentMethod: Order['paymentMethod']; // Added
  paymentStatus: Order['paymentStatus']; // Added
}

export interface Payment {
  id: string;
  amount: string;
  from: string;
  for: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

// Function to convert Message to UIMessage
export function convertToUIMessage(message: Message): UIMessage {
  return {
    id: message.id,
    from: message.from.name,
    avatar: message.from.avatar,
    content: message.content,
    timestamp: new Date(message.timestamp).toLocaleString(),
    read: message.read,
    productId: message.productId,
    productTitle: message.productTitle
  };
}

// Function to convert Order to UIOrder
export function convertToUIOrder(order: Order): UIOrder {
  return {
    id: order.id,
    product: order.productName,
    productImage: order.productImage,
    customer: order.buyerName,
    customerEmail: order.buyerEmail,
    customerPhone: order.buyerPhone,
    price: `₹${order.price.toLocaleString()}`,
    status: order.status,
    date: new Date(order.date).toLocaleDateString(),
    deliveryAddress: order.deliveryAddress,
    contactNumber: order.contactNumber,
    paymentMethod: order.paymentMethod,
    paymentStatus: order.paymentStatus
  };
}

// Function to convert a real order to a Payment
export function createPaymentFromOrder(order: Order): Payment {
  return {
    id: `PAY-${order.id.split('_')[1]}`,
    amount: `₹${order.price.toLocaleString()}`,
    from: order.buyerName,
    for: order.productName,
    date: new Date(order.date).toLocaleDateString(),
    status: order.paymentStatus === 'paid' ? 'completed' : 
            order.paymentStatus === 'pending' ? 'pending' : 'failed'
  };
}
