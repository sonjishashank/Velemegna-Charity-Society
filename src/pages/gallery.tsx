import { motion } from 'framer-motion';

const images = [
  {
    url: 'newsletters/1.jpeg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Hospital Staff",
    description: 'State-of-the-art medical equipment',
  },
  {
    url: 'newsletters/4.jpeg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Free Camp Patient's",
    description: 'State-of-the-art medical equipment',
  },
  {
    url: 'newsletters/3.jpeg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: 'World Glaucoma Week Awarness',
    description: 'State-of-the-art medical equipment',
  },
  {
    url: 'newsletters/2.jpeg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: 'World Glaucoma Week Awarness',
    description: 'State-of-the-art medical equipment',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image24.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: 'Vision Center Staff Training',
    description: 'State-of-the-art medical equipment',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image54.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: 'Stake Holder Honouring',
    description: 'Dedicated medical professionals',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image53.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: 'Stake Holder Honouring',
    description: 'Reaching out to those in need',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image52.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "In Patient Care",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image51.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Vision Center Staff",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image50.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Eye Donation Awareness",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image49.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "College's Ceremoney",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image48.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Seva Partener's Meeting",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image47.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Asha Worker's Training",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image46.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "World Disability Day Celebration",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image45.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Pediatric Eye Care",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image44.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Christmas Celebration With Staff",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image43.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Sandeep Salin's Birthday Celebration",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image42.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Dr. Tibo Felicitation",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image41.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Lift Inaguration",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image40.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Vineet's Birthday Celebration",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image39.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Dr. Sybil's Family",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image38.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Pediatric Eye Care",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image37.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Women's Day Celebration",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image36.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Women's Day Celebration",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image35.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Vision Centre Opening, Humnabad",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image34.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "World Sight Day Rally",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image32.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Baridabad Farm",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image31.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Santhpur Vision Centre Opening",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image30.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "SS College of Optometry Graduation",
    description: 'Nurturing young lives',
  },
  {
    url: 'https://intellectuallyunavailable.github.io/velemegna/images/image29.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
    title: "Chincholi Vision Centre Opening",
    description: 'Nurturing young lives',
  },
  // {
  //   url: 'https://intellectuallyunavailable.github.io/velemegna/images/image53.jpg?auto=format&fit=crop&q=80&w=1200&h=600',
  //   title: "Children's Home",
  //   description: 'Nurturing young lives',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200&h=600',
  //   title: "Children's Home",
  //   description: 'Nurturing young lives',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200&h=600',
  //   title: "Children's Home",
  //   description: 'Nurturing young lives',
  // },
  // {
  //   url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200&h=600',
  //   title: 'Sustainable Farming',
  //   description: 'Growing together',
  // },
];

const videoUrls = [
  'https://www.youtube.com/embed/TudpWX2dpBc?si=GFnerqFecdsBFT2z', // Replace with your video links
  'https://www.youtube.com/embed/EYrudjfkDk8?si=bUyTodU5tNhGP2u5',
  'https://www.youtube.com/embed/Tui_LdIniXA?si=ouhocGM6bmGT6hT8',
  'https://www.youtube.com/embed/gS_F02jkzFc?si=VQxPiKjepobxyFB_',
];

export default function Gallery() {
  return (
    <div className="flex flex-col gap-16 py-16">
      {/* Gallery Header */}
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-primary/80 italic mb-4">
            Restoring Sight, Transforming Lives
          </p>
          <p className="text-lg text-muted-foreground">
            Journey through our moments of care, compassion, and community service.
          </p>
        </motion.div>
      </section>

      {/* Large Video Container */}
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/NJYVGIPZ5iI?si=PE41Zr1hovMPyFfT" // Replace with your video link
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Small Video Containers */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videoUrls.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <iframe
                src={url}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Grid */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-lg overflow-hidden group"
            >
              <img
                src={image.url}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover 
                transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  {/* <p>{image.description}</p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
