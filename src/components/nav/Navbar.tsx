import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import NavDropdown from "./NavDropdown";
import { TREKKING_DATA, MOUNT_KILI_DATA, DESTINATIONS_DATA } from "./navData";
import logo from "../../assets/logo.png";


const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "trekking", label: "Mount Trekking", data: TREKKING_DATA },
    { id: "kili", label: "Mount Kilimanjaro", data: MOUNT_KILI_DATA },
    { id: "destinations", label: "Destinations", data: DESTINATIONS_DATA },
  ];

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(255, 255, 255, 0.8)",
        boxShadow: isScrolled
          ? "0 4px 20px rgba(0,0,0,0.05)"
          : "0 0 0 rgba(0,0,0,0)",
        paddingTop: isScrolled ? "12px" : "16px",
        paddingBottom: isScrolled ? "12px" : "16px",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-100 px-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <div
          onClick={() => {
            navigate("/");
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-16 h-10 rounded-full">
              <img src={logo} className="w-full h-full rounded-full"></img>
          </div>
        </div>

        {/* Nav Links Wrapper */}
        <div
          className="hidden md:flex items-center gap-8"
          onMouseLeave={handleMouseLeave}
        >
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
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

        {/* THE MEGA MENU */}
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <NavDropdown
            data={
              navItems.find((item) => item.id === activeDropdown)?.data || []
            }
            isOpen={activeDropdown !== null}
            onClose={() => setActiveDropdown(null)}
            title={""}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
