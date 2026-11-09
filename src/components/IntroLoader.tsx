import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FastForward, Sparkles, Zap } from 'lucide-react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isWarping, setIsWarping] = useState(false);
  const completedRef = useRef(false);

  useEffect(() => {
    // Respect user's reduced motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      onComplete();
      return;
    }

    const startTime = performance.now();
    const sprintDuration = 4200; // 4.2s high-speed sprint
    const totalDuration = 5000;  // 5.0s total until portfolio reveal

    let animationFrameId: number;
    let lastProgressTick = 0;

    const tick = (now: number) => {
      if (completedRef.current) return;

      const elapsed = now - startTime;

      // 0% -> 100% smooth calculation with subtle acceleration curve
      const sprintProgress = Math.min(1, elapsed / sprintDuration);
      // Ease in-out quad curve for realistic sprint acceleration
      const easeProgress = sprintProgress < 0.5
        ? 2 * sprintProgress * sprintProgress
        : 1 - Math.pow(-2 * sprintProgress + 2, 2) / 2;

      const currentPct = Math.min(100, Math.round(easeProgress * 100));

      if (now - lastProgressTick > 40 || currentPct === 100) {
        lastProgressTick = now;
        setProgress(currentPct);
      }

      if (elapsed >= sprintDuration && !isWarping) {
        setIsWarping(true);
      }

      if (elapsed >= totalDuration) {
        completedRef.current = true;
        onComplete();
        return;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete, isWarping]);

  const handleSkip = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!completedRef.current) {
      completedRef.current = true;
      onComplete();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF1F5] via-[#FCE7F3] to-[#E9D5FF] overflow-hidden select-none cursor-pointer"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        onClick={handleSkip}
      >
        {/* Rapid Horizontal Speed Wind Lines (Simulating High-Speed Velocity) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 rounded-full bg-gradient-to-r from-transparent via-purple-deep/40 to-transparent anim-wind-fast transform-gpu"
              style={{
                top: `${(i + 1) * 6.5}%`,
                width: `${140 + (i % 4) * 60}px`,
                animationDuration: `${0.28 + (i % 3) * 0.08}s`,
                animationDelay: `${(i * 0.04)}s`,
                opacity: 0.35 + (i % 3) * 0.2,
              }}
            />
          ))}
        </div>

        {/* Top Floating Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-panel text-xs sm:text-sm font-bold text-dark-text/80 hover:text-purple-deep hover:border-purple-light transition-all shadow-sm group bg-white/85"
          aria-label="Skip Introduction"
        >
          <span>Skip Sprint</span>
          <FastForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Click to skip hint */}
        <div className="absolute bottom-4 sm:bottom-5 z-30 text-[10px] font-bold text-dark-faint tracking-widest uppercase opacity-75 text-center px-4">
          Tap anywhere to skip directly
        </div>

        {/* Central Sprint Stage */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg px-3 sm:px-4 transform-gpu">
          
          {/* Top Status Header */}
          <div className="flex items-center justify-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/90 border border-purple-light/70 shadow-sm text-[11px] sm:text-xs font-bold text-purple-deep mb-2 sm:mb-3 text-center max-w-full">
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse shrink-0" />
            <span className="tracking-wide uppercase truncate">FULL SPRINT TO PORTFOLIO &bull; YOGA SREE S</span>
          </div>

          <p className="text-[11px] sm:text-xs font-semibold text-dark-muted mb-3 sm:mb-4 tracking-wider uppercase font-mono text-center">
            Kongu Engineering College &bull; AI &amp; Data Science
          </p>

          {/* SPRINTING GIRL CHARACTER CONTAINER */}
          <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-56 sm:h-64 md:h-72 flex items-center justify-center my-1 overflow-visible">
            
            {/* Ground Speed Perspective Runway */}
            <div className="absolute -bottom-1 w-full max-w-[320px] sm:max-w-sm h-12 sm:h-14 overflow-hidden pointer-events-none opacity-60">
              <div className="relative w-full h-full">
                {[0, 1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className="absolute h-0.5 bg-gradient-to-r from-transparent via-purple-600/60 to-transparent w-full"
                    style={{
                      top: `${idx * 28}%`,
                      animation: `moveLine 0.4s linear infinite`,
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Ghost Speed Dash Trail 2 (Faintest silhouette behind) */}
            <div className="absolute -left-6 sm:-left-10 opacity-20 pointer-events-none filter blur-[1px] transform scale-90 translate-x-2">
              <svg width="150" height="180" viewBox="0 0 220 220" fill="none" className="transform rotate-12">
                <path d="M 60 70 L 140 100 L 90 180 Z" fill="#C4B5FD" />
              </svg>
            </div>

            {/* Ghost Speed Dash Trail 1 (Lavender silhouette behind) */}
            <div className="absolute -left-3 sm:-left-5 opacity-35 pointer-events-none filter blur-[0.5px] transform scale-95">
              <svg width="150" height="180" viewBox="0 0 220 220" fill="none" className="transform rotate-14">
                <path d="M 70 70 L 150 100 L 100 180 Z" fill="#FBCFE8" />
              </svg>
            </div>

            {/* MAIN FULL-SPEED SPRINT RIG */}
            <div className={`relative anim-sprint-bounce flex flex-col items-center transform-gpu ${isWarping ? 'scale-110 sm:scale-125 transition-transform duration-500' : ''}`}>
              <svg
                width="170"
                height="195"
                viewBox="0 0 220 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="filter drop-shadow-md transform-gpu w-40 sm:w-48 h-auto"
              >
                <defs>
                  {/* Dynamic Neon & Pastel Gradients */}
                  <linearGradient id="sprintJacket" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C4B5FD" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>

                  <linearGradient id="sprintSkin" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FBD5B5" />
                    <stop offset="100%" stopColor="#F5B98A" />
                  </linearGradient>

                  <linearGradient id="sprintHair" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1E1B4B" />
                    <stop offset="60%" stopColor="#2E1065" />
                    <stop offset="100%" stopColor="#4C1D95" />
                  </linearGradient>

                  <linearGradient id="sprintShorts" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#312E81" />
                    <stop offset="100%" stopColor="#1E1B4B" />
                  </linearGradient>

                  <linearGradient id="sneakerGlow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#F43F5E" />
                  </linearGradient>
                </defs>

                {/* Back Arm (Sprinter pump back) */}
                <g className="anim-sprint-arm-back" style={{ transformOrigin: '110px 88px' }}>
                  <path d="M 110 88 L 80 115 L 65 95" stroke="url(#sprintJacket)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="63" cy="93" r="7.5" fill="url(#sprintSkin)" />
                </g>

                {/* Back Leg (Full explosive extension) */}
                <g className="anim-sprint-leg-back" style={{ transformOrigin: '105px 135px' }}>
                  {/* Thigh */}
                  <path d="M 105 135 L 75 165 L 50 185" stroke="url(#sprintShorts)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Calve / Lower Leg */}
                  <path d="M 75 165 L 48 188" stroke="url(#sprintSkin)" strokeWidth="12" strokeLinecap="round" />
                  {/* Back Sprint Sneaker */}
                  <path d="M 45 186 L 32 192 L 40 200 L 52 194 Z" fill="url(#sneakerGlow)" />
                  <path d="M 33 191 L 51 193" stroke="#8B5CF6" strokeWidth="2.5" />
                </g>

                {/* Front Leg (High knee drive forward) */}
                <g className="anim-sprint-leg-front" style={{ transformOrigin: '120px 135px' }}>
                  {/* Thigh pulled high forward */}
                  <path d="M 120 135 L 155 150 L 140 190" stroke="url(#sprintShorts)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Calve / Lower Leg */}
                  <path d="M 155 150 L 142 192" stroke="url(#sprintSkin)" strokeWidth="12" strokeLinecap="round" />
                  {/* Front Sprint Sneaker striking down */}
                  <path d="M 136 190 L 158 196 L 154 205 L 132 201 Z" fill="url(#sneakerGlow)" />
                  <path d="M 133 199 L 157 202" stroke="#8B5CF6" strokeWidth="2.5" />
                </g>

                {/* Aerodynamic Forward-Leaning Torso */}
                <g>
                  {/* Athletic Sprinter Jacket / Hoodie */}
                  <path d="M 98 78 L 138 88 L 122 142 L 95 136 Z" fill="url(#sprintJacket)" />
                  
                  {/* Neon Speed Accents on Jacket */}
                  <path d="M 104 84 L 130 92 L 120 138" stroke="#E9D5FF" strokeWidth="2" fill="none" opacity="0.8" />
                  
                  {/* CopterCode ID Badge flying back in the wind */}
                  <path d="M 112 85 L 98 105" stroke="#E9D5FF" strokeWidth="2" strokeDasharray="2 2" />
                  <rect x="90" y="102" width="10" height="13" rx="2" fill="#3B82F6" transform="rotate(-15 90 102)" />
                </g>

                {/* Front Arm (Pumping up aggressively) */}
                <g className="anim-sprint-arm-front" style={{ transformOrigin: '130px 92px' }}>
                  <path d="M 130 92 L 160 115 L 175 92" stroke="url(#sprintJacket)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="177" cy="90" r="7.5" fill="url(#sprintSkin)" />
                </g>

                {/* Neck */}
                <path d="M 120 74 L 132 78 L 128 88 L 118 84 Z" fill="url(#sprintSkin)" />

                {/* Head, Face & Streaming Ponytail */}
                <g>
                  {/* Head Oval (tilted forward in sprint focus) */}
                  <ellipse cx="134" cy="62" rx="19" ry="21" fill="url(#sprintSkin)" />

                  {/* Yoga Sree's Sleek Glasses */}
                  <rect x="126" y="56" width="12" height="9" rx="2.5" fill="rgba(196, 181, 253, 0.4)" stroke="#4C1D95" strokeWidth="2" />
                  <rect x="142" y="58" width="12" height="9" rx="2.5" fill="rgba(196, 181, 253, 0.4)" stroke="#4C1D95" strokeWidth="2" />
                  <path d="M 138 60 L 142 61" stroke="#4C1D95" strokeWidth="2" />

                  {/* Focused Sprint Eyes */}
                  <circle cx="133" cy="60" r="2.2" fill="#1E1B4B" />
                  <circle cx="148" cy="62" r="2.2" fill="#1E1B4B" />
                  <circle cx="134" cy="59" r="0.8" fill="#FFFFFF" />
                  <circle cx="149" cy="61" r="0.8" fill="#FFFFFF" />

                  {/* Rosy Cheeks */}
                  <ellipse cx="128" cy="67" rx="3.5" ry="2" fill="#FDA4AF" opacity="0.7" />
                  <ellipse cx="152" cy="69" rx="3.5" ry="2" fill="#FDA4AF" opacity="0.7" />

                  {/* Confident Smile */}
                  <path d="M 136 69 Q 142 75 147 70" stroke="#881337" strokeWidth="2" strokeLinecap="round" fill="none" />

                  {/* Bangs Hair */}
                  <path d="M 120 54 C 122 40 134 38 146 42 C 158 46 160 54 156 64 C 150 56 142 54 135 55 C 126 56 122 58 120 54 Z" fill="url(#sprintHair)" />

                  {/* STREAMING SPRINT PONYTAIL (Blown straight back in high wind) */}
                  <g className="anim-sprint-hair">
                    <path
                      d="M 124 50 C 95 44 60 52 20 62 C 55 58 90 60 118 58 Z"
                      fill="url(#sprintHair)"
                    />
                    <path
                      d="M 122 52 C 85 48 45 62 10 75 C 50 68 85 68 116 60 Z"
                      fill="url(#sprintHair)"
                      opacity="0.9"
                    />
                    {/* Pink Hair Tie / Ribbon */}
                    <circle cx="124" cy="52" r="4.5" fill="#F43F5E" />
                  </g>
                </g>
              </svg>

              {/* Dynamic Sprint Ground Shadow */}
              <div className="w-32 h-3.5 bg-purple-950/25 rounded-full blur-xs anim-shadow-pulse -mt-1 transform-gpu" />
            </div>

          </div>

          {/* SPRINT HUD / 0% TO 100% PROGRESS COUNTER */}
          <div className="w-full max-w-[320px] sm:max-w-sm flex flex-col items-center mt-2 sm:mt-3 bg-white/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-white/90 shadow-glass">
            
            <div className="w-full flex items-center justify-between text-xs font-bold text-dark-text mb-1.5 sm:mb-2 px-1">
              <span className="flex items-center gap-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-purple-deep">
                <Sparkles className="w-3 h-3 text-pink-500 animate-spin-slow shrink-0" />
                <span>Sprint Velocity</span>
              </span>
              
              {/* Bold Glowing Numeric Counter */}
              <div className="flex items-baseline gap-0.5">
                <span className="text-xl sm:text-3xl font-black font-display text-purple-deep tracking-tight drop-shadow-xs">
                  {progress}
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-pink-600">%</span>
              </div>
            </div>

            {/* Glowing High-Speed Progress Bar */}
            <div className="w-full h-3.5 rounded-full bg-purple-100/80 border border-purple-light/80 p-0.5 shadow-inner overflow-hidden relative">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pink-400 via-purple-light to-purple-deep transition-all duration-100 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                {/* Glowing light pulse at leading edge */}
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-white rounded-full shadow-soft-glow" />
              </div>
            </div>

            <div className="w-full flex items-center justify-between mt-2.5 text-[10px] font-bold text-dark-faint tracking-wider uppercase font-mono">
              <span>0% INITIALIZE</span>
              <span className="text-purple-deep font-extrabold">
                {progress < 100 ? 'ACCELERATING...' : 'READY!'}
              </span>
              <span>100% LAUNCH</span>
            </div>
          </div>

        </div>

        {/* Warp Flash on 100% completion */}
        {isWarping && (
          <motion.div
            className="absolute inset-0 bg-white/40 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 0.6 }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};
