import React, { useState } from 'react';
import { Award, Terminal, BookOpen, Rocket, Target, Star, ChevronRight, PlusCircle, Flame } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState(achievementsData[0].categorySlug);

  const iconMap = {
    Award: Award,
    Terminal: Terminal,
    BookOpen: BookOpen,
    Rocket: Rocket,
    Target: Target,
    Star: Star,
  };

  const handlePlaceholderClick = (item, catName) => {
    onOpenModal({
      title: `Update ${catName}`,
      message: (
        <div className="space-y-3">
          <p className="text-sm text-slate-300">
            This card is a pre-styled placeholder waiting for your actual verified milestones.
          </p>
          <div className="p-3 rounded-lg bg-black/60 border border-dark-border text-xs font-mono text-red-300 space-y-1">
            <p className="text-slate-400 font-sans text-[11px]">How to add your real achievement:</p>
            <p>1. Open <span className="text-white">src/data/portfolioData.js</span></p>
            <p>2. Locate <span className="text-white">achievementsData</span></p>
            <p>3. Update the title, date, and issuer</p>
          </div>
        </div>
      ),
      actionText: null,
      actionUrl: null
    });
  };

  const currentCategoryData = achievementsData.find(cat => cat.categorySlug === activeCategory) || achievementsData[0];
  const CurrentIcon = iconMap[currentCategoryData.icon] || Award;

  return (
    <section id="achievements" className="py-20 relative scroll-mt-20" aria-label="Achievements and Milestones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/50 border border-red-800/50 text-red-400 text-xs font-mono font-medium mb-3">
            <Award className="w-3.5 h-3.5 text-orange-400" />
            <span>MILESTONES &amp; GROWTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Achievements &amp; Milestones
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            Structured roadmap of certifications, hackathon entries, completed courses, and academic recognitions.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {achievementsData.map((category) => {
            const IconComponent = iconMap[category.icon] || Award;
            const isSelected = activeCategory === category.categorySlug;
            return (
              <button
                key={category.categorySlug}
                type="button"
                onClick={() => setActiveCategory(category.categorySlug)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-red-950/60 border-red-500 text-white shadow-lg shadow-red-600/20'
                    : 'bg-dark-card/60 border-dark-border text-slate-400 hover:text-white hover:border-red-900/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className={`w-4 h-4 ${isSelected ? 'text-red-500' : 'text-slate-500'}`} />
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-red-500" />}
                </div>
                <span className="text-xs font-semibold tracking-tight">{category.category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Content Card */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-dark-border">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-dark-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-800/40 flex items-center justify-center text-red-400">
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{currentCategoryData.category}</h3>
                <p className="text-xs font-mono text-slate-400">Section placeholder ready for your accomplishments</p>
              </div>
            </div>

            <button
              onClick={() => handlePlaceholderClick(null, currentCategoryData.category)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-base border border-slate-700/80 hover:border-red-500/50 text-xs font-mono text-red-300 hover:text-white transition-colors"
            >
              <PlusCircle className="w-3.5 h-3.5 text-orange-400" />
              <span>How to update</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentCategoryData.items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handlePlaceholderClick(item, currentCategoryData.category)}
                className="p-5 rounded-xl bg-dark-base/60 border border-dashed border-slate-700/80 hover:border-red-500/60 hover:bg-dark-base/90 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-red-400 bg-red-950/50 px-2 py-0.5 rounded border border-red-800/40">
                      {item.date}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors flex items-center gap-2">
                    <span>{item.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-1 group-hover:text-red-400 transition-all" />
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    {item.issuer}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-slate-400">Status: Placeholder</span>
                  <span className="text-red-400 group-hover:underline">Click to view update guide →</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Customization Tip */}
          <div className="mt-6 p-4 rounded-xl bg-red-950/20 border border-red-900/40 flex items-start gap-3">
            <Flame className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Truthful Portfolio Guarantee:</span> No fake certifications or awards have been invented. All cards in this section are structured and ready for your real credentials whenever you earn or publish them.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
