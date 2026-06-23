import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
// import { Clock, Gauge, ArrowRight } from "lucide-react";
import { CiClock1 } from "react-icons/ci";
import { FaGauge } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

interface KilimanjaroRouteCardProps {
  id: string;
  title: string;
  duration: string;
  difficulty: string;
  description: string;
  imageSrc: string;
  features: string[];
}

const KilimanjaroRouteCard: React.FC<KilimanjaroRouteCardProps> = ({
  id,
  title,
  duration,
  difficulty,
  description,
  imageSrc,
  features,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white border border-muted-grey rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
       
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-deep-charcoal group-hover:text-earth-tone transition-colors">
            {title}
          </h3>
          <div className="flex gap-2">
            <span className="flex items-center gap-1 text-xs font-medium text-muted-grey bg-muted-grey/20 px-2 py-1 rounded-md">
              <CiClock1 size={12} /> {duration}
            </span>
            <span className="flex items-center gap-1 text-xs font-medium text-muted-grey bg-muted-grey/20 px-2 py-1 rounded-md">
              <FaGauge size={12} /> {difficulty}
            </span>
          </div>
        </div>

        <p className="text-muted-grey text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 my-2">
          {features.map((feature, index) => (
            <span
              key={index}
              className="text-[10px] uppercase tracking-wider font-semibold text-deep-charcoal/60 border border-muted-grey px-2 py-0.5 rounded"
            >
              {feature}
            </span>
          ))}
        </div>

        <button
          onClick={() => navigate(`/routes/${id}`)}
          className="mt-auto w-full py-3 px-4 bg-deep-charcoal text-white rounded-xl font-semibold flex items-center justify-center gap-2 group-hover:bg-earth-tone cursor-pointer transition-colors duration-300"
        >
          View Route Details
          <FaArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default KilimanjaroRouteCard;
