import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Code, Binary, Globe, Brain, Cpu, Layers, Flame } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const iconMap = {
    Code: Code,
    Binary: Binary,
    Globe: Globe,
    Brain: Brain,
    Cpu: Cpu,
    Layers: Layers,
  };

  return (
    <section id="education" className="py-20 relative scroll-mt-20" aria-label="Education Timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/50 border border-red-800/50 text-red-400 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-orange-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            Undergraduate academic timeline and foundational core computer science subjects.
          </p>
        </div>

        {/* Modern Interactive Timeline Card */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-red-950/60 ml-2 sm:ml-4 space-y-12">
          
          {/* Timeline Node Icon */}
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-dark-base border-2 border-red-500 flex items-center justify-center text-red-500 shadow-lg shadow-red-600/40">
            <GraduationCap className="w-4 h-4" />
          </div>

          {/* Education Card Content */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-dark-border glass-card-hover relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-red-500/10 text-red-300 border border-red-500/30 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-orange-400" />
                  {educationData.period}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {educationData.degree}
                </h3>
                <p className="text-sm sm:text-base font-medium text-red-400 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{educationData.institution}</span>
                </p>
              </div>

              <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs font-mono text-orange-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
                <span>{educationData.status}</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-8 max-w-3xl">
              {educationData.overview}
            </p>

            {/* Relevant Learning Areas */}
            <div className="pt-6 border-t border-dark-border">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-mono mb-4 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-red-500" />
                <span>Relevant Learning Areas & Coursework</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {educationData.learningAreas.map((area, idx) => {
                  const IconComp = iconMap[area.icon] || Code;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-dark-base/60 border border-white/5 hover:border-red-500/40 hover:bg-dark-base/90 transition-all duration-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-800/40 flex items-center justify-center text-red-400 flex-shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {area.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
