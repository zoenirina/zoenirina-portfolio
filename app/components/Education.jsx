'use client' // si tu es en app router

import React from 'react';
import { motion } from 'framer-motion';

export const Education = () => {
  return (
    <section id="articles" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Latest Articles
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Sharing my learning journey and insights about web development, programming, and technology.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[ // Articles list
            {
              date: "Jun 26, 2024",
              read: "3 min read",
              title: "The Ultimate React + TypeScript Cheatsheet: A Practical Guide for Every Developer",
              desc: "Whether you’re just starting with TypeScript in React or need a quick refresher, this cheatsheet is your go-to guide to master the essentials.",
              tags: ["Typescript", "React", "Tutorial"],
              link: "https://medium.com/@priyanshu108tiwari/the-ultimate-react-typescript-cheatsheet-a-practical-guide-for-every-developer-a2e3935c8f20"
            },
            {
              date: "Nov 28, 2024",
              read: "6 min read",
              title: "React Interview Questions You Must Know as a Web Developer (2025 Edition) Part-1",
              desc: "Walk you through the top React interview questions and answers, starting from the basics and progressing to advanced topics. By the end, you’ll have a solid understanding of what interviewers are looking for.",
              tags: ["React", "Interviews", "Questions"],
              link: "https://medium.com/@priyanshu108tiwari/react-interview-questions-you-must-know-as-a-web-developer-2025-edition-part-1-73edcc1d227d"
            }
          ].map((item, index) => (
            <motion.article
              key={index}
              className="bg-white dark:bg-slate-800 border border-slate-200  text-gray-900 
        dark:bg-gradient-to-br dark:from-[#251c3b] dark:to-[#010000] dark:border-[#27272a] dark:text-white rounded-lg p-6 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  {/* Calendar Icon */}
                  <svg className="lucide lucide-calendar w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  {item.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  {/* Clock Icon */}
                  <svg className="lucide lucide-clock w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {item.read}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{item.desc}</p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {item.tags.map((tag, i) => (
                    <div key={i} className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none text-xs border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400">
                      {tag}
                    </div>
                  ))}
                </div>
                <a href={item.link} target="blank">
                  <button className="relative px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <span className="relative z-10 flex items-center gap-2">
                      Read More
                      <svg className="lucide lucide-arrow-up-right w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Articles */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a target="blank" href="https://medium.com/@priyanshu108tiwari">
            <button className="relative px-6 py-3 rounded-lg transition-all duration-200 font-medium text-sm border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100">
              <span className="relative z-10 flex items-center gap-2">
                View All Articles
                <svg className="lucide lucide-arrow-up-right w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </span>
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

