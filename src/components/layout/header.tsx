"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Work", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="relative z-50 group">
          <span className="font-syne text-xl font-bold text-white tracking-tighter">
            RM<span className="text-neutral-500">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          href="mailto:contact@rayanemouhajer.com"
          className="hidden md:flex items-center justify-center px-6 py-2 rounded-full border border-white/10 text-sm text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Let's Talk
        </Link>
      </div>
    </motion.header>
  );
}
