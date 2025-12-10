'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Vision */}
          <div className="space-y-6">
            <div className="flex flex-col leading-none select-none">
              <span className="text-2xl font-black italic text-neutral-900">
                KASHOOT
              </span>
              <span className="font-bold text-[8px] text-neutral-500 tracking-[0.4em] uppercase ml-0.5">
                LOCATION
              </span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              La plateforme de référence pour la location de matériel audiovisuel professionnel. 
              Louez simplement, créez librement.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-6">Découvrir</h4>
            <ul className="space-y-4">
              <li><Link href="/cameras" className="text-neutral-500 hover:text-blue-600 transition-colors text-sm">Caméras Cinéma</Link></li>
              <li><Link href="/lenses" className="text-neutral-500 hover:text-blue-600 transition-colors text-sm">Objectifs</Link></li>
              <li><Link href="/lighting" className="text-neutral-500 hover:text-blue-600 transition-colors text-sm">Éclairage</Link></li>
              <li><Link href="/audio" className="text-neutral-500 hover:text-blue-600 transition-colors text-sm">Audio</Link></li>
              <li><Link href="/drones" className="text-neutral-500 hover:text-blue-600 transition-colors text-sm">Drones</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-6">Aide & Info</h4>
            <ul className="space-y-4">
              <li><Link href="/how-it-works" className="text-neutral-500 hover:text-blue-600 transition-colors text-sm">Comment ça marche</Link></li>
              <li><Link href="/insurance" className="text-neutral-500 hover:text-blue-600 transition-colors text-sm">Assurance & Caution</Link></li>
              <li><Link href="/faq" className="text-neutral-500 hover:text-blue-600 transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/contact" className="text-neutral-500 hover:text-blue-600 transition-colors text-sm">Nous contacter</Link></li>
              <li><Link href="/careers" className="text-neutral-500 hover:text-blue-600 transition-colors text-sm flex items-center gap-2">
                Carrières <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full">Hiring</span>
              </Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-6">Newsletter</h4>
            <p className="text-neutral-500 text-sm mb-4">
              Recevez nos dernières offres et actualités directement dans votre boîte mail.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 flex-1 transition-all"
              />
              <button className="bg-neutral-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors duration-300">
                OK
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400">
            © {currentYear} Kashoot SAS. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-neutral-500">
            <Link href="/privacy" className="hover:text-neutral-900 transition-colors">Confidentialité</Link>
            <Link href="/terms" className="hover:text-neutral-900 transition-colors">CGV</Link>
            <Link href="/cookies" className="hover:text-neutral-900 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
