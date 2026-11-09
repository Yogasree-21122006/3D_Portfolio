import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Sparkles, ExternalLink, Calendar, MapPin, ZoomIn, X, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS_DATA, Achievement } from '../data/portfolioData';

const CATEGORIES = ['All', 'Symposium 1st Prize', 'Hackathon Merit', 'Internship', 'Participation'] as const;

export const Achievements: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<Achievement | null>(null);

  const filteredAchievements = selectedCategory === 'All'
    ? ACHIEVEMENTS_DATA
    : ACHIEVEMENTS_DATA.filter(item => item.category === selectedCategory);

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold tracking-widest uppercase mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>HONORS &amp; ACCOLADES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-dark-text tracking-tight font-display mb-4">
            Achievements &amp; Certificates
          </h2>
          <p className="text-dark-muted text-base sm:text-lg">
            Verified competition wins, technical symposium first prizes, national hackathon accomplishments, and official certifications.
          </p>
        </div>

        {/* Triple Prize Spotlight Banner (AI Zoom Meeting Flagship Highlight) */}
        <div className="mb-10 sm:mb-14 glass-card-interactive p-4 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-purple-light/70 shadow-purple-glow/20 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-amber-400 to-rose-400 flex items-center justify-center text-white shadow-md shrink-0">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <span className="px-2.5 sm:px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-amber-200 text-amber-950 inline-block mb-1">
                  TRIPLE 1ST PRIZE WINNER
                </span>
                <h3 className="text-lg sm:text-2xl font-extrabold font-display text-dark-text">
                  AI Zoom Meeting &mdash; 3x 1st Prize-Winning Project
                </h3>
                <p className="text-xs sm:text-sm text-dark-muted mt-1 max-w-2xl">
                  Demonstrated live adaptive WebRTC low-bandwidth video conferencing across multiple institutional symposiums, clinching 1st Prizes at both ACME&apos;26 (Project Orbit) and EAREYES 2K26 2.0 (Project Inventa)!
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <a
                href="https://ai-zoom-meeting.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-deep to-pink-500 hover:shadow-purple-glow transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-purple-deep text-white shadow-purple-glow scale-105'
                    : 'glass-panel text-dark-text/80 hover:text-purple-deep hover:bg-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredAchievements.map((item: Achievement) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-panel rounded-3xl p-5 border border-white hover:border-purple-light/80 shadow-sm flex flex-col justify-between group cursor-pointer"
                onClick={() => setActiveModalItem(item)}
              >
                <div>
                  {/* Certificate Thumbnail Preview */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-purple-50/70 border border-purple-light/30 mb-4 group-hover:shadow-md transition-shadow">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Hover Inspect Pill */}
                    <div className="absolute inset-0 bg-dark-text/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-xs font-bold text-purple-deep shadow-md">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Inspect Certificate</span>
                      </span>
                    </div>

                    {/* Badge Top Left */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-purple-deep border border-purple-light shadow-sm">
                        {item.awardBadge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="font-bold text-dark-text text-base sm:text-lg group-hover:text-purple-deep transition-colors mb-1 line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-purple-deep/90 mb-2">
                    {item.organization}
                  </p>

                  <p className="text-xs text-dark-muted leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Footer Date & Status */}
                <div className="pt-3 border-t border-purple-light/30 flex items-center justify-between text-xs text-dark-faint">
                  <div className="flex items-center gap-1 font-mono text-[11px]">
                    <Calendar className="w-3 h-3 text-purple-deep" />
                    <span>{item.date}</span>
                  </div>
                  <span className="font-semibold text-purple-deep hover:underline text-[11px] flex items-center gap-0.5">
                    <span>View Proof</span>
                    <ZoomIn className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Fullscreen Certificate & Achievement Lightbox */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 lg:p-8 bg-dark-text/70 backdrop-blur-md overflow-y-auto">
            <motion.div
              className="relative max-w-4xl w-full bg-gradient-to-b from-[#FFF8FA] to-[#FFF1F5] rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl border border-white z-10 max-h-[92vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 p-1.5 sm:p-2 rounded-full bg-white/80 border border-purple-light/50 text-dark-text hover:text-purple-deep hover:bg-white transition-all shadow-sm z-20"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start">
                
                {/* Certificate High-Res Preview */}
                <div className="md:col-span-7 flex flex-col items-center">
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-purple-light/60 shadow-lg bg-white w-full max-h-[48vh] sm:max-h-[65vh] flex items-center justify-center">
                    <img
                      src={activeModalItem.image}
                      alt={activeModalItem.title}
                      className="max-h-[48vh] sm:max-h-[65vh] w-full object-contain"
                    />
                  </div>

                  {/* Secondary Stage or Venue Image if available */}
                  {activeModalItem.stageImage && (
                    <div className="w-full mt-3 p-2.5 rounded-xl bg-purple-50/60 border border-purple-light/40 flex items-center gap-3">
                      <img
                        src={activeModalItem.stageImage}
                        alt="Event Context"
                        className="w-16 h-12 object-cover rounded-lg border"
                      />
                      <div className="text-left">
                        <p className="text-[11px] font-bold text-purple-deep">Event Context &amp; Award Felicitation</p>
                        <p className="text-[10px] text-dark-muted">Verified stage/hackathon photo with dignitaries</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Achievement Details */}
                <div className="md:col-span-5 flex flex-col justify-between h-full space-y-4">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 inline-block mb-2">
                      {activeModalItem.awardBadge}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-extrabold font-display text-dark-text mb-1">
                      {activeModalItem.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-bold text-purple-deep mb-1">
                      {activeModalItem.organization}
                    </p>

                    {activeModalItem.department && (
                      <p className="text-xs text-dark-muted mb-3">
                        {activeModalItem.department}
                      </p>
                    )}

                    <div className="p-3 rounded-xl bg-white/70 border border-purple-light/30 mb-4 text-xs font-mono text-dark-faint flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-purple-deep" />
                      <span>Date: {activeModalItem.date}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-dark-muted leading-relaxed mb-4">
                      {activeModalItem.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold text-dark-faint uppercase tracking-wider mb-2">
                        Key Accomplishment Highlights
                      </h4>
                      <div className="space-y-1.5">
                        {activeModalItem.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-dark-text/90 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-purple-light/30 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Verified Document</span>
                    </span>

                    <button
                      onClick={() => setActiveModalItem(null)}
                      className="px-4 py-1.5 rounded-full text-xs font-bold text-dark-text bg-white border border-purple-light hover:bg-purple-light/30 transition-colors"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

