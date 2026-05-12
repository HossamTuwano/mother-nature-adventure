import React, { useState } from "react";
import { motion } from "motion/react";
import NavDropdown from "./NavDropdown";
import { TREKKING_DATA, MOUNT_KILI_DATA, DESTINATIONS_DATA } from "./navData";

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { id: "trekking", label: "Mount Trekking", data: TREKKING_DATA },
    { id: "kili", label: "Mount Kilimanjaro", data: MOUNT_KILI_DATA },
    { id: "destinations", label: "Destinations", data: DESTINATIONS_DATA },
  ];

  // a "Safe Zone" logic to prevent accidental closing when moving mouse to dropdown
  const handleMouseEnter = (id: string) => {
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    // a slight delay to allow user to transition to the dropdown box
    setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-primary rounded-full" />
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Nature<span className="text-primary">Adventures</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.a
                href="#"
                className={`text-sm font-medium transition-colors py-2 ${
                  activeDropdown === item.id
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {item.label}
              </motion.a>

              {/* The actual dropdown component */}
              <NavDropdown
                title={item.label}
                data={item.data}
                isOpen={activeDropdown === item.id}
                onClose={() => setActiveDropdown(null)}
              />
            </div>
          ))}
        </div>

        {/* Right side action */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-full"
          >
            Plan a Trip
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
