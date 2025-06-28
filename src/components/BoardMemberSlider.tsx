import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BoardMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

interface BoardMemberSliderProps {
  members: BoardMember[];
}

export function BoardMemberSlider({ members }: BoardMemberSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const slideVariants = {
    enter: {
      x: 1000,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -1000,
      opacity: 0,
    },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
    }, 2000); // Slide every 2 seconds

    return () => clearInterval(timer);
  }, [members.length]);

  // Select the current members to display
  const currentMembers = [
    ...members.slice(currentIndex, currentIndex + itemsPerPage),
    ...members.slice(0, Math.max(0, currentIndex + itemsPerPage - members.length)),
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[400px]">
      <div className="overflow-hidden h-full">
        <div className="relative h-[300px]">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'tween', duration: 1 },
                opacity: { duration: 0.5 },
              }}
              className="absolute top-0 left-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentMembers.map((member, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white p-6"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full max-h-[200px] object-contain rounded-lg mb-4"
                  />
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.position}
                    </p>
                    <p className="mt-2 text-muted-foreground flex-grow">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
