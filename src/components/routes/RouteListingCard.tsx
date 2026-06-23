import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaShieldAlt, FaUser } from "react-icons/fa";

export interface RouteListingCardProps {
  id?: string;
  tagline?: string;
  datePeriod?: string;
  title?: string;
  operator?: string;
  images?: string[];
  travelStyle?: string;
  languages?: string[];
  climbStarts?: string;
  climbEnds?: string;
  durationText?: string;
  priceText?: string;
  priceInclusions?: string;
  onViewClimbing?: () => void;
  onCustomizeQuotes?: () => void;
}

const RouteListingCard: React.FC<RouteListingCardProps> = ({
  id = "route-card",
  tagline = "QUEST FROM THE WEST",
  datePeriod = "January – December 2026",
  title = "Quest From The West (8 Days Lemosho Route)",
  operator = "African Scenic Safaris",
  images = [
    "", // Will fall back to a beautiful SVG or gradient placeholder
    "",
    ""
  ],
  travelStyle = "Scenic Trekking, High-Altitude Adventure & Gradual Acclimatisation",
  languages = ["English"],
  climbStarts = "Moshi, Tanzania",
  climbEnds = "Moshi, Tanzania",
  durationText = "8 DAYS CLIMBING",
  priceText = "Price On Request",
  priceInclusions = "Incl Camps & Accommodations",
  onViewClimbing,
  onCustomizeQuotes,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Fallback beautiful images if array is empty or values are empty strings
  const displayImages = images.map((img, idx) => {
    if (img) return img;
    // We generate a beautiful geometric pattern/gradient or nature-themed background
    return `https://images.unsplash.com/photo-${
      idx === 0
        ? "1507525428034-b723cf961d3e" // beautiful scenic beach/nature
        : idx === 1
        ? "1464822759023-fed622ff2c3b" // mountain
        : "1506744038136-46273834b3fb" // valley
    }?auto=format&fit=crop&w=600&q=80`;
  });

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setActiveImageIndex(index);
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Top Banner Bar */}
      <div className="bg-secondary text-white px-6 py-3.5 flex items-center gap-2.5 font-bold text-xs tracking-wider uppercase border-b border-secondary-dark/20">
        <FaShieldAlt className="text-accent text-sm animate-pulse" />
        <span>{tagline}</span>
      </div>

      {/* Main Container */}
      <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Column (Details + Image) */}
        <div className="w-full lg:w-[42%] flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-grey">
              {datePeriod}
            </span>
            <h3 className="text-2xl font-extrabold text-deep-charcoal leading-tight tracking-tight group-hover:text-primary transition-colors duration-200">
              {title}
            </h3>
            
            <div className="flex items-center gap-2 mt-1 text-sm font-medium text-gray-700">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary">
                <FaUser className="text-[10px]" />
              </div>
              <span>{operator}</span>
            </div>
          </div>

          {/* Interactive Image Placeholder with Dots */}
          <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden shadow-md bg-gray-100 group/image">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageIndex}
                src={displayImages[activeImageIndex]}
                alt={`${title} - view ${activeImageIndex + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
              />
            </AnimatePresence>

            {/* Dark overlay for indicators */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

            {/* Carousel Dots Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {displayImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleDotClick(e, idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeImageIndex
                      ? "bg-accent scale-125 shadow-sm"
                      : "bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Info Grid + Pricing + Action Buttons) */}
        <div className="w-full lg:w-[58%] flex flex-col justify-between relative">
          
          {/* Top Right Duration Ribbon */}
          <div className="absolute top-0 right-0 hidden sm:block">
            <div 
              className="relative bg-deep-earth text-white text-[11px] font-extrabold pl-6 pr-4 py-2 uppercase tracking-widest rounded-r-lg shadow-sm"
              style={{ clipPath: "polygon(100% 0, 0 0, 12px 50%, 0 100%, 100% 100%)" }}
            >
              {durationText}
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mt-2 pr-0 sm:pr-36">
            
            {/* Mobile-only duration tag */}
            <div className="sm:hidden col-span-1">
              <span className="inline-block bg-deep-earth/10 text-deep-earth text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {durationText}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold text-muted-grey uppercase tracking-wider">
                Travel Style
              </span>
              <span className="text-sm font-semibold text-deep-charcoal leading-relaxed">
                {travelStyle}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold text-muted-grey uppercase tracking-wider">
                Climb Starts
              </span>
              <span className="text-sm font-semibold text-deep-charcoal leading-relaxed">
                {climbStarts}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold text-muted-grey uppercase tracking-wider">
                Languages
              </span>
              <span className="text-sm font-semibold text-deep-charcoal leading-relaxed">
                {languages.join(", ")}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold text-muted-grey uppercase tracking-wider">
                Climb Ends
              </span>
              <span className="text-sm font-semibold text-deep-charcoal leading-relaxed">
                {climbEnds}
              </span>
            </div>
          </div>

          {/* Divider line */}
          <hr className="my-6 border-gray-100" />

          {/* Bottom Row (Price & Actions) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            
            {/* Pricing Details */}
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black text-deep-charcoal tracking-tight">
                {priceText}
              </span>
              <span className="text-xs font-semibold text-muted-grey tracking-wide uppercase">
                {priceInclusions}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onViewClimbing}
                className="flex-1 sm:flex-none px-6 py-3 bg-secondary text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-secondary-dark transition-colors duration-200 cursor-pointer shadow-md shadow-secondary/10"
              >
                View Climbing
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onCustomizeQuotes}
                className="flex-1 sm:flex-none px-6 py-3 bg-primary text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors duration-200 cursor-pointer shadow-md shadow-primary/10"
              >
                Customize Quotes
              </motion.button>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default RouteListingCard;
