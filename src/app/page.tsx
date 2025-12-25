import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { SmoothScroller } from "@/components/smooth-scroller";
import { CustomCursor } from "@/components/ui/custom-cursor";

export default function Home() {
  return (
    <>
      <SmoothScroller />
      <CustomCursor />
      <main className="flex flex-col w-full bg-[#050505]">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
