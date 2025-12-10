import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kashoot.fr'),
  title: {
    default: "Kashoot - Location de matériel vidéo professionnel",
    template: "%s | Kashoot",
  },
  description: "Location de matériel vidéo et photo professionnel haut de gamme pour vos projets créatifs.",
  keywords: ["location matériel vidéo", "location caméra", "location matériel photo", "équipement vidéo professionnel", "location matériel cinéma"],
  authors: [{ name: "Kashoot" }],
  creator: "Kashoot",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.kashoot.fr",
    title: "Kashoot - Location de matériel vidéo professionnel",
    description: "Location de matériel vidéo et photo professionnel haut de gamme.",
    siteName: "Kashoot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashoot - Location de matériel vidéo professionnel",
    description: "Location de matériel vidéo et photo professionnel haut de gamme.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

