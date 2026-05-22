import React from "react";
import { motion } from "motion/react";
import { FaClock, FaStar, FaArrowRight } from "react-icons/fa";

interface DayTripCardProps {
  title: string;
  duration: string;
  rating: string;
  price: string;
  image: string;
  tags: string[];
  index: number;
}

const DayTripCard: React.FC<DayTripCardProps> = ({
  title,
  duration,
  rating,
  price,
  image,
  tags,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <motion.div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-gray-800 rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 z-20 bg-primary text-white px-3 py-1 rounded-lg font-bold text-sm shadow-lg">
          {price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-1">
            <FaClock

            // className="text-[#a57650]"
            />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaStar

            // className="text-yellow-500"
            />
            <span>{rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-1">
          {title}
        </h3>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm font-semibold text-gray-600">
            Explore More
          </span>
          <motion.div
            whileHover={{ x: 5 }}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300 cursor-pointer"
          >
            <FaArrowRight size="small" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DayTripCard;
