import React from "react";
import { motion } from "motion/react";
import {
  FaShieldAlt,
  FaHiking,
  FaLeaf,
  FaHeadset, FaWhatsapp
} from "react-icons/fa";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white border-2 border-[#c5c8b8]  p-8 relative group overflow-hidden transition-colors duration-300 hover:border-green-600"
    >
      <div className="text-primary text-3xl mb-6 group-hover:text-green-600 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const WhyChooseUs: React.FC = () => {
  const leftFeatures = [
    {
      icon: <FaShieldAlt />,
      title: "Certified Guides",
      description:
        "Our guides are professionally certified and have years of experience navigating the slopes of Kilimanjaro safely.",
    },
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly Tours",
      description:
        "We are committed to sustainability, using zero-waste practices to protect the fragile mountain ecosystem.",
    },
  ];

  const rightFeatures = [
    {
      icon: <FaHiking />,
      title: "Tailored Itineraries",
      description:
        "We offer flexible packages designed for different fitness levels and budgets, ensuring an inclusive adventure.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description:
        "From the moment you book until you return home, our dedicated team is available to assist you every step of the way.",
    },
  ];

  return (
    <section className="py-20 px-6 w-full bg-[#f0f2ed] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-[#8b5a2b] font-bold text-xs uppercase tracking-widest mb-3"
          >
            <span className="text-lg">❋</span> Why Choose Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Why we're different
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed"
          >
            We don't just provide tours; we curate life-changing experiences.
            Our dedication to safety, sustainability, and personal growth makes
            us the preferred partner for Kilimanjaro climbers.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feat, idx) => (
              <FeatureCard key={idx} {...feat} index={idx} />
            ))}
          </div>

          {/* Center Column: The Anchor Image */}
          <div className="relative h-full max-h-[480px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="h-full w-full overflow-hidden"
            >
              <img
                src="/src/assets/img/why-choose-us.jpg"
                alt="Adventure Explorer"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feat, idx) => (
              <FeatureCard key={idx} {...feat} index={idx + 2} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp FAB */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white px-5 py-3 rounded-full flex items-center gap-3 cursor-pointer shadow-2xl hover:bg-[#1ebd57] transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp />
        <span className="font-semibold text-sm">WhatsApp Us</span>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
