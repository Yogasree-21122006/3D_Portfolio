import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-blue/50 border border-pastel-blue text-blue-900 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-dark-text tracking-tight font-display mb-4">
            Education Journey
          </h2>
          <p className="text-dark-muted text-base sm:text-lg">
            Undergraduate training at Kongu Engineering College emphasizing algorithms, machine learning, data engineering, and modern software architectures.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/90 shadow-glass relative overflow-hidden"
            >
              {/* Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-light/30 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-deep to-pink-500 flex items-center justify-center text-white shadow-md shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold bg-purple-light/50 text-purple-deep uppercase tracking-wider inline-block mb-1">
                      {edu.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-dark-text">
                      {edu.institution}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-purple-deep mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs font-semibold text-dark-muted">
                  <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-xl border border-purple-light/30">
                    <Calendar className="w-3.5 h-3.5 text-purple-deep" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-dark-faint mt-1">
                    <MapPin className="w-3 h-3 text-pink-600" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Coursework & Focus Areas */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-dark-faint uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-deep" />
                  <span>Key Coursework &amp; Academic Focus</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {edu.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/60 border border-purple-light/20">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-dark-text/90 font-medium leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Highlights Footer */}
              <div className="p-4 rounded-2xl bg-lavender/30 border border-purple-light/40 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-dark-text">
                    Department of Artificial Intelligence &amp; Data Science (AIDS)
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-purple-deep">
                  Autonomous Institution &bull; Accredited with &apos;A++&apos; Grade by NAAC
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

