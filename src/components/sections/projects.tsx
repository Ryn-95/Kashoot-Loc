"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  links: {
    demo: string;
  };
  customImage?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kashoot Location",
    category: "E-commerce",
    description: "Plateforme de location de matériel audiovisuel professionnel à Paris.",
    links: { demo: "https://www.kashootloc.fr/" },
    customImage: "/kashoot-loc.png"
  },
  {
    id: 2,
    title: "Kashoot Mariage",
    category: "Site Web",
    description: "Portfolio pour vidéaste de mariage capturant des moments inoubliables.",
    links: { demo: "https://www.kashootmariage.fr/" },
  },
  {
    id: 3,
    title: "GREGA",
    category: "Site Web",
    description: "Site vitrine pour chasseur d'appartement immobilier.",
    links: { demo: "https://www.gregaonecompany.fr/" },
  },
  {
    id: 4,
    title: "WAQT Luxury",
    category: "E-commerce",
    description: "Boutique en ligne exclusive de montres de luxe.",
    links: { demo: "https://waqt-luxury.fr/" },
  },
  {
    id: 5,
    title: "Burgerz",
    category: "Web App",
    description: "Application de commande pour restaurant de burgers.",
    links: { demo: "https://burgerz-nine.vercel.app/" },
  },
  {
    id: 6,
    title: "Forme Body Concept",
    category: "Site Web",
    description: "Site de coaching sportif et bien-être.",
    links: { demo: "https://forme-body-concept.vercel.app/" },
  },
  {
    id: 7,
    title: "9Secondes",
    category: "Agence",
    description: "Agence digitale spécialisée dans la création rapide de sites web.",
    links: { demo: "https://www.9secondes.com/" },
    customImage: "/9secondes.png"
  },
  {
    id: 8,
    title: "Odo Agency",
    category: "Agence",
    description: "Agence créative pour marques ambitieuses.",
    links: { demo: "https://www.odoagency.fr/" },
  },
  {
    id: 9,
    title: "Drivly Orion",
    category: "Web App",
    description: "Plateforme de gestion pour auto-écoles.",
    links: { demo: "https://drivly-orion.vercel.app/" },
  },
  {
    id: 10,
    title: "Luxe Wash Agency",
    category: "Site Web",
    description: "Service de detailing et lavage auto haut de gamme.",
    links: { demo: "https://luxe-wash-agency.vercel.app/" },
  },
  {
    id: 11,
    title: "RBoost",
    category: "Agence",
    description: "Agence de marketing digital et croissance.",
    links: { demo: "https://www.rboost.fr/" },
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div className="group relative h-dvh w-screen flex-shrink-0 flex items-center justify-center bg-[#050505] overflow-hidden px-4 md:px-0">
      <div className="relative w-full max-w-[90vw] md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-4 md:space-y-8 z-10">
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono text-neutral-500">0{index + 1}</span>
            <div className="h-[1px] w-12 bg-neutral-800" />
            <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest">{project.category}</span>
          </div>
          
          <h2 className="text-4xl md:text-8xl font-bold font-syne text-white leading-[0.9] tracking-tighter">
            {project.title}
          </h2>
          
          <p className="text-base md:text-xl text-neutral-400 font-light max-w-md leading-relaxed line-clamp-3 md:line-clamp-none">
            {project.description}
          </p>

          <Link
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-3 text-white text-lg font-medium mt-4 md:mt-8"
          >
            <span className="border-b border-white/20 pb-1 group-hover/link:border-white transition-colors">Visit Website</span>
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover/link:bg-white group-hover/link:text-black transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        {/* Visual Content - Browser Mockup */}
        <Link 
           href={project.links.demo}
           target="_blank"
           className="order-1 md:order-2 block relative w-full aspect-video md:aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        >
          {/* Browser Frame */}
          <div className="absolute inset-0 bg-[#111] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
            {/* Browser Header */}
            <div className="h-6 md:h-8 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#27c93f]" />
              <div className="ml-4 flex-1 h-4 md:h-5 bg-[#222] rounded flex items-center px-3">
                <span className="text-[8px] md:text-[10px] text-neutral-500 font-mono truncate">{project.links.demo}</span>
              </div>
            </div>
            {/* Website Preview */}
            <div className="relative flex-1 bg-black w-full h-full">
               <Image
                 src={project.customImage || `https://api.microlink.io/?url=${encodeURIComponent(project.links.demo)}&screenshot=true&meta=false&embed=screenshot.url`}
                 alt={project.title}
                 fill
                 className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                 unoptimized={!project.customImage}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-50" />
            </div>
          </div>
          
          {/* Glow Effect behind */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </Link>
      </div>
    </div>
  );
};

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate transform range based on number of items (12 items: 1 intro + 11 projects)
  // We want to scroll until the last item is fully visible
  // Total width = 1200vw. Viewport = 100vw. Travel distance = 1100vw.
  // Percentage = 1100 / 1200 = 91.66%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-91.66%"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[1000vh] bg-[#050505]">
      <div className="sticky top-0 h-dvh flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {/* Intro Card */}
          <div className="h-dvh w-screen flex-shrink-0 flex items-center justify-center bg-[#050505] px-4 md:px-0 z-20">
            <div className="text-center">
              <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-[0.3em] mb-6">Selected Work</h2>
              <h3 className="text-4xl md:text-9xl font-syne font-bold text-white tracking-tighter mb-8">
                Featured <br />
                <span className="text-transparent stroke-text">Projects</span>
              </h3>
              <p className="text-neutral-400 max-w-xl mx-auto text-lg">
                Scroll to explore a collection of digital experiences crafted with precision and passion.
              </p>
            </div>
          </div>
          
          {/* Project Cards */}
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
