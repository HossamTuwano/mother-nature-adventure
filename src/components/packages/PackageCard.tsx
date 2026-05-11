import React from "react";
import { motion } from "motion/react";
import Button from "../ui/Button";

interface PackageCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  image: string;
}

const PackageCard = ({ title, description, price, features, image }: PackageCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
    >
      {/* Image with bg-cover for proper fitting */}
      <div 
        className="h-64 w-full bg-cover bg-center" 
        style={{ backgroundImage: `url(${image})` }}
      />
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-deep-charcoal mb-2">{title}</h3>
        <p className="text-muted-grey text-sm mb-4 flex-grow">{description}</p>
        
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
              <span className="text-primary">✓</span> {feature}
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-muted-grey uppercase font-semibold">Starting from</span>
            <span className="text-2xl font-bold text-primary">${price}</span>
          </div>
          <Button text="View Details" variant="outline" />
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
