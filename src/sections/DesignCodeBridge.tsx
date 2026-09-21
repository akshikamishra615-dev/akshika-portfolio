import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowRight, Sliders, CheckCircle2 } from 'lucide-react';
import { DESIGN_CODE_PIPELINE } from '../data/portfolioData';
import { Badge } from '../components/Badge';
import { FigmaIcon } from '../components/Icons';

export const DesignCodeBridge: React.FC = () => {
  const [viewMode, setViewMode] = useState<'design' | 'code'>('design');

  return (
    <section id="design-code" className="py-24 bg-[#F4F4F0] dark:bg-[#141414] border-y border-[#E5E5DF] dark:border-neutral-800 transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="accent" className="mx-auto">
            04 // FROM DESIGN TO PRODUCT
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#111111] dark:text-white tracking-tight">
            I don't just design interfaces.{' '}
            <span className="text-blue-600 dark:text-blue-400">I understand how they become products.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#666660] dark:text-neutral-300">
            Combining human-centered Figma UI/UX wireframing with production-ready React component engineering to build usable digital products.
          </p>
        </div>

        {/* 6-Step Visual Pipeline Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {DESIGN_CODE_PIPELINE.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-4 border border-[#E5E5DF] dark:border-neutral-800 shadow-xs flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-500 transition-colors group relative"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800">
                    STEP {item.step}
                  </span>
                  {idx < 5 && (
                    <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-[#666660] dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                  )}
                </div>

                <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white leading-tight">
                  {item.label}
                </h3>

                <p className="text-[11px] text-[#666660] dark:text-neutral-400 leading-snug">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-[#E5E5DF] dark:border-neutral-800 flex items-center justify-end">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Comparison Switcher Card */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-3xl border border-[#E5E5DF] dark:border-neutral-800 p-6 sm:p-10 shadow-xs max-w-4xl mx-auto transition-colors duration-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#E5E5DF] dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-display font-bold text-lg text-[#111111] dark:text-white">
                Interactive Component Bridge
              </span>
            </div>

            {/* Toggle Mode Button */}
            <div className="flex items-center bg-[#F4F4F0] dark:bg-neutral-900 p-1 rounded-full border border-[#E5E5DF] dark:border-neutral-800">
              <button
                onClick={() => setViewMode('design')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  viewMode === 'design'
                    ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] shadow-xs'
                    : 'text-[#666660] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-white'
                }`}
              >
                <FigmaIcon className="w-3.5 h-3.5" />
                <span>Figma Specs</span>
              </button>

              <button
                onClick={() => setViewMode('code')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  viewMode === 'code'
                    ? 'bg-[#2563EB] dark:bg-blue-500 text-white shadow-xs'
                    : 'text-[#666660] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>React Component</span>
              </button>
            </div>
          </div>

          <div className="pt-6">
            {viewMode === 'design' ? (
              <div className="bg-[#1E1E1E] text-white p-6 rounded-2xl font-mono text-xs space-y-4">
                <div className="flex justify-between items-center text-neutral-400 border-b border-neutral-800 pb-2">
                  <span>// FIGMA UI TOKEN & WIREFRAME SPECIFICATION</span>
                  <span className="text-purple-400">#NotiqAiCard</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300">
                  <div>
                    <span className="text-neutral-500">Auto Layout:</span> Vertical Stack (Gap 16px)
                  </div>
                  <div>
                    <span className="text-neutral-500">Padding:</span> 24px Desktop / 16px Mobile
                  </div>
                  <div>
                    <span className="text-neutral-500">Border Radius:</span> 24px (Soft Rounded)
                  </div>
                  <div>
                    <span className="text-neutral-500">Theme Token:</span> Light / Dark Aware
                  </div>
                  <div>
                    <span className="text-neutral-500">Typography:</span> Space Grotesk Display + Inter
                  </div>
                  <div>
                    <span className="text-neutral-500">Usability Focus:</span> Low Cognitive Friction
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#1E1E1E] text-white p-6 rounded-2xl font-mono text-xs space-y-3">
                <div className="flex justify-between items-center text-neutral-400 border-b border-neutral-800 pb-2">
                  <span>// PRODUCTION REACT COMPONENT</span>
                  <span className="text-emerald-400">NotiqCard.tsx</span>
                </div>
                <pre className="text-blue-300 overflow-x-auto">
{`export const NotiqCard: React.FC<CardProps> = ({ title, content, badge }) => (
  <div className="p-6 bg-white dark:bg-[#141414] rounded-3xl border border-[#E5E5DF] dark:border-neutral-800
                  hover:border-blue-400 transition-all shadow-xs space-y-3">
    <div className="flex justify-between items-center">
      <span className="text-xs font-mono text-blue-600 dark:text-blue-400">{badge}</span>
    </div>
    <h4 className="font-display font-bold text-xl text-[#111111] dark:text-white">{title}</h4>
    <p className="text-sm text-[#666660] dark:text-neutral-400">{content}</p>
  </div>
);`}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
