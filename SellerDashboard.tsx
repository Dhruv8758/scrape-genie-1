import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Package,
  Settings,
  LogOut,
  BarChart,
  DollarSign,
  MessageSquare,
  Bell,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  X,
  Search,
  Eye,
  Truck,
  Clock,
  Check,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { DialogHeader } from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";

const SellerDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [orderDetailDialogOpen, setOrderDetailDialogOpen] = useState(false);
  const { user } = useAuth();

  // Fetch seller's orders and products
  useEffect(() => {
    if (user?._id && user?.role === "seller") {
      fetchSellerData();
    }
  }, [user]);

  const fetchSellerData = async () => {
    try {
      setLoading(true);

      // Fetch seller's orders
      const ordersRes = await axios.get(
        `http://localhost:5000/api/orders/${user._id}`
      );
      console.log(ordersRes.data);

      setOrders(ordersRes.data);

      // Fetch seller's products
      const productsRes = await axios.get(
        `http://localhost:5000/api/products/seller/${user._id}`
      );
      setProducts(productsRes.data.data.products);
    } catch (error) {
      toast({
        title: "Error fetching data",
        description:
          error.response?.data?.message || "Failed to load dashboard data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    console.log(orderId, status);

    try {
      const res = await fetch("http://localhost:5000/api/orders/" + orderId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update order");
      }

      toast({
        title: "Order updated",
        description: `Status changed to ${status}`,
      });

      fetchSellerData(); // Refresh data
      setStatusDialogOpen(false);
    } catch (error) {
      toast({
        title: "Update failed",
        description: error.message || "Failed to update order",
        variant: "destructive",
      });
    }
  };
  const deleteProduct = async (productId) => {
    console.log(productId);

    try {
      const res = await fetch(
        `http://localhost:5000/api/products/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to delete product");
      }

      toast({
        title: "Product deleted",
        description: `Product with ID ${productId} has been deleted.`,
      });

      fetchSellerData(); // Refresh data
    } catch (error) {
      toast({
        title: "Delete failed",
        description: error.message || "Failed to delete product",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-IN");
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  const getStatusBadge = (status) => {
    const variants = {
      pending: {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        icon: <Clock className="h-4 w-4 mr-1" />,
      },
      processing: {
        bg: "bg-blue-100",
        text: "text-blue-800",
        icon: <Package className="h-4 w-4 mr-1" />,
      },
      shipped: {
        bg: "bg-purple-100",
        text: "text-purple-800",
        icon: <Truck className="h-4 w-4 mr-1" />,
      },
      delivered: {
        bg: "bg-green-100",
        text: "text-green-800",
        icon: <Check className="h-4 w-4 mr-1" />,
      },
      cancelled: {
        bg: "bg-red-100",
        text: "text-red-800",
        icon: <XCircle className="h-4 w-4 mr-1" />,
      },
    };
    return (
      <Badge
        variant="secondary"
        className={`${variants[status]?.bg} ${variants[status]?.text}`}
      >
        {variants[status]?.icon} {status}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 border-t-2 border-primary border-solid rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading dashboard...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Seller Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your products and orders
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders ({orders.length})</TabsTrigger>
            <TabsTrigger value="products">
              Products ({products.length})
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your 5 most recent orders</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.slice(0, 5).map((order) => (
                      <TableRow key={order._id}>
                        <TableCell>#{order._id.slice(-6)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={`http://localhost:5000${order.productId?.photos[0]}`}
                              alt={order.productId?.name}
                              className="h-10 w-10 rounded-md object-cover"
                            />
                            <span>{order.productId?.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{formatDate(order.createdAt)}</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell>
                          {formatPrice(order.productId?.price)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Order Management</h2>
                <p className="text-muted-foreground">
                  View and manage your orders
                </p>
              </div>
              <div className="flex gap-2">
                <Input placeholder="Search orders..." className="max-w-xs" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Orders</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell className="font-medium">
                          #{order._id.slice(-6)}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={`http://localhost:5000${order.productId.photos[0]}`}
                              alt={order.product?.name}
                              className="h-10 w-10 rounded-md object-cover"
                            />
                            <div>
                              <div className="font-medium">
                                {order.product?.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {order.product?.category}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{order.buyer?.name || "Customer"}</TableCell>
                        <TableCell>{formatDate(order.createdAt)}</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell>
                          {formatPrice(order.productId?.price)}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedOrder(order);
                                setOrderDetailDialogOpen(true);
                              }}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedOrder(order);
                                setStatusDialogOpen(true);
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Product Management</h2>
                <p className="text-muted-foreground">
                  Manage your product listings
                </p>
              </div>
              <Button onClick={() => navigate("/seller/products/new")}>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>

            {products.length > 0 ? (
              <Card className="mt-4">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product._id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <img
                                src={`http://localhost:5000${product.photos[0]}`}
                                alt={product.name}
                                className="h-10 w-10 rounded-md object-cover"
                              />
                              <div className="font-medium">{product.name}</div>
                            </div>
                          </TableCell>
                          <TableCell>{formatPrice(product.price)}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                product.status === "active"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {product.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  navigate(
                                    `/seller/products/edit/${product._id}`
                                  )
                                }
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-red-500 hover:bg-red-50"
                                onClick={() => deleteProduct(product._id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ) : (
              <Card className="mt-4">
                <CardContent className="p-6 text-center">
                  <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">
                    No products listed yet
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Add your first product to start selling
                  </p>
                  <Button
                    className="mt-4"
                    onClick={() => navigate("/seller/products/new")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        {/* Order Detail Dialog */}
        <Dialog
          open={orderDetailDialogOpen}
          onOpenChange={setOrderDetailDialogOpen}
        >
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Order Details</DialogTitle>
              <DialogDescription>
                Order #{selectedOrder?._id.slice(-6)}
              </DialogDescription>
            </DialogHeader>

            {selectedOrder && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Order Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Order Date:
                        </span>
                        <span>{formatDate(selectedOrder.createdAt)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <span>{getStatusBadge(selectedOrder.status)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Customer Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Name:</span>
                        <span>{selectedOrder.buyer?.name || "N/A"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Email:</span>
                        <span>{selectedOrder.buyer?.email || "N/A"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Product Details</h4>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <img
                      src={`http://localhost:5000${selectedOrder.product?.photos[0]}`}
                      alt={selectedOrder.product?.name}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h5 className="font-medium">
                        {selectedOrder.product?.name}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {formatPrice(selectedOrder.product?.price)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setOrderDetailDialogOpen(false);
                      setStatusDialogOpen(true);
                    }}
                  >
                    Update Status
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Status Update Dialog */}
        <Dialog open={statusDialogOpen} onOpenChange={setStatusDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update Order Status</DialogTitle>
              <DialogDescription>
                Order #{selectedOrder?._id.slice(-6)}
              </DialogDescription>
            </DialogHeader>

            {selectedOrder && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={`http://localhost:5000${selectedOrder.productId?.photos[0]}`}
                    alt={selectedOrder.productId?.name}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                  <div>
                    <h4 className="font-medium">
                      {selectedOrder.productId?.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {formatPrice(selectedOrder.productId?.price)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {["pending", "processing", "shipped", "delivered"].map(
                    (status) => (
                      <Button
                        key={status}
                        variant={
                          selectedOrder.status === status
                            ? "default"
                            : "outline"
                        }
                        onClick={() =>
                          updateOrderStatus(selectedOrder._id, status)
                        }
                      >
                        {getStatusBadge(status)}
                      </Button>
                    )
                  )}
                  <Button
                    variant={
                      selectedOrder.status === "cancelled"
                        ? "default"
                        : "outline"
                    }
                    className="col-span-2 text-red-500 hover:bg-red-50"
                    onClick={() =>
                      updateOrderStatus(selectedOrder._id, "cancelled")
                    }
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Cancel Order
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
};

export default SellerDashboard;
