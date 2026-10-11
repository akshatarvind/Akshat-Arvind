import React from 'react';
import { GraduationCap, MapPin, Laptop, Bot, Rocket, Sparkles, BookOpen, CheckCircle2, Flame } from 'lucide-react';
import { personalInfo, aboutData } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    GraduationCap: GraduationCap,
    MapPin: MapPin,
    Laptop: Laptop,
    Bot: Bot,
    Rocket: Rocket
  };

  return (
    <section id="about" className="py-20 relative scroll-mt-20" aria-label="About Me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/50 border border-red-800/50 text-red-400 text-xs font-mono font-medium mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>DISCOVER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Me
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            A student-centered journey of curiosity, continuous technical practice, and modern problem solving.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Professional Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-dark-border space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Passionate about Technology & Future Intelligence</span>
              </h3>
              
              {aboutData.paragraphs.map((para, index) => (
                <p key={index} className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {para}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-xs text-slate-400 font-mono">
                  Currently focused on building real software and exploring AI applications during undergraduate studies at <span className="text-red-400 font-medium">{personalInfo.college}</span>.
                </p>
              </div>
            </div>

            {/* Core Values / Approach Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {aboutData.coreValues.map((value, idx) => (
                <div key={idx} className="glass-card p-4 rounded-xl border border-dark-border glass-card-hover">
                  <div className="flex items-center gap-2 text-red-500 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{value.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Modern Student Profile Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-dark-border relative overflow-hidden group">
              {/* Fiery top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-600 to-orange-500" />

              {/* Card Header with Protagonist Avatar */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-dark-border">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <img
                      src="/akshat.png"
                      alt="Akshat Arvind"
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover object-top border-2 border-red-500/60 shadow-lg shadow-red-600/30 bg-dark-base"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-dark-card" title="Active" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{personalInfo.name}</h3>
                    <p className="text-xs font-mono text-red-400 mt-0.5">{personalInfo.role}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600/20 to-orange-600/20 border border-red-500/30 flex items-center justify-center text-red-300">
                  <BookOpen className="w-5 h-5 text-orange-400" />
                </div>
              </div>

              {/* Exact Information Items Specified in Requirements */}
              <div className="space-y-3.5">
                {aboutData.quickFacts.map((fact, index) => {
                  const IconComponent = iconMap[fact.icon] || Sparkles;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-dark-base/60 border border-white/5 hover:border-red-500/40 hover:bg-dark-base/90 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-red-950/40 border border-red-800/40 flex items-center justify-center text-red-400 flex-shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-medium">{fact.label}</p>
                          <p className="text-sm font-semibold text-slate-100">{fact.value}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                        {fact.detail}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Footer Note */}
              <div className="mt-6 pt-5 border-t border-dark-border text-center">
                <span className="inline-flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  Actively open for student networking & tech opportunities
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
