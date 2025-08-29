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
    title: 'TATITRA',
    description:
      'Application mobile de gestion de flotte (véhicules, chauffeurs, dépenses, activités, rappels). Permet la gestion des véhicules et chauffeurs, le suivi des dépenses et versements ainsi que l’historique des activités.',
    tech: ['React Native', 'Spring Boot', 'Docker', 'Tailwind CSS'],
    image: 'podcast.png', ///tatitra.jpg',
    live: '',
    code: '',
  },
  {
    id: '02',
    year: '2024',
    title: 'MIRA – Plateforme Carrière & Formation',
    description:
      'Plateforme de carrière et formation pour les jeunes Malagasy. Fonctionnalités : gestion des CVs, dépôt et mise à jour, recherche et sauvegarde d’offres, gestion des formations et des participants, publication et suivi des offres d’emploi, supervision par un administrateur.',
    tech: ['ReactJS', 'Laravel', 'Tailwind CSS'],
    image: 'podcast.png', ///mira.jpg',
    live: '',
    code: '',
  },
  {
    id: '03',
    year: '2024',
    title: 'SORO Rendez-Vous',
    description:
      'Système de gestion de rendez-vous et de réservations avec calendrier intelligent et optimisation tarifaire. Permet la prise de rendez-vous, la gestion des réservations et la planification.',
    tech: ['ReactJS', 'Laravel', 'Material UI'],
    image: 'podcast02.png', ///soro.jpg',
    live: '',
    code: '',
  },
  {
    id: '04',
    year: '2023',
    title: 'DAO Management – Ministère de l’Économie et des Finances',
    description:
      'Application web de contrôle et de validation des Dossiers d’Appel d’Offre (DAO).',
    tech: ['AngularJS', 'Laravel', 'Tailwind CSS'],
    image: 'podcast.png', ///dao.jpg',
    live: '',
    code: '',
  },
];


const Work = () => {
  return (
    <section id="projets" className="py-20 px-6  relative">
      <div 
        style={{
            width: "450px",
            top: "100px",
          }} 
                className="absolute right-[400px] z-2 h-[70px] w-[450px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-fuchsia-950 via-violet-500 to-zinc-400 blur-[150px]">
                </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Les réalisations qui me définissent
            </h2>
          <SeparatorLine></SeparatorLine>
          <p className="text-gray-600  dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Une collection de projets qui mettent en valeur mon approche pour résoudre des défis complexes en matière de conception et de développement.
          </p>         
        </div>
        <div className="pt-24">
          <div className="gap-16 flex flex-col">         
         {workData.map((project, index) => {
            const topInPx = (index + 6) * 20;
            const topInRem = topInPx / 16; 
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

