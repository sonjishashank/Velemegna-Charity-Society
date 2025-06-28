import { motion } from 'framer-motion';
import { Leaf, Sprout, Sun, Heater as Water } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const initiatives = [
  {
    icon: Leaf,
    title: 'Organic Farming',
    description:
      'Sustainable farming practices that protect the environment.',
  },
  {
    icon: Sprout,
    title: 'Training Programs',
    description: 'Teaching modern farming techniques to local farmers.',
  },
  {
    icon: Water,
    title: 'Water Conservation',
    description: 'Efficient irrigation systems and water management.',
  },
  {
    icon: Sun,
    title: 'Solar Power',
    description: 'Renewable energy for farm operations.',
  },
];

const farms = [
  {
    title: 'Farm 1',
    imageUrl: 'https://intellectuallyunavailable.github.io/velemegna/images/image4.jpg',
    link: 'https://intellectuallyunavailable.github.io/velemegna/images/image4.jpg',
  },
  {
    title: 'Farm 2',
    imageUrl: 'https://intellectuallyunavailable.github.io/velemegna/images/image5.jpg',
    link: 'https://intellectuallyunavailable.github.io/velemegna/images/image5.jpg',
  },
  {
    title: 'Farm 3',
    imageUrl: 'https://intellectuallyunavailable.github.io/velemegna/images/image7.jpg',
    link: 'https://intellectuallyunavailable.github.io/velemegna/images/image7.jpg',
  },
  {
    title: 'Farm 4',
    imageUrl: 'https://intellectuallyunavailable.github.io/velemegna/images/image6.jpg',
    link: 'https://intellectuallyunavailable.github.io/velemegna/images/image6.jpg',
  },
  {
    title: 'Farm 5',
    imageUrl: 'https://intellectuallyunavailable.github.io/velemegna/images/image32.jpg',
    link: 'https://intellectuallyunavailable.github.io/velemegna/images/image32.jpg',
  },
];

export default function Farms() {
  return (
    <div className="flex flex-col gap-16 py-16">
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Sustainable Farming</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Our farming initiatives focus on sustainable agriculture and community
            development through modern farming practices.
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
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-muted-foreground mb-6">
              In the serene village of Baridabad, a thriving farm stands as a testament to sustainable agriculture and community empowerment. Dedicated to growing and harvesting a variety of fresh produce, the farm specializes in tomatoes, brinjals, and other seasonal vegetables, providing a consistent supply of nutritious and high-quality crops. This fertile land, nurtured with care and expertise, serves as a vital source of livelihood for local farmers and their families.
              The farm employs environmentally friendly practices, including the use of organic fertilizers and sustainable irrigation methods, ensuring that the produce is both healthy and eco-conscious. Beyond its role in agriculture, the farm also functions as a learning center, sharing knowledge about innovative farming techniques and crop management with the surrounding community.
              The vibrant fields of tomatoes and brinjals not only enrich the local diet but also contribute to the region’s economy. The produce is supplied to nearby markets, ensuring fresh vegetables reach the tables of families in Baridabad and beyond. Additionally, surplus harvests are donated to local initiatives, reinforcing the farm’s commitment to social responsibility.
              This farm is more than just a source of food; it is a hub of growth, providing opportunities for employment, education, and sustainability. With every harvest, it brings the promise of nourishment, empowerment, and a brighter future for the entire community.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Acres</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-muted-foreground">Farmers Trained</div>
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
              src="https://intellectuallyunavailable.github.io/velemegna/images/image3.jpg"
              alt="Sustainable farming"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <initiative.icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>{initiative.title}</CardTitle>
                    <CardDescription>{initiative.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section for 5 rounded image containers with links */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Farms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {farms.map((farm, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden"
            >
              {/* Wrap the image with an anchor tag */}
              <a href={farm.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={farm.imageUrl}
                  alt={farm.title}
                  className="w-full h-full object-cover"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
