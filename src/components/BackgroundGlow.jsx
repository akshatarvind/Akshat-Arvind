import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* Top right fiery crimson orb */}
      <div 
        className="absolute -top-[10%] -right-[10%] w-[580px] h-[580px] rounded-full opacity-25 blur-[140px] animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.9) 0%, rgba(249, 115, 22, 0.4) 55%, transparent 100%)',
        }}
      />

      {/* Middle left deep fire / blood-red orb */}
      <div 
        className="absolute top-[35%] -left-[10%] w-[520px] h-[520px] rounded-full opacity-20 blur-[150px] animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.8) 0%, rgba(185, 28, 28, 0.3) 60%, transparent 100%)',
          animationDelay: '2s'
        }}
      />

      {/* Bottom right fiery amber & ember orb */}
      <div 
        className="absolute top-[75%] -right-[5%] w-[480px] h-[480px] rounded-full opacity-20 blur-[130px] animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.8) 0%, rgba(239, 68, 68, 0.35) 60%, transparent 100%)',
          animationDelay: '4s'
        }}
      />

      {/* Subtle modern carbon cyber grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 100, 100, 0.5) 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />
    </div>
  );
}
