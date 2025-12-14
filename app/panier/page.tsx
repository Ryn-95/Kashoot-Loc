'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 bg-white flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-400 mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">Votre panier est vide</h1>
        <p className="text-neutral-500 mb-8 max-w-md">
          Explorez notre catalogue pour trouver l'équipement parfait pour votre prochain projet.
        </p>
        <Link 
          href="/" 
          className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-800 transition-all"
        >
          Voir le catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black italic tracking-tighter mb-12">
          VOTRE PANIER
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {items.map((item) => (
              <div key={`${item.id}-${item.color}-${item.duration}-${item.assurance}`} className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-neutral-100 hover:border-neutral-200 transition-all">
                {/* Image */}
                <div className="w-full sm:w-32 h-32 bg-neutral-50 rounded-xl flex-shrink-0 overflow-hidden relative">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={item.image} 
                    alt={`${item.brand} ${item.model}`} 
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
                        {item.brand}
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900">
                        {item.model}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-neutral-900">
                        {(item.price * item.quantity).toFixed(2)}€
                      </div>
                      {item.unitPrice && (
                        <div className="text-xs text-neutral-500">
                          {item.unitPrice}€ / jour
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-neutral-500 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full border border-neutral-200" style={{ backgroundColor: item.color }} />
                      <span>{item.duration}</span>
                    </div>
                    <div className="w-px h-4 bg-neutral-200" />
                    <div>Assurance {item.assurance}</div>
                  </div>

                  <div className="flex justify-between items-end">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 bg-neutral-50 rounded-lg p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-white shadow-sm text-neutral-600 hover:text-black transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-white shadow-sm text-neutral-600 hover:text-black transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs font-bold text-red-500 hover:text-red-700 uppercase tracking-wider"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="sticky top-32 bg-neutral-50 rounded-3xl p-8">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Résumé</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Sous-total</span>
                  <span className="font-bold">{cartTotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Frais de service</span>
                  <span className="font-bold">0.00€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">TVA (20%)</span>
                  <span className="font-bold">{(cartTotal * 0.2).toFixed(2)}€</span>
                </div>
                <div className="h-px bg-neutral-200 my-4" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold text-neutral-900">Total</span>
                  <span className="font-black text-neutral-900">{(cartTotal * 1.2).toFixed(2)}€</span>
                </div>
              </div>

              <button 
                 onClick={() => {
                   const message = `Bonjour, je souhaite louer :\n\n${items.map(item => 
                     `- ${item.quantity}x ${item.brand} ${item.model}\n  Du ${item.startDate} au ${item.endDate} (${item.duration})\n  Prix : ${(item.price * item.quantity).toFixed(2)}€`
                   ).join('\n\n')}\n\nSous-total : ${cartTotal.toFixed(2)}€\nTVA (20%) : ${(cartTotal * 0.2).toFixed(2)}€\nTotal : ${(cartTotal * 1.2).toFixed(2)}€`;
                   
                   window.open(`https://wa.me/33779570959?text=${encodeURIComponent(message)}`, '_blank');
                 }}
                 className="w-full bg-black text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl mb-4"
               >
                 Paiement via WhatsApp
               </button>
              
              <p className="text-xs text-center text-neutral-400">
                Paiement sécurisé par Stripe. En validant votre commande, vous acceptez nos conditions générales de location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
