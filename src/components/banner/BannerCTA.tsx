import { motion } from "motion/react";

const BannerCTA = () => {
  return (
    <div className="flex gap-5 justify-center font-sans">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="bg-primary text-white px-9 py-4 text-base font-semibold cursor-pointer rounded hover:bg-primary-dark transition-all"
      >
        Plan Trip
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="bg-secondary text-white px-9 py-4 text-base font-semibold cursor-pointer rounded hover:bg-secondary-dark transition-all"
      >
        Explore More
      </motion.button>
    </div>
  );
};

export default BannerCTA;
