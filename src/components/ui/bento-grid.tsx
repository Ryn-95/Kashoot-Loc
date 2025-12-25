"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
  category,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
  category?: string;
}) => {
  const Content = () => (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 relative overflow-hidden",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200 absolute top-4 right-4 z-20">
        {icon}
      </div>
      
      <div className="h-full w-full absolute inset-0 z-0">
        {header}
      </div>

      <div className="z-10 mt-auto bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-white/10 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 translate-y-4 group-hover/bento:translate-y-0">
        <div className="flex items-center gap-2 mb-2">
           <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
          {category && (
            <span className="text-[10px] uppercase tracking-wider border border-white/20 px-2 py-0.5 rounded-full text-white/70">
              {category}
            </span>
          )}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
      
      {/* Permanent Title for non-hover state (optional, or rely on hover) */}
      <div className="z-10 absolute bottom-4 left-4 group-hover/bento:opacity-0 transition-opacity duration-300">
         <h3 className="font-bold text-lg text-white drop-shadow-md">{title}</h3>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
        <Content />
      </Link>
    );
  }

  return <Content />;
};
