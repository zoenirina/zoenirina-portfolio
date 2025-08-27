'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WorkCard from './card/WorkCard';
import { workData } from '../data/WorkData';
import MarketCard from './card/MarketCard';
import SeparatorLine from './ui/SeparatorLine';

const projects = [
  {
    id: '01',
    year: '2025',
    title: 'Expense Tracker',
    description:
      'A scalable and modern expense tracker application with authentication, caching, job processing, and analytics using Redis, RabbitMQ, MongoDB, and React.',
    tech: ['React.js', 'Redis', 'Node.js', 'Chart.js'],
    image: '/work03.jpg',
    live: 'https://expanse-tracker-redis.netlify.app/',
    code: 'https://github.com/priyanshtiwari001/full-stack-expanse-tracker',
  },
  {
    id: '02',
    year: '2025',
    title: 'AuthEase - NPM Package',
    description:
      'AuthEase is a plug-and-play authentication solution for Node.js and React with full JWT lifecycle and route protection middleware.',
    tech: ['React', 'Node.js', 'JWT', 'MongoDB'],
    image: '/work01.jpg',
    live: 'https://www.npmjs.com/package/authease',
    code: 'https://www.npmjs.com/package/authease',
  },
  {
    id: '03',
    year: '2025',
    title: 'Podcast Transcript',
    description:
      'Podcast management platform to organize shows, manage episodes, and edit transcripts with a clean interface.',
    tech: ['Next.js', 'MongoDB', 'Node.js', 'Express'],
    image: '/work02.jpg',
    live: 'https://skai-lama-ques.netlify.app',
    code: 'https://github.com/priyanshtiwari001/lama-podcast',
  },
  {
    id: '04',
    year: '2024',
    title: 'Fast Fact Pizza',
    description:
      'Built with React, Redux Toolkit, Tailwind CSS and React Router for seamless SPA navigation and backend integration via Node.js.',
    tech: ['React.js', 'Tailwind CSS', 'React-Router', 'API Integration'],
    image: '/work01.jpg',
    live: 'https://fast-react-pizza-v3.netlify.app/',
    code: 'https://github.com/priyanshtiwari001/fact-react-pizza',
  },
];

const Work = () => {
  return (
    <section id="work" className="py-20 px-6  relative">
         <div style={{
                  width: "450px",
                  top: "100px",
                }} 
                className="absolute right-[400px] z-2 h-[70px] w-[450px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-fuchsia-950 via-violet-500 to-zinc-400 blur-[150px]">
                </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-4">Selected Work</h2>
          <SeparatorLine></SeparatorLine>
          <p className="text-gray-600  dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A collection of projects that showcase my approach to solving complex design and development challenges.
          </p>
         
        </div>
        <div className="pt-24">
          <div className="gap-6 flex flex-col">         
         {workData.map((project, index) => {
            const topInPx = (index + 6) * 20;
            const topInRem = topInPx / 16; // conversion px -> rem
            return (
              <MarketCard
                key={project.id}
                {...project}
                stickyValue={8}
              />
            );
          })}
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Work;

