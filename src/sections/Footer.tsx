import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] dark:bg-[#050505] text-neutral-300 dark:text-neutral-400 py-12 border-t border-neutral-800 dark:border-neutral-900 font-sans text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-800 dark:border-neutral-900">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="font-display font-bold text-white text-base tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-neutral-400 dark:text-neutral-500 font-mono text-[11px]">
              UI/UX Designer • Web & Product Design
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-300 dark:text-neutral-400">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
              Email
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full border border-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
            aria-label="Scroll to top"
          >
            <span className="font-mono text-[11px]">Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright & Location */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-neutral-400 dark:text-neutral-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Akshika Mishra. All rights reserved.
          </div>

          <div className="font-mono">
            Designed in Figma • Built with React & TypeScript
          </div>
        </div>
      </div>
    </footer>
  );
};
