import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`p-2 rounded-full transition-all duration-200 cursor-pointer border border-[#E5E5DF] dark:border-neutral-800 bg-[#F4F4F0] dark:bg-neutral-900 text-[#111111] dark:text-white hover:bg-white dark:hover:bg-neutral-800 shadow-xs flex items-center justify-center ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-90" />
      ) : (
        <Moon className="w-4 h-4 text-neutral-700 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
};
