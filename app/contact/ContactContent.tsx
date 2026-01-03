'use client';

import { useState } from 'react';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 tracking-tight">
          Contact
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-light text-neutral-900 mb-6">Informations de contact</h2>
            <div className="space-y-4 text-neutral-600">
              <div>
                <p className="font-medium text-neutral-900 mb-1">Adresse</p>
                <p className="text-neutral-600">1 rue jean chaptal, 93600 Aulnay-sous-Bois</p>
                <p className="text-xs text-neutral-400 mt-1">Retrait sur rendez-vous uniquement</p>
              </div>
              <div>
                <p className="font-medium text-neutral-900 mb-1">Email</p>
                <a
                  href="mailto:kashootcorp@gmail.com"
                  className="hover:text-neutral-900 transition-colors underline"
                >
                  kashootcorp@gmail.com
                </a>
              </div>
              <div>
                <p className="font-medium text-neutral-900 mb-1">Téléphone (WhatsApp)</p>
                <a
                  href="https://wa.me/33779570959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 transition-colors underline"
                >
                  +33 7 79 57 09 59
                </a>
              </div>
              <div>
                <p className="font-medium text-neutral-900 mb-1">Horaires</p>
                <p className="text-neutral-600">Lundi au dimanche 8h -20h</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
