import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Home, BookOpen, User, Phone, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Departments", href: "/departments" },
  { label: "Admissions", href: "#admissions" },
  { label: "Research", href: "#research" },
  { label: "Placements", href: "#placements" },
  { label: "Campus Life", href: "#campus-life" },
  { label: "Alumni", href: "#alumni" },
  { label: "Contact", href: "#contact" }
];

const Header: React.FC = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Brand - Fixed Top Left */}
      {/* Brand - Fixed Top Left (Removed) */}

      {/* Floating Pill Navigation - Bottom Center on Mobile, Top Center on Desktop */}
      <div className={`fixed z-50 transition-all duration-500 ease-out left-1/2 -translate-x-1/2 w-max will-change-transform
          ${scrolled ? 'bottom-8' : 'bottom-8 lg:top-8 lg:bottom-auto'}
      `}>
        <nav className="flex items-center gap-1 p-2 bg-white/95 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-full text-sm font-bold">

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setActive(item.label)}
                className={`relative px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2
                           ${active === item.label ? 'text-white bg-primary-500 shadow-lg scale-105' : 'text-secondary-500 hover:text-primary-500 hover:bg-gray-50'}
                        `}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-primary-500 text-white rounded-full shadow-lg"
          >
            <Menu size={24} />
          </button>

          {/* CTA Button */}
          <div className="hidden lg:block pl-2 pr-1">
            <button className="w-10 h-10 bg-secondary-900 rounded-full text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <ArrowRight size={18} />
            </button>
          </div>
        </nav>
      </div>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col justify-center items-center p-8 overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 30 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bg-primary-500/10 rounded-full w-20 h-20 pointer-events-none"
            />

            <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10">
              <X size={32} strokeWidth={3} />
            </button>

            <ul className="space-y-4 text-center relative z-10 w-full max-w-lg">
              {navItems.map((item, i) => (
                <li key={item.label} className="overflow-hidden">
                  <motion.div
                    initial={{ y: 100, opacity: 0, rotate: 5 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                  >
                    <Link
                      to={item.href}
                      className="block text-4xl md:text-6xl font-black font-heading text-secondary-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-orange-400 transition-all uppercase leading-none tracking-tighter py-2"
                      onClick={() => {
                        setActive(item.label);
                        setMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;