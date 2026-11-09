import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, FileText, Send, ChevronDown, Award, Briefcase, Brain, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

const ROLES = [
  "AI & Data Science Student",
  "Aspiring Software Developer",
  "AI/ML Enthusiast",
  "Full Stack Builder"
];

const FLOATING_BADGES = [
  { icon: Award, text: "3x 1st Prize Winner", position: "top-4 -left-6 sm:-left-10", color: "from-amber-100 to-rose-100 border-rose-200 text-rose-700" },
  { icon: Briefcase, text: "Full Stack Intern @ CopterCode", position: "-bottom-4 -left-4 sm:-left-8", color: "from-purple-100 to-indigo-100 border-purple-200 text-purple-700" },
  { icon: Brain, text: "YOLOv8 & WebRTC", position: "top-1/2 -right-6 sm:-right-10", color: "from-sky-100 to-emerald-100 border-sky-200 text-sky-800" },
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  // Dynamic role cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // 3D Card Tilt Effect on mouse movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-mesh-pattern">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Greeting, Name, Role, Bio, CTAs */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-purple-light/60 shadow-sm mb-5 sm:mb-6 max-w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-deep opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-deep"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-dark-text tracking-wide truncate">
              Kongu Engineering College &bull; 3rd Year B.Tech AIDS
            </span>
          </motion.div>

          {/* Hello Greeting */}
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="text-xs sm:text-base font-bold uppercase tracking-wider text-purple-deep font-mono">
              Hello, I&apos;m
            </span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-500 animate-spin-slow" />
          </div>

          {/* Main Name Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark-text tracking-tight font-display mb-3 sm:mb-4 leading-tight">
            YOGA SREE S
          </h1>

          {/* Animated Role Cycler */}
          <div className="h-9 sm:h-12 mb-4 sm:mb-6 flex items-center">
            <motion.div
              key={roleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-deep via-purple-vibrant to-pink-500 bg-clip-text text-transparent"
            >
              {ROLES[roleIndex]}
            </motion.div>
          </div>

          {/* Biography Paragraph */}
          <p className="text-dark-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
            {PERSONAL_INFO.bioShort}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-8">
            <button
              onClick={() => scrollTo('projects')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-purple-deep via-purple-vibrant to-pink-500 hover:shadow-purple-glow hover:scale-105 active:scale-95 transition-all shadow-md group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-purple-deep bg-white/90 border border-purple-light/70 hover:bg-lavender/40 hover:border-purple-deep/40 shadow-sm transition-all group"
            >
              <FileText className="w-4 h-4 text-purple-vibrant group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold text-sm text-dark-text/80 bg-white/60 border border-white/80 hover:bg-white hover:text-purple-deep shadow-sm transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Quick Verified Social Links */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-2 border-t border-purple-light/30 w-full max-w-md">
            <span className="text-xs font-semibold text-dark-faint uppercase tracking-wider">Connect:</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-purple-deep hover:underline"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-purple-light">&bull;</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-purple-deep hover:underline"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-purple-light">&bull;</span>
            <a
              href="https://ai-zoom-meeting.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-pink-600 hover:underline"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: 3D Floating Portrait Frame with Real dp.jpg */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative perspective-1000"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Subtle Ambient Glowing Rings behind Portrait */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-soft-pink via-purple-light to-pastel-blue opacity-50 blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />

          {/* 3D Tilted Card Container */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-64 sm:w-80 md:w-88 aspect-[3/4] rounded-3xl p-3 glass-card-interactive shadow-card-lift transition-all cursor-pointer"
          >
            {/* Inner Picture Frame */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner bg-gradient-to-b from-white to-pink-50">
              <img
                src={PERSONAL_INFO.photo}
                alt="Yoga Sree S - Portrait"
                className="w-full h-full object-cover object-center filter saturate-105 hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle glass gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-text/50 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Card Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-mono font-medium tracking-widest uppercase text-soft-pink">
                  PORTFOLIO &bull; 2026
                </p>
                <h3 className="text-lg font-bold font-display drop-shadow">
                  Yoga Sree S
                </h3>
              </div>
            </div>

            {/* Floating Tech Icons Orbiting */}
            <motion.div
              className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl glass-panel flex items-center justify-center shadow-lg border border-white text-purple-deep"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              title="Python & Deep Learning"
            >
              <span className="font-bold text-sm">🐍</span>
            </motion.div>

            <motion.div
              className="absolute top-1/3 -left-5 w-11 h-11 rounded-2xl glass-panel flex items-center justify-center shadow-lg border border-white text-blue-600"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              title="React & TypeScript"
            >
              <span className="font-bold text-sm">⚛️</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-3 right-6 w-11 h-11 rounded-2xl glass-panel flex items-center justify-center shadow-lg border border-white text-pink-600"
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              title="FastAPI & Supabase"
            >
              <span className="font-bold text-sm">⚡</span>
            </motion.div>

            {/* Floating Real Achievement Badges on Tablet & Desktop */}
            {FLOATING_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  className={`hidden sm:flex absolute ${badge.position} z-20 items-center gap-2 px-3 py-2 rounded-2xl bg-gradient-to-r ${badge.color} border shadow-lg backdrop-blur-md`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.15 }}
                >
                  <div className="p-1 rounded-lg bg-white/80 shadow-xs">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-bold tracking-tight whitespace-nowrap">
                    {badge.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile Badge Chips (Clean stacked layout on phone screens) */}
          <div className="flex flex-col gap-2 mt-5 sm:hidden w-full max-w-[280px]">
            {FLOATING_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-gradient-to-r ${badge.color} border shadow-xs`}
                >
                  <div className="p-1 rounded-lg bg-white/90 shadow-xs shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold tracking-tight">
                    {badge.text}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-dark-muted hover:text-purple-deep transition-colors group cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to About Me"
      >
        <span className="text-[11px] font-bold tracking-widest uppercase">Scroll Down</span>
        <div className="w-6 h-10 rounded-full border-2 border-purple-light/80 flex items-start justify-center p-1 group-hover:border-purple-deep transition-colors">
          <motion.div
            className="w-1.5 h-2.5 rounded-full bg-purple-deep"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.button>
    </section>
  );
};

