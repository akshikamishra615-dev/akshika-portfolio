import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Mic, Palette, Star } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { Badge } from '../components/Badge';

export const AchievementsSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'ach-1':
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'ach-2':
        return <Mic className="w-5 h-5 text-blue-500" />;
      case 'ach-3':
        return <Palette className="w-5 h-5 text-purple-500" />;
      default:
        return <Star className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="achievements" className="py-24 bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#E5E5DF] dark:border-neutral-800">
          <div>
            <div className="mb-3">
              <Badge variant="default">07 // RECOGNITION & HONORS</Badge>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-medium text-[#111111] dark:text-white tracking-tight">
              Honors & Achievements
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666660] dark:text-neutral-400">
            Verified Co-Curricular & National Awards
          </span>
        </div>

        {/* Numbered Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#1E1E1E] rounded-3xl p-6 sm:p-8 border border-[#E5E5DF] dark:border-neutral-800 shadow-xs flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-500 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#666660] dark:text-neutral-300 bg-[#F4F4F0] dark:bg-neutral-800 px-3 py-1 rounded-full border border-[#E5E5DF] dark:border-neutral-700">
                    NO. {item.number}
                  </span>
                  <div className="p-2.5 bg-[#F4F4F0] dark:bg-neutral-800 rounded-2xl border border-[#E5E5DF] dark:border-neutral-700 group-hover:scale-110 transition-transform">
                    {getIcon(item.id)}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold block uppercase">
                    {item.level}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] dark:text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-[#666660] dark:text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5E5DF] dark:border-neutral-800">
                <Badge variant="accent" className="text-[10px]">
                  {item.tag}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
