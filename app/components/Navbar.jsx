'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ThemeSwitch from './ui/ThemeSwitch';

const Navbar = () => {
  const fadeInLeft = { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } };
  const fadeInRight = { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } };
  const fadeInUp = { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

  const navItems = ['Services','Compétences', 'Projets', 'Contact'];

  // hook scroll
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 bg-slate-50/95 dark:bg-[#09090b]/80 backdrop-blur-sm dark:backdrop-blur-lg border-b border-slate-200 dark:border-[#45214d]/30"
      aria-label="Navigation principale"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div {...fadeInLeft}>
          <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100 boujee-text">
            Bonjour !
          </h1>
        </motion.div>

        <div className="flex items-center gap-x-12">
          <ul className="hidden md:flex space-x-6 md:space-x-12">
            {navItems.map((label, i) => (
              <motion.li
                key={label}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.4, delay: 0.1 * i }}
                variants={fadeInUp}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(label.toLowerCase());
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="cursor-pointer text-sm tracking-wide font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  data-magnetic="true"
                >
                  {label}
                </button>
              </motion.li>
            ))}
          </ul>

          <motion.div {...fadeInRight}>
            <ThemeSwitch />
          </motion.div>
        </div>
      </div>

      {/* Barre de progression */}
      <motion.div
        className="h-[1px] dark:block hidden  bg-gradient-to-r from-[#45214d]/30 via-purple-400/40 to-[#45214d]/40 origin-left"
        style={{ scaleX }}
      />
    </nav>
  );
};

export default Navbar;
