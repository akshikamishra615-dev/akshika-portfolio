import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_NARRATIVE } from '../data/portfolioData';
import { Badge } from '../components/Badge';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F4F4F0] dark:bg-[#141414] border-y border-[#E5E5DF] dark:border-neutral-800 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Label */}
        <div className="mb-8">
          <Badge variant="default">01 // EDITORIAL PROFILE</Badge>
        </div>

        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Impact Display Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#111111] dark:text-white leading-[1.15] tracking-tight">
              {ABOUT_NARRATIVE.headline}
            </h2>

            <div className="p-6 bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E5E5DF] dark:border-neutral-800 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Design + Engineering Mindset</span>
              </div>
              <p className="text-sm text-[#666660] dark:text-neutral-300 leading-relaxed">
                By maintaining fluency in both Figma wireframing and frontend code (TypeScript, React, HTML, CSS), I remove the friction between user interface design and technical implementation.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Story Narrative & Metadata Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4 text-base sm:text-lg text-[#666660] dark:text-neutral-300 leading-relaxed font-normal">
              <p>{ABOUT_NARRATIVE.storyParagraph1}</p>
              <p>{ABOUT_NARRATIVE.storyParagraph2}</p>
            </div>

            {/* Structured Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {ABOUT_NARRATIVE.keyHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-3 bg-white/80 dark:bg-[#1E1E1E] rounded-xl border border-[#E5E5DF] dark:border-neutral-800 text-xs text-[#111111] dark:text-white font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Personal Metadata Cards */}
            <div className="pt-6 border-t border-[#E5E5DF] dark:border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E5E5DF] dark:border-neutral-800">
                <div className="flex items-center gap-1.5 text-xs text-[#666660] dark:text-neutral-400 font-mono mb-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>BASED IN</span>
                </div>
                <div className="font-medium text-sm text-[#111111] dark:text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E5E5DF] dark:border-neutral-800">
                <div className="flex items-center gap-1.5 text-xs text-[#666660] dark:text-neutral-400 font-mono mb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>EDUCATION</span>
                </div>
                <div className="font-medium text-sm text-[#111111] dark:text-white">
                  {PERSONAL_INFO.currentDegree}
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E5E5DF] dark:border-neutral-800">
                <div className="flex items-center gap-1.5 text-xs text-[#666660] dark:text-neutral-400 font-mono mb-1">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>STATUS</span>
                </div>
                <div className="font-medium text-sm text-[#111111] dark:text-white">
                  {PERSONAL_INFO.degreeStatus}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
