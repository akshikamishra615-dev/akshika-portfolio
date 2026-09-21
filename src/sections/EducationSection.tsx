import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { Badge } from '../components/Badge';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#F4F4F0] dark:bg-[#141414] border-y border-[#E5E5DF] dark:border-neutral-800 transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12">
          <Badge variant="default" className="mb-3">
            06 // ACADEMIC BACKGROUND
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#111111] dark:text-white tracking-tight">
            Education Timeline
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {EDUCATION_DATA.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 sm:p-8 border border-[#E5E5DF] dark:border-neutral-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-colors duration-200"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase">
                  <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{item.period}</span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#111111] dark:text-white">
                  {item.degree}
                </h3>

                <p className="text-sm text-[#666660] dark:text-neutral-300 font-medium">
                  {item.institution}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-[#666660] dark:text-neutral-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="sm:text-right shrink-0">
                <Badge
                  variant={item.status === 'Pursuing' ? 'accent' : 'default'}
                  className="text-xs"
                >
                  {item.status}
                </Badge>
                {item.grade && (
                  <span className="block mt-2 font-mono text-xs font-bold text-[#111111] dark:text-white">
                    Score: {item.grade}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
