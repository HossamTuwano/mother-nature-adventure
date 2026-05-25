import React from "react";
import { motion } from "motion/react";
import DayTripCard from "./DayTripCard";

const CDN_URL = import.meta.env.VITE_CDN_URL;

const dayTripsData = [
  {
    title: "Hot Spring, Waterfall & Coffee Farm Tour",
    duration: "8 - 13 hours",
    rating: "4.8 (90)",
    price: "From $65",
    image: `${CDN_URL}/src/assets/img/chemka.jpg`,
    tags: ["Top Pick", "Pickup Available"],
  },
  {
    title: "Materuni Waterfalls & Coffee Tour",
    duration: "7.5 hours",
    rating: "4.8 (53)",
    price: "From $40",
    image: `${CDN_URL}/src/assets/img/materuni.jpg`,
    tags: ["Private Option", "Nature"],
  },
  {
    title: "Mount Kilimanjaro Day Hike - Marangu",
    duration: "10 hours",
    rating: "4.7 (120)",
    price: "From $180",
    image: `${CDN_URL}/src/assets/img/kili-day.JPG`,
    tags: ["Private Group", "Adventure"],
  },
  {
    title: "Moshi City Tour & Local Markets",
    duration: "3 hours",
    rating: "5.0 (1)",
    price: "From $22",
    image: `${CDN_URL}/src/assets/img/moshi.jpg`,
    tags: ["Culture", "City"],
  },
  {
    title: "Ngorongoro Crater Full Game Drive",
    duration: "1 day",
    rating: "5.0 (2)",
    price: "From $105",
    image:
      `${CDN_URL}/src/assets/img/ngorongoro.jpg`,
    tags: ["Wildlife", "Safari"],
  },
  {
    title: "Maasai Boma Cultural Experience",
    duration: "7 - 10 hours",
    rating: "4.7 (17)",
    price: "From $90",
    image: `${CDN_URL}/src/assets/img/boma.jpg`,
    tags: ["Cultural", "Private"],
  },
];

const DayTrips: React.FC = () => {
  return (
    <section className="py-24 px-6 w-full bg-white relative overflow-hidden">
      {/* The 'Surprise' Element: Subtle floating organic shapes in the background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50/50 -z-10 rounded-l-[100px] translate-x-1/4 rotate-12 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100/30 -z-10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-primary font-bold uppercase tracking-widest text-sm mb-3"
            >
              Quick Getaways
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900"
            >
              Breathtaking Day Trips
            </motion.h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-[#8e6343] transition-all shadow-lg"
          >
            Explore All Trips
          </motion.button>
        </div>

        {/* Day Trip Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {dayTripsData.map((trip, index) => (
            <DayTripCard key={index} {...trip} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayTrips;
