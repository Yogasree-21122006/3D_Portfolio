import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Code2,
  Coffee,
  Database,
  Brain,
  Cpu,
  ScanFace,
  MessageSquare,
  Flame,
  Target,
  Eye,
  Component,
  FileCode,
  Palette,
  Zap,
  Layout,
  Server,
  Network,
  Leaf,
  Layers,
  DatabaseZap,
  HardDrive,
  GitBranch,
  Github,
  Laptop,
  BookOpen,
  Cloud,
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Coffee,
  Database,
  Brain,
  Cpu,
  ScanFace,
  MessageSquare,
  Flame,
  Target,
  Eye,
  Component,
  FileCode,
  Palette,
  Zap,
  Layout,
  Server,
  Network,
  Leaf,
  Layers,
  DatabaseZap,
  HardDrive,
  GitBranch,
  Github,
  Laptop,
  BookOpen,
  Cloud,
  Terminal,
};

const CATEGORIES = [
  'All',
  'Programming',
  'AI & Machine Learning',
  'Frontend',
  'Backend',
  'Database',
  'Tools',
] as const;

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-mesh-pattern">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-light/50 border border-purple-light text-purple-deep text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-dark-text tracking-tight font-display mb-4">
            Skills &amp; Technology Stack
          </h2>
          <p className="text-dark-muted text-base sm:text-lg">
            Practical skills verified through academic projects, an industrial full-stack internship at CopterCode, and award-winning hackathon prototypes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-sm font-bold transition-all ${
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

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill: SkillItem) => {
              const IconComponent = ICON_MAP[skill.icon] || Code2;
              
              // Dynamic tag colors based on experience level
              let badgeColor = "bg-purple-100 text-purple-700 border-purple-200";
              if (skill.level === "Production / Internship") {
                badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-200";
              } else if (skill.level === "Academic & Exploring") {
                badgeColor = "bg-amber-100 text-amber-800 border-amber-200";
              }

              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card-interactive p-5 rounded-2xl border border-white hover:border-purple-light/70 shadow-sm flex flex-col justify-between group cursor-default"
                >
                  <div>
                    {/* Header: Icon & Category */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-purple-light/40 flex items-center justify-center text-purple-deep group-hover:scale-110 group-hover:bg-purple-deep group-hover:text-white transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-dark-faint">
                        {skill.category}
                      </span>
                    </div>

                    {/* Skill Name */}
                    <h3 className="font-bold text-dark-text text-base group-hover:text-purple-deep transition-colors mb-1.5 flex items-center gap-1.5">
                      <span>{skill.name}</span>
                      {skill.level === "Production / Internship" && (
                        <span title="Used in CopterCode Internship">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                        </span>
                      )}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-dark-muted leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Experience Level Pill */}
                  <div className="pt-3 border-t border-purple-light/20 flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${badgeColor}`}>
                      {skill.level}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Note on Experience Categorization */}
        <div className="mt-12 text-center">
          <p className="text-xs text-dark-faint font-medium">
            💡 Skills are categorized transparently by hands-on project implementations and industrial internship experience at CopterCode without synthetic percentages.
          </p>
        </div>

      </div>
    </section>
  );
};
