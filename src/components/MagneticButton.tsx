import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  external = false,
  variant = 'primary',
  size = 'md',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 cursor-pointer select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600";
  
  const variantStyles = {
    primary: "bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#2563EB] dark:hover:bg-[#3B82F6] dark:hover:text-white shadow-sm",
    secondary: "bg-[#F4F4F0] dark:bg-neutral-800 text-[#111111] dark:text-white hover:bg-[#E5E5DF] dark:hover:bg-neutral-700 border border-[#E5E5DF] dark:border-neutral-700",
    outline: "bg-transparent text-[#111111] dark:text-white border border-[#111111] dark:border-white hover:bg-[#111111] dark:hover:bg-white hover:text-white dark:hover:text-[#111111]",
    ghost: "bg-transparent text-[#666660] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-white hover:bg-[#F4F4F0] dark:hover:bg-neutral-800",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-mono tracking-wider uppercase gap-2",
    md: "px-6 py-3 text-sm gap-2.5",
    lg: "px-8 py-4 text-base gap-3",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return content;
};
