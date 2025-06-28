import { motion } from 'framer-motion';
import { ChevronFirst as FirstAid, Heart, Home, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const services = [
  {
    icon: FirstAid,
    title: 'Medical Care',
    description: 'Comprehensive medical treatment and wound care.',
  },
  {
    icon: Home,
    title: 'Rehabilitation',
    description: 'Physical therapy and rehabilitation services.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Social integration and community acceptance programs.',
  },
  {
    icon: Heart,
    title: 'Counseling',
    description: 'Mental health support and counseling services.',
  },
];

export default function LeprosyCare() {
  return (
    <div className="flex flex-col gap-16 py-16">
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Leprosy Care Centre</h1>
          <p className="text-lg text-muted-foreground mb-8">
        At Velemegna, one of the cornerstones of our mission is providing care and support to individuals affected by leprosy (Hansen's Disease). This medical condition, though treatable, has long subjected sufferers to unnecessary isolation and stigma, depriving them of normal human interaction.
        Leprosy reduces the patient's sense of touch, leaving them unaware of dangers like fire or sharp objects, which can lead to injuries, disfigurements, and permanent disabilities. While certain types of leprosy were once highly contagious, modern medical advancements have made it possible for individuals with the disease to live fulfilling lives. They can form friendships, build loving relationships, and even marry, give birth to, and raise healthy children without any risk to others
        For over three decades, Velemegna has been actively working to improve the lives of families in the leprosy colony of Chatnalli. Our approach has always been holistic, focusing on breaking the cycle of stigma and dependency. We aim to empower those we serve by helping them transition from begging to self-reliance, ensuring their spiritual, physical, and financial well-being. Beyond providing medical care, we advocate for their dignity, human rights, and the opportunity to lead a life of purpose and fulfillment. Through ongoing efforts, we remain dedicated to restoring hope, eliminating discrimination, and enabling the highest possible quality of life for those affected by leprosy.
          </p>
        </motion.div>
      </section>

      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We are committed to providing dignified care and support to
              individuals affected by leprosy, working towards their complete
              rehabilitation and social integration.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-muted-foreground">
                  Patients Treated
                </div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold">30+</div>
                <div className="text-sm text-muted-foreground">
                  Years of Service
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="/newsletters/Slide20-300x169.jpg"
              alt="Medical care"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <service.icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}