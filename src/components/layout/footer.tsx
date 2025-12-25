export function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-500 font-mono">
          © {new Date().getFullYear()} Rayane Mouhajer. All rights reserved.
        </p>
        
        <div className="flex items-center gap-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-500 hover:text-white transition-colors uppercase tracking-wider"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-500 hover:text-white transition-colors uppercase tracking-wider"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@rayanemouhajer.com"
            className="text-sm text-neutral-500 hover:text-white transition-colors uppercase tracking-wider"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
