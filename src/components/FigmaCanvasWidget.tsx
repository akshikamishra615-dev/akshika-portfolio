import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer, LayoutGrid, Type, Sparkles, Check, Layers, Code, Palette } from 'lucide-react';

export const FigmaCanvasWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'wireframe' | 'system' | 'preview'>('wireframe');

  return (
    <div className="w-full max-w-xl mx-auto bg-[#1E1E1E] text-white rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden font-sans select-none">
      {/* Figma Window Top Header */}
      <div className="bg-[#2C2C2C] px-4 py-2.5 flex items-center justify-between border-b border-neutral-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <span className="text-neutral-400 font-mono text-[11px] ml-2">Notiq_AI_v1.0.fig</span>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center bg-[#1E1E1E] p-1 rounded-lg border border-neutral-700/60">
          <button
            onClick={() => setActiveTab('wireframe')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
              activeTab === 'wireframe' ? 'bg-[#3B82F6] text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>Wireframe</span>
          </button>
          <button
            onClick={() => setActiveTab('system')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
              activeTab === 'system' ? 'bg-[#3B82F6] text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Palette className="w-3 h-3" />
            <span>Design System</span>
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
              activeTab === 'preview' ? 'bg-[#3B82F6] text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Code className="w-3 h-3" />
            <span>Final UI</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-neutral-400 font-mono text-[10px]">
          <span>100%</span>
        </div>
      </div>

      {/* Figma Tools Bar */}
      <div className="bg-[#242424] px-4 py-2 border-b border-neutral-800 flex items-center justify-between text-neutral-400 text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-blue-400 font-medium">
            <MousePointer className="w-3.5 h-3.5" />
            <span className="text-[11px]">Move</span>
          </div>
          <LayoutGrid className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
          <Type className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
          <Sparkles className="w-3.5 h-3.5 text-amber-400 hover:text-amber-300 cursor-pointer transition-colors" />
        </div>
        <div className="text-[11px] font-mono text-neutral-500">
          Auto-layout: Vertical • Gap: 16px
        </div>
      </div>

      {/* Canvas Interior */}
      <div className="relative h-[340px] p-6 bg-dot-pattern bg-[#181818] overflow-hidden flex items-center justify-center">
        {/* Floating Figma Live Cursor */}
        <motion.div
          animate={{
            x: [10, 140, 60, 200, 10],
            y: [10, 80, 180, 40, 10],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute z-30 pointer-events-none"
        >
          <div className="relative">
            <MousePointer className="w-4 h-4 text-blue-500 fill-blue-500 transform -rotate-45" />
            <div className="absolute left-4 top-2 bg-blue-600 text-white text-[10px] font-mono px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
              Akshika (Designer)
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'wireframe' && (
            <motion.div
              key="wireframe"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-md bg-[#222222] border-2 border-blue-500 rounded-xl p-4 relative shadow-2xl"
            >
              {/* Figma Frame Handles */}
              <div className="absolute -top-3 left-4 bg-blue-600 text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1">
                <span>Frame: Notiq_AI_App</span>
                <span className="opacity-75">380×280</span>
              </div>
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-blue-600"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-blue-600"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-blue-600"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-blue-600"></div>

              {/* Wireframe UI Content */}
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700/60">
                  <div className="w-24 h-4 bg-neutral-700/80 rounded border border-dashed border-neutral-500"></div>
                  <div className="w-20 h-6 bg-blue-500/20 border border-blue-400/40 rounded flex items-center justify-center text-[10px] text-blue-300 font-mono">
                    NOTIQ AI
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="h-24 bg-neutral-800/80 border border-dashed border-neutral-600 rounded p-2 flex flex-col justify-between hover:border-blue-400 transition-colors cursor-pointer">
                    <div className="w-8 h-2 bg-neutral-600 rounded"></div>
                    <div className="space-y-1">
                      <div className="w-full h-1.5 bg-neutral-700 rounded"></div>
                      <div className="w-3/4 h-1.5 bg-neutral-700 rounded"></div>
                    </div>
                  </div>

                  <div className="col-span-2 h-24 bg-neutral-800/80 border border-dashed border-neutral-600 rounded p-2 flex flex-col justify-between hover:border-blue-400 transition-colors cursor-pointer">
                    <div className="w-20 h-3 bg-blue-500/40 rounded"></div>
                    <div className="w-full h-10 bg-neutral-700/40 border border-neutral-600 rounded flex items-center justify-center text-[10px] text-neutral-400 font-mono">
                      Workflow: Document Processing
                    </div>
                  </div>
                </div>

                <div className="h-10 bg-neutral-800 border border-dashed border-neutral-600 rounded flex items-center justify-between px-3 text-[11px] font-mono text-neutral-400">
                  <span>Ask NOTIQ AI or upload notes...</span>
                  <div className="w-12 h-5 bg-neutral-700 rounded"></div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'system' && (
            <motion.div
              key="system"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-md bg-[#222222] border border-neutral-700 rounded-xl p-4 shadow-2xl"
            >
              <div className="text-xs font-mono text-neutral-400 mb-3 flex items-center justify-between">
                <span>Design Tokens & Theme System</span>
                <span className="text-blue-400">v2.0 React Tokens</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {/* Palette swatches */}
                <div className="bg-[#1A1A1A] p-3 rounded border border-neutral-800 space-y-2">
                  <span className="text-[10px] font-mono text-neutral-400 block">Color Palette</span>
                  <div className="flex gap-1.5">
                    <div className="w-6 h-6 rounded bg-[#FAFAFA] border border-neutral-600" title="#FAFAFA Canvas"></div>
                    <div className="w-6 h-6 rounded bg-[#111111]" title="#111111 Text"></div>
                    <div className="w-6 h-6 rounded bg-[#2563EB]" title="#2563EB Accent"></div>
                    <div className="w-6 h-6 rounded bg-[#F4F4F0]" title="#F4F4F0 Surface"></div>
                  </div>
                </div>

                {/* Typography Scale */}
                <div className="bg-[#1A1A1A] p-3 rounded border border-neutral-800 space-y-1 font-mono text-[10px]">
                  <span className="text-neutral-400 block font-sans">Type Hierarchy</span>
                  <div className="text-white font-bold">Space Grotesk (Display)</div>
                  <div className="text-neutral-400">Inter Regular (Body 16px)</div>
                </div>

                {/* Interactive Component Button Sample */}
                <div className="col-span-2 bg-[#1A1A1A] p-3 rounded border border-neutral-800 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400 font-mono">Component: Quiz Card</span>
                  <div className="px-3 py-1.5 bg-[#2563EB] text-white rounded-full text-xs font-medium shadow-sm">
                    Interactive State →
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'preview' && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-md bg-white text-neutral-900 rounded-xl p-4 shadow-2xl border border-neutral-200"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                    N
                  </div>
                  <span className="font-semibold text-xs tracking-tight">NOTIQ AI Platform</span>
                </div>
                <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
                  React App (Netlify)
                </span>
              </div>

              <div className="mt-3 space-y-2.5">
                <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-neutral-900">Document Processing & Quizzes</div>
                    <div className="text-[10px] text-neutral-500">Theme-aware UI & flashcards</div>
                  </div>
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="p-2.5 bg-neutral-900 text-white rounded-lg flex items-center justify-between text-xs">
                  <span>Explore NOTIQ AI features...</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Info */}
      <div className="bg-[#242424] px-4 py-2 text-[11px] text-neutral-400 flex justify-between items-center border-t border-neutral-800">
        <span className="font-mono">Figma Wireframe → React Product</span>
        <span className="text-blue-400 font-medium">Responsive & Theme-Aware</span>
      </div>
    </div>
  );
};
