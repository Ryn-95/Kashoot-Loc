'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={cn('flex items-center gap-8 lg:gap-12', className)}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              'text-sm font-medium transition-colors duration-300',
              isActive
                ? 'text-neutral-900'
                : 'text-neutral-600 hover:text-neutral-900'
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

