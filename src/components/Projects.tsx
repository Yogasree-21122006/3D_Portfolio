import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ExternalLink, Github, ArrowUpRight, Search, Trophy, CheckCircle, Code } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

const CATEGORIES = ['All', 'AI/ML', 'Full Stack', 'Computer Vision'] as const;

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Filter projects by category and search
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-pink/50 border border-soft-pink text-purple-deep text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-dark-text tracking-tight font-display mb-4">
            Featured Projects &amp; Systems
          </h2>
          <p className="text-dark-muted text-base sm:text-lg">
            Real implementations solving practical engineering problems—from computer vision pipelines to resilient WebRTC systems and enterprise web platforms.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
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

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-dark-faint absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full text-xs sm:text-sm bg-white/80 border border-purple-light/50 focus:outline-none focus:border-purple-deep transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project: Project) => {
              const isFlagship = project.id === 'ai-zoom-meeting';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`glass-panel rounded-3xl p-6 flex flex-col justify-between border transition-all relative group overflow-hidden ${
                    isFlagship
                      ? 'border-purple-light shadow-purple-glow/20 bg-gradient-to-b from-white/95 to-purple-50/40 md:col-span-2 lg:col-span-1'
                      : 'border-white/80 hover:border-purple-light/70 shadow-sm'
                  }`}
                >
                  {/* Top Badge Banner */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-purple-light/40 text-purple-deep border border-purple-light/60">
                      {project.category}
                    </span>

                    {project.badge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                        <Trophy className="w-3 h-3 text-amber-600" />
                        <span>{project.badge}</span>
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div>
                    <h3 className="text-xl font-bold font-display text-dark-text group-hover:text-purple-deep transition-colors mb-1.5 flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-purple-light group-hover:text-purple-deep group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>

                    <p className="text-xs font-semibold text-purple-deep/90 mb-3 line-clamp-1">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-dark-muted leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Metrics preview if available */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mb-4 bg-white/60 p-2.5 rounded-xl border border-purple-light/20">
                        {project.metrics.slice(0, 2).map((m, idx) => (
                          <div key={idx} className="text-center">
                            <span className="text-[10px] text-dark-faint block">{m.label}</span>
                            <span className="text-xs font-bold text-purple-deep">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/80 border border-purple-light/40 text-dark-text/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold text-dark-faint">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-4 border-t border-purple-light/30 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-3.5 py-1.5 rounded-full text-xs font-bold text-purple-deep bg-lavender/40 hover:bg-purple-light/50 transition-colors"
                    >
                      Deep Dive &amp; Details
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full text-dark-text/70 hover:text-dark-text hover:bg-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-deep to-pink-500 hover:shadow-purple-glow transition-all"
                          title="Open Live App"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-dark-muted text-sm font-medium">
              No projects found matching &ldquo;{searchQuery}&rdquo;. Try another filter.
            </p>
          </div>
        )}

      </div>

      {/* Expandable Project Deep Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

