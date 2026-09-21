import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ZoomIn, ShieldCheck } from 'lucide-react';
import { CERTIFICATES_DATA, type CertificateItem } from '../data/portfolioData';
import { Badge } from '../components/Badge';
import { CertificateLightbox } from '../components/CertificateLightbox';

export const CertificatesSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-24 bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#E5E5DF] dark:border-neutral-800">
          <div>
            <div className="mb-3">
              <Badge variant="accent">03 // CERTIFIED CREDENTIALS</Badge>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-medium text-[#111111] dark:text-white tracking-tight">
              Certificates & Honors
            </h2>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-[#666660] dark:text-neutral-400 uppercase tracking-wider block">
              OFFICIAL VERIFIED CERTIFICATES
            </span>
            <span className="font-display font-medium text-lg text-emerald-600 dark:text-emerald-400 flex items-center justify-end gap-1.5 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
              <span>3 Verified Documents</span>
            </span>
          </div>
        </div>

        {/* Certificate Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES_DATA.map((cert: CertificateItem, idx: number) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelectedIndex(idx)}
              className="bg-white dark:bg-[#141414] rounded-3xl overflow-hidden border border-[#E5E5DF] dark:border-neutral-800 shadow-xs hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              {/* Image Preview Container (Preserving native aspect ratio!) */}
              <div className="relative bg-[#1A1A1A] p-4 aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain rounded shadow-md group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover Overlay Badge */}
                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="px-4 py-2 bg-[#111111] text-white text-xs font-mono rounded-full flex items-center gap-2 shadow-2xl">
                    <ZoomIn className="w-4 h-4 text-blue-400" />
                    <span>Expand Certificate</span>
                  </div>
                </div>

                <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#111111]/80 text-white text-[10px] font-mono rounded-full backdrop-blur-md border border-neutral-700">
                  {cert.tag}
                </span>
              </div>

              {/* Certificate Details */}
              <div className="p-6 space-y-3 bg-white dark:bg-[#141414] flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#111111] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-[#E5E5DF] dark:border-neutral-800 flex items-center justify-between text-xs text-[#666660] dark:text-neutral-400">
                  <span className="font-mono">{cert.date}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline text-[11px] font-mono">
                    View Fullscreen →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateLightbox
        certificates={CERTIFICATES_DATA}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelectIndex={(index) => setSelectedIndex(index)}
      />
    </section>
  );
};
