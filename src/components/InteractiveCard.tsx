import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface InteractiveCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}

export default function InteractiveCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: InteractiveCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="h-full transition-colors hover:bg-primary/5">
        <CardHeader>
          <Icon className="h-8 w-8 mb-2 text-primary" />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}