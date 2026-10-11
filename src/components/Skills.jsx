import React, { useState } from 'react';
import { 
  Terminal, FileCode2, FileCode, Palette, 
  BrainCircuit, Sparkles, Cpu, MessageSquareCode, 
  Atom, Zap, Layers, Smartphone, 
  CheckCircle2, Wand2, Lightbulb, Code2, Flame, ArrowUpRight
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const iconConfig = {
    Terminal: { icon: Terminal, color: "text-red-400", glow: "icon-glow-red", bg: "from-red-600/20 to-orange-600/10" },
    FileCode2: { icon: FileCode2, color: "text-amber-400", glow: "icon-glow-amber", bg: "from-amber-600/20 to-orange-600/10" },
    FileCode: { icon: FileCode, color: "text-rose-400", glow: "icon-glow-red", bg: "from-rose-600/20 to-red-600/10" },
    Palette: { icon: Palette, color: "text-orange-400", glow: "icon-glow-orange", bg: "from-orange-600/20 to-amber-600/10" },
    BrainCircuit: { icon: BrainCircuit, color: "text-red-400", glow: "icon-glow-red", bg: "from-red-600/25 to-rose-600/15" },
    Sparkles: { icon: Sparkles, color: "text-orange-400", glow: "icon-glow-orange", bg: "from-orange-600/25 to-amber-600/15" },
    Cpu: { icon: Cpu, color: "text-rose-400", glow: "icon-glow-red", bg: "from-rose-600/25 to-red-600/15" },
    MessageSquareCode: { icon: MessageSquareCode, color: "text-amber-400", glow: "icon-glow-amber", bg: "from-amber-600/20 to-orange-600/15" },
    Atom: { icon: Atom, color: "text-red-400", glow: "icon-glow-red", bg: "from-red-600/25 to-orange-600/15" },
    Zap: { icon: Zap, color: "text-amber-400", glow: "icon-glow-amber", bg: "from-amber-600/25 to-yellow-600/15" },
    Layers: { icon: Layers, color: "text-orange-400", glow: "icon-glow-orange", bg: "from-orange-600/25 to-rose-600/15" },
    Smartphone: { icon: Smartphone, color: "text-rose-400", glow: "icon-glow-red", bg: "from-rose-600/20 to-red-600/15" },
    CheckCircle2: { icon: CheckCircle2, color: "text-emerald-400", glow: "icon-glow-amber", bg: "from-emerald-600/20 to-red-600/15" },
    Wand2: { icon: Wand2, color: "text-orange-400", glow: "icon-glow-orange", bg: "from-orange-600/25 to-amber-600/15" },
    Lightbulb: { icon: Lightbulb, color: "text-amber-400", glow: "icon-glow-amber", bg: "from-amber-600/25 to-orange-600/15" },
  };

  const categories = ["ALL", "PROGRAMMING", "AI & TECHNOLOGY", "WEB DEVELOPMENT", "PRODUCTIVITY"];

  const filteredCategories = selectedCategory === "ALL" 
    ? skillsData 
    : skillsData.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative scroll-mt-20 overflow-hidden" aria-label="Skills and Technologies">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/50 border border-red-800/50 text-red-400 text-xs font-mono font-medium mb-3">
              <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
              <span>TOOLKIT &amp; FOUNDATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Skills &amp; Technologies
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Languages, artificial intelligence concepts, modern web libraries, and productivity workflows I actively practice.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-xl transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 text-white font-bold shadow-lg shadow-red-600/30 scale-105'
                    : 'bg-dark-card/90 border border-dark-border text-slate-400 hover:text-white hover:border-red-900/60 hover:bg-dark-card'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grouped by Category */}
        <div className="space-y-12">
          {filteredCategories.map((catGroup, idx) => (
            <div key={idx} className="space-y-5">
              <div className="flex items-center justify-between border-b border-dark-border pb-3">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-red-400 flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                  </span>
                  <span>{catGroup.category}</span>
                </h3>
                <span className="text-xs text-slate-400 hidden sm:inline-block font-mono">
                  {catGroup.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {catGroup.skills.map((skill, sIdx) => {
                  const config = iconConfig[skill.icon] || { 
                    icon: Code2, 
                    color: "text-red-400", 
                    glow: "icon-glow-red",
                    bg: "from-red-600/20 to-orange-600/10" 
                  };
                  const IconComp = config.icon;

                  return (
                    <div
                      key={sIdx}
                      className="glass-card p-6 rounded-2xl border border-dark-border glass-card-hover group flex flex-col justify-between relative overflow-hidden transition-all duration-300"
                    >
                      {/* Ambient corner light on hover */}
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-red-600/10 rounded-full blur-xl group-hover:bg-red-600/25 group-hover:scale-150 transition-all duration-500 pointer-events-none" />

                      <div>
                        {/* 3D Floating Icon Pod */}
                        <div className="relative mb-5 inline-block">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${config.bg} border border-white/10 group-hover:border-red-500/70 shadow-lg shadow-black/80 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_25px_-5px_rgba(239,68,68,0.4)]`}>
                            <IconComp className={`w-7 h-7 ${config.color} ${config.glow} transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`} />
                          </div>
                          
                          {/* Floating micro accent dot */}
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-dark-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(239,68,68,1)]" />
                        </div>

                        <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors flex items-center justify-between">
                          <span>{skill.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </h4>
                        
                        <p className="mt-2.5 text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                          {skill.detail}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                          <span>Practicing</span>
                        </span>
                        <span className="text-red-400 font-semibold px-2 py-0.5 rounded bg-red-950/40 border border-red-900/40">
                          Active
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
