"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 md:py-32 sm:px-6 lg:px-8 bg-[#050505] text-white">
      <div className="grid gap-16 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tighter sm:text-6xl font-syne">
            Let's work <br />
            <span className="text-neutral-500">together.</span>
          </h2>
          <p className="mb-12 text-lg text-neutral-400 max-w-md leading-relaxed">
            Vous avez une idée en tête ou vous souhaitez simplement dire bonjour ? N&apos;hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles opportunités.
          </p>

          <div className="space-y-8">
            <div className="flex items-center space-x-6 group cursor-pointer">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-syne text-lg font-bold">Email</h3>
                <p className="text-neutral-400">contact@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 group cursor-pointer">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-syne text-lg font-bold">Localisation</h3>
                <p className="text-neutral-400">Paris, France (Remote possible)</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm"
        >
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-400 ml-1">
                  Nom
                </label>
                <input
                  id="name"
                  className="flex h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 transition-all hover:border-white/20"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-400 ml-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 transition-all hover:border-white/20"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-neutral-400 ml-1">
                Sujet
              </label>
              <input
                id="subject"
                className="flex h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 transition-all hover:border-white/20"
                placeholder="Projet de collaboration..."
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-neutral-400 ml-1">
                Message
              </label>
              <textarea
                id="message"
                className="flex min-h-[150px] w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 transition-all hover:border-white/20 resize-none"
                placeholder="Parlez-moi de votre projet..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-white text-black font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
            >
              Envoyer le message
              <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
