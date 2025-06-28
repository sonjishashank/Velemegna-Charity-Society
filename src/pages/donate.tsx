import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';
import { Eye, Home, Heart } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Donate() {
  const [donationProgress, setDonationProgress] = useState(0);
  
  // Donation progress without revealing exact amounts
  const percentComplete = 38; // Example: 38% toward goal
  
  useEffect(() => {
    // Animate the progress bar
    const timer = setTimeout(() => {
      setDonationProgress(percentComplete);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [percentComplete]);
  
  const handleDonate = () => {
    // Redirect to Razorpay donation page
    window.location.href = 'https://pages.razorpay.com/pl_NHjRCmidzzZSQ2/view';
  };

  const causes = [
    {
      title: "Eye Surgery Program",
      description: "Provide sight-restoring surgeries to patients who cannot afford treatment. Each donation helps cover costs of cataract surgeries, corneal transplants, and other vision-saving procedures.",
      icon: Eye,
      color: "text-blue-500",
      impact: "One donation can help restore sight to someone in need."
    },
    {
      title: "Children's Home",
      description: "Support education, shelter, nutrition, and care for underprivileged children at our Velemegna Children's Home, giving them opportunities for a brighter future.",
      icon: Home,
      color: "text-green-500",
      impact: "Your contribution helps provide a loving home environment for children."
    },
    {
      title: "Leprosy Care Services",
      description: "Continue our founder's legacy of compassionate care for individuals affected by leprosy, providing medical treatment, rehabilitation, and community support.",
      icon: Heart,
      color: "text-red-500",
      impact: "Help restore dignity and provide essential care to those affected by leprosy."
    }
  ];

  return (
    <div className="container py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support Our Cause</h1>
          <p className="text-lg text-muted-foreground">
            Your contribution helps us provide quality healthcare and social services to those in need.
          </p>
        </div>
        
        {/* Donation Progress Tracker */}
        {/* <div className="mb-12 bg-card p-6 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-bold mb-4">Our Fundraising Progress</h2>
          <Progress value={donationProgress} className="h-6 mb-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Getting Started</span>
            <span>{percentComplete}% Toward Our Goal</span>
            <span>Target Goal</span>
          </div>
        </div> */}
        
        {/* Cause Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {causes.map((cause, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className={`${cause.color} mb-2`}>
                    <cause.icon size={28} />
                  </div>
                  <CardTitle>{cause.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{cause.description}</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium text-primary">{cause.impact}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <Button
            onClick={handleDonate}
            size="lg"
            className="bg-primary text-white text-lg px-10 py-6 hover:bg-primary/90 transition-colors"
          >
            Donate Now
          </Button>
          
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Every contribution makes a difference, regardless of size. Your generosity enables us to continue 
            providing essential services to the communities we serve.
          </p>
        </div>
      </div>
    </div>
  );
}
