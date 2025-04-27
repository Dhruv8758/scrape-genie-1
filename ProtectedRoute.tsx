
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: ('user' | 'seller' | 'admin')[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const location = useLocation();
  
  // Show uniquely styled loading state with animation
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative">
          <div className="w-16 h-16 border-t-4 border-b-4 border-scrapeGenie-600 rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-r-4 border-l-4 border-scrapeGenie-400 rounded-full animate-spin absolute top-2 left-2 animation-delay-150"></div>
          <div className="w-8 h-8 border-t-4 border-b-4 border-scrapeGenie-200 rounded-full animate-spin absolute top-4 left-4 animation-delay-300"></div>
        </div>
        <p className="mt-4 text-lg font-medium text-scrapeGenie-600">Authenticating...</p>
        <p className="text-sm text-gray-500">Verifying your credentials</p>
      </div>
    );
  }
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    toast({
      title: "Authentication required",
      description: "Please sign in to access this page",
      variant: "destructive",
    });
    return <Navigate to="/sign-in" state={{ from: location.pathname }} replace />;
  }
  
  // Check role authorization
  if (user && !allowedRoles.includes(user.role)) {
    toast({
      title: "Access denied",
      description: "You don't have permission to access this page",
      variant: "destructive",
    });
    
    // Redirect based on role
    if (user.role === 'admin') {
      return <Navigate to="/admin-dashboard" replace />;
    } else if (user.role === 'seller') {
      return <Navigate to="/seller-dashboard" replace />;
    } else {
      return <Navigate to="/profile" replace />;
    }
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
