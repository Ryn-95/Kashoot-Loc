'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <h2 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-4">
          Quelque chose s'est mal passé
        </h2>
        <p className="text-base md:text-lg text-neutral-600 mb-8">
          Désolé, quelque chose s'est mal passé. Veuillez réessayer.
        </p>
        <Button onClick={reset} variant="fill">
          Réessayer
        </Button>
      </div>
    </div>
  );
}

