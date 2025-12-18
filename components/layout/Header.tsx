'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { equipmentItems } from '@/data/equipment';

const categories = [
  { id: 'tout', label: 'Tout' },
  { id: 'cameras', label: 'Caméras' },
  { id: 'objectifs', label: 'Objectifs' },
  { id: 'lumieres', label: 'Lumières' },
  { id: 'audio', label: 'Audio' },
  { id: 'drones', label: 'Drones' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { count: wishlistCount } = useWishlist();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'tout';

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchResults = searchQuery 
    ? equipmentItems.filter(item => 
        (item.brand + ' ' + item.model + ' ' + item.subtext).toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4) 
    : [];

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
    setIsSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
      setSearchQuery('');
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
      setIsSearchOpen(false);
    }
  };

  const handleCategoryClick = (catId: string) => {
    if (catId === 'tout') {
      router.push('/');
    } else {
      router.push(`/?category=${catId}`);
    }
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

          <div className="hidden md:flex items-center gap-1">
            <div className="bg-neutral-100/80 backdrop-blur-md rounded-full p-1.5 flex items-center shadow-inner border border-white/20">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    currentCategory === cat.id
                      ? 'text-white shadow-lg'
                      : 'text-neutral-500 hover:text-black hover:bg-white/50'
                  }`}
                >
                  {currentCategory === cat.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-black rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4 relative z-30">
            {/* Search Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 group-hover:text-black transition-colors">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {/* Wishlist */}
            <Link href="/wishlist" className="relative group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 group-hover:text-black transition-colors">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Cart */}
            <Link href="/panier" className="relative group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-lg shadow-black/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-black text-[10px] font-bold flex items-center justify-center rounded-full border border-neutral-200 shadow-sm">
                    {itemCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              aria-label="Menu"
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

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white"
          >
            <div className="max-w-3xl mx-auto px-6 pt-32 relative h-full">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <form onSubmit={handleSearch}>
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher..."
                    className="w-full text-4xl md:text-6xl font-bold bg-transparent border-none outline-none placeholder:text-neutral-300 text-neutral-900 tracking-tight"
                  />
                </form>
                
                {/* Search Results */}
                {searchQuery && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-12 pb-20 overflow-y-auto max-h-[60vh]"
                  >
                    <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">Résultats</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {searchResults.length > 0 ? (
                        searchResults.map((item) => (
                          <Link 
                            key={item.id}
                            href={`/equipment/${item.id}`}
                            onClick={() => setIsSearchOpen(false)}
                            className="flex items-center gap-6 p-4 rounded-2xl hover:bg-neutral-50 transition-all group"
                          >
                            <div className="w-20 h-20 bg-neutral-100 rounded-xl overflow-hidden relative flex-shrink-0">
                              <Image
                                src={item.image}
                                alt={item.model}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                                {item.brand} {item.model}
                              </div>
                              <div className="text-sm text-neutral-500">{item.category}</div>
                            </div>
                            <div className="ml-auto flex flex-col items-end">
                              <span className="text-lg font-bold text-neutral-900">{item.price}€</span>
                              <span className="text-xs text-neutral-500">/jour</span>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <div className="text-neutral-500 py-8">Aucun résultat trouvé pour "{searchQuery}"</div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Suggestions (only when no query) */}
                {!searchQuery && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-12"
                  >
                    <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">Suggestions</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Sony A7S III', 'Aputure', 'Ronin', 'Canon', 'Blackmagic'].map((term) => (
                        <button
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="px-5 py-2.5 rounded-full bg-neutral-100 text-sm font-medium hover:bg-black hover:text-white transition-all"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Close Button */}
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-8 right-0 md:-right-24 w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                {categories.filter(c => c.id !== 'tout').map(cat => (
                  <Link 
                    key={cat.id} 
                    href={`/?category=${cat.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl sm:text-2xl font-bold text-neutral-900"
                  >
                    {cat.label}
                  </Link>
                ))}
                <Link href="/contact" className="text-xl sm:text-2xl font-bold text-neutral-900">Contact</Link>
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
