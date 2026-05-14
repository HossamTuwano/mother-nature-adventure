import React from "react";
import { motion, AnimatePresence } from "motion/react";
import type { NavCategory } from "./types";

interface NavDropdownProps {
  title: string;
  data: NavCategory[];
  isOpen: boolean;
  onClose: () => void;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ data, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="pointer-events-auto absolute top-6 left-1/2 -translate-x-1/2 w-[95vw] max-w-7xl bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden z-50"
        >
          <div className="p-8 grid grid-cols-2 gap-x-16 gap-y-6">
            {data.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  {section.category}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, lIdx) => (
                    <motion.li key={lIdx} className="group">
                      <a
                        href={link.path}
                        className="flex items-start gap-3 p-2 rounded-lg transition-colors duration-200 group-hover:bg-gray-50"
                      >
                        <div className="shrink-0 w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={link.image || `https://via.placeholder.com/50?text=img`}
                            alt={link.label}
                            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="block font-semibold text-gray-800 group-hover:text-primary transition-colors">
                            {link.label}
                          </span>
                          <span className="block text-xs text-gray-500 leading-tight">
                            {link.description}
                          </span>
                        </div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Action Bar */}
          <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-xs text-gray-500">Need help choosing?</span>
            <a
              href="#"
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            >
              Contact Expert <span className="text-lg">→</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavDropdown;
