import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Badge } from '../components/Badge';
import { ThemeToggle } from '../components/ThemeToggle';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Design × Code', href: '#design-code' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.replace('#', '');
    
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    requestAnimationFrame(() => {
      setMobileMenuOpen(false);
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAFA]/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md py-3 border-b border-[#E5E5DF] dark:border-neutral-800 shadow-xs'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center gap-2.5 group focus:outline-none rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-xl bg-[#111111] dark:bg-white text-white dark:text-[#111111] flex items-center justify-center font-display font-bold text-lg group-hover:bg-[#2563EB] dark:group-hover:bg-[#3B82F6] dark:group-hover:text-white transition-colors duration-200 shadow-xs">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-[#111111] dark:text-white leading-none group-hover:text-[#2563EB] dark:group-hover:text-[#3B82F6] transition-colors duration-200">
              AKSHIKA
            </span>
            <span className="text-[10px] font-mono text-[#666660] dark:text-neutral-400 tracking-wider uppercase mt-1">
              UI/UX & Product Design
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F4F4F0]/80 dark:bg-neutral-900/80 p-1.5 rounded-full border border-[#E5E5DF] dark:border-neutral-800 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] shadow-xs'
                    : 'text-[#666660] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-white hover:bg-white/60 dark:hover:bg-neutral-800/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle + Status Pill + Let's Talk */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          <Badge pulse variant="success" className="text-[11px]">
            {PERSONAL_INFO.availability}
          </Badge>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2.5 text-xs font-medium bg-[#111111] dark:bg-blue-600 text-white rounded-full hover:bg-[#2563EB] dark:hover:bg-blue-500 transition-colors duration-200 flex items-center gap-1.5 shadow-xs"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="p-2 text-[#111111] dark:text-white hover:bg-[#F4F4F0] dark:hover:bg-neutral-800 rounded-lg transition-colors border border-[#E5E5DF] dark:border-neutral-800 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] border-b border-[#E5E5DF] dark:border-neutral-800 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              <div className="pb-3 border-b border-[#E5E5DF] dark:border-neutral-800 flex items-center justify-between">
                <Badge pulse variant="success">
                  {PERSONAL_INFO.availability}
                </Badge>
                <ThemeToggle />
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-display font-medium text-[#111111] dark:text-white hover:text-[#2563EB] dark:hover:text-blue-400 py-1 transition-colors flex items-center justify-between cursor-pointer select-none touch-manipulation"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#666660] dark:text-neutral-400" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-[#E5E5DF] dark:border-neutral-800 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full text-center py-3 bg-[#111111] dark:bg-blue-600 text-white font-medium rounded-xl text-sm cursor-pointer select-none touch-manipulation"
                >
                  Let's Talk →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
