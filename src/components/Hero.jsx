import React from 'react';
import { 
  ArrowDown, ArrowRight, Code2, Flame, Terminal, Cpu, Sparkles, 
  MapPin, GraduationCap, Atom, BrainCircuit, Zap, Globe 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenModal }) {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.querySelector(sectionId);
    if (el) {
      const navOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPos = elPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
      aria-label="Introduction Hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-red-900/60 shadow-lg shadow-red-600/10 mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-200 tracking-wide flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-orange-400 inline" />
                <span>{personalInfo.statusBadge}</span>
              </span>
            </div>

            {/* Name & Role Hierarchy */}
            <div className="space-y-2 mb-6">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-red-500 font-semibold flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-0.5 bg-red-500 rounded-full" />
                <span>Personal Portfolio</span>
                <span className="w-2 h-0.5 bg-red-500 rounded-full" />
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
                {personalInfo.name}
              </h1>
              <p className="text-base sm:text-xl md:text-2xl font-medium text-slate-300">
                <span className="text-slate-100">{personalInfo.shortRole}</span>
                <span className="mx-2 text-slate-600">|</span>
                <span className="bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 bg-clip-text text-transparent font-bold">
                  {personalInfo.specialization}
                </span>
              </p>
            </div>

            {/* Floating Sticker for Mobile & Tablet view */}
            <div className="lg:hidden my-6 relative flex justify-center w-full">
              <div className="relative animate-floating-sticker">
                <div className="absolute inset-0 bg-red-600/25 blur-3xl rounded-full -z-10" />
                <img
                  src="/akshat.png"
                  alt="Akshat Arvind"
                  className="w-56 sm:w-64 h-auto object-contain sticker-shadow select-none mx-auto"
                />
                
                {/* Mobile Floating satellite icons */}
                <div className="absolute -top-2 -left-2 p-2.5 rounded-xl icon-pod text-red-400 animate-float-slow">
                  <Atom className="w-4 h-4 icon-glow-red" />
                </div>
                <div className="absolute top-1/2 -right-3 p-2.5 rounded-xl icon-pod text-orange-400 animate-float-reverse">
                  <BrainCircuit className="w-4 h-4 icon-glow-orange" />
                </div>

                {/* Floating pill badge on mobile */}
                <div className="absolute -bottom-2 right-4 px-3 py-1 rounded-full bg-dark-card/90 border border-red-500/40 text-[11px] font-mono text-red-300 shadow-lg shadow-black/80 flex items-center gap-1.5 backdrop-blur-md">
                  <Flame className="w-3 h-3 text-orange-400" />
                  <span>Akshat Arvind</span>
                </div>
              </div>
            </div>

            {/* Strong Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-6 leading-snug">
              &ldquo;{personalInfo.headline}&rdquo;
            </h2>

            {/* Short Authentic Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-8">
              {personalInfo.shortBio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 hover:from-red-500 hover:to-orange-500 rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/70 hover:border-red-500/50 rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto backdrop-blur-md"
              >
                <span>Let's Connect</span>
                <Flame className="w-4 h-4 text-orange-400" />
              </a>
            </div>

            {/* Enhanced Dynamic Floating Tech Quick Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl pt-6 border-t border-slate-800/80">
              
              <div className="group flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-xl icon-pod cursor-default">
                <div className="p-1.5 rounded-lg bg-red-950/60 border border-red-800/50 text-red-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Terminal className="w-4 h-4 icon-glow-red" />
                </div>
                <span className="text-xs text-slate-300 font-mono group-hover:text-white transition-colors">Python & JS</span>
              </div>

              <div className="group flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-xl icon-pod cursor-default">
                <div className="p-1.5 rounded-lg bg-orange-950/60 border border-orange-800/50 text-orange-400 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <BrainCircuit className="w-4 h-4 icon-glow-orange" />
                </div>
                <span className="text-xs text-slate-300 font-mono group-hover:text-white transition-colors">Generative AI</span>
              </div>

              <div className="group flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-xl icon-pod cursor-default">
                <div className="p-1.5 rounded-lg bg-rose-950/60 border border-rose-800/50 text-rose-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Atom className="w-4 h-4 icon-glow-red" />
                </div>
                <span className="text-xs text-slate-300 font-mono group-hover:text-white transition-colors">React & Vite</span>
              </div>

              <div className="group flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-xl icon-pod cursor-default">
                <div className="p-1.5 rounded-lg bg-amber-950/60 border border-amber-800/50 text-amber-400 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <Flame className="w-4 h-4 icon-glow-amber animate-pulse" />
                </div>
                <span className="text-xs text-slate-300 font-mono group-hover:text-white transition-colors">AI Workflows</span>
              </div>

            </div>

            {/* Secondary Explorer Link */}
            <div className="mt-8">
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, '#about')}
                className="group inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-red-400 transition-colors"
                aria-label="Scroll to About section"
              >
                <span>Explore my journey</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Floating Protagonist Sticker & Floating Satellites on Desktop */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative">
            <div className="relative group w-full max-w-[440px]">
              
              {/* Backing Ambient Fire Halo */}
              <div 
                className="absolute inset-0 w-full h-full rounded-full opacity-60 blur-[100px] animate-glow-pulse pointer-events-none -z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(239, 68, 68, 0.75) 0%, rgba(249, 115, 22, 0.35) 60%, transparent 100%)'
                }}
              />

              {/* Decorative slow-spinning cyber aura ring */}
              <div className="absolute inset-4 rounded-full border border-dashed border-red-500/20 -z-10 pointer-events-none animate-spin-slow" />

              {/* Floating Technology Satellites naturally hovering around */}
              {/* 1. React Orbit Pod (Top Left) */}
              <div 
                className="absolute -top-4 -left-4 z-20 icon-pod p-3 rounded-2xl animate-float-slow group/tech cursor-pointer shadow-xl"
                title="React Frontend Ecosystem"
              >
                <div className="relative">
                  <Atom className="w-6 h-6 text-red-400 icon-glow-red group-hover/tech:scale-125 group-hover/tech:rotate-45 transition-transform duration-300" />
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                </div>
              </div>

              {/* 2. AI Brain Orbit Pod (Top Right) */}
              <div 
                className="absolute top-12 -right-6 z-20 icon-pod p-3 rounded-2xl animate-float-delayed group/tech cursor-pointer shadow-xl"
                title="Artificial Intelligence & LLMs"
              >
                <BrainCircuit className="w-6 h-6 text-orange-400 icon-glow-orange group-hover/tech:scale-125 group-hover/tech:-rotate-12 transition-transform duration-300" />
              </div>

              {/* 3. Terminal/Python Orbit Pod (Bottom Left) */}
              <div 
                className="absolute bottom-28 -left-8 z-20 icon-pod p-3 rounded-2xl animate-float-reverse group/tech cursor-pointer shadow-xl"
                title="Python & JavaScript Engineering"
              >
                <Terminal className="w-5 h-5 text-rose-400 icon-glow-red group-hover/tech:scale-125 group-hover/tech:rotate-6 transition-transform duration-300" />
              </div>

              {/* 4. Vite/Speed Zap Orbit Pod (Bottom Right) */}
              <div 
                className="absolute bottom-8 -right-4 z-20 icon-pod p-3 rounded-2xl animate-float-slow group/tech cursor-pointer shadow-xl"
                title="Vite Next-Gen Tooling"
              >
                <Zap className="w-5 h-5 text-amber-400 icon-glow-amber group-hover/tech:scale-125 transition-transform duration-300" />
              </div>

              {/* Floating Sticker Main Wrapper */}
              <div className="relative animate-floating-sticker transition-transform duration-300 group-hover:scale-105">
                
                {/* Main Protagonist Die-Cut Image */}
                <img
                  src="/akshat.png"
                  alt="Akshat Arvind - B.Tech CSE Student & AI Enthusiast"
                  className="w-full max-w-[370px] h-auto object-contain sticker-shadow select-none mx-auto drop-shadow-2xl"
                  loading="eager"
                />

                {/* Floating Badge 1: Top Right */}
                <div 
                  className="absolute -top-3 right-4 px-3.5 py-1.5 rounded-xl bg-dark-card/90 border border-red-500/50 text-xs font-mono font-semibold text-white shadow-xl shadow-red-600/20 backdrop-blur-md flex items-center gap-2 transform rotate-3 hover:rotate-0 transition-transform duration-200"
                >
                  <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                  <span>AI & Tech Enthusiast</span>
                </div>

                {/* Floating Badge 2: Bottom Left */}
                <div 
                  className="absolute bottom-12 -left-2 px-3.5 py-1.5 rounded-xl bg-dark-card/90 border border-slate-700/80 text-xs font-mono text-slate-200 shadow-xl shadow-black/80 backdrop-blur-md flex items-center gap-2 transform -rotate-3 hover:rotate-0 transition-transform duration-200"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-red-400" />
                  <span>B.Tech CSE Student</span>
                </div>

                {/* Floating Badge 3: Bottom Right */}
                <div 
                  className="absolute -bottom-3 right-8 px-3.5 py-1.5 rounded-xl bg-dark-base/95 border border-red-800/60 text-[11px] font-mono text-red-300 shadow-xl shadow-red-950/40 backdrop-blur-md flex items-center gap-1.5 transform rotate-2 hover:rotate-0 transition-transform duration-200"
                >
                  <MapPin className="w-3 h-3 text-red-500" />
                  <span>JECRC • Jaipur</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
