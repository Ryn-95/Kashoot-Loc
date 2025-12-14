'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Info */}
          <div>
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-8">
              CONTACTEZ<br />NOUS
            </h1>
            <p className="text-lg text-neutral-500 mb-12 max-w-md">
              Une question sur un produit ? Besoin d'un devis personnalisé ? Notre équipe d'experts est là pour vous accompagner dans tous vos projets.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Nos Bureaux</h3>
                <p className="text-xl font-bold text-neutral-900">
                  1 rue jean chaptal<br />
                  Aulnay-sous-Bois, France
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Contact Direct</h3>
                <div className="space-y-2">
                  <a href="mailto:kashootcorp@gmail.com" className="block text-xl font-bold text-neutral-900 hover:text-blue-600 transition-colors">
                    kashootcorp@gmail.com
                  </a>
                  <a href="tel:+33779570959" className="block text-xl font-bold text-neutral-900 hover:text-blue-600 transition-colors">
                    +33 7 79 57 09 59
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Horaires</h3>
                <div className="grid grid-cols-2 gap-8 max-w-xs">
                  <div>
                    <div className="font-bold text-neutral-900">Lun - Ven</div>
                    <div className="text-neutral-500">9h - 19h</div>
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">Samedi</div>
                    <div className="text-neutral-500">10h - 18h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-neutral-50 rounded-3xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-neutral-500">Prénom</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 font-medium text-neutral-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    placeholder="Jean"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-neutral-500">Nom</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 font-medium text-neutral-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 font-medium text-neutral-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                  placeholder="jean.dupont@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-neutral-500">Sujet</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 font-medium text-neutral-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all appearance-none"
                >
                  <option value="" disabled>Sélectionnez un sujet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="info">Renseignement produit</option>
                  <option value="support">Support technique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 font-medium text-neutral-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl text-sm uppercase tracking-widest"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
