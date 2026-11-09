import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { IntroLoader } from './components/IntroLoader';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ThreeHeroBackground } from './components/ThreeScene';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // Check if intro has already been viewed in this session
    const hasViewed = sessionStorage.getItem('yoga_portfolio_intro_viewed');
    return !hasViewed;
  });

  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('yoga_portfolio_intro_viewed', 'true');
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-milk-pink text-dark-text overflow-x-hidden selection:bg-purple-light selection:text-purple-deep">
      {/* Custom Spring Cursor */}
      <CustomCursor />

      {/* 3D Floating Three.js Canvas in Background (Mounts smoothly once intro completes) */}
      {!showIntro && (
        <ThreeHeroBackground />
      )}

      {/* Cinematic Introduction */}
      {showIntro && (
        <IntroLoader onComplete={handleIntroComplete} />
      )}

      {/* Floating Glassmorphism Navbar */}
      <Navbar
        onReplayIntro={handleReplayIntro}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onReplayIntro={handleReplayIntro}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Formatted Resume Download/Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;

