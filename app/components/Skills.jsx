'use client';

import Image from "next/image";
import { skillsImage } from "../data/skill-image";
import { skillsData } from "../data/skills";
import SeparatorLine from "./ui/SeparatorLine";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <div id="compétences" className="   mx-6 rounded-lg   backdrop-blur-md
      flex flex-col items-center justify-start  py-16 px-8 lg:px-24 relative
       text-gray-800
       dark:text-gray-100 overflow-hidden
    ">
  {[2000, 1500, 300, 100].map((size, index) => (
  <div
    key={index}
    className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-full z-2"
    style={{
      width: `${size + 150}px`,
      height: `${size}px`,
      backgroundColor: `rgba(142,81,255,0.1)`,
      opacity: 0.1 + index * 0.05,
      animationDelay: `${index * 100}ms`,
    }}
  />
))}

      <div className="text-center mb-12">
        <svg
          viewBox="0 0 147 148"
          fill="currentColor"
          className="size-24 mx-auto text-gray-700 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
        >
        </svg>

        <h1 className="
          text-4xl lg:text-5xl font-bold mb-4
          text-gray-800 dark:text-gray-100
        ">
          Les technologies que je maîtrise
        </h1>

 <SeparatorLine></SeparatorLine>
        <p className="
          text-lg lg:w-2/3 mx-auto
          text-gray-600 dark:text-gray-300
        ">
          Un éventail complet d’outils et de langages pour développer des applications robustes, évolutives et innovantes.
        </p>
      </div>

      <div className="relative w-full max-w-xl lg:max-w-7xl py-8 flex justify-center items-center mb-24 mt-32">
    

<SkillsPyramid></SkillsPyramid>

  
      {/* <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto">
  {(() => {
    const rows = [];
    let count = skillsData.length;
    let start = 0;
    let rowSize = Math.ceil(count / 4); // taille de la première ligne (peut ajuster)

    while (start < skillsData.length) {
      const rowItems = skillsData.slice(start, start + rowSize);
      rows.push(
        <div key={start} className="flex justify-center gap-2">
          {rowItems.map((skill, id) => (
            <CameraLensIcon key={id}>
              <div className="flex flex-col items-center justify-center gap-3 h-full">
                <div className="
                  p-3 w-24 h-24 flex items-center justify-center rounded-md shadow-md border
                  bg-white/60 backdrop-blur-md border-gray-200
                  dark:bg-white/10 dark:border-gray-500/30
                  hover:scale-105 transition-transform duration-200
                ">
                  <img
                    src={skillsImage(skill)?.src}
                    alt={skill}
                    width={36}
                    height={36}
                    className="h-full w-auto rounded-lg"
                  />
                </div>
              </div>
            </CameraLensIcon>
          ))}
        </div>
      );

      start += rowSize;
      rowSize = Math.max(rowSize - 1, 1); // réduire le nombre d'éléments par ligne
    }

    return rows;
  })()}
</div> */}

      {/* <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
        {skillsData.map((skill, id) => (
          <CameraLensIcon key={id}>
            <div className="flex flex-col items-center justify-center gap-3 h-full">
              <div className="
                p-3 w-24 h-24 flex items-center justify-center rounded-md shadow-md border
                bg-white/60 backdrop-blur-md border-gray-200
                dark:bg-white/10 dark:border-gray-500/30
                hover:scale-105 transition-transform duration-200
              ">
                <img
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  width={36}
                  height={36}
                  className="h-full w-auto rounded-lg"
                />
              </div>
            </div>
          </CameraLensIcon>
        ))}
      </div> */}

        {/* <CustomMarquee>
          {skillsData.map((skill, id) => (
            <CameraLensIcon key={id}>
              <div className="flex flex-col items-center justify-center gap-3 h-full">
                <div className="
                  p-3 size-24 flex items-center justify-center rounded-md shadow-md border
                  bg-white/60 backdrop-blur-md border-gray-200
                  dark:bg-white/10 dark:border-gray-500/30
                ">
                  <Image
                    src={skillsImage(skill)?.src}
                    alt={skill}
                    width={36}
                    height={36}
                    className="h-full w-auto rounded-lg"
                  />
                </div>
              </div>
            </CameraLensIcon>
          ))}
        </CustomMarquee> */}
      </div>

    </div>
  );
};


const SkillsPyramid = () => {
  return (
    <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto">
      {(() => {
        const rows = [];
        let start = 0;
        let rowSize = Math.ceil(skillsData.length / 4); // première ligne plus grande

        while (start < skillsData.length) {
          const rowItems = skillsData.slice(start, start + rowSize);

          rows.push(
            <div key={start} className="flex justify-center gap-2 flex-wrap">
              {rowItems.map((skill, id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (start + id) * 0.05 }}
                >
                  <CameraLensIcon>
                  <div className="flex flex-col items-center justify-center gap-3 h-full">
                    <div
                      className="
                        p-3 w-24 h-24 flex items-center justify-center rounded-md shadow-md border
                        bg-white/60 backdrop-blur-md border-gray-200
                        dark:bg-white/10 dark:border-gray-500/30
                        hover:scale-105 transition-transform duration-200
                      "
                    >
                      <img
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={36}
                        height={36}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                  </div>
                </CameraLensIcon>
                </motion.div>
              ))}
            </div>
          );

          start += rowSize;
          rowSize = Math.max(rowSize - 1, 1); // réduire progressivement les éléments par ligne
        }

        return rows;
      })()}
    </div>
  );
};

function CameraLensIcon({ children }) {
  return (
    <div className="relative p-1">
      {children}
      {/* traits dans les coins */}
      <span className="absolute -top-0.5 -left-0.5 w-4 h-4 border-t-2 border-l-2 border-gray-300 dark:border-gray-500/30 rounded-tl-md"></span>
      <span className="absolute -top-0.5 -right-0.5 w-4 h-4 border-t-2 border-r-2 border-gray-300 dark:border-gray-500/30 rounded-tr-md"></span>
      <span className="absolute -bottom-0.5 -left-0.5 w-4 h-4 border-b-2 border-l-2 border-gray-300 dark:border-gray-500/30 rounded-bl-md"></span>
      <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 border-b-2 border-r-2 border-gray-300 dark:border-gray-500/30 rounded-br-md"></span>
    </div>
  );
}


 function RotatingDot({ size = 256, dotSize = 8, circleColor = "#d1d5db", dotColor = "#d1d5db" }) {
  const circleStyle = {
    width: size,
    height: size,
    borderColor: circleColor,
  };

  const dotStyle = {
    width: dotSize,
    height: dotSize,
    top: 0,
    left: "50%",
    marginTop: -(dotSize / 2),
    marginLeft: -(dotSize / 2),
    backgroundColor: dotColor,
  };

  return (
    <div
      className="relative flex items-center justify-center animate-spin-slow"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute rounded-full border-2 "
        style={circleStyle}
      ></div>

      <div className="absolute w-full h-full">
        <div
          className="absolute rounded-full shadow-md"
          style={dotStyle}
        ></div>
      </div>
    </div>
  );
}


function CameraLens() {
  return (
    <div className="relative size-18 bg-white rounded-full border-4 border-black">
      {/* traits dans les coins */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black rounded-tl-sm"></span>
      <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black rounded-tr-sm"></span>
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-black rounded-bl-sm"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black rounded-br-sm"></span>
    </div>
  );
}



function CustomMarquee({ children, speed = 30 }) {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-2">
      <div
        className="inline-flex animate-marquee"
      >
        {children}
        {children}
      </div>

    </div>
  );
}
