import React from 'react';
import { Sparkles, Heart, RotateCcw, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onReplayIntro: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-light/40 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-deep to-pink-500 text-white flex items-center justify-center font-display font-extrabold text-xs">
              YS
            </span>
            <span className="font-display font-extrabold text-lg text-dark-text tracking-tight">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-dark-muted">
            B.Tech Artificial Intelligence and Data Science &bull; Kongu Engineering College
          </p>
          <p className="text-[11px] text-dark-faint mt-0.5">
            Tamil Nadu, India &bull; Class of 2027
          </p>
        </div>

        {/* Center Quick Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-dark-text/80">
          <button onClick={onReplayIntro} className="hover:text-purple-deep flex items-center gap-1 transition-colors">
            <RotateCcw className="w-3 h-3 text-purple-deep" />
            <span>Replay Cinematic Intro</span>
          </button>
          <span>&bull;</span>
          <button onClick={onOpenResume} className="hover:text-purple-deep transition-colors">
            Resume
          </button>
          <span>&bull;</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-deep transition-colors"
          >
            LinkedIn
          </a>
          <span>&bull;</span>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-deep transition-colors"
          >
            GitHub
          </a>
          <span>&bull;</span>
          <a
            href="https://ai-zoom-meeting.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 font-bold transition-colors"
          >
            AI Zoom Meeting (Live)
          </a>
        </div>

        {/* Right Scroll to Top */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white border border-purple-light/60 text-purple-deep hover:bg-purple-deep hover:text-white transition-all shadow-sm"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-purple-light/20 text-center text-xs text-dark-faint">
        <p className="flex items-center justify-center gap-1">
          <span>Designed with milk-pink &amp; lavender aesthetics for Yoga Sree S</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          <span>&bull; Built with React, TypeScript &amp; Three.js</span>
        </p>
      </div>
    </footer>
  );
};

