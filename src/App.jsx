import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundGlow from './components/BackgroundGlow';
import NotificationModal from './components/NotificationModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    message: '',
    actionText: '',
    actionUrl: ''
  });

  const openModal = ({ title, message, actionText, actionUrl }) => {
    setModalState({
      isOpen: true,
      title,
      message,
      actionText,
      actionUrl
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  // IntersectionObserver to accurately track the active section in view
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'learning', 'contact'];
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    };

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(observerCallback, observerOptions);
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-base text-slate-100 flex flex-col relative selection:bg-red-600/30 selection:text-red-200">
      {/* Background ambient lighting and grid pattern */}
      <BackgroundGlow />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenModal={openModal} />
        <About onOpenModal={openModal} />
        <Education />
        <Skills />
        <Projects onOpenModal={openModal} />
        <Achievements onOpenModal={openModal} />
        <Learning />
        <Contact onOpenModal={openModal} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={openModal} />

      {/* Global Notification & Placeholder Guidance Modal */}
      <NotificationModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        message={modalState.message}
        actionText={modalState.actionText}
        actionUrl={modalState.actionUrl}
      />
    </div>
  );
}
