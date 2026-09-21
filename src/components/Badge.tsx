import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  pulse?: boolean;
  variant?: 'default' | 'accent' | 'dark' | 'success';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  pulse = false,
  variant = 'default',
  className = '',
}) => {
  const variantStyles = {
    default: "bg-[#F4F4F0] dark:bg-neutral-800 text-[#111111] dark:text-white border-[#E5E5DF] dark:border-neutral-700",
    accent: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    dark: "bg-[#111111] dark:bg-[#1E1E1E] text-white border-neutral-800",
    success: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wider uppercase border rounded-full ${variantStyles[variant]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </span>
  );
};
