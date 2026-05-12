import React from "react";
import { motion } from "motion/react";

interface RouteCardProps {
  name: string;
  duration: string;
  difficulty: string;
  description: string;
  image: string;
}

const RouteCard: React.FC<RouteCardProps> = ({
  name,
  duration,
  difficulty,
  description,
  image,
}) => {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-2xl h-[400px] w-full cursor-pointer"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-gray-300 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-md rounded-full border border-white/30">
              {duration}
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-md rounded-full border border-white/30">
              {difficulty}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-sm text-gray-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RouteCard;
