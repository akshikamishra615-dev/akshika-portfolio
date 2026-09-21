import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';
import type { CertificateItem } from '../data/portfolioData';

interface CertificateLightboxProps {
  certificates: CertificateItem[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({
  certificates,
  selectedIndex,
  onClose,
  onSelectIndex,
}) => {
  const isOpen = selectedIndex !== null;
  const currentCert = isOpen ? certificates[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    const prev = selectedIndex === 0 ? certificates.length - 1 : selectedIndex - 1;
    onSelectIndex(prev);
  }, [selectedIndex, certificates.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    const next = selectedIndex === certificates.length - 1 ? 0 : selectedIndex + 1;
    onSelectIndex(next);
  }, [selectedIndex, certificates.length, onSelectIndex]);

  // Keyboard Navigation Listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && currentCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 font-sans select-none overflow-hidden"
          onClick={onClose}
        >
          {/* Top Bar Header */}
          <div
            className="flex items-center justify-between text-white pb-4 border-b border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-medium text-sm sm:text-base text-white">
                  {currentCert.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  {currentCert.issuer} • {currentCert.date}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block font-mono text-xs text-neutral-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                {selectedIndex! + 1} of {certificates.length} (Use ← → Keys)
              </span>

              <button
                onClick={onClose}
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors cursor-pointer border border-neutral-800"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Image Stage */}
          <div
            className="relative flex-1 flex items-center justify-center py-4 my-2 px-2 sm:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-10 p-3 bg-neutral-900/80 hover:bg-neutral-800 text-white rounded-full border border-neutral-700 shadow-2xl transition-transform hover:scale-105 cursor-pointer"
              aria-label="Previous Certificate"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Certificate High-Res Image Container */}
            <motion.div
              key={currentCert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl max-h-[75vh] flex items-center justify-center shadow-2xl rounded-lg overflow-hidden bg-neutral-950 p-2 border border-neutral-800"
            >
              <img
                src={currentCert.image}
                alt={currentCert.title}
                className="max-w-full max-h-[72vh] object-contain rounded shadow-lg"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-10 p-3 bg-neutral-900/80 hover:bg-neutral-800 text-white rounded-full border border-neutral-700 shadow-2xl transition-transform hover:scale-105 cursor-pointer"
              aria-label="Next Certificate"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Controls & Metadata Footer */}
          <div
            className="pt-3 border-t border-neutral-800 text-center text-xs text-neutral-400 font-mono flex flex-col sm:flex-row items-center justify-between gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-blue-950 text-blue-300 rounded border border-blue-800 text-[11px]">
                {currentCert.tag}
              </span>
              {currentCert.credentialId && (
                <span>ID: {currentCert.credentialId}</span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <span>Press ESC to close</span>
              <a
                href={currentCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline flex items-center gap-1"
              >
                <span>Open Full File</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
