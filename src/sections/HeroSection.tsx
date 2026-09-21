import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Code, Layout } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagneticButton } from '../components/MagneticButton';
import { FigmaCanvasWidget } from '../components/FigmaCanvasWidget';
import { Badge } from '../components/Badge';
import { FigmaIcon } from '../components/Icons';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern transition-colors duration-200">
      {/* Decorative Gradient Background Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Editorial Hero Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Eyebrow Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">
                {PERSONAL_INFO.titleEyebrow}
              </Badge>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#E5E5DF] dark:bg-neutral-700"></span>
              <span className="text-xs font-mono text-[#666660] dark:text-neutral-400">
                Figma Wireframes → TypeScript Code
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium text-[#111111] dark:text-white leading-[1.08] tracking-tight">
              Designing digital experiences that feel{' '}
              <span className="relative inline-block italic font-normal text-blue-600 dark:text-blue-400 underline decoration-blue-200 dark:decoration-blue-800 decoration-wavy underline-offset-8">
                simple,
              </span>{' '}
              intuitive and human.
            </h1>

            {/* Supporting Thesis Statement */}
            <p className="text-lg sm:text-xl text-[#666660] dark:text-neutral-300 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.bioShort}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton href="#work" variant="primary" size="lg">
                <span>View Featured Work</span>
                <ArrowDownRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </MagneticButton>

              <MagneticButton href="#contact" variant="secondary" size="lg">
                <span>Let's Connect</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticButton>
            </div>

            {/* Mini Skill Highlights Pill Strip */}
            <div className="pt-6 border-t border-[#E5E5DF] dark:border-neutral-800 grid grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2 text-[#666660] dark:text-neutral-400">
                <FigmaIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="font-medium text-[#111111] dark:text-white">Figma Wireframing</span>
              </div>
              <div className="flex items-center gap-2 text-[#666660] dark:text-neutral-400">
                <Layout className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-[#111111] dark:text-white">Information Hierarchy</span>
              </div>
              <div className="flex items-center gap-2 text-[#666660] dark:text-neutral-400">
                <Code className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-medium text-[#111111] dark:text-white">TypeScript Frontend</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Figma Workspace Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-20 dark:opacity-40 animate-pulse"></div>
              <FigmaCanvasWidget />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
