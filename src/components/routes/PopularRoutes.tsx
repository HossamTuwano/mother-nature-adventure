import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import RouteCard from "./RouteCard";

const CDN_URL = import.meta.env.VITE_CDN_URL;

const routesData = [
  {
    name: "Machame Route",
    duration: "7 Days",
    difficulty: "Hard",
    description:
      "The most popular route, offering stunning scenery and a good climb rate for acclimatization.",
    image: `${CDN_URL}/src/assets/img/kili-1.jpg`,
  },
  {
    name: "Marangu Route",
    duration: "5-6 Days",
    difficulty: "Moderate",
    description:
      "The only route with hut accommodations, making it a more comfortable experience.",
    image: `${CDN_URL}/src/assets/img/kili-2.jpg`,
  },
  {
    name: "Lemosho Route",
    duration: "8 Days",
    difficulty: "Moderate",
    description:
      "A more scenic and remote route, providing a gradual ascent for better acclimatization.",
    image: `${CDN_URL}/src/assets/img/kili-3.jpg`,
  },
];

const PopularRoutes: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-20 px-6 w-full overflow-hidden">
      {/* Background Pattern Container */}
      <div
        className="absolute inset-0 -z-10 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${CDN_URL}/src/assets/img/popular-kili-routes-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Kilimanjaro Routes
            </h2>
            <p className="text-gray-600 text-lg">
              Explore the most iconic paths to the roof of Africa. Each route
              offers a unique challenge and breathtaking vistas.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate("/routes");
            }}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-[#8e6343] transition-colors shadow-lg"
          >
            View All Routes
          </motion.button>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {routesData.map((route, index) => (
            <motion.div
              key={route.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <RouteCard {...route} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
