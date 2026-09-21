import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { FEATURED_PROJECT } from '../data/portfolioData';
import { Badge } from '../components/Badge';
import { MagneticButton } from '../components/MagneticButton';
import { GitHubIcon } from '../components/Icons';

export const FeaturedProject: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = FEATURED_PROJECT.sections[activeStepIndex];

  return (
    <section id="work" className="py-24 bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#E5E5DF] dark:border-neutral-800">
          <div>
            <div className="mb-3">
              <Badge variant="accent">02 // FEATURED CASE STUDY</Badge>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-medium text-[#111111] dark:text-white tracking-tight">
              Featured Case Study
            </h2>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-[#666660] dark:text-neutral-400 uppercase tracking-wider block">
              FLAGSHIP PRODUCT DESIGN
            </span>
            <span className="font-display font-bold text-2xl text-[#111111] dark:text-white">
              NOTIQ AI Platform
            </span>
          </div>
        </div>

        {/* Hero Showcase Card Container */}
        <div className="bg-white dark:bg-[#141414] rounded-3xl border border-[#E5E5DF] dark:border-neutral-800 p-6 sm:p-10 lg:p-12 shadow-sm space-y-12 transition-colors duration-200">
          {/* Title & Metadata Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono rounded-full font-semibold border border-blue-200 dark:border-blue-800">
                  PROJECT 01
                </span>
                <span className="text-xs font-mono text-[#666660] dark:text-neutral-400">
                  {FEATURED_PROJECT.category}
                </span>
              </div>

              <h3 className="text-4xl sm:text-6xl font-display font-bold text-[#111111] dark:text-white tracking-tight">
                {FEATURED_PROJECT.title}
              </h3>

              <p className="text-lg sm:text-xl text-[#666660] dark:text-neutral-300 leading-relaxed">
                {FEATURED_PROJECT.subtitle}
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <MagneticButton
                href={FEATURED_PROJECT.liveUrl}
                external
                variant="primary"
                size="md"
                className="w-full justify-between"
              >
                <span>View Live Product ↗</span>
                <ExternalLink className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                href={FEATURED_PROJECT.githubUrl}
                external
                variant="secondary"
                size="md"
                className="w-full justify-between"
              >
                <span>View Source Code ↗</span>
                <GitHubIcon className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>

          {/* Role, Focus & Development Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#F4F4F0] dark:bg-[#1E1E1E] rounded-2xl border border-[#E5E5DF] dark:border-neutral-800 transition-colors duration-200">
            {/* ROLE */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#666660] dark:text-neutral-400 uppercase block">
                ROLE
              </span>
              <div className="space-y-1">
                {FEATURED_PROJECT.role.map((r) => (
                  <div key={r} className="font-display font-semibold text-[#111111] dark:text-white text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FOCUS */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#666660] dark:text-neutral-400 uppercase block">
                DESIGN FOCUS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {FEATURED_PROJECT.focusAreas.map((focus) => (
                  <span
                    key={focus}
                    className="px-2.5 py-1 bg-white dark:bg-[#141414] text-xs font-mono rounded-lg text-[#111111] dark:text-white border border-[#E5E5DF] dark:border-neutral-700"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            {/* DEVELOPMENT */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#666660] dark:text-neutral-400 uppercase block">
                DEVELOPMENT STACK
              </span>
              <div className="flex flex-wrap gap-1.5">
                {FEATURED_PROJECT.devTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-white dark:bg-[#141414] text-xs font-mono rounded-lg text-[#111111] dark:text-white border border-[#E5E5DF] dark:border-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* AI Learning Experience Pipeline Visualizer */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#666660] dark:text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>USER-CENTRIC AI LEARNING WORKFLOW</span>
              </span>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium">6 Pipeline Stages</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {FEATURED_PROJECT.workflowSteps.map((stepName, i) => (
                <div
                  key={stepName}
                  className="p-3 bg-[#F4F4F0] dark:bg-[#1E1E1E] rounded-xl border border-[#E5E5DF] dark:border-neutral-800 text-center space-y-1 hover:border-blue-400 transition-colors"
                >
                  <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold block">
                    0{i + 1}
                  </span>
                  <span className="font-display text-xs font-medium text-[#111111] dark:text-white block leading-tight">
                    {stepName}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Case Study Breakdown Tabs */}
          <div className="space-y-6 pt-4 border-t border-[#E5E5DF] dark:border-neutral-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#666660] dark:text-neutral-400 uppercase tracking-wider">
                NOTIQ AI CASE STUDY DETAILS
              </span>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium">
                Section {activeStepIndex + 1} of 5
              </span>
            </div>

            {/* Case Study Step Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {FEATURED_PROJECT.sections.map((step, idx) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`px-3 py-2.5 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                    activeStepIndex === idx
                      ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] border-[#111111] dark:border-white shadow-xs'
                      : 'bg-white dark:bg-[#1A1A1A] text-[#666660] dark:text-neutral-400 border-[#E5E5DF] dark:border-neutral-800 hover:bg-[#F4F4F0] dark:hover:bg-neutral-800'
                  }`}
                >
                  <span className="text-[10px] font-mono opacity-60 block">
                    {step.number}
                  </span>
                  <span className="font-display text-xs font-medium truncate block">
                    {step.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Case Study Step Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="bg-[#1E1E1E] text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Step Text Details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-blue-400 bg-blue-900/40 px-2.5 py-1 rounded border border-blue-800">
                      SECTION {activeStep.number}
                    </span>
                    <h4 className="text-2xl font-display font-medium text-white">
                      {activeStep.title}
                    </h4>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                    {activeStep.content}
                  </p>

                  {activeStep.highlights && (
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono uppercase text-neutral-400 block">
                        DESIGN & IMPLEMENTATION HIGHLIGHTS:
                      </span>
                      <div className="space-y-1.5">
                        {activeStep.highlights.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-neutral-200 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Live System Preview Frame */}
                <div className="lg:col-span-5 bg-[#141414] rounded-xl p-5 border border-neutral-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-neutral-400 pb-2 border-b border-neutral-800">
                    <span className="text-[11px]">Notiq_AI_System.tsx</span>
                    <span className="text-[10px] text-emerald-400 font-mono">● Production Live</span>
                  </div>

                  {activeStepIndex === 0 && (
                    <div className="space-y-2">
                      <div className="p-3 bg-neutral-900 rounded border border-neutral-800 text-neutral-300">
                        <span className="text-blue-400 font-bold block mb-1">Product Vision</span>
                        Clean, responsive learning management system removing cognitive friction for students and self-learners.
                      </div>
                    </div>
                  )}

                  {activeStepIndex === 1 && (
                    <div className="space-y-2">
                      <div className="p-3 bg-neutral-900 rounded border border-neutral-800">
                        <span className="text-purple-400 font-bold block mb-1">Design System</span>
                        Defined information hierarchy, consistent theme-aware design tokens, and clear navigation paths.
                      </div>
                    </div>
                  )}

                  {activeStepIndex === 2 && (
                    <div className="space-y-2">
                      <div className="p-3 bg-neutral-900 rounded border border-neutral-800">
                        <span className="text-emerald-400 font-bold block mb-1">AI Workflow Integration</span>
                        Interactive document processing, concept explanations, flashcards, and progress tracking dashboard.
                      </div>
                    </div>
                  )}

                  {activeStepIndex === 3 && (
                    <div className="space-y-2">
                      <div className="p-3 bg-neutral-900 rounded border border-neutral-800">
                        <span className="text-amber-400 font-bold block mb-1">React Architecture</span>
                        Production-ready React components with interactive states, accessible controls, and theme awareness.
                      </div>
                    </div>
                  )}

                  {activeStepIndex === 4 && (
                    <div className="space-y-2">
                      <div className="p-3 bg-neutral-900 rounded border border-neutral-800">
                        <span className="text-blue-400 font-bold block mb-1">Cross-Device Usability</span>
                        Optimized for desktop and mobile form factors with high readability and fluid layouts.
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex justify-between text-[10px] text-neutral-500">
                    <span>Host: Netlify</span>
                    <span>Stack: React + TS</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
