
import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Inbox } from "lucide-react";
import { useFeedbackStore, FeedbackMessage } from "@/hooks/useFeedbackStore";
import { format } from "date-fns";
import { toast } from "sonner";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";

const Admin = () => {
  const { feedback, deleteFeedback } = useFeedbackStore();
  const [selectedMessage, setSelectedMessage] = useState<FeedbackMessage | null>(null);

  const handleDelete = (id: string) => {
    deleteFeedback(id);
    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
    toast.success("Message deleted successfully");
  };

  return (
    <div className="section-container">
      <motion.h1 
        className="section-title mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Feedback Dashboard
      </motion.h1>

      {feedback.length === 0 ? (
        <AnimatedSection delay={0.2} className="flex flex-col items-center justify-center py-20">
          <Inbox className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-xl font-medium mb-2">No messages yet</h2>
          <p className="text-muted-foreground">
            Messages submitted through the contact form will appear here
          </p>
        </AnimatedSection>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatedSection delay={0.2} className="md:col-span-1">
            <div className="glass-card p-4 h-[70vh] overflow-auto">
              <h2 className="font-medium mb-4 flex items-center justify-between">
                <span>Inbox ({feedback.length})</span>
              </h2>
              
              <div className="space-y-2">
                {feedback.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedMessage?.id === message.id 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setSelectedMessage(message)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="font-medium truncate">{message.name}</div>
                      <Badge variant="outline" className="text-xs">
                        {format(new Date(message.createdAt), "MMM d")}
                      </Badge>
                    </div>
                    <div className="text-sm opacity-80 truncate">{message.subject}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="md:col-span-2">
            {selectedMessage ? (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{selectedMessage.subject}</CardTitle>
                      <CardDescription>
                        From: {selectedMessage.name} ({selectedMessage.email})
                      </CardDescription>
                    </div>
                    <Badge>
                      {format(new Date(selectedMessage.createdAt), "PPP p")}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDelete(selectedMessage.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground py-20">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p>Select a message to view details</p>
                </motion.div>
              </div>
            )}
          </AnimatedSection>
        </div>
      )}
    </div>
  );
};

export default Admin;
