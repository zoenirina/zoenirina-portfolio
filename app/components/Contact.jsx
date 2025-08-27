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

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-slate-100"
          initial="initial"
          whileInView="whileInView"
          transition="transition"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Let's Connect
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-12"
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          I'm always excited to discuss new opportunities, collaborate on interesting projects, or just chat about technology and development.
        </motion.p>

        {/* CTA Button */}
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
            <span className="relative z-10 flex items-center gap-2">Get In Touch</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-8"
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* GitHub */}
          <a
            href="https://github.com/priyanshtiwari001"
            className="relative px-6 py-3 rounded-lg transition-all duration-200 font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 p-4"
            data-magnetic="true"
            target="_blank"
            aria-label="GitHub"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="lucide lucide-github w-5 h-5" /* ...rest omitted */ />
            </span>
          </a>

          <a
            href="https://linkedin.com/in/priyanshtiwari001"
            className="relative px-6 py-3 rounded-lg transition-all duration-200 font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 p-4"
            data-magnetic="true"
            target="_blank"
            aria-label="LinkedIn"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="lucide lucide-linkedin w-5 h-5" /* ...rest omitted */ />
            </span>
          </a>

          <a
            href="mailto:priyanshu108tiwari@gmail.com"
            className="relative px-6 py-3 rounded-lg transition-all duration-200 font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 p-4"
            data-magnetic="true"
            target="_blank"
            aria-label="Email"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="lucide lucide-mail w-5 h-5" /* ...rest omitted */ />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

// import React, { useEffect, useState } from "react";

// export const Header2 = () => {
//   const sizes = [700, 600, 500, 400, 300, 200, 100];
//   const [stars, setStars] = useState([]);

//   useEffect(() => {
//     const generated = Array.from({ length: 100 }).map(() => ({
//       width: Math.random() * 2 + 0.5,
//       height: Math.random() * 2 + 0.5,
//       top: Math.random() * 100,
//       left: Math.random() * 100,
//       duration: Math.random() * 5 + 3,
//     }));
//     setStars(generated);
//   }, []);

//   return (
//     <header className="relative bg-[#09090b] text-white min-h-screen overflow-hidden flex flex-col overflow-y-hidden">
//       <div className="absolute inset-0 z-0">
//         {sizes.map((size, index) => (
//           <div
//             key={index}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"
//             style={{
//               width: `${size +200}px`,
//               height: `${size}px`,
//               backgroundColor: `#f5f3ff`,
//               opacity: 0.05 + index * 0.05,
//               animationDelay: `${index * 100}ms`,
//             }}
//           />
//         ))}

//         {/* étoiles après montage seulement */}
//         {/* <div className="absolute inset-0 pointer-events-none z-10">
//           {stars.map((star, i) => (
//             <div
//               key={i}
//               className="absolute bg-white rounded-full opacity-75"
//               style={{
//                 width: `${star.width}px`,
//                 height: `${star.height}px`,
//                 top: `${star.top}%`,
//                 left: `${star.left}%`,
//                 animation: `twinkle ${star.duration}s infinite alternate`,
//                 filter: "blur(0.5px)",
//               }}
//             />
//           ))}
//         </div> */}
//         <motion.div
//           className="flex justify-center gap-6 mb-12"
//           initial="initial"
//           whileInView="whileInView"
//           transition={{ duration: 0.7, delay: 0.2 }}
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <a
//             href="mailto:zoenirinamarieviviane@gmail.com"
//             className="relative px-6 py-3 rounded-lg transition-all duration-200 font-medium text-sm bg-violet-300 hover:bg-violet-400 text-slate-900 shadow-sm px-8 py-4 text-base"
//             data-magnetic="true"
//           >
//             <span className="relative z-10 flex items-center gap-2">Get In Touchdd</span>
//           </a>
//         </motion.div>
//         <Timeline></Timeline>
//       </div>

//       {/* ... reste du composant ... */}
//     </header>
//   );
// };


// export const Header2 = () => {
//   const sizes = [800, 700, 600, 500, 400, 300, 200];
//   const baseColor = 'purple';
//   return (
//     <header className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white min-h-screen overflow-hidden flex flex-col">
//       {/* Background radial gradient/concentric circles */}
//       <div className="absolute inset-0 z-0">
//         {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-800 opacity-20 animate-pulse-slow"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-700 opacity-25 animate-pulse-slow delay-100"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600 opacity-30 animate-pulse-slow delay-200"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500 opacity-35 animate-pulse-slow delay-300"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-400 opacity-40 animate-pulse-slow delay-400"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-purple-300 opacity-45 animate-pulse-slow delay-500"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-purple-200 opacity-50 animate-pulse-slow delay-600"></div>
//          */}
//           {sizes.map((size, index) => (
//         <div
//           key={index}
//           className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-slow`}
//           style={{
//             width: `${size}px`,
//             height: `${size}px`,
//             backgroundColor: `var(--tw-color-${baseColor}-${800 - index * 100} , ${0.8})`, // fallback below
//             opacity: 0.2 + index * 0.05,
//             animationDelay: `${index * 100}ms`
//           }}
//         />
//       ))}
//         {/* Subtle scattered stars/dots */}
//         <div className="absolute inset-0 pointer-events-none z-10">
//           {Array.from({ length: 100 }).map((_, i) => (
//             <div
//               key={i}
//               className="absolute bg-white rounded-full opacity-75"
//               style={{
//                 width: `${Math.random() * 2 + 0.5}px`,
//                 height: `${Math.random() * 2 + 0.5}px`,
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
//                 filter: 'blur(0.5px)',
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>

//       {/* Navbar */}
//       <nav className="relative z-20 flex justify-between items-center p-6 lg:px-12 py-8">
//         <div className="flex items-center space-x-4">
//           <span className="text-2xl font-bold">MAPPETPLACE</span>
//           <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full opacity-80">
//             BETA ACCESS
//           </span>
//         </div>
//         <div className="hidden lg:flex items-center space-x-8">
//           <a href="#" className="hover:text-purple-300 transition duration-200 flex items-center">
//             Directory
//             <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//             </svg>
//           </a>
//           <a href="#" className="hover:text-purple-300 transition duration-200 flex items-center">
//             Resources
//             <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//             </svg>
//           </a>
//           <a href="#" className="hover:text-purple-300 transition duration-200 flex items-center">
//             Solutions
//             <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//             </svg>
//           </a>
//           <a href="#" className="hover:text-purple-300 transition duration-200">Blog</a>
//           <a href="#" className="hover:text-purple-300 transition duration-200">Careers</a>
//         </div>
//         {/* Mobile menu button (optional, not explicitly in image but good practice) */}
//         <div className="lg:hidden">
//           <button className="text-white focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section Content */}
//       <div className="relative z-20 flex flex-col justify-center items-start flex-grow p-6 lg:px-12 pb-24 lg:pb-0">
//         <div className="max-w-3xl text-left">
//           <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
//             The new <br />
//             <span className="text-purple-300">Marketplace</span> <br />
//             for all your apps
//           </h1>
//           <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-xl">
//             Where the best creators, designers and developers converge to innovate, collaborate and shape tomorrow's digital landscape.
//           </p>
//           <button className="bg-white text-purple-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
//             BROWSE APPS
//           </button>
//         </div>
//       </div>

//     </header>
//   );
// };
