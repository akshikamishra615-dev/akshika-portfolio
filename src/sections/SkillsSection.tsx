import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Badge } from '../components/Badge';
import { FigmaIcon } from '../components/Icons';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'design' | 'technical'>('all');

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeTab === 'all') return true;
    return cat.type === activeTab;
  });

  return (
    <section id="skills" className="py-24 bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#E5E5DF] dark:border-neutral-800">
          <div>
            <div className="mb-3">
              <Badge variant="default">05 // CAPABILITIES & TOOLS</Badge>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-medium text-[#111111] dark:text-white tracking-tight">
              Design & Technical Skills
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center bg-[#F4F4F0] dark:bg-neutral-900 p-1.5 rounded-full border border-[#E5E5DF] dark:border-neutral-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] shadow-xs'
                  : 'text-[#666660] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-white'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'design'
                  ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] shadow-xs'
                  : 'text-[#666660] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-white'
              }`}
            >
              UI/UX & Figma
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'technical'
                  ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] shadow-xs'
                  : 'text-[#666660] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-white'
              }`}
            >
              Frontend & Core CS
            </button>
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#141414] rounded-3xl p-6 sm:p-8 border border-[#E5E5DF] dark:border-neutral-800 shadow-xs space-y-6 transition-colors duration-200"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E5DF] dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                      category.type === 'design'
                        ? 'bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                        : 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                    }`}
                  >
                    {category.type === 'design' ? (
                      <FigmaIcon className="w-5 h-5" />
                    ) : (
                      <Terminal className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#111111] dark:text-white">
                      {category.title}
                    </h3>
                    <span className="text-xs font-mono text-[#666660] dark:text-neutral-400">
                      {category.type === 'design' ? 'Figma & UX Workflow' : 'Frontend & Computer Science'}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#666660] dark:text-neutral-400">
                  {category.skills.length} Items
                </span>
              </div>

              {/* Skills Interactive List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 bg-[#F4F4F0] dark:bg-[#1E1E1E] rounded-xl border border-[#E5E5DF] dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-white dark:hover:bg-[#252525] transition-all group cursor-default"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display font-medium text-sm text-[#111111] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] font-mono px-2 py-0.5 bg-white dark:bg-[#141414] text-[#666660] dark:text-neutral-400 rounded border border-[#E5E5DF] dark:border-neutral-700">
                          {skill.level}
                        </span>
                      )}
                    </div>
                    {skill.description && (
                      <p className="text-[11px] text-[#666660] dark:text-neutral-400 leading-snug">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
