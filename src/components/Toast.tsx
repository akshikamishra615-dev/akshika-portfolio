import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 bg-[#111111] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-neutral-800 font-sans text-sm"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="font-medium text-neutral-200">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
