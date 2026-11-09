import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ExternalLink, Image as ImageIcon, X } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-mesh-pattern">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavender/50 border border-purple-light/50 text-purple-deep text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INDUSTRY WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-dark-text tracking-tight font-display mb-4">
            Internship &amp; Experience
          </h2>
          <p className="text-dark-muted text-base sm:text-lg">
            Practical full-stack product engineering delivering live production software for enterprise requirements.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/90 shadow-glass relative overflow-hidden"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-purple-light/30 mb-4 sm:mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-purple-deep text-white shadow-xs">
                      {exp.type}
                    </span>
                    <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-white/80 border border-purple-light/50 text-purple-deep">
                      {exp.organization}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-extrabold font-display text-dark-text">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-dark-muted">
                  <div className="flex items-center gap-1.5 bg-white/70 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-purple-light/30">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-deep" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/70 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-purple-light/30">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-600" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary Description */}
              <div className="mb-6">
                <p className="text-sm sm:text-base text-dark-muted leading-relaxed font-normal">
                  {exp.summary}
                </p>
              </div>

              {/* Live Project Spotlight */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-50/70 via-pink-50/50 to-white/80 border border-purple-light/50 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-purple-deep" />
                  <h4 className="font-bold text-sm sm:text-base text-purple-deep">
                    Live Project: {exp.liveProjectName}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-dark-muted leading-relaxed mb-3">
                  {exp.liveProjectDescription}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white border border-purple-light/50 text-dark-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-dark-faint uppercase tracking-wider mb-3">
                  Key Responsibilities &amp; Deliverables
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/60 border border-purple-light/20">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-dark-text/90 font-medium">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photographic & Certificate Verification Gallery */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-dark-faint uppercase tracking-wider flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-purple-deep" />
                    <span>Internship Proof &amp; Media Gallery (Click to Inspect)</span>
                  </h4>
                  <span className="text-[11px] text-purple-deep font-semibold">4 Verified Photos</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {exp.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedImage(img)}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-purple-light/50 shadow-sm cursor-pointer bg-white"
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-text/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                        <p className="text-[11px] font-semibold text-white leading-tight line-clamp-2">
                          {img.caption}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Internship Images */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-text/60 backdrop-blur-md">
            <motion.div
              className="relative max-w-3xl w-full bg-white rounded-3xl p-4 shadow-2xl border border-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-dark-text/80 text-white hover:bg-black transition-colors z-10"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden max-h-[75vh] flex items-center justify-center bg-purple-50/50 mb-3">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.caption}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="px-2 pb-1">
                <p className="text-xs sm:text-sm font-semibold text-dark-text">
                  {selectedImage.caption}
                </p>
                <p className="text-[11px] text-dark-faint">
                  Verified CopterCode Full Stack Developer Internship Artifact
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

