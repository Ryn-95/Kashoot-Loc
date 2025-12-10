import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-neutral-900 mb-4 md:mb-6">
          404
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 mb-8 md:mb-10">
          Cette page n'existe pas
        </p>
        <Link href="/">
          <Button variant="fill">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
}

