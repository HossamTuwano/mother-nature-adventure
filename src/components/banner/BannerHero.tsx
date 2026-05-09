import { motion } from "motion/react";

const BannerHero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-deep-charcoal font-sans max-w-4xl mx-auto px-4 bg-[url(../../assets/img/banner.png)] bg-cover bg-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold mb-5 leading-tight uppercase"
      >
        Experience the <br /> Wild Side of Nature
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-lg text-gray-600 mb-10 font-light leading-relaxed max-w-2xl"
      >
        Discover the breathtaking beauty of untouched landscapes and encounter
        wildlife in their natural habitat.
      </motion.p>
    </div>
  );
};

export default BannerHero;
