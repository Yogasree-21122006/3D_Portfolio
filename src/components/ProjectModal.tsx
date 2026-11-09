import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Sparkles, Check, Cpu, Layers, Trophy } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open and handle Escape key
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-dark-text/40 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-4xl bg-gradient-to-b from-[#FFF8FA] to-[#FFF1F5] rounded-2xl sm:rounded-3xl shadow-2xl border border-white/90 overflow-hidden z-10 max-h-[92vh] flex flex-col"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-purple-light/40 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-light/60 text-purple-deep border border-purple-light">
                {project.category}
              </span>
              {project.badge && (
                <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                  <Trophy className="w-3 h-3 text-amber-600" />
                  <span>{project.badge}</span>
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-white/80 border border-purple-light/50 text-dark-muted hover:text-purple-deep hover:bg-white transition-all"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
            
            {/* Project Title & Subtitle */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-dark-text mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-purple-deep">
                {project.subtitle}
              </p>
            </div>

            {/* Optional Image or Visual Banner */}
            {project.image && (
              <div className="rounded-2xl overflow-hidden border border-purple-light/50 shadow-sm max-h-72 bg-purple-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

            {/* Key Verified Metrics (e.g. ConstructML R², AI Zoom 3x awards) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="glass-panel p-3.5 rounded-2xl border border-white text-center">
                    <span className="text-[11px] font-semibold text-dark-faint uppercase block mb-0.5">
                      {metric.label}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-purple-deep font-display">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Problem Statement & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/60">
                <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>Problem Statement</span>
                </h4>
                <p className="text-xs sm:text-sm text-dark-muted leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/60">
                <h4 className="text-xs font-bold text-purple-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-deep" />
                  <span>Proposed Solution</span>
                </h4>
                <p className="text-xs sm:text-sm text-dark-muted leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div>
              <h4 className="text-sm font-bold text-dark-text uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-vibrant" />
                <span>Key Features &amp; Implementation Details</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 border border-purple-light/30">
                    <div className="p-0.5 rounded-full bg-purple-100 text-purple-deep mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-dark-text/90 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Yoga Sree's Contribution */}
            <div className="p-4 rounded-2xl bg-lavender/30 border border-purple-light/50">
              <h4 className="text-xs font-bold text-purple-deep uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-purple-deep" />
                <span>My Contribution</span>
              </h4>
              <p className="text-xs sm:text-sm text-dark-muted leading-relaxed">
                {project.contribution}
              </p>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs font-bold text-dark-faint uppercase tracking-wider mb-2.5">
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-purple-light/50 text-dark-text shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action Links */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 border-t border-purple-light/40 bg-white/90 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sticky bottom-0">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-dark-text text-white hover:bg-black transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View GitHub Repository</span>
              </a>

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-deep to-pink-500 hover:shadow-purple-glow transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-semibold text-dark-muted hover:text-dark-text hover:bg-white transition-colors text-center"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

