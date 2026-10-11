import React from 'react';
import { Github, ExternalLink, Code2, Flame, Layout, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onOpenModal }) {

  const handleLinkClick = (e, project, type) => {
    e.preventDefault();
    const isGithub = type === 'github';
    const targetUrl = isGithub ? project.githubUrl : project.liveUrl;

    if (project.isPlaceholderLink) {
      onOpenModal({
        title: `${project.title} - Link Notice`,
        message: (
          <div className="space-y-2">
            <p>
              This project card is currently linked to a placeholder link (<code className="px-1.5 py-0.5 rounded bg-black/60 text-red-300 font-mono text-xs">{targetUrl}</code>).
            </p>
            <p className="text-xs text-slate-400">
              To connect your real repository or live deployment link, edit <code className="text-red-400 font-mono">src/data/portfolioData.js</code> in the <code className="text-red-400 font-mono">projectsData</code> array.
            </p>
          </div>
        ),
        actionText: isGithub ? "View Code Placeholder" : "View Demo Placeholder",
        actionUrl: null
      });
    } else {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const renderVisualPreview = (visualType) => {
    switch (visualType) {
      case 'portfolio':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-black via-red-950/40 to-neutral-950 p-4 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            {/* Mock browser header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5">portfolio.local</span>
            </div>
            {/* Visual elements */}
            <div className="my-auto text-center space-y-1">
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[11px] font-mono text-red-300">
                🔥 Fiery Developer Portfolio
              </div>
              <p className="text-xs font-mono text-slate-400">React + Vite + Tailwind</p>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Dark &amp; Fiery Theme UI</span>
              <span className="text-red-400 font-semibold">100% Responsive</span>
            </div>
          </div>
        );
      case 'ai':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-black via-rose-950/40 to-orange-950/30 p-4 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5">ai-playground.local</span>
            </div>
            <div className="my-auto text-center space-y-1">
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-[11px] font-mono text-orange-300">
                ⚡ Generative AI Web Tool
              </div>
              <p className="text-xs font-mono text-slate-400">Prompting &amp; API Experimentation</p>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Intelligent Interactions</span>
              <span className="text-orange-400 font-semibold">AI Integration</span>
            </div>
          </div>
        );
      case 'productivity':
      default:
        return (
          <div className="h-44 w-full bg-gradient-to-br from-black via-amber-950/30 to-red-950/30 p-4 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5">focus-workspace.local</span>
            </div>
            <div className="my-auto text-center space-y-1">
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[11px] font-mono text-red-300">
                🎯 Student Workflow &amp; Study System
              </div>
              <p className="text-xs font-mono text-slate-400">Task Management &amp; Focus Trackers</p>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Clean Lightweight Vanilla JS</span>
              <span className="text-red-400 font-semibold">Organized Workflow</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 relative scroll-mt-20" aria-label="Featured Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/50 border border-red-800/50 text-red-400 text-xs font-mono font-medium mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            Practical development work highlighting frontend design, artificial intelligence exploration, and productivity solutions.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-dark-border overflow-hidden glass-card-hover flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview Banner */}
                {renderVisualPreview(project.visualType)}

                {/* Card Content Body */}
                <div className="p-6">
                  {/* Badge & Title */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-red-500/10 text-red-300 border border-red-500/30">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <p className="mt-2 text-xs text-slate-400 leading-normal">
                    {project.details}
                  </p>

                  {/* Technology Badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-base border border-white/5 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-dark-border mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={(e) => handleLinkClick(e, project, 'github')}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-dark-base border border-slate-700/80 hover:border-red-500/50 text-xs font-medium text-slate-200 hover:text-white transition-all group/btn"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <Github className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white" />
                  <span>GitHub</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => handleLinkClick(e, project, 'live')}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-xs font-semibold text-white shadow-sm shadow-red-600/25 transition-all"
                  aria-label={`View live demo for ${project.title}`}
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
