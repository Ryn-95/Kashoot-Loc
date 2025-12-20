'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type CartItem = {
  id: number;
  brand: string;
  model: string;
  price: number; // Total price for the duration (unitPrice * days)
  unitPrice: number; // Daily rate
  days: number;
  startDate: string;
  endDate: string;
  image: string;
  color: string;
  duration: string;
  assurance: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  cartTotal: number;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;
  promoCode: string | null;
  discountPercentage: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState<string | null>(null);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('kashoot_cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // Migration for old cart items (add defaults if missing)
        const migratedCart = parsedCart.map((item: any) => ({
          ...item,
          unitPrice: item.unitPrice || item.price,
          days: item.days || 1,
          startDate: item.startDate || new Date().toISOString().split('T')[0],
          endDate: item.endDate || new Date().toISOString().split('T')[0],
        }));
        setItems(migratedCart);
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('kashoot_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => 
          item.id === newItem.id && 
          item.color === newItem.color && 
          item.duration === newItem.duration && 
          item.assurance === newItem.assurance &&
          item.startDate === newItem.startDate &&
          item.endDate === newItem.endDate
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...newItem, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const applyPromoCode = (code: string) => {
    // Check if code matches 'kashootloc' (case insensitive)
    if (code.toLowerCase() === 'kashootloc') {
      setPromoCode('kashootloc');
      setDiscountPercentage(0.20); // 20% discount
      return true;
    }
    return false;
  };

  const removePromoCode = () => {
    setPromoCode(null);
    setDiscountPercentage(0);
  };

  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        itemCount,
        isCartOpen,
        setIsCartOpen,
        applyPromoCode,
        removePromoCode,
        promoCode,
        discountPercentage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
