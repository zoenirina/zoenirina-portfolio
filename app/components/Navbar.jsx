'use client';

import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
import ThemeSwitch from './ui/ThemeSwitch';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInLeft = { 
    initial: { opacity: 0, x: -20 }, 
    animate: { opacity: 1, x: 0 }, 
    transition: { duration: 0.6 } 
  };
  
  const fadeInRight = { 
    initial: { opacity: 0, x: 20 }, 
    animate: { opacity: 1, x: 0 }, 
    transition: { duration: 0.6 } 
  };
  
  const fadeInUp = { 
    initial: { opacity: 0, y: -20 }, 
    animate: { opacity: 1, y: 0 }, 
    transition: { duration: 0.6 } 
  };

  const navItems = ['Accueil','Services','Compétences', 'Projets', 'Contact'];

  // Hook scroll
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Animation variants pour le menu mobile
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const hamburgerLineVariants = {
    closed: {
      rotate: 0,
      y: 0
    },
    open: {
      rotate: 45,
      y: 0
    }
  };

  const handleNavClick = (label) => {
    const target = document.getElementById(label.toLowerCase());
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Fermer le menu mobile après clic
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 bg-slate-50/95 dark:bg-[#09090b]/80 backdrop-blur-sm dark:backdrop-blur-lg border-b border-slate-200 dark:border-[#45214d]/30"
        aria-label="Navigation principale"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div {...fadeInLeft}>
             <div className="text-2xl font-bold mb-4">
              <span className="text-fuchsia-500">Z. </span>
              <span className="text-white">Marie Viviane</span>
            </div>
            {/* <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100 boujee-text">
              Bonjour !
            </h1> */}
          </motion.div>

          <div className="flex items-center gap-x-4">
            {/* Menu desktop */}
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
                    onClick={() => handleNavClick(label)}
                    className="cursor-pointer text-sm tracking-wide font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                    data-magnetic="true"
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Theme Switch */}
            <motion.div {...fadeInRight}>
              <ThemeSwitch />
            </motion.div>

            {/* Hamburger Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="relative w-6 h-6"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
</svg>

                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>

                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Barre de progression */}
        <motion.div
          className="h-[1px] dark:block hidden bg-gradient-to-r from-[#45214d]/30 via-purple-400/40 to-[#45214d]/40 origin-left"
          style={{ scaleX }}
        />
      </nav>

      {/* Menu Mobile Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Mobile */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-[73px] left-4 right-4 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-lg border border-slate-200 dark:border-[#45214d]/30 rounded-lg shadow-xl z-30 md:hidden"
            >
              <div className="p-6">
                <motion.ul className="space-y-4">
                  {navItems.map((label, i) => (
                    <motion.li
                      key={label}
                      variants={mobileMenuItemVariants}
                    >
                      <button
                        onClick={() => handleNavClick(label)}
                        className="block w-full text-left py-3 px-4 text-base font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                      >
                        {label}
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

// 'use client';

// import React from 'react';
// import { motion, useScroll, useSpring } from 'framer-motion';
// import ThemeSwitch from './ui/ThemeSwitch';

// const Navbar = () => {
//   const fadeInLeft = { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } };
//   const fadeInRight = { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } };
//   const fadeInUp = { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

//   const navItems = ['Accueil','Services','Compétences', 'Projets', 'Contact'];

//   // hook scroll
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <nav
//       className="fixed top-0 left-0 right-0 z-40 bg-slate-50/95 dark:bg-[#09090b]/80 backdrop-blur-sm dark:backdrop-blur-lg border-b border-slate-200 dark:border-[#45214d]/30"
//       aria-label="Navigation principale"
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <motion.div {...fadeInLeft}>
//           <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100 boujee-text">
//             Bonjour !
//           </h1>
//         </motion.div>

//         <div className="flex items-center gap-x-12">
//           <ul className="hidden md:flex space-x-6 md:space-x-12">
//             {navItems.map((label, i) => (
//               <motion.li
//                 key={label}
//                 initial="initial"
//                 animate="animate"
//                 transition={{ duration: 0.4, delay: 0.1 * i }}
//                 variants={fadeInUp}
//               >
//                 <button
//                   onClick={(e) => {
//                     e.preventDefault();
//                     const target = document.getElementById(label.toLowerCase());
//                     if (target) {
//                       target.scrollIntoView({ behavior: "smooth", block: "start" });
//                     }
//                   }}
//                   className="cursor-pointer text-sm tracking-wide font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
//                   data-magnetic="true"
//                 >
//                   {label}
//                 </button>
//               </motion.li>
//             ))}
//           </ul>

//           <motion.div {...fadeInRight}>
//             <ThemeSwitch />
//           </motion.div>
//         </div>
//       </div>

//       {/* Barre de progression */}
//       <motion.div
//         className="h-[1px] dark:block hidden  bg-gradient-to-r from-[#45214d]/30 via-purple-400/40 to-[#45214d]/40 origin-left"
//         style={{ scaleX }}
//       />
//     </nav>
//   );
// };

// export default Navbar;
