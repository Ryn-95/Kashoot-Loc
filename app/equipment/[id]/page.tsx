'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { equipmentItems } from '@/data/equipment';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function EquipmentPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const id = Number(params.id);
  const item = equipmentItems.find((i) => i.id === id);
  
  const [selectedColor, setSelectedColor] = useState(item?.colors[0] || '#000000');
  const [selectedDuration, setSelectedDuration] = useState('1 jour');
  const [selectedAssurance, setSelectedAssurance] = useState('Standard');
  const [selectedPayment, setSelectedPayment] = useState('0 €');
  const fallbackImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23f3f4f6"/><stop offset="100%" stop-color="%23e5e7eb"/></linearGradient></defs><rect width="400" height="300" fill="url(%23g)"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-family="Inter, sans-serif" font-size="14">Image indisponible</text></svg>';

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

  const handleReservation = () => {
    const message = `Bonjour, je souhaite réserver : ${item.brand} ${item.model} pour une durée de ${selectedDuration}.`;
    const whatsappUrl = `https://wa.me/33779570959?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-sans pt-[88px]">
      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-12">
        
        {/* Title Section */}
        <div className="mb-8 md:mb-12">
           <div className="flex items-center gap-3 mb-4">
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
           <h1 className="text-3xl md:text-6xl font-black italic tracking-tighter text-neutral-900 mb-2 leading-tight">
             {item.brand} {item.model}
           </h1>
           <p className="text-lg md:text-2xl text-neutral-500 font-light tracking-tight max-w-2xl">
             {item.subtext}
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column - Images Grid */}
          <div className="lg:col-span-8 order-1">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Main Large Image */}
                <div className="md:col-span-2 relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-neutral-100 aspect-[4/3] group">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img 
                     src={item.image} 
                     alt={`${item.brand} ${item.model}`}
                     className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                     onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Detail Images - Hidden on mobile if too many? No, kept for detail */}
                <div className="relative rounded-[20px] md:rounded-[24px] overflow-hidden bg-neutral-100 aspect-square group cursor-zoom-in hidden md:block">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img 
                     src={item.image} 
                     alt="Detail 1"
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }}
                   />
                </div>
                <div className="relative rounded-[20px] md:rounded-[24px] overflow-hidden bg-neutral-100 aspect-square group cursor-zoom-in hidden md:block">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img 
                     src={item.image} 
                     alt="Detail 2"
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }}
                   />
                   
                   <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                     <button className="text-white text-xs font-bold uppercase tracking-widest border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
                       Galerie
                     </button>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column - Configuration Sidebar */}
          <div className="lg:col-span-4 lg:row-span-2 relative order-2">
             <div className="w-full space-y-6 lg:sticky lg:top-[120px] h-fit bg-neutral-50/50 lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none border border-neutral-100 lg:border-none">
                 <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                   <h2 className="text-lg font-bold text-neutral-900">Configuration</h2>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Prix HTVA</p>
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

                 {/* Duration Selection */}
                 <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Durée</label>
                    <div className="grid grid-cols-3 gap-2">
                       {['1 jour', '3 jours', '1 semaine'].map((duration) => (
                         <button
                           key={duration}
                           onClick={() => setSelectedDuration(duration)}
                           className={`py-3 px-2 rounded-xl text-xs md:text-sm font-medium border transition-all duration-300 ${
                             selectedDuration === duration 
                               ? 'border-black text-black bg-white ring-1 ring-black shadow-sm' 
                               : 'border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:bg-white'
                           }`}
                         >
                           {duration}
                         </button>
                       ))}
                    </div>
                 </div>

                 {/* Assurance Selection */}
                 <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Assurance</label>
                      <button className="text-[10px] font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800">Info</button>
                    </div>
                    <div className="space-y-2">
                       {['Basic', 'Standard', 'Premium'].map((opt) => (
                         <button
                           key={opt}
                           onClick={() => setSelectedAssurance(opt)}
                           className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-300 group ${
                             selectedAssurance === opt 
                               ? 'border-black bg-neutral-900 text-white shadow-md' 
                               : 'border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:bg-white'
                           }`}
                         >
                           <span className="font-medium text-sm">{opt}</span>
                           {selectedAssurance === opt && (
                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                               <polyline points="20 6 9 17 4 12"></polyline>
                             </svg>
                           )}
                         </button>
                       ))}
                    </div>
                 </div>

                 {/* Total Block */}
                 <div className="bg-white rounded-2xl p-6 mt-6 border border-neutral-100 shadow-sm">
                   <div className="flex justify-between items-end mb-2">
                     <span className="text-sm font-medium text-neutral-500">Total</span>
                     <span className="text-3xl font-black tracking-tighter text-neutral-900">{item.price}€</span>
                   </div>
                   <button 
                     onClick={handleReservation}
                     disabled={!item.available}
                     className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-xs uppercase tracking-widest mt-4 ${
                       !item.available 
                         ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed hover:bg-neutral-200 hover:shadow-none' 
                         : 'bg-black text-white hover:bg-neutral-800'
                     }`}
                   >
                     {item.available ? 'Commander' : (item.badge === 'Bientôt' ? 'Bientôt' : 'Indisponible')}
                   </button>
                 </div>
             </div>
          </div>

          {/* Bottom Details Section */}
          <div className="lg:col-span-8 order-3 space-y-12 md:space-y-16">
             {/* Specs Grid */}
             <div className="pt-8 md:pt-12 border-t border-neutral-100">
               <h3 className="text-xl font-bold text-neutral-900 mb-8">Caractéristiques</h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 <div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Résolution</div>
                   <div className="text-lg md:text-xl font-medium text-neutral-900">4K 120p</div>
                 </div>
                 <div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Capteur</div>
                   <div className="text-lg md:text-xl font-medium text-neutral-900">Full Frame</div>
                 </div>
                 <div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">ISO</div>
                   <div className="text-lg md:text-xl font-medium text-neutral-900">800 / 12800</div>
                 </div>
                 <div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Monture</div>
                   <div className="text-lg md:text-xl font-medium text-neutral-900">E-Mount</div>
                 </div>
               </div>
             </div>

             {/* Included Items Section */}
             {item.included && item.included.length > 0 && (
               <div className="pt-8 md:pt-12 border-t border-neutral-100">
                 <h3 className="text-xl font-bold text-neutral-900 mb-8">Inclus</h3>
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
                 Règlementation
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <span className="block text-xs font-bold text-red-900 mb-1">⏱ Retard de restitution</span>
                    <p className="text-xs text-red-700/80 leading-relaxed">
                      Tout retard non signalé est facturé <span className="font-bold text-red-800">50€</span>.
                    </p>
                  </div>
                 <div>
                   <span className="block text-xs font-bold text-red-900 mb-1">⚠️ Dommages & Rayures</span>
                   <p className="text-xs text-red-700/80 leading-relaxed">
                     Facturation au prix du neuf ou de la réparation pour tout dommage constaté.
                   </p>
                 </div>
               </div>
               <p className="text-[10px] text-red-400 mt-4 font-medium text-center">
                 En réservant, vous acceptez ces conditions strictes.
               </p>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}
