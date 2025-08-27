// components/Header.jsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeSwitch from './ui/ThemeSwitch';

const Header = () => {

  const fadeInLeft = { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } };
  const fadeInRight = { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } };
  const fadeInUp = { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

  return (
    
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-50/95 dark:bg-[#09090b]/50 backdrop-blur-sm dark:backdrop-blur-lg border-b border-slate-200 dark:border-[#45214d]/30">
 
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div className="font-semibold text-slate-900 dark:text-slate-100" {...fadeInLeft}>
          Bonjour !
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          {['Work', 'Articles', 'About', 'Contact'].map((label, i) => (
            <motion.a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              data-magnetic="true"
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, delay: 0.1 * i }}
              variants={fadeInUp}
            >
              {label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeSwitch/>

        </div>
      </div>
    </header>
  );
};

export default Header;
