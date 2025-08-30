'use client'

import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id='accueil' className="pt-50 pb-20 px-6 relative z-20 min-h-screen">
       <div style={{
          width: "450px",
          top: "550px",
        }} 
        className="absolute right-[400px] z-2 h-[70px] w-[450px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-fuchsia-950 via-violet-500 to-zinc-400 blur-[150px]">
        </div>
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Ouverte aux opportunités
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-900 dark:text-slate-100">
            ZOENIRINA Marie Viviane           
          </h1>
           <h2 className="text-3xl mb-6 font-bold leading-tight uppercase">
            Développeuse Fullstack
            </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passerelle entre un système défaillant et une solution efficace : là où la créativité rencontre la fonctionnalité et où l’innovation propulse le progrès.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <a
              href="https://drive.google.com/file/d/1moYCZjrSwDNyqaAQOQ220yJ-P5nkZCuO/view?usp=sharing"
              className="relative px-8 py-4 rounded-lg transition-all duration-200 font-medium text-sm bg-purple-300 hover:bg-purple-400 text-slate-900 shadow-sm text-base"
              target="_blank"
            >
              <span className="relative z-10 flex items-center gap-2">Télécharger Mon CV</span>
            </a>

            <a
              href="#contact"
              className="relative px-8 py-4 rounded-lg transition-all duration-200 font-medium text-sm border border-purple-400 dark:border-purple-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-purple-400 dark:text-purple-300 text-base"
            >
              <span className="relative z-10 flex items-center gap-2">Me Contacter</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
      {[
        { label: 'Frontend', icon: 'lucide-code' },
        { label: 'Backend', icon: 'lucide-database' },
        { label: 'Design UI/UX', icon: 'lucide-palette' },
        { label: 'Full-Stack', icon: 'lucide-globe' },
        { label: 'Database', icon: 'lucide-table' },
        { label: 'Collaboration', icon: 'lucide-users' },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-wrap max-w-[200px] items-center gap-3 bg-white dark:bg-[#251c3b]/20 hover:bg-white/20 cursor-pointer border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-lg shadow-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
        >
          {/* <div className="text-slate-600 dark:text-purple-400">
            <i className={`lucide ${item.icon} w-5 h-5`} />
          </div> */}
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {item.label}
          </span>
        </motion.div>
      ))}

        </motion.div>
      </div>
         <AnimatedIcons></AnimatedIcons>
    </section>
  );
};

const AnimatedIcons = () => {
  const horizontalMotion = {
    initial: { x: -20 },
    animate: { x: 20 },
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 4,
      ease: "easeInOut"
    }
  };

  const verticalMotion = {
    initial: { y: -20 },
    animate: { y: 20 },
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 5,
      ease: "easeInOut"
    }
  };

  return (
    <div className=" inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div {...horizontalMotion} className="absolute top-20 left-16">
        <svg width="60" height="40" viewBox="0 0 60 40" className="text-slate-600 dark:text-purple-400/40">
          <path d="M5 20 L50 5 L35 20 L50 35 L5 20 Z M35 20 L25 30" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      <motion.div {...verticalMotion} className="absolute top-1/2 left-1/4">
        <svg width="50" height="50" viewBox="0 0 50 50" className="text-slate-600 dark:text-purple-400/40">
          <circle cx="25" cy="25" r="3" fill="currentColor" />
          <ellipse cx="25" cy="25" rx="20" ry="8" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(0 25 25)" />
          <ellipse cx="25" cy="25" rx="20" ry="8" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 25 25)" />
          <ellipse cx="25" cy="25" rx="20" ry="8" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 25 25)" />
        </svg>
      </motion.div>

      <motion.div {...horizontalMotion} className="absolute top-32 right-20">
        <svg width="60" height="45" viewBox="0 0 60 45" className="text-slate-600 dark:text-purple-400/40">
          <rect x="5" y="5" width="50" height="35" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="15" r="2" fill="currentColor" />
          <circle cx="20" cy="15" r="2" fill="currentColor" />
          <circle cx="28" cy="15" r="2" fill="currentColor" />
          <path d="M12 25 L18 25 M12 30 L25 30 M12 35 L20 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      <motion.div {...verticalMotion} className="absolute bottom-32 left-20">
        <svg width="40" height="55" viewBox="0 0 40 55" className="text-slate-600 dark:text-purple-400/40">
          <path d="M20 5 C28 5 35 12 35 20 C35 25 32 29 28 32 L28 40 L12 40 L12 32 C8 29 5 25 5 20 C5 12 12 5 20 5 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M15 45 L25 45 M17 50 L23 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M20 2 L20 8 M32 8 L28 12 M38 20 L32 20 M32 32 L28 28 M8 8 L12 12 M2 20 L8 20 M8 32 L12 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      <motion.div {...horizontalMotion} className="absolute bottom-40 right-1/4">
        <svg width="50" height="50" viewBox="0 0 50 50" className="text-slate-600 dark:text-purple-400/40">
          <path d="M25 15 C30 15 35 20 35 25 C35 30 30 35 25 35 C20 35 15 30 15 25 C15 20 20 15 25 15 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M25 5 L27 12 L23 12 Z M45 25 L38 27 L38 23 Z M25 45 L23 38 L27 38 Z M5 25 L12 23 L12 27 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M37 13 L32 16 L30 12 Z M37 37 L32 34 L30 38 Z M13 37 L18 34 L20 38 Z M13 13 L18 16 L20 12 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </motion.div>

      {/* Vertical */}
      <motion.div {...verticalMotion} className="absolute top-2/3 right-16">
        <svg width="45" height="60" viewBox="0 0 45 60" className="text-slate-600 dark:text-purple-400/40">
          <ellipse cx="22.5" cy="12" rx="17" ry="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M5.5 12 L5.5 48 C5.5 52 12 55 22.5 55 C33 55 39.5 52 39.5 48 L39.5 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <ellipse cx="22.5" cy="25" rx="17" ry="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <ellipse cx="22.5" cy="38" rx="17" ry="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </motion.div>
    </div>
  );
};

// export default AnimatedIcons;

