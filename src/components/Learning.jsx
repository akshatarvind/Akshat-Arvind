import React from 'react';
import { 
  Brain, Sparkles, Globe, Binary, Layers, Zap, Layout, 
  Compass, ArrowUpRight, Flame
} from 'lucide-react';
import { exploringData } from '../data/portfolioData';

export default function Learning() {
  const iconMap = {
    Brain: Brain,
    Sparkles: Sparkles,
    Globe: Globe,
    Binary: Binary,
    Layers: Layers,
    Zap: Zap,
    Layout: Layout
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Deep Diving':
        return 'text-red-400 bg-red-950/70 border-red-800/70';
      case 'Experimenting':
        return 'text-orange-400 bg-orange-950/70 border-orange-800/70';
      case 'Active Practice':
        return 'text-rose-400 bg-rose-950/70 border-rose-800/70';
      case 'Continuous Practice':
        return 'text-amber-400 bg-amber-950/70 border-amber-800/70';
      default:
        return 'text-red-300 bg-red-950/60 border-red-900/60';
    }
  };

  return (
    <section id="learning" className="py-20 relative scroll-mt-20" aria-label="Currently Learning and Exploring">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/50 border border-red-800/50 text-red-400 text-xs font-mono font-medium mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>CONTINUOUS HORIZONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            What I'm Exploring
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            Active domains of study, emerging developer tools, and cutting-edge software paradigms I am currently immersing myself in.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {exploringData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Compass;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-dark-border glass-card-hover flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glow dot in corner */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-red-500 opacity-60 group-hover:scale-150 transition-all duration-300 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl icon-pod flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-red-400 icon-glow-red group-hover:rotate-6 transition-transform" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${getStatusBadgeColor(item.status)}`}>
                    ● {item.status}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
