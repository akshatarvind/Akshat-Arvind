import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, MessageSquare, ExternalLink, ArrowRight, Flame, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onOpenModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSocialClick = (e, platform, url) => {
    e.preventDefault();
    if (url.includes('[YOUR') || url.includes('placeholder')) {
      onOpenModal({
        title: `${platform} Link Placeholder`,
        message: (
          <div className="space-y-2">
            <p className="text-sm text-slate-300">
              Your {platform} link is currently set to placeholder <code className="px-1.5 py-0.5 rounded bg-black/60 text-red-300 font-mono text-xs">{url}</code>.
            </p>
            <p className="text-xs text-slate-400">
              To attach your public {platform} profile, update the corresponding field in <code className="text-red-400 font-mono">src/data/portfolioData.js</code>.
            </p>
          </div>
        ),
        actionText: null,
        actionUrl: null
      });
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    // Compose a mailto URL with user's inputs
    const subjectLine = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const bodyContent = encodeURIComponent(`Hi Akshat,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const targetEmail = personalInfo.email;
    
    // Open default mail client
    window.location.href = `mailto:${targetEmail}?subject=${subjectLine}&body=${bodyContent}`;
    
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative scroll-mt-20 overflow-hidden" aria-label="Contact Section">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-red-600/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/50 border border-red-800/50 text-red-400 text-xs font-mono font-medium mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let's Build Something
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            Have an idea, opportunity, project or simply want to connect? Feel free to reach out.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Channels & Dynamic Social Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-dark-border space-y-6 relative overflow-hidden">
              
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Direct Channels</span>
                  <Sparkles className="w-4 h-4 text-orange-400" />
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Feel free to send an email or reach out on developer and professional networks.
                </p>
              </div>

              {/* Dynamic Email Card with Floating Icon Pod */}
              <div className="p-4 rounded-xl bg-dark-base/70 border border-white/5 hover:border-red-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={personalInfo.emailLink}
                    className="flex items-center gap-3.5 flex-1 min-w-0"
                    aria-label={`Send email to ${personalInfo.email}`}
                  >
                    {/* Floating 3D Icon Pod */}
                    <div className="w-12 h-12 rounded-xl icon-pod flex items-center justify-center text-red-400 flex-shrink-0 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                      <Mail className="w-5 h-5 icon-glow-red group-hover:rotate-6 transition-transform" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-slate-400">Email Address</p>
                      <p className="text-sm font-semibold text-white group-hover:text-red-300 transition-colors break-all">
                        {personalInfo.email}
                      </p>
                    </div>
                  </a>
                  
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-dark-card border border-dark-border hover:border-red-500/60 text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95 flex-shrink-0 shadow-sm"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Dynamic Social Link Cards */}
              <div className="space-y-3.5">
                
                {/* LinkedIn Card with Dynamic Icon Pod */}
                <a
                  href={personalInfo.linkedinUrl}
                  onClick={(e) => handleSocialClick(e, 'LinkedIn', personalInfo.linkedinUrl)}
                  className="flex items-center justify-between p-4 rounded-xl bg-dark-base/70 border border-white/5 hover:border-red-500/50 hover:bg-dark-base/90 transition-all duration-300 group"
                  aria-label="Connect on LinkedIn"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-12 h-12 rounded-xl icon-pod flex items-center justify-center text-rose-400 flex-shrink-0 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                      <Linkedin className="w-5 h-5 icon-glow-red group-hover:-rotate-6 transition-transform" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-slate-400">Professional Network</p>
                      <p className="text-sm font-semibold text-white group-hover:text-red-300 transition-colors">
                        Akshat Arvind Shukla
                      </p>
                      <p className="text-[11px] text-red-400/90 font-mono truncate max-w-[200px] sm:max-w-xs">
                        linkedin.com/in/akshat-arvind-shukla
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                </a>

                {/* GitHub Card with Dynamic Icon Pod */}
                <a
                  href={personalInfo.githubUrl}
                  onClick={(e) => handleSocialClick(e, 'GitHub', personalInfo.githubUrl)}
                  className="flex items-center justify-between p-4 rounded-xl bg-dark-base/70 border border-white/5 hover:border-red-500/50 hover:bg-dark-base/90 transition-all duration-300 group"
                  aria-label="View GitHub Profile"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-12 h-12 rounded-xl icon-pod flex items-center justify-center text-orange-400 flex-shrink-0 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                      <Github className="w-5 h-5 icon-glow-orange group-hover:rotate-6 transition-transform" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-slate-400">Open Source &amp; Code</p>
                      <p className="text-sm font-semibold text-white group-hover:text-red-300 transition-colors">
                        GitHub Profile
                      </p>
                      <p className="text-[11px] text-red-400/90 font-mono truncate max-w-[200px] sm:max-w-xs">
                        github.com/akshatarvind
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                </a>

              </div>

              {/* Prominent Get In Touch Button */}
              <div className="pt-2">
                <a
                  href={personalInfo.emailLink}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 hover:opacity-95 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-dark-border relative">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to initiate a direct email conversation.
              </p>

              {formSent && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-800/40 text-red-300 text-sm flex items-center gap-2 animate-fade-in">
                  <Check className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                  <span>Thank you! Launching your mail client with your pre-filled message...</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-base border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-base border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry / Tech Discussion / Internship"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-base border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your note, idea, or questions here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-base border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 hover:opacity-95 shadow-md shadow-red-600/30 hover:shadow-red-600/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
