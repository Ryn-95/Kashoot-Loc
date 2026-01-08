'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import EquipmentGrid from '@/components/sections/EquipmentGrid';

type EquipmentItem = {
  id: number;
  category: string;
  brand: string;
  model: string;
  subtext: string;
  specsBadge: string;
  badge: string | null;
  badgeType: string;
  price: string;
  image: string;
  imageFit?: string;
  available: boolean;
  suggestedAccessories?: number[];
  colors: string[];
  included?: string[];
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
};

export default function EquipmentClient({ item, relatedItems }: { item: EquipmentItem, relatedItems: EquipmentItem[] }) {
  const { addToCart, setIsCartOpen } = useCart();
  
  const [selectedColor, setSelectedColor] = useState(item?.colors?.[0] || '#000000');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  const fallbackImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23f3f4f6"/><stop offset="100%" stop-color="%23e5e7eb"/></linearGradient></defs><rect width="400" height="300" fill="url(%23g)"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-family="Inter, sans-serif" font-size="14">Image indisponible</text></svg>';

  // Price calculation logic
  const calculateDays = (start: string, end: string) => {
    if (!start || !end) return 1;
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    if (endDateObj < startDateObj) return 1;
    const diffTime = Math.abs(endDateObj.getTime() - startDateObj.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return Math.max(1, diffDays);
  };

  const basePrice = item ? parseInt(item.price || '0', 10) : 0;
  const durationInDays = calculateDays(startDate, endDate);
  const totalPrice = basePrice * durationInDays;

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Produit non trouvé</h1>
          <Link href="/" className="text-neutral-500 underline hover:text-black transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!startDate || !endDate) {
      alert('Veuillez sélectionner une date de début et de fin.');
      return;
    }
    
    if (item) {
      const unitPrice = parseInt(item.price || '0', 10);
      addToCart({
        id: item.id,
        brand: item.brand,
        model: item.model,
        price: unitPrice * durationInDays,
        unitPrice: unitPrice,
        days: durationInDays,
        startDate: startDate,
        endDate: endDate,
        image: item.image,
        color: selectedColor,
        duration: `${durationInDays} jours`,
        assurance: 'Standard'
      });
      setIsCartOpen(true);
    }
  };

  // Ensure startDate and endDate min attributes are correct
  // Use local time instead of UTC to avoid timezone issues (e.g. allowing yesterday selection after midnight)
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const today = `${year}-${month}-${day}`;

  // Helper to ensure date is valid (not in the past)
  const handleDateChange = (setter: (val: string) => void, val: string, minDate: string) => {
    if (!val) {
      setter(val);
      return;
    }
    const selectedDate = new Date(val);
    const minAllowedDate = new Date(minDate);
    
    // Reset time parts for accurate date comparison
    selectedDate.setHours(0, 0, 0, 0);
    minAllowedDate.setHours(0, 0, 0, 0);

    if (selectedDate < minAllowedDate) {
      // If selected date is before min date, force it to min date
      setter(minDate);
    } else {
      setter(val);
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-sans pt-[80px] md:pt-[88px]">
      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-12">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-8 uppercase tracking-wider">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span className="text-neutral-300">/</span>
          <Link href={`/?category=${item.category}`} className="hover:text-black transition-colors">{item.category}</Link>
          <span className="text-neutral-300">/</span>
          <span className="text-black">{item.brand} {item.model}</span>
        </nav>

        {/* Title Section */}
        <div className="mb-6 md:mb-12">
           <div className="flex items-center gap-3 mb-3 md:mb-4">
             {item.badge && (
               <span className={`
                 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border
                 ${item.badgeType === 'yellow' ? 'bg-yellow-50 border-yellow-200 text-yellow-700' : ''}
                 ${item.badgeType === 'green' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : ''}
                 ${item.badgeType === 'blue' ? 'bg-blue-50 border-blue-200 text-blue-700' : ''}
                 ${item.badgeType === 'neutral' ? 'bg-neutral-50 border-neutral-200 text-neutral-600' : ''}
               `}>
                 {item.badge}
               </span>
             )}
             <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{item.category}</span>
           </div>
           <h1 className="text-2xl sm:text-3xl md:text-6xl font-brand text-neutral-900 mb-2 leading-tight">
             {item.brand} {item.model}
           </h1>
           <p className="text-base sm:text-lg md:text-2xl text-neutral-500 font-light tracking-tight max-w-2xl">
             {item.subtext}
           </p>
           
           {/* SEO Hidden Text for semantic richness */}
           <div className="sr-only">
             Location {item.brand} {item.model} Paris. Louez ce matériel professionnel pour vos tournages. 
             {item.category === 'cameras' && 'Caméra cinéma idéale pour clips, publicités et documentaires.'}
             {item.category === 'drones' && 'Drone professionnel pour prises de vues aériennes 4K.'}
             Disponibilité immédiate, devis rapide sur WhatsApp.
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16">
          
          {/* Left Column - Images Grid */}
          <div className="lg:col-span-8 order-1">
             <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-neutral-100 aspect-[4/3] group">
                <Image 
                  src={item.image} 
                  alt={`Location ${item.brand} ${item.model} - Kashoot Loc`}
                  fill
                  className="transition-transform duration-1000 ease-out group-hover:scale-105 object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             </div>
          </div>

          {/* Right Column - Configuration Sidebar */}
          <div className="lg:col-span-4 lg:row-span-2 relative order-2">
             <div className="w-full space-y-6 lg:sticky lg:top-[120px] h-fit bg-neutral-50/50 lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none border border-neutral-100 lg:border-none">
                 <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                   <h2 className="text-lg font-bold text-neutral-900">Configuration</h2>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Prix HTVA / Jour</p>
                 </div>
                 
                 {/* Color Selection */}
                 <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Couleur</label>
                    <div className="flex gap-3">
                      {item.colors.map((color, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 md:w-10 md:h-10 rounded-full border transition-all duration-300 relative ${
                            selectedColor === color ? 'ring-2 ring-offset-2 ring-black scale-110' : 'hover:scale-105'
                          }`}
                          style={{ backgroundColor: color }}
                          aria-label={`Select color ${color}`}
                        />
                      ))}
                    </div>
                 </div>

                 {/* Date Selection */}
                 <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Période de location</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] text-neutral-400 font-medium ml-1">Du</span>
                        <input 
                          type="date" 
                          min={today}
                          value={startDate}
                          onChange={(e) => handleDateChange(setStartDate, e.target.value, today)}
                          className="w-full p-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm font-medium focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all hover:bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-neutral-400 font-medium ml-1">Au</span>
                        <input 
                          type="date" 
                          min={startDate || today}
                          value={endDate}
                          onChange={(e) => handleDateChange(setEndDate, e.target.value, startDate || today)}
                          className="w-full p-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm font-medium focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all hover:bg-white"
                        />
                      </div>
                    </div>
                    {startDate && endDate && (
                      <div className="mt-3">
                        <div className="flex justify-between items-center px-4 py-2 bg-neutral-100 rounded-lg mb-2">
                          <span className="text-xs font-medium text-neutral-500">Durée</span>
                          <span className="text-sm font-bold text-neutral-900">{durationInDays} {durationInDays > 1 ? 'jours' : 'jour'}</span>
                        </div>
                        <p className="text-[10px] text-neutral-400 text-center">
                          Une journée de location = 24h (ex: du {startDate.split('-').reverse().join('/')} à 12h au {endDate.split('-').reverse().join('/')} à 12h)
                        </p>
                      </div>
                    )}
                 </div>

                 {/* Availability Status */}
                 <div className={`p-4 rounded-xl border ${item.available ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded-full ${item.available ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`}></div>
                      <span className={`text-sm font-bold ${item.available ? 'text-emerald-700' : 'text-red-700'}`}>
                        {item.available ? 'En stock' : 'Actuellement indisponible'}
                      </span>
                    </div>
                    <p className={`text-xs ${item.available ? 'text-emerald-600' : 'text-red-600'}`}>
                      {item.available 
                        ? 'Ce produit est disponible immédiatement.' 
                        : 'Contactez-nous pour connaître les prochaines disponibilités.'}
                    </p>
                 </div>

                 {/* Total Block */}
                 <div className="bg-white rounded-2xl p-6 mt-6 border border-neutral-100 shadow-sm">
                   <div className="flex justify-between items-end mb-2">
                     <span className="text-sm font-medium text-neutral-500">Total (Estimé)</span>
                     <span className="text-3xl font-black tracking-tighter text-neutral-900">{totalPrice}€</span>
                   </div>
                   <button 
                    onClick={handleAddToCart}
                    disabled={!item.available}
                    className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-xs uppercase tracking-widest mt-4 ${
                      !item.available 
                        ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed hover:bg-neutral-200 hover:shadow-none' 
                        : 'bg-black text-white hover:bg-neutral-800'
                    }`}
                  >
                    {item.available ? 'AJOUTER AU PANIER' : (item.badge === 'Bientôt' ? 'Bientôt' : 'Indisponible')}
                  </button>
                  <p className="text-[10px] text-center text-neutral-400 mt-2">
                    Devis final et disponibilité confirmés via WhatsApp
                  </p>
                 </div>

                 {/* Conditions Summary */}
                 <div className="mt-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                   <div className="flex items-start gap-3">
                     <div className="p-1.5 bg-white rounded-md border border-neutral-100 shadow-sm">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                     </div>
                     <div>
                       <span className="block text-xs font-bold text-neutral-900 uppercase tracking-wide">Livraison & Installation</span>
                       <p className="text-[10px] text-neutral-500 leading-tight mt-0.5">Nous nous déplaçons pour l'installation sur site.</p>
                     </div>
                   </div>
                   
                   <div className="pt-3 border-t border-neutral-200/50 flex items-start gap-3">
                     <div className="p-1.5 bg-white rounded-md border border-neutral-100 shadow-sm">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                     </div>
                     <div>
                       <span className="block text-xs font-bold text-neutral-900 uppercase tracking-wide">Conditions</span>
                       <ul className="text-[10px] text-neutral-500 space-y-1 mt-1">
                         <li className="flex items-center gap-1.5">
                           <span className="w-1 h-1 rounded-full bg-red-500"></span>
                           Retard : <span className="font-bold text-neutral-900">50€</span>
                         </li>
                         <li className="flex items-center gap-1.5">
                           <span className="w-1 h-1 rounded-full bg-red-500"></span>
                           Sale : <span className="font-bold text-neutral-900">Frais de nettoyage</span>
                         </li>
                         <li className="flex items-center gap-1.5">
                           <span className="w-1 h-1 rounded-full bg-red-500"></span>
                           Casse : <span className="font-bold text-neutral-900">Facturé</span>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
             </div>
          </div>

          {/* Bottom Details Section */}
          <div className="lg:col-span-8 order-3 space-y-12 md:space-y-16">
             {/* Specs Grid */}
             <div className="pt-8 md:pt-12 border-t border-neutral-100">
               <h3 className="text-xl font-bold text-neutral-900 mb-8">Caractéristiques Techniques</h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 <div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Spécification</div>
                   <div className="text-lg md:text-xl font-medium text-neutral-900">{item.specsBadge}</div>
                 </div>
                 {/* Mock specs based on item category logic could go here, for now using static or derived */}
                 <div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Catégorie</div>
                   <div className="text-lg md:text-xl font-medium text-neutral-900 capitalize">{item.category}</div>
                 </div>
                 <div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Marque</div>
                   <div className="text-lg md:text-xl font-medium text-neutral-900">{item.brand}</div>
                 </div>
               </div>
             </div>

             {/* Included Items Section */}
             {item.included && item.included.length > 0 && (
               <div className="pt-8 md:pt-12 border-t border-neutral-100">
                 <h3 className="text-xl font-bold text-neutral-900 mb-8">Inclus dans la location</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {item.included.map((includedItem, idx) => (
                     <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                       <div className="w-8 h-8 rounded-full bg-white border border-neutral-100 flex items-center justify-center shrink-0 text-emerald-500">
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                           <polyline points="20 6 9 17 4 12"></polyline>
                         </svg>
                       </div>
                       <span className="text-sm font-medium text-neutral-700">{includedItem}</span>
                     </div>
                   ))}
                 </div>
               </div>
             )}

             {/* Regulation Charter - Compact Version */}
             <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6">
               <h3 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                   <circle cx="12" cy="12" r="10"></circle>
                   <line x1="12" y1="8" x2="12" y2="12"></line>
                   <line x1="12" y1="16" x2="12.01" y2="16"></line>
                 </svg>
                 Conditions de location
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <span className="block text-xs font-bold text-red-900 mb-1">Retard de restitution</span>
                    <p className="text-xs text-red-700/80 leading-relaxed">
                      Tout retard non signalé est facturé <span className="font-bold text-red-800">50€</span>.
                    </p>
                  </div>
                 <div>
                   <span className="block text-xs font-bold text-red-900 mb-1">Dommages & Rayures</span>
                   <p className="text-xs text-red-700/80 leading-relaxed">
                     Facturation au prix du neuf ou de la réparation pour tout dommage constaté.
                   </p>
                 </div>
                 
                 {item.category === 'cameras' && (
                   <div className="md:col-span-2 pt-2 border-t border-red-200/50">
                     <span className="block text-xs font-bold text-red-900 mb-1">Déclenchements (Shutter Count)</span>
                     <p className="text-xs text-red-700/80 leading-relaxed">
                       Maximum <span className="font-bold text-red-800">2500 déclenchements / jour</span> inclus. 
                       Au-delà, un supplément sera facturé.
                     </p>
                   </div>
                 )}
                 
                 <div className="md:col-span-2 pt-2 border-t border-red-200/50">
                    <span className="block text-xs font-bold text-red-900 mb-1">Services & Propreté</span>
                    <p className="text-xs text-red-700/80 leading-relaxed">
                      Livraison et Installation sur site disponible. 
                      <span className="block mt-1">Des frais de remise en état seront appliqués si le matériel est rendu sale.</span>
                    </p>
                 </div>
               </div>
               <p className="text-[10px] text-red-400 mt-4 font-medium text-center">
                 En réservant, vous acceptez ces conditions strictes.
               </p>
             </div>
             
             {/* How it works */}
             <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
               <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-4">Comment ça marche ?</h3>
               <div className="space-y-4">
                 <div className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                   <div>
                     <span className="block text-sm font-bold text-neutral-900">Ajoutez au panier</span>
                     <p className="text-xs text-neutral-500 mt-0.5">Sélectionnez votre matériel et vos dates de location.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                   <div>
                     <span className="block text-sm font-bold text-neutral-900">Validez via WhatsApp</span>
                     <p className="text-xs text-neutral-500 mt-0.5">Envoyez votre demande. Nous confirmons la dispo immédiatement.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                   <div>
                     <span className="block text-sm font-bold text-neutral-900">Récupération</span>
                     <p className="text-xs text-neutral-500 mt-0.5">Retrait gratuit en boutique (Paris) ou livraison sur site.</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>

        </div>
        
        {/* Related Products Section */}
        {relatedItems.length > 0 && (
          <div className="mt-24 md:mt-32 border-t border-neutral-100 pt-16">
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-brand text-neutral-900 mb-2">
                  Cela pourrait vous intéresser
                </h3>
                <p className="text-neutral-500 text-sm md:text-base">
                  Accessoires et produits complémentaires recommandés
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedItems.map((relatedItem) => (
                <div key={relatedItem.id} className="group">
                  <Link href={`/equipment/${relatedItem.id}`} className="block relative aspect-[4/3] mb-4 overflow-hidden rounded-2xl bg-neutral-100">
                    <img 
                      src={relatedItem.image} 
                      alt={relatedItem.model}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }}
                    />
                    {relatedItem.badge && (
                       <span className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                         relatedItem.badgeType === 'blue' ? 'bg-blue-50 border-blue-200 text-blue-700' : 
                         relatedItem.badgeType === 'yellow' ? 'bg-yellow-50 border-yellow-200 text-yellow-700' :
                         'bg-neutral-50 border-neutral-200 text-neutral-600'
                       }`}>
                         {relatedItem.badge}
                       </span>
                    )}
                  </Link>
                  <Link href={`/equipment/${relatedItem.id}`} className="block">
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors">{relatedItem.brand} {relatedItem.model}</h4>
                  </Link>
                  <p className="text-xs text-neutral-500 mb-2">{relatedItem.subtext}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-neutral-900">{relatedItem.price}€<span className="text-[10px] font-normal text-neutral-500">/jour</span></span>
                    <Link 
                      href={`/equipment/${relatedItem.id}`}
                      className="text-[10px] font-bold uppercase tracking-widest border border-neutral-200 px-3 py-1.5 rounded-full hover:bg-black hover:text-white transition-colors"
                    >
                      Voir
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
