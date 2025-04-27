
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { MessageCircle } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { storeMessage, getCurrentUser } from "@/utils/realTimeUtils";
import type { Message } from "@/types/product";

interface MessageDialogProps {
  recipientId: string;
  recipientName: string;
  productId?: string;
  productTitle?: string;
  triggerComponent?: React.ReactNode;
}

const MessageDialog: React.FC<MessageDialogProps> = ({
  recipientId,
  recipientName,
  productId,
  productTitle,
  triggerComponent
}) => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const currentUser = getCurrentUser();

  const handleSendMessage = () => {
    if (!message.trim() || !currentUser) {
      return;
    }
    
    // Create message object
    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      from: {
        id: currentUser.id || currentUser.email,
        name: currentUser.name,
        avatar: currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase()
      },
      to: {
        id: recipientId,
        name: recipientName
      },
      content: message,
      timestamp: new Date().toISOString(),
      read: false,
      productId,
      productTitle
    };
    
    // Store and broadcast the message
    storeMessage(newMessage);
    
    // Show confirmation toast
    toast({
      title: "Message sent!",
      description: `Your message has been sent to ${recipientName}.`,
    });
    
    setMessage("");
    setOpen(false);
  };
  
  if (!currentUser) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerComponent || (
          <Button variant="outline" size="sm">
            <MessageCircle className="h-4 w-4 mr-2" /> Message
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Message to {recipientName}</DialogTitle>
          <DialogDescription>
            Send a message directly to {recipientName}
            {productTitle && ` about ${productTitle}`}.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {productTitle && (
            <div className="flex items-center space-x-2">
              <div className="font-medium">About:</div>
              <div className="text-sm text-muted-foreground">{productTitle}</div>
            </div>
          )}
          <div className="grid gap-2">
            <div className="font-medium">Your message:</div>
            <Input
              placeholder={productTitle 
                ? `I'm interested in ${productTitle}...` 
                : "Type your message here..."}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full"
            />
          </div>
          <Button 
            className="w-full" 
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            Send Message
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MessageDialog;
