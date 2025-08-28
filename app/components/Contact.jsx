"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Timeline } from "./About";

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };
  
export const Contact = () => {


  return (
    <section id="contact" className="py-20 relative  min-h-[400px] bg-[#e1d0f7] dark:bg-[#9473cb] border border-gray-300 dark:border-gray-950/40  overflow-hidden m-6 rounded-lg">
      <div className="flex justify-between items-center w-full absolute my-auto ">
        <svg
          width="275"
          height="322"
          viewBox="0 0 275 322"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M92.3511 87.5C92.3511 95.5081 85.8592 102 77.8511 102H-4.57764e-05V73H77.8511C85.8592 73 92.3511 79.4919 92.3511 87.5V87.5Z" fill="rgba(255,255,255,0.6)" />
          <path d="M274.685 307.5C274.685 315.508 268.194 322 260.185 322H3.05176e-05V293H260.185C268.194 293 274.685 299.492 274.685 307.5V307.5Z" fill="rgba(255,255,255,0.5)" />
          <path d="M176.02 219.5C176.02 227.508 169.528 234 161.52 234H-1.52588e-05V205H161.52C169.528 205 176.02 211.492 176.02 219.5V219.5Z" fill="rgba(255,255,255,0.5)" />
          <path d="M122 14.5C122 22.5081 115.508 29 107.5 29H0V0H107.5C115.508 0 122 6.49187 122 14.5V14.5Z" fill="rgba(255,255,255,0.4)" />
          <rect x="242" y="29" width="108" height="29" rx="14.5" transform="rotate(180 242 29)" fill="rgba(255,255,255,0.3)" />
          <rect x="99.4551" y="168" width="60.7781" height="29" rx="14.5" transform="rotate(180 99.4551 168)" fill="rgba(255,255,255,0.3)" />
          <path d="M26.837 153.5C26.837 161.508 20.3452 168 12.337 168H-4.19617e-05V139H12.337C20.3452 139 26.837 145.492 26.837 153.5V153.5Z" fill="rgba(255,255,255,0.3)" />
        </svg>

        <svg
          width="247"
          height="313"
          viewBox="0 0 247 313"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M129.675 93.5C129.675 85.4919 136.167 79 144.175 79H247V108H144.175C136.167 108 129.675 101.508 129.675 93.5V93.5Z" fill="rgba(255,255,255,0.5)" />
          <path d="M0 14.5C0 6.49187 6.49187 0 14.5 0H247V29H14.5C6.49187 29 0 22.5081 0 14.5V14.5Z" fill="rgba(255,255,255,0.6)" />
          <path d="M59.4344 166.5C59.4344 158.492 65.9263 152 73.9344 152H247V181H73.9344C65.9263 181 59.4344 174.508 59.4344 166.5V166.5Z" fill="rgba(255,255,255,0.4)" />
          <path d="M34.7344 298.5C34.7344 290.492 41.2262 284 49.2344 284H247V313H49.2344C41.2262 313 34.7344 306.508 34.7344 298.5V298.5Z" fill="rgba(255,255,255,0.5)" />
          <rect x="139.709" y="218" width="59.4344" height="29" rx="14.5" fill="rgba(255,255,255,0.3)" />
          <path d="M210.722 232.5C210.722 224.492 217.214 218 225.222 218H247V247H225.222C217.214 247 210.722 240.508 210.722 232.5V232.5Z" fill="rgba(255,255,255,0.3)" />
        </svg>
      </div>   
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-white"
          initial="initial"
          whileInView="whileInView"
          transition="transition"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Travaillons ensemble dès aujourd’hui
        </motion.h2>

        <motion.p
          className="text-lg text-purple-50 max-w-2xl mx-auto mb-12"
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
         Ouverte aux opportunités et collaborations, je serais ravie d’échanger sur vos idées et vos projets.
        </motion.p>
        <motion.div 
          className="flex justify-center gap-6 mb-12  z-10 "
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <a
            href="mailto:zoenirinamarieviviane@gmail.com"
            className="relative px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-200 font-medium text-sm bg-violet-300 hover:bg-violet-400 text-slate-900 shadow-sm text-base"
            data-magnetic="true"
          >
            <span className="relative z-10 flex items-center gap-2">Me Contacter</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};