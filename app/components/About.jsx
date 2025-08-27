'use client';

import React from "react";
import { motion } from "framer-motion";
import { Contact } from "./Contact";
import SeparatorLine from "./ui/SeparatorLine";

export const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section id="about" className="py-20 px-6 relative bg-[#f2f2f2] dark:bg-[#09090b]/50 backdrop-blur-md mx-3 rounded-lg shadow-[0_20px_207px_rgba(238,_130,_238,_0.2)]">
        <div style={{
                  width: "450px",
                  top: "100px",
                  // position: "relative" // ou absolute selon ton besoin
                }} 
                className="absolute right-[400px] z-2 h-[70px] w-[450px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-fuchsia-950 via-violet-500 to-zinc-400 blur-[150px]">
                </div>
      <div className="max-w-6xl mx-auto">
        <div
  className="mx-auto w-full max-w-lg relative flex flex-col items-center justify-center text-center overflow-visible"
>

  <h3 className="text-5xl leading-normal font-bold mb-3 text-gray-900 dark:text-white">
    Get Started Now
  </h3>

<SeparatorLine />

  <p className="mt-6 text-sm text-gray-600 dark:text-gray-300">
    Be part of millions of people around the world using modern User Interfaces.
  </p>
</div>
        <DevelopmentTimeline />
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-violet-300 dark:bg-violet-600 rounded-full"></div>

          {/* <div className="space-y-16">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={step.id} className="flex items-center justify-between relative py-10">
                 
                  <div className={`w-1/2 pr-8 ${isLeft ? "text-right" : ""}`}>
                    {isLeft && (
                      <>
                        <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-2">
                          ÉTAPE {step.id}
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-base">
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>

                  <div
                    className={`absolute top-0 ${
                      isLeft ? "left-0 ml-0 " : "right-0"
                    } w-1/2 h-0.5 opacity-70`}
                    style={{
                      borderTop: "2px dashed currentColor",
                      // transform: isLeft
                      //   ? "translateX(50%) "
                      //   : "translateX(-50%)",
                      color: "#8b5cf6",
                    }}
                  >

                  </div>

                  <div className={`absolute -top-6 ${
                      isLeft ? "left-0 ml-0 " : "right-0"
                    }`}>
                    <div className="w-10 h-10 bg-violet-600 dark:bg-violet-500 rounded-full flex items-center justify-center shadow-lg shadow-violet-200 dark:shadow-violet-800">
                      <span className="text-white font-bold">{step.id}</span>
                    </div>
                  </div>

                  <div className={`w-1/2 pl-8 ${!isLeft ? "text-left" : ""}`}>
                    {!isLeft && (
                      <>
                        <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-2">
                          ÉTAPE {step.id}
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      
      </div>

      <Contact />
    </section>
  );
};


const TimelineItem = ({ date, title, description, isLast = false }) => (
  <div className="flex items-center">
    <div className="text-gray-600 dark:text-gray-400 text-sm font-mono w-40 pr-4 py-8">
      [ {date} ]
    </div>
    <div className="w-8 h-px bg-gray-300 dark:bg-gray-700"></div>
    <div className="flex flex-1">
      <div
        className={`border-l border-t border-b border-gray-300 dark:border-gray-700 p-6 flex items-center justify-center w-20 ${isLast ? '' : 'border-b-0'}`}
      >
        <div className="p-2 bg-gray-100 dark:bg-[#0c0211] border border-gray-300 dark:border-[#27272a] w-fit rounded-full relative mb-4">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 p-2 rounded-full bg-gradient-to-tl from-slate-200 via-purple-400 to-gray-300 dark:from-slate-800 dark:via-violet-500 dark:to-zinc-400 hover:opacity-90"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`border-t border-b border-gray-300 dark:border-gray-700 p-6 flex-1 ${isLast ? '' : 'border-b-0'}`}
      >
        <div>
          <h2 className="text-gray-800 dark:text-white text-xl font-semibold mb-3">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const DevelopmentTimeline = () => {
  const timelineData = [
    {
      date: "AUG 2023",
      title: "Train the chatbot",
      description: "Train the chatbot using the data that you have collected. This will help it understand the target audience better and provide accurate recommendations."
    },
    {
      date: "SEP 2023", 
      title: "Build the app",
      description: "Build the app around the chatbot. Design the user interface, features, and functionalities that users will have."
    },
    {
      date: "NOV 2023",
      title: "Test the app", 
      description: "Test the app to ensure that it meets all requirements and provides accurate recommendations to users."
    }
  ];

  return (
   
      <div className="max-w-5xl mx-auto py-12 px-8">
        <div className="">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              isLast={index === timelineData.length - 1}
            />
          ))}
          
          <div className="flex">
            <div className="w-40 pr-4"></div>
            <div className="w-8"></div>
            <div className="flex flex-1">
              <div className="border-l border-b border-gray-700 w-20"></div>
              <div className="border-b border-gray-700 flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    
  );
};
