'use client';
import React from 'react';

const Footer = () => {

   const handleNavClick = (label) => {
    const target = document.getElementById(label.toLowerCase());
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="py-12 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Bloc identité */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-fuchsia-500">Zoenirina</span>
              <span className="text-white"> Marie Viviane</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Développeur Full Stack passionné, spécialisé dans la création d'expériences web modernes et performantes. Toujours prêt à relever de nouveaux défis !
            </p>
          </div>
          {/* Bloc navigation */}
                <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
                <ul className="space-y-2">
                  {["Accueil", "Services", "Compétences", "Projets", "Contact"].map((label) => (
                  <li key={label}>
                    <button
                    className="text-sm transition-colors duration-200 hover:text-fuchsia-500 text-gray-400"
                    onClick={() => handleNavClick(label)}
                    >
                    {label}
                    </button>
                  </li>
                  ))}
                </ul>
                </div>
                {/* Bloc contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Restons connectés</h3>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-400">zoenirinamarieviviane@gmail.com</p>
              <p className="text-sm text-gray-400">+261 34 802 65</p>
              <p className="text-sm text-gray-400">Fianarantsoa Madagascar</p>
            </div>
            <div className="flex gap-3">
              <a href="#" aria-label="GitHub" className="p-2 rounded-lg transition-colors duration-200 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white hover:text-fuchsia-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg transition-colors duration-200 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white hover:text-fuchsia-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:zoenirinamarieviviane@email.com" aria-label="Email" className="p-2 rounded-lg transition-colors duration-200 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white hover:text-fuchsia-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
              <a href="https://wa.me/2613480265" aria-label="WhatsApp" className="p-2 rounded-lg transition-colors duration-200 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white hover:text-fuchsia-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 Zoenirina Marie Viviane. Tous droits réservés.</p>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-gray-400">Fait avec beaucoup de</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart text-fuchsia-500 animate-pulse">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;