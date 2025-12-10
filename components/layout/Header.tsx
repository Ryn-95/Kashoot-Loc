'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '@/context/CartContext';
import { usePathname } from 'next/navigation';

// Dropdown Content Components
const MaterielContent = () => (
  <div className="w-[800px] p-8">
    <div className="flex gap-12">
      <div className="w-1/3">
        <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-6">Catégories</h3>
        <div className="flex flex-col gap-4">
          {['Caméras', 'Objectifs', 'Lumières', 'Audio', 'Drones'].map((cat) => (
            <a href="#" key={cat} className="text-[15px] font-medium text-neutral-900 hover:text-neutral-500 transition-colors">
              {cat}
            </a>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-6">Marques Populaires</h3>
        <div className="grid grid-cols-2 gap-4">
          {['Sony', 'Canon', 'RED', 'Arri', 'Blackmagic', 'DJI', 'Aputure', 'Profoto'].map((brand) => (
            <button key={brand} className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-all group text-left">
              <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:shadow-sm transition-all">
                <span className="text-[10px] font-bold">{brand[0]}</span>
              </div>
              <span className="text-[14px] font-semibold text-neutral-900">{brand}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-8 pt-6 border-t border-neutral-100 flex justify-between items-center">
      <a href="#" className="text-[13px] font-medium text-neutral-500 hover:text-black underline decoration-neutral-300 underline-offset-4">Voir tout le catalogue</a>
    </div>
  </div>
);

const StudiosContent = () => (
  <div className="w-[600px] p-8">
    <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-6">Villes</h3>
    <div className="grid grid-cols-2 gap-4">
      {['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille', 'Nantes'].map((city) => (
        <button key={city} className="flex items-center justify-between p-4 rounded-2xl border border-neutral-100 hover:border-neutral-300 hover:shadow-md transition-all group">
          <span className="text-[15px] font-bold text-neutral-900">{city}</span>
          <span className="w-6 h-6 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-black group-hover:text-white transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </button>
      ))}
    </div>
  </div>
);

const ServicesContent = () => (
  <div className="w-[700px] p-8">
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-6">Logistique & Support</h3>
        <div className="space-y-2">
          {['Livraison Express', 'Assurance Tous Risques', 'Support Technique 24/7'].map((service) => (
            <div key={service} className="group cursor-pointer">
              <div className="p-4 rounded-2xl hover:bg-neutral-50 transition-colors">
                <div className="text-[15px] font-bold text-neutral-900 mb-1">{service}</div>
                <div className="text-[13px] text-neutral-500">Disponible pour toute location</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-6">Équipe Technique</h3>
        <div className="space-y-2">
          {['Assistant Caméra', 'Chef Opérateur', 'Ingénieur Son'].map((job) => (
            <div key={job} className="group cursor-pointer">
              <div className="p-4 rounded-2xl hover:bg-neutral-50 transition-colors">
                <div className="text-[15px] font-bold text-neutral-900 mb-1">{job}</div>
                <div className="text-[13px] text-neutral-500">Bookez un expert certifié</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { itemCount } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || isMobileMenuOpen ? 'bg-white/80 backdrop-blur-xl shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-[1920px] mx-auto px-6 lg:px-10 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group relative z-30">
            <div className="flex flex-col leading-none select-none">
              <span className="text-[24px] font-black italic tracking-tighter text-black group-hover:opacity-80 transition-opacity">
                KASHOOT
              </span>
              <span className="font-bold text-[8px] text-neutral-500 tracking-[0.4em] uppercase ml-0.5 group-hover:text-neutral-800 transition-colors">
                LOCATION
              </span>
            </div>
          </Link>

          {/* Center Navigation Pill (Desktop) */}
          <div 
            className={`hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
              scrolled ? 'top-1/2 -translate-y-1/2' : 'top-1/2 -translate-y-1/2'
            }`}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center bg-neutral-900/5 backdrop-blur-md border border-white/20 rounded-full px-1.5 py-1.5 gap-1 shadow-sm relative z-20">
              <button 
                onMouseEnter={() => handleMouseEnter('materiel')}
                className={`text-[13px] font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  activeDropdown === 'materiel' ? 'bg-white text-black shadow-sm' : 'text-neutral-700 hover:text-black hover:bg-white/50'
                }`}
              >
                Matériel
              </button>
              <button 
                onMouseEnter={() => handleMouseEnter('studios')}
                className={`text-[13px] font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  activeDropdown === 'studios' ? 'bg-white text-black shadow-sm' : 'text-neutral-700 hover:text-black hover:bg-white/50'
                }`}
              >
                Studios
              </button>
              <button 
                onMouseEnter={() => handleMouseEnter('services')}
                className={`text-[13px] font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  activeDropdown === 'services' ? 'bg-white text-black shadow-sm' : 'text-neutral-700 hover:text-black hover:bg-white/50'
                }`}
              >
                Services
              </button>
            </div>

            {/* Dropdown Container */}
            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 transform origin-top ${
                activeDropdown ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
              }`}
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden">
                {activeDropdown === 'materiel' && <MaterielContent />}
                {activeDropdown === 'studios' && <StudiosContent />}
                {activeDropdown === 'services' && <ServicesContent />}
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 relative z-30">
            <Link 
              href="/login" 
              className="hidden md:flex items-center justify-center h-10 px-6 text-[13px] font-bold uppercase tracking-wide text-neutral-900 border border-neutral-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              Connexion
            </Link>
            
            {/* Contact Icon */}
            <Link href="/contact" className="hidden md:flex w-10 h-10 items-center justify-center text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
              </svg>
            </Link>

            {/* Cart Button */}
            <Link href="/panier" className="relative w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/20">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                 <line x1="3" y1="6" x2="21" y2="6"></line>
                 <path d="M16 10a4 4 0 0 1-8 0"></path>
               </svg>
               {itemCount > 0 && (
                 <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                   {itemCount}
                 </span>
               )}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center bg-neutral-100 text-neutral-900 rounded-full hover:bg-neutral-200 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-20 bg-white transition-all duration-300 md:hidden ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <div className="flex-1 space-y-8 overflow-y-auto">
            <div>
              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">Menu</h3>
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-2xl font-bold text-neutral-900">Accueil</Link>
                <Link href="/materiel" className="text-2xl font-bold text-neutral-900">Matériel</Link>
                <Link href="/studios" className="text-2xl font-bold text-neutral-900">Studios</Link>
                <Link href="/services" className="text-2xl font-bold text-neutral-900">Services</Link>
                <Link href="/contact" className="text-2xl font-bold text-neutral-900">Contact</Link>
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">Compte</h3>
              <nav className="flex flex-col gap-4">
                <Link href="/login" className="text-lg font-medium text-neutral-900">Connexion</Link>
                <Link href="/signup" className="text-lg font-medium text-neutral-900">Créer un compte</Link>
              </nav>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-100">
             <p className="text-sm text-neutral-400 text-center">
               © 2024 Kashoot Location. All rights reserved.
             </p>
          </div>
        </div>
      </div>
    </header>
  );
}
