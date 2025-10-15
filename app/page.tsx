import type { Metadata, Viewport } from 'next';
import HomeContent from './HomeContent';
import Hero3D from '@/components/Hero3D';

const siteUrl = 'https://www.votre-domaine.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#6366f1',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Création Site Internet Professionnel | Agence Web & Digitale",
  description: "Agence web experte en création de sites internet professionnels. Développement web sur mesure, stratégie digitale et référencement SEO. Transformez votre présence en ligne avec nos solutions innovantes.",
  keywords: ['création site internet', 'agence web', 'développement web', 'référencement SEO', 'agence digitale', 'site internet professionnel', 'Next.js', 'React'],
  authors: [{ name: 'Agence Web Pro' }],
  creator: 'Agence Web Pro',
  publisher: 'Agence Web Pro',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    title: "Création Site Internet Professionnel | Agence Web & Digitale",
    description: "Agence web experte en création de sites internet professionnels. Développement web sur mesure, stratégie digitale et référencement SEO.",
    siteName: 'Agence Web Pro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Agence Web Pro - Création de sites internet professionnels',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Création Site Internet Professionnel | Agence Web & Digitale",
    description: "Agence web experte en création de sites internet professionnels. Développement web sur mesure, stratégie digitale et référencement SEO.",
    images: ['/og-image.jpg'],
    creator: '@AgenceWebPro',
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

export default function Home() {
  return (
    <div className="relative">
      <HomeContent Hero3D={Hero3D} />
    </div>
  );
}
