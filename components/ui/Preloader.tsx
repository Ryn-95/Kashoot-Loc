'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [shouldRender, setShouldRender] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading out after 1.5s
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    // Remove from DOM after fade animation (1.5s + 0.7s)
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-all duration-700 ease-in-out ${
        isFading ? 'opacity-0 translate-y-[-10px] pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="relative overflow-hidden">
          <span className="text-5xl md:text-7xl font-black italic tracking-tighter text-white animate-slide-up block">
            KASHOOT
          </span>
        </div>
        <div className="relative overflow-hidden mt-2">
          <span className="font-bold text-[10px] md:text-xs text-neutral-400 tracking-[0.6em] uppercase ml-1 animate-slide-up-delay block">
            LOCATION
          </span>
        </div>
      </div>
    </div>
  );
}
