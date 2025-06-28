import { motion } from 'framer-motion';
import { Book, Heart, Home, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const programs = [
  {
    icon: Book,
    title: 'Education',
    description: 'Quality education and academic support.',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Regular health check-ups and medical care.',
  },
  {
    icon: Users,
    title: 'Life Skills',
    description: 'Training in essential life skills.',
  },
  {
    icon: Home,
    title: 'Safe Environment',
    description: 'Secure and nurturing living space.',
  },
];

// Add an images array for the gallery section
const galleryImages = [
  "/newsletters/childrens home/1.jpeg",
  "/newsletters/childrens home/2.jpeg",
  "/newsletters/childrens home/3.jpeg",
  "/newsletters/childrens home/4.jpeg",
  "/newsletters/childrens home/5.jpeg",
  "/newsletters/childrens home/6.jpeg",
  "/newsletters/childrens home/7.jpeg",
  "/newsletters/childrens home/8.jpeg",
  "/newsletters/childrens home/10.jpeg",
  "/newsletters/childrens home/11.jpeg",
  "/newsletters/childrens home/12.jpeg"
];

export default function ChildrensHome() {
  return (
    <div className="flex flex-col gap-16 py-16">
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Children's Home</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Providing a nurturing environment for underprivileged children,
            focusing on their education, health, and overall development.
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
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Navjeevan Children's Home, established in 2008 by Dr. Sybil Salins, was born out of a heartfelt desire to provide a better future for children from marginalized backgrounds. Dr. Salins was deeply moved when she discovered that many children of leprosy-affected families were begging instead of attending school, lacked proper nutrition, and were living in unhealthy environments. Inspired by her parents' vision and a commitment to the well-being of these children, she took action to ensure they received care, support, and education.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden h-[400px]"
          >
            <img
              src="/newsletters/childrens home/9.jpeg"
              alt="Children playing"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        {/* New paragraph below the image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Navjeevan Children's Home is a safe haven for orphans, children of single parents, the destitute, HIV-affected children, the handicapped, and others in need. Registered under Reg. No. KA040005V514, the home currently supports 41 children, all of whom attend school and thrive in a nurturing and healthy environment. To provide holistic care, the home is staffed with two caretakers, one teacher, one warden, two cooks, and one driver. A doctor regularly conducts health check-ups, ensuring the well-being of every child. The children are provided with three nutritious meals a day, along with books, uniforms (two sets each), casual clothing, and undergarments. They also enjoy opportunities for indoor and outdoor recreation, including play facilities and training in crafts and hobbies.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            At Navjeevan, every effort is made to meet the children's basic needs while empowering them through education and personal development. The love and affection they receive mirror the care of a family, building their confidence and helping them grow physically and emotionally. Each child is encouraged to dream big and is equipped with the tools to become a productive and compassionate citizen of India. The children attend school daily with excitement, knowing they are supported by a dedicated team that prioritizes their safety and well-being. The warden and staff take special care to nurture their growth, ensuring they develop into empathetic individuals who will contribute positively to their communities.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <program.icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Image Gallery Section */}
      <section className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-72 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Children's Home Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Large Images Section */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://intellectuallyunavailable.github.io/velemegna/images/image28.jpg"
              alt="Children and Caregivers"
              className="w-full h-96 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://intellectuallyunavailable.github.io/velemegna/images/image55.jpg"
              alt="Children playing games"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
  