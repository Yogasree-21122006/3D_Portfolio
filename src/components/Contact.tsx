import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Send, Sparkles, ExternalLink, Github, Linkedin, MessageSquare, CheckCircle, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email format.';
    }
    if (!formData.message.trim()) errors.message = 'Please enter a message.';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulate submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#7C3AED', '#FBCFE8', '#C4B5FD', '#BFDBFE'],
        });
      }, 800);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-pink/50 border border-soft-pink text-purple-deep text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-dark-text tracking-tight font-display mb-4">
            Get in Touch
          </h2>
          <p className="text-dark-muted text-base sm:text-lg">
            I am actively seeking software engineering internships, research collaborations, and full-stack/AI developer opportunities.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white shadow-sm">
              <h3 className="text-xl font-bold font-display text-dark-text mb-2">
                Connect Directly
              </h3>
              <p className="text-xs sm:text-sm text-dark-muted leading-relaxed mb-6">
                Feel free to email me, review my GitHub repositories, or connect on LinkedIn. I reply promptly to recruiters and peers.
              </p>

              {/* Email Pill with Copy Button */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-light/50 flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-purple-deep text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-bold text-dark-faint uppercase block">Direct Email</span>
                    <span className="text-xs sm:text-sm font-bold text-dark-text truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full text-xs font-bold bg-white border border-purple-light text-purple-deep hover:bg-purple-deep hover:text-white transition-all shrink-0 flex items-center gap-1 shadow-xs"
                  title="Copy email to clipboard"
                >
                  {emailCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{emailCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/70 border border-purple-light/40 hover:bg-white hover:border-purple-deep transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-dark-text">LinkedIn Profile</h4>
                      <p className="text-[11px] text-dark-muted">Yoga Sree Senthil Devarajan</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-purple-light group-hover:text-purple-deep transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/70 border border-purple-light/40 hover:bg-white hover:border-purple-deep transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-dark-text">GitHub Profile</h4>
                      <p className="text-[11px] text-dark-muted">@Yogasree-21122006</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-purple-light group-hover:text-purple-deep transition-colors" />
                </a>
              </div>

              {/* Resume CTA in Contact Card */}
              <div className="mt-6 pt-5 border-t border-purple-light/30">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs sm:text-sm font-bold text-purple-deep bg-lavender/40 border border-purple-light hover:bg-purple-light/50 transition-all shadow-xs"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download / Print Verified Resume</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white shadow-glass">
              <h3 className="text-xl font-bold font-display text-dark-text mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-dark-muted mb-6">
                Looking to discuss a project, interview, or internship role? Drop your details below.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950 font-display">
                    Thank You, Message Sent!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-sm mx-auto leading-relaxed">
                    Your message has been received. Yoga Sree S will review your note and get in touch at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-3 px-4 py-2 rounded-full text-xs font-bold bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-dark-faint uppercase block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Doe / Recruiter"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-white/80 border focus:outline-none transition-all ${
                          formErrors.name ? 'border-rose-400 bg-rose-50/50' : 'border-purple-light/50 focus:border-purple-deep'
                        }`}
                      />
                      {formErrors.name && (
                        <span className="text-[11px] text-rose-500 font-medium mt-1 block">
                          {formErrors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-bold text-dark-faint uppercase block mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-white/80 border focus:outline-none transition-all ${
                          formErrors.email ? 'border-rose-400 bg-rose-50/50' : 'border-purple-light/50 focus:border-purple-deep'
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-[11px] text-rose-500 font-medium mt-1 block">
                          {formErrors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-dark-faint uppercase block mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Internship Opportunity / Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-white/80 border border-purple-light/50 focus:border-purple-deep focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-dark-faint uppercase block mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your team, project requirements, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-white/80 border focus:outline-none transition-all resize-none ${
                        formErrors.message ? 'border-rose-400 bg-rose-50/50' : 'border-purple-light/50 focus:border-purple-deep'
                      }`}
                    />
                    {formErrors.message && (
                      <span className="text-[11px] text-rose-500 font-medium mt-1 block">
                        {formErrors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-purple-deep via-purple-vibrant to-pink-500 hover:shadow-purple-glow hover:scale-[1.01] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 animate-spin" />
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

