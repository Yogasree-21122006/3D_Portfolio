import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, FileText, Send, RotateCcw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onReplayIntro: () => void;
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro, onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        <nav className={`flex items-center justify-between px-3 sm:px-5 py-2 sm:py-3 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md border border-white/90 shadow-glass'
            : 'bg-white/40 backdrop-blur-sm border border-white/60'
        }`}>
          {/* Logo / Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            aria-label="Yoga Sree S - Home"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-deep via-purple-vibrant to-soft-pink flex items-center justify-center text-white shadow-sm font-display font-extrabold text-sm group-hover:scale-105 transition-transform">
              YS
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base text-dark-text tracking-tight group-hover:text-purple-deep transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-dark-muted font-medium -mt-0.5 hidden sm:block">
                AIDS &bull; KEC
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'text-purple-deep font-bold'
                      : 'text-dark-text/75 hover:text-purple-deep hover:bg-white/50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-purple-light/35 border border-purple-light/60 -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onReplayIntro}
              title="Replay 6-second Cinematic Intro"
              className="p-2 rounded-full text-dark-muted hover:text-purple-deep hover:bg-white/60 border border-transparent hover:border-purple-light/40 transition-all text-xs flex items-center gap-1"
              aria-label="Replay Intro"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold hidden xl:inline">Intro</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/80 border border-purple-light/50 text-purple-deep hover:bg-purple-light/30 transition-all shadow-sm"
              aria-label="View Resume"
            >
              <FileText className="w-3.5 h-3.5 text-purple-vibrant" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-deep via-purple-vibrant to-pink-500 hover:shadow-purple-glow hover:scale-105 active:scale-95 transition-all shadow-sm"
              aria-label="Contact Me"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-white/70 border border-purple-light/50 text-purple-deep"
              aria-label="Resume"
            >
              <FileText className="w-3 h-3" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/70 border border-purple-light/40 text-dark-text hover:text-purple-deep transition-all"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden px-4 pt-3 pb-4 overflow-hidden"
          >
            <div className="glass-panel rounded-2xl p-4 shadow-glass border border-white/80 flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-purple-light/40 text-purple-deep font-bold border border-purple-light/60'
                        : 'text-dark-text hover:bg-white/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-purple-deep" />}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-purple-light/30 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReplayIntro();
                  }}
                  className="flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-dark-muted bg-white/50 border border-purple-light/30"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Replay 6s Cinematic Intro</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold text-purple-deep bg-lavender/40 border border-purple-light"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download / View Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

