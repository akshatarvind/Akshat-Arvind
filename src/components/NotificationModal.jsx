import React from 'react';
import { X, ExternalLink, Info, Flame } from 'lucide-react';

export default function NotificationModal({ isOpen, onClose, title, message, actionText, actionUrl }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-md p-6 bg-dark-card border border-dark-border rounded-2xl shadow-2xl glass-card overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fiery glow accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-600 to-orange-500" />
        
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
              <Flame className="w-5 h-5 text-orange-400" />
            </div>
            <h3 id="modal-title" className="text-lg font-semibold text-white">
              {title || "Portfolio Notice"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close notification"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-sm text-slate-300 leading-relaxed mb-6 space-y-2">
          {message}
        </div>

        <div className="flex items-center justify-end gap-3 pt-2 border-t border-dark-border">
          {actionUrl && (
            <a
              href={actionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-red-300 bg-red-950/40 border border-red-800/50 rounded-xl hover:bg-red-900/50 transition-colors"
            >
              <span>{actionText || "Visit Link"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 rounded-xl transition-all shadow-md shadow-red-600/30"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
