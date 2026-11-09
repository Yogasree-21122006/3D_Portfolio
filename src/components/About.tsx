import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, Code, Cpu, Trophy, Terminal, HeartHandshake } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'philosophy' | 'toolkit'>('vision');

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavender/50 border border-purple-light/50 text-purple-deep text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-dark-text tracking-tight font-display mb-4">
            About Yoga Sree S
          </h2>
          <p className="text-dark-muted text-base sm:text-lg">
            A third-year Artificial Intelligence &amp; Data Science student combining data-centric thinking with intuitive full-stack web experiences.
          </p>
        </div>

        {/* Top Details & Identity Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-light/50 flex items-center justify-center text-purple-deep">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-dark-faint font-semibold uppercase">Degree</p>
              <h4 className="font-bold text-dark-text text-sm sm:text-base">B.Tech AIDS (3rd Year)</h4>
              <p className="text-xs text-dark-muted">Kongu Engineering College</p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-soft-pink/50 flex items-center justify-center text-pink-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-dark-faint font-semibold uppercase">Location</p>
              <h4 className="font-bold text-dark-text text-sm sm:text-base">Tamil Nadu, India</h4>
              <p className="text-xs text-dark-muted">Perundurai, Erode</p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pastel-blue/60 flex items-center justify-center text-blue-700">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-dark-faint font-semibold uppercase">Symposium Wins</p>
              <h4 className="font-bold text-dark-text text-sm sm:text-base">3x 1st Prize Winner</h4>
              <p className="text-xs text-dark-muted">Orbit, Inventa &amp; Paper Mania</p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-dark-faint font-semibold uppercase">Core Domain</p>
              <h4 className="font-bold text-dark-text text-sm sm:text-base">AI, ML &amp; WebRTC</h4>
              <p className="text-xs text-dark-muted">Full Stack Engineering</p>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left: Bio & Interactive Story Tabs */}
          <div className="lg:col-span-7 flex flex-col justify-between glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-white">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-purple-deep shrink-0" />
                <h3 className="text-lg sm:text-2xl font-bold font-display text-dark-text leading-snug">
                  Passionate Engineer, Creative Problem Solver
                </h3>
              </div>

              <blockquote className="italic text-purple-deep/90 border-l-4 border-purple-light pl-3.5 sm:pl-4 py-1.5 my-3 sm:my-4 text-xs sm:text-base font-medium bg-lavender/10 rounded-r-xl">
                &ldquo;I am an enthusiastic AI and Data Science student interested in developing intelligent systems and practical software applications. I enjoy exploring technologies, learning new frameworks, collaborating on projects and transforming innovative ideas into working solutions.&rdquo;
              </blockquote>

              <p className="text-dark-muted text-xs sm:text-base leading-relaxed mb-5 sm:mb-6 font-normal">
                {PERSONAL_INFO.aboutDetailed}
              </p>

              {/* Interactive Tabs */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 border-b border-purple-light/40 pb-2 mb-4 sm:mb-5">
                {[
                  { id: 'vision', label: 'My Vision' },
                  { id: 'philosophy', label: 'Engineering Philosophy' },
                  { id: 'toolkit', label: 'Academic Highlights' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === tab.id
                        ? 'bg-purple-deep text-white shadow-sm'
                        : 'text-dark-muted hover:text-purple-deep hover:bg-white/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="min-h-20 sm:min-h-24 text-xs sm:text-sm text-dark-muted leading-relaxed">
                {activeTab === 'vision' && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <p>
                      I aim to engineer human-centric intelligent software that solves tangible bottlenecks—from video calling systems that maintain connectivity in rural India (AI Zoom Meeting), to municipal waste management using real-time YOLO computer vision (VisionBin AI).
                    </p>
                  </motion.div>
                )}
                {activeTab === 'philosophy' && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <p>
                      AI is only as good as the system that delivers it to users. That is why I immerse myself equally in full-stack architecture (React, TypeScript, FastAPI, Supabase) and machine learning pipelines, creating cohesive end-to-end products rather than isolated scripts.
                    </p>
                  </motion.div>
                )}
                {activeTab === 'toolkit' && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <p>
                      Selected for CopterCode&apos;s R&amp;D internship; secured 1st prize accolades at KEC EEE ACME&apos;26 and EIE EAREYES 2K26; participated in the 24-hour National Level Hackathon Hack Spark 2026 at Nehru Group of Institutions.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Quick Badges Footer */}
            <div className="pt-4 sm:pt-6 border-t border-purple-light/30 flex flex-wrap gap-1.5 sm:gap-2 mt-5 sm:mt-6">
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/80 border border-purple-light/50 text-purple-deep">
                🚀 Full Stack Prototyping
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/80 border border-soft-pink text-pink-600">
                👁️ Computer Vision &amp; YOLOv8
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/80 border border-pastel-blue text-blue-700">
                📶 WebRTC &amp; Telemetry
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/80 border border-lavender text-purple-700">
                ⚡ FastAPI &amp; Supabase
              </span>
            </div>
          </div>

          {/* Right: Derived Statistic Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="glass-card-interactive p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between border border-white hover:border-purple-light transition-all group"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-deep to-pink-500" />
                  <span className="text-[11px] font-mono font-bold text-purple-deep/70">0{idx + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-extrabold font-display text-dark-text group-hover:text-purple-deep transition-colors mb-0.5 sm:mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-dark-text/90 mb-0.5">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-dark-faint leading-tight">
                    {stat.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

