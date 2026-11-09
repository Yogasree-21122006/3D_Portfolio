import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Copy, Check, Download, ExternalLink, Sparkles, Award, Briefcase, GraduationCap } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
${RESUME_DATA.name}
${RESUME_DATA.title}
Email: ${RESUME_DATA.contact.email} | Location: ${RESUME_DATA.contact.location}
GitHub: ${RESUME_DATA.contact.github}
LinkedIn: ${RESUME_DATA.contact.linkedin}

OBJECTIVE:
${RESUME_DATA.objective}

EDUCATION:
${RESUME_DATA.education.map(e => `${e.degree} - ${e.institution} (${e.period})`).join('\n')}

EXPERIENCE:
${RESUME_DATA.experience.map(exp => `${exp.role} @ ${exp.company} (${exp.period})\n${exp.bullets.map(b => `- ${b}`).join('\n')}`).join('\n\n')}

AWARDS & HONORS:
${RESUME_DATA.awards.map(a => `${a.title} - ${a.organization} (${a.date})\n  ${a.desc}`).join('\n')}

TECHNICAL SKILLS:
- Programming: ${RESUME_DATA.skills.programming.join(', ')}
- AI & ML: ${RESUME_DATA.skills.ai_ml.join(', ')}
- Web & Backend: ${RESUME_DATA.skills.web.join(', ')}
- Databases: ${RESUME_DATA.skills.databases.join(', ')}
- Tools: ${RESUME_DATA.skills.tools.join(', ')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 lg:p-8 bg-dark-text/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          className="relative max-w-4xl w-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-white overflow-hidden max-h-[92vh] flex flex-col z-10"
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
        >
          {/* Top Bar with Print & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-purple-50 via-pink-50 to-white border-b border-purple-light/40 sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-purple-deep" />
              <span className="font-display font-bold text-xs sm:text-sm text-dark-text">
                Yoga Sree S &mdash; Resume
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={handleCopyText}
                className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-white border border-purple-light/50 text-dark-text hover:bg-purple-50 transition-all shadow-xs"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-purple-deep" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-white bg-purple-deep hover:bg-purple-vibrant transition-all shadow-sm"
              >
                <Printer className="w-3 h-3" />
                <span>PDF / Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-1 rounded-full text-dark-muted hover:text-dark-text hover:bg-white transition-all ml-0.5"
                aria-label="Close resume"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Canvas */}
          <div className="overflow-y-auto p-4 sm:p-6 sm:p-10 space-y-4 sm:space-y-6 text-dark-text select-text print:p-0">
            
            {/* Header */}
            <div className="text-center pb-4 sm:pb-6 border-b border-purple-light/40">
              <h1 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-dark-text mb-1">
                {RESUME_DATA.name}
              </h1>
              <p className="text-xs sm:text-base font-semibold text-purple-deep mb-2 sm:mb-3">
                {RESUME_DATA.title}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-4 gap-y-1 text-[11px] sm:text-xs text-dark-muted font-medium">
                <span className="break-all">{RESUME_DATA.contact.email}</span>
                <span>&bull;</span>
                <span>{RESUME_DATA.contact.location}</span>
                <span>&bull;</span>
                <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="text-purple-deep hover:underline">
                  LinkedIn
                </a>
                <span>&bull;</span>
                <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer" className="text-purple-deep hover:underline">
                  GitHub
                </a>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-deep border-b border-purple-light/30 pb-1 mb-2">
                Professional Summary &amp; Objective
              </h3>
              <p className="text-xs sm:text-sm text-dark-muted leading-relaxed">
                {RESUME_DATA.objective}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-deep border-b border-purple-light/30 pb-1 mb-3">
                Education
              </h3>
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <h4 className="font-bold text-dark-text">{edu.degree}</h4>
                    <p className="text-dark-muted">{edu.institution}</p>
                  </div>
                  <span className="font-mono text-dark-faint text-xs font-semibold">{edu.period}</span>
                </div>
              ))}
            </div>

            {/* Internship Experience */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-deep border-b border-purple-light/30 pb-1 mb-3">
                Industry Experience
              </h3>
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-start text-xs sm:text-sm">
                    <div>
                      <h4 className="font-bold text-dark-text">{exp.role}</h4>
                      <p className="text-purple-deep font-semibold">{exp.company} &bull; {exp.location}</p>
                    </div>
                    <span className="font-mono text-dark-faint text-xs font-semibold">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-dark-muted">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Technical Projects */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-deep border-b border-purple-light/30 pb-1 mb-3">
                Key Technical Projects
              </h3>
              <div className="space-y-3">
                {RESUME_DATA.keyProjects.map((p, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-xs sm:text-sm text-dark-text">{p.name}</h4>
                      <span className="text-[11px] font-mono text-purple-deep/90">{p.tech}</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-dark-muted">
                      {p.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Honors */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-deep border-b border-purple-light/30 pb-1 mb-2">
                Honors &amp; Awards
              </h3>
              <div className="space-y-2">
                {RESUME_DATA.awards.map((a, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-dark-text">{a.title}</span>
                      <span className="font-mono text-dark-faint text-[11px]">{a.date}</span>
                    </div>
                    <p className="text-dark-muted">{a.organization} &mdash; {a.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-deep border-b border-purple-light/30 pb-1 mb-2">
                Technical Skills
              </h3>
              <div className="text-xs space-y-1 text-dark-muted">
                <p><strong className="text-dark-text">Programming:</strong> {RESUME_DATA.skills.programming.join(', ')}</p>
                <p><strong className="text-dark-text">AI &amp; Machine Learning:</strong> {RESUME_DATA.skills.ai_ml.join(', ')}</p>
                <p><strong className="text-dark-text">Web &amp; Backend:</strong> {RESUME_DATA.skills.web.join(', ')}</p>
                <p><strong className="text-dark-text">Databases:</strong> {RESUME_DATA.skills.databases.join(', ')}</p>
                <p><strong className="text-dark-text">Tools:</strong> {RESUME_DATA.skills.tools.join(', ')}</p>
              </div>
            </div>

          </div>

          {/* Footer Notice */}
          <div className="px-6 py-3 bg-purple-50/50 border-t border-purple-light/30 flex items-center justify-between text-xs text-dark-faint">
            <span>Verified Portfolio &bull; Kongu Engineering College</span>
            <button onClick={onClose} className="font-semibold text-purple-deep hover:underline">
              Close Resume
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

