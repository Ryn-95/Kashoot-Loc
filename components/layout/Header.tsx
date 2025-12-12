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
        <div className="flex flex-col gap-3">
          {[
            { name: 'Caméras', href: '/?category=cameras' },
            { name: 'Objectifs', href: '/?category=objectifs' },
            { name: 'Lumières', href: '/?category=lumieres' },
            { name: 'Audio', href: '/?category=audio' },
            { name: 'Drones', href: '/?category=drones' }
          ].map((cat) => (
            <Link 
              href={cat.href} 
              key={cat.name} 
              className="text-[15px] font-medium text-neutral-600 hover:text-black hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-200"></span>
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-6">Marques Populaires</h3>
        <div className="grid grid-cols-2 gap-4">
          {['Sony', 'Canon', 'RED', 'Arri', 'Blackmagic', 'DJI', 'Aputure', 'Profoto'].map((brand) => (
            <Link href={`/?search=${brand}`} key={brand} className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-all group text-left">
              <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-400 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <span className="text-[10px] font-bold">{brand[0]}</span>
              </div>
              <span className="text-[14px] font-semibold text-neutral-900 group-hover:translate-x-1 transition-transform duration-200">{brand}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-8 pt-6 border-t border-neutral-100 flex justify-between items-center">
      <Link href="/" className="text-[13px] font-bold text-neutral-900 hover:text-neutral-600 flex items-center gap-2 group transition-colors">
        Voir tout le catalogue
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </div>
  </div>
);

const StudiosContent = () => (
  <div className="w-[600px] p-8">
    <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-6">Nos Studios par Ville</h3>
    <div className="grid grid-cols-2 gap-4">
      {['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille', 'Nantes'].map((city) => (
        <Link href={`/studios?city=${city}`} key={city} className="flex items-center justify-between p-4 rounded-2xl border border-neutral-100 hover:border-black hover:shadow-lg transition-all duration-300 group bg-white">
          <span className="text-[15px] font-bold text-neutral-900">{city}</span>
          <span className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-black group-hover:text-white transition-colors duration-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </Link>
      ))}
    </div>
    <div className="mt-8 pt-6 border-t border-neutral-100">
       <Link href="/studios" className="inline-flex items-center gap-2 text-[13px] font-bold text-neutral-900 hover:text-neutral-600 transition-colors">
         Découvrir tous nos espaces
         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
       </Link>
    </div>
  </div>
);

const ServicesContent = () => (
  <div className="w-[700px] p-8">
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-6">Logistique & Support</h3>
        <div className="space-y-3">
          {[
            { name: 'Livraison Express', desc: 'Sur site en moins de 2h', href: '/services#livraison' },
            { name: 'Assurance Tous Risques', desc: 'Couverture totale incluse', href: '/services#assurance' },
            { name: 'Support Technique 24/7', desc: 'Une équipe dédiée', href: '/services#consulting' }
          ].map((service) => (
            <Link href={service.href} key={service.name} className="group block">
              <div className="p-4 rounded-2xl hover:bg-neutral-50 transition-all duration-300 border border-transparent hover:border-neutral-100">
                <div className="text-[15px] font-bold text-neutral-900 mb-1 group-hover:translate-x-1 transition-transform duration-200">{service.name}</div>
                <div className="text-[13px] text-neutral-500">{service.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-6">Équipe Technique</h3>
        <div className="space-y-3">
          {[
            { name: 'Assistant Caméra', desc: '1er et 2nd assistants', href: '/services#techniciens' },
            { name: 'Chef Opérateur', desc: 'Pour vos productions', href: '/services#techniciens' },
            { name: 'Ingénieur Son', desc: 'Prise de son et mixage', href: '/services#techniciens' }
          ].map((job) => (
            <Link href={job.href} key={job.name} className="group block">
              <div className="p-4 rounded-2xl hover:bg-neutral-50 transition-all duration-300 border border-transparent hover:border-neutral-100">
                <div className="text-[15px] font-bold text-neutral-900 mb-1 group-hover:translate-x-1 transition-transform duration-200">{job.name}</div>
                <div className="text-[13px] text-neutral-500">{job.desc}</div>
              </div>
            </Link>
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
      scrolled || isMobileMenuOpen ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 relative">
        <div className="flex items-center justify-between h-[60px] md:h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group relative z-30">
            <div className="flex flex-col leading-none select-none">
              <span className="text-[20px] sm:text-[24px] font-brand text-black group-hover:opacity-80 transition-opacity">
                KASHOOT
              </span>
              <span className="font-bold text-[7px] sm:text-[8px] text-neutral-500 tracking-[0.4em] uppercase ml-0.5 group-hover:text-neutral-800 transition-colors">
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
            <div className="flex items-center bg-white/80 backdrop-blur-xl border border-white/40 rounded-full px-2 py-1.5 gap-1 shadow-sm hover:shadow-md transition-all duration-300 relative z-20">
              <Link
                href="/"
                onMouseEnter={() => handleMouseEnter('materiel')}
                className={`text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeDropdown === 'materiel' || pathname === '/' ? 'bg-black text-white shadow-md' : 'text-neutral-600 hover:text-black hover:bg-white/50'
                }`}
              >
                Matériel
              </Link>
              <Link
                href="/studios"
                onMouseEnter={() => handleMouseEnter('studios')}
                className={`text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeDropdown === 'studios' || pathname === '/studios' ? 'bg-black text-white shadow-md' : 'text-neutral-600 hover:text-black hover:bg-white/50'
                }`}
              >
                Studios
              </Link>
              <Link
                href="/services"
                onMouseEnter={() => handleMouseEnter('services')}
                className={`text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeDropdown === 'services' || pathname === '/services' ? 'bg-black text-white shadow-md' : 'text-neutral-600 hover:text-black hover:bg-white/50'
                }`}
              >
                Services
              </Link>
            </div>

            {/* Dropdown Container */}
            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 transform origin-top ${
                activeDropdown ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible'
              }`}
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden ring-1 ring-black/5">
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
        <div className="flex flex-col h-full pt-20 sm:pt-24 px-6 pb-8">
          <div className="flex-1 space-y-6 sm:space-y-8 overflow-y-auto">
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">Menu</h3>
              <nav className="flex flex-col gap-3 sm:gap-4">
                <Link href="/" className="text-xl sm:text-2xl font-bold text-neutral-900">Accueil</Link>
                <Link href="/materiel" className="text-xl sm:text-2xl font-bold text-neutral-900">Matériel</Link>
                <Link href="/studios" className="text-xl sm:text-2xl font-bold text-neutral-900">Studios</Link>
                <Link href="/services" className="text-xl sm:text-2xl font-bold text-neutral-900">Services</Link>
                <Link href="/contact" className="text-xl sm:text-2xl font-bold text-neutral-900">Contact</Link>
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
