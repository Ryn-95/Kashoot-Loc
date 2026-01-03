import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kashootloc.fr'),
  title: {
    default: "Kashoot Premium - Location Matériel Vidéo, Cinéma & Broadcast Paris",
    template: "%s | Kashoot Premium",
  },
  description: "Location de caméras (Sony, RED, Arri), objectifs, drones et éclairage à Paris. Matériel audiovisuel professionnel disponible immédiatement. Devis WhatsApp.",
  keywords: ["location matériel vidéo", "location caméra Paris", "location Sony A7S III", "location drone DJI", "location matériel cinéma", "louer objectif G Master", "location lumière tournage", "kashoot location", "kashoot loc", "kashoot", "location caméra Goussainville", "location caméra Roissy"],
  authors: [{ name: "Kashoot Premium" }],
  creator: "Kashoot Premium",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.kashootloc.fr",
    title: "Kashoot Premium - Location Matériel Vidéo & Cinéma",
    description: "Le service de location audiovisuelle nouvelle génération. Matériel pro, dispo immédiate, zéro paperasse.",
    siteName: "Kashoot Premium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashoot Premium - Location Matériel Vidéo",
    description: "Location matériel audiovisuel professionnel à Paris.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '5ihsC1pCKuk5X7y3-zBpqPDBQUB4nnu0mwLzGA16PiM',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Kashoot Premium',
    image: 'https://www.kashootloc.fr/images/logo.png',
    '@id': 'https://www.kashootloc.fr',
    url: 'https://www.kashootloc.fr',
    telephone: '+33779570959',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 rue jean chaptal',
      addressLocality: 'Aulnay-sous-Bois',
      postalCode: '93600',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.9386,
      longitude: 2.4906
    },
    sameAs: [
      "https://www.instagram.com/kashoot.premium/"
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "08:00",
      closes: "20:00"
    },
    priceRange: "$$"
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://www.kashootloc.fr'
    }]
  };

  return (
    <html lang="fr">
      <body className={`${inter.className} overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <CartProvider>
          <WishlistProvider>
            <Suspense fallback={<div className="h-20 bg-white" />}>
              <Header />
            </Suspense>
            {children}
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
