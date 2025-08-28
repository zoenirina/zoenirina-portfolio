

import { Contact } from './components/Contact';
import Work from './components/Work';
import { Hero } from './components/Hero';
import Service from './components/Services';
import { Skills } from './components/Skills';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="antialiased bg-[#F5F5F5] dark:bg-[#09090b]">
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 grid-background">
        <div style={{width: "600px", top: "-180px",}} className="absolute right-[100px] z-2 h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-purple-800 via-violet-500 to-zinc-400 blur-[150px]">
        </div>
        <div className="fixed h-full top-0 left-0 right-0 z-0" style ={{
          width: "100%",
          height: "100%",
          backgroundSize: "109px",
          backgroundRepeat: "repeat",
          backgroundImage: "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
          opacity: 0.06,
          borderRadius: 0,
          }}>
            <div className="absolute left-0 right-0 bottom-0 h-[300px]">
            </div>
        </div>
        <Navbar />
        <Hero />
        <Service />
        <Skills />
        <Work />
        <Contact />
      </div>
    </main>
  );
}
