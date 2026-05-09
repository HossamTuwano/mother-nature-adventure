import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../assets/logo.png";

const BannerHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", active: true },
    { name: "Safaris", active: false },
    { name: "Mount Trekking", active: false, hasDropdown: true },
    { name: "Destinations", active: false, hasDropdown: true },
    { name: "Zanzibar", active: false },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 py-5 z-10">
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          href="/"
        >
          <div className="w-16 h-10">
            <img src={logo} alt="Logo" className="w-full h-full" />
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center font-sans">
          <div className="flex items-center gap-2 mr-10"></div >

          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              href="#"
              className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                link.active
                  ? "text-earth-tone"
                  : "text-muted-grey hover:text-earth-tone"
              }`}
            >
              {link.name}
              {link.hasDropdown && <span className="text-[10px]">▼</span>}
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-muted-grey text-muted-grey px-5 py-2 cursor-pointer rounded text-sm hover:bg-muted-grey hover:text-white transition-all"
          >
            Contact Us
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-muted-grey hover:text-earth-tone transition-colors"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col items-center py-6 gap-6 md:hidden overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                    link.active
                      ? "text-earth-tone"
                      : "text-muted-grey hover:text-earth-tone"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <span className="text-[10px]">▼</span>}
                </a>
              ))}
              <button className="bg-transparent border border la-muted-grey text-muted-grey px-5 py-2 cursor-pointer rounded text-sm hover:bg-muted-grey hover:text-white transition-all">
                Contact Us
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default BannerHeader;
