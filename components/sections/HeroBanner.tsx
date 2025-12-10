'use client';

import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="px-3 sm:px-6 lg:px-8 py-4">
      <div className="bg-[#2B32B2] rounded-[24px] overflow-hidden relative flex flex-col md:flex-row items-stretch shadow-2xl shadow-blue-900/20 min-h-[auto] md:min-h-[320px]">
        {/* Deep Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e2575] via-[#2a3696] to-[#1e2575] opacity-100"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300/40 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-purple-300/30 rounded-full animate-ping"></div>
            
            {/* Gradient orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row w-full relative z-10">
          
          {/* Text Content */}
          <div className="flex-1 p-5 md:p-8 flex flex-col justify-center relative z-20">
            <div className="mb-3 md:mb-4">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-0.5 text-[10px] md:text-xs font-medium text-white/80 border border-white/20">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Disponible 24/7
              </span>
            </div>
            
            <h1 className="text-lg sm:text-xl md:text-3xl font-medium text-white leading-[1.1] max-w-[60%] sm:max-w-[80%] md:max-w-[450px] tracking-tight">
              Plus qu'une location, une <br/>
              <span className="relative inline-block">
                <span className="relative z-10 font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  nouvelle façon
                </span>
                <svg className="absolute -bottom-1.5 left-0 w-full h-2 md:h-2.5 text-[#4da6ff]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span> <span className="font-bold">de créer.</span>
            </h1>
            <p className="mt-3 text-[11px] sm:text-xs md:text-sm text-blue-100 max-w-[60%] sm:max-w-[80%] md:max-w-[350px] font-light tracking-wide leading-relaxed">
              Accédez au meilleur matériel vidéo sans contraintes. 
              <span className="block mt-1.5 text-blue-200/80">• Livraison 24h • Assurance incluse • Support 24/7</span>
            </p>
            
            <div className="mt-5 flex flex-wrap gap-2 md:gap-3">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1 text-[10px] md:text-xs font-medium text-white/90 border border-white/20">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                500+ réf
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1 text-[10px] md:text-xs font-medium text-white/90 border border-white/20">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                France entière
              </div>
            </div>
          </div>

          {/* Phone Mockup Area */}
          <div className="h-[180px] sm:h-[200px] md:h-auto md:flex-1 relative md:min-h-0 overflow-hidden md:overflow-visible">
             {/* Phone Mockup Representation */}
             <div className="absolute top-2 right-[-5px] sm:right-4 md:right-12 w-[90px] sm:w-[160px] md:w-[180px] bg-black rounded-[1.2rem] md:rounded-[1.5rem] border-[3px] md:border-[4px] border-gray-900 shadow-[0_50px_100px_-12px_rgba(0,0,0,0.5)] transform rotate-[-6deg] overflow-hidden z-20">
                <div className="h-[210px] sm:h-[280px] md:h-[320px] bg-neutral-50 flex flex-col relative">
                  {/* Phone Notch/Header */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-transparent z-30 flex justify-center">
                    <div className="w-12 h-3 bg-black rounded-b-lg"></div>
                  </div>
                  
                  {/* Camera App UI */}
                  <div className="relative h-full w-full bg-black">
                    {/* Main Viewfinder - simulate camera feed */}
                    <div className="absolute inset-0 bg-neutral-800">
                       {/* Abstract blurred shapes to simulate video feed */}
                       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 z-10"></div>
                       <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
                       <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
                       
                       {/* Grid Lines */}
                       <div className="absolute inset-0 z-20 opacity-20 pointer-events-none">
                         <div className="w-full h-full border border-white/30 grid grid-cols-3 grid-rows-3">
                           <div className="border-r border-white/30 h-full"></div>
                           <div className="border-r border-white/30 h-full"></div>
                         </div>
                       </div>
                    </div>

                    {/* Top Controls */}
                    <div className="absolute top-0 left-0 right-0 p-3 z-30 flex justify-between items-start pt-8 bg-gradient-to-b from-black/60 to-transparent">
                       <div className="flex gap-2 text-white/90 text-[10px] font-mono">
                         <span>REC</span>
                         <span className="text-red-500 animate-pulse">●</span>
                         <span>00:04:23</span>
                       </div>
                       <div className="flex gap-2">
                         <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                           <span className="text-[8px] text-white">HD</span>
                         </div>
                         <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                           <span className="text-[8px] text-white">60</span>
                         </div>
                       </div>
                    </div>

                    {/* Bottom Controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-30 bg-gradient-to-t from-black/80 to-transparent">
                       <div className="flex justify-between items-center mb-4 px-1">
                          <div className="text-white/80 text-[10px] font-mono">ISO 800</div>
                          <div className="text-white/80 text-[10px] font-mono">F2.8</div>
                          <div className="text-white/80 text-[10px] font-mono">1/120</div>
                          <div className="text-white/80 text-[10px] font-mono">5600K</div>
                       </div>
                       
                       <div className="flex justify-between items-center">
                          <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/20 relative overflow-hidden">
                             <div className="absolute inset-0 bg-blue-900/50"></div>
                          </div>
                          
                          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center relative">
                             <div className="w-9 h-9 bg-red-500 rounded-full"></div>
                          </div>
                          
                          <div className="w-10 h-10 rounded-full bg-neutral-800/50 backdrop-blur flex items-center justify-center">
                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                               <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                               <path d="M12 4v16"></path>
                             </svg>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
             </div>

             {/* Logo Brand - Right Side */}
             <div className="absolute bottom-4 right-8 md:right-80 z-20 flex flex-col items-end leading-none select-none">
               <span className="font-black italic text-2xl text-white tracking-tighter">KASHOOT</span>
               <span className="font-bold text-[9px] text-blue-200 tracking-[0.4em] uppercase mr-0.5">LOCATION</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
