import { motion } from "motion/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaArrowLeft,
} from "react-icons/fa";

const Footer = () => {
  const CDN_URL = import.meta.env.VITE_CDN_URL;
  return (
    <footer className="relative w-full bg-[#1a2f23] text-gray-300 overflow-hidden pt-20 pb-10">
      {/* The Surprise: Animated "Topographic" Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 100 C 20 80, 30 90, 50 70 S 80 60, 100 80 V 100 H 0 Z"
            fill="#4ade80"
            initial={{ opacity: 0.2, scale: 1 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
              y: [0, -10, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 100 C 10 70, 40 80, 60 60 S 90 40, 100 60 V 100 H 0 Z"
            fill="#22c55e"
            initial={{ opacity: 0.1, scale: 1 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-deep-earth rounded-full">
                <img
                  src={`${CDN_URL}/src/assets/logo.png`}
                  className="w-full h-full rounded-full"
                  alt="Logo"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Mother Nature <span className="text-primary">Adventures</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Curating life-changing expeditions to the roof of Africa. We blend
              luxury, sustainability, and raw adventure into one seamless
              journey.
            </p>
            <div className="flex gap-4 pt-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -3, color: "#4ade80" }}
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 transition-colors"
                  >
                    <Icon size={16} />
                  </motion.a>
                ),
              )}
            </div>
          </div>

          {/* Unique Navigation Architecture */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-4">
                Expeditions
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Kilimanjaro Routes",
                  "Day Trips",
                  "Safari Packages",
                  "Cultural Tours",
                ].map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "#4ade80" }}
                      className="block transition-colors hover:text-green-400"
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-4">
                Support
              </h4>
              <ul className="space-y-3 text-sm">
                {["FAQ", "Booking Policy", "Contact Us", "Privacy"].map(
                  (item) => (
                    <li key={item}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 5, color: "#4ade80" }}
                        className="block transition-colors hover:text-green-400"
                      >
                        {item}
                      </motion.a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* The "Call to Action" Hero Area */}
          <div className="lg:col-span-4 relative group">
            <div className="absolute -inset-1 bg-linear-to-br from-green-500 to-emerald-700 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#243d2f] p-8 rounded-3xl border border-green-900/50">
              <h4 className="text-white font-bold text-xl mb-3">
                Ready for the peak?
              </h4>
              <p className="text-gray-400 text-sm mb-6">
                Join 5,000+ explorers who have conquered the summit with us.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-[#8e6343] transition-all shadow-xl flex items-center justify-center gap-2"
              >
                Plan Your Trip <FaArrowLeft />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Mother Nature Adventures. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
