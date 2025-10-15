'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiCode, HiMenu, HiX, HiSparkles } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-text ${
        scrolled
          ? 'glass-dark shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full mx-auto px-32 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4 nav-text">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <HiCode className="w-10 h-10 text-indigo-400" />
              <HiSparkles className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 animate-pulse" />
            </motion.div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">
              Agence Web Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {[
              { href: '/', label: 'Accueil' },
              { href: '/nos-prestations', label: 'Nos Prestations' },
              { href: '/a-propos', label: 'À propos' },
              { href: '/les-avantages-du-clavier-mecanique-de-gaming', label: 'Oxelya' },
            ].map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-100 hover:text-indigo-400 font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-dark border-t border-gray-700"
          >
            <ul className="px-4 py-4 space-y-3">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/nos-prestations', label: 'Nos Prestations' },
                { href: '/a-propos', label: 'À propos' }
              ].map((item) => (
                <motion.li
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-100 hover:text-indigo-400 font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-all"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
