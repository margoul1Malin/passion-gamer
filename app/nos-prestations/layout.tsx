import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Nos Prestations | Développement Web, SEO & Logiciels - Agence Web Pro",
  description: "Découvrez nos services : création de sites internet, développement web sur mesure, référencement SEO, création de logiciels et conseil informatique. Solutions digitales complètes pour votre entreprise.",
  keywords: ['prestations web', 'développement web', 'création site internet', 'référencement SEO', 'création logiciels', 'conseil informatique', 'programmation', 'Next.js', 'React'],
  alternates: {
    canonical: '/nos-prestations',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/nos-prestations',
    title: "Nos Prestations | Développement Web, SEO & Logiciels - Agence Web Pro",
    description: "Découvrez nos services : création de sites internet, développement web sur mesure, référencement SEO, création de logiciels et conseil informatique.",
    siteName: 'Agence Web Pro',
    images: [
      {
        url: '/og-image-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Nos prestations digitales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nos Prestations | Développement Web, SEO & Logiciels - Agence Web Pro",
    description: "Découvrez nos services : création de sites internet, développement web sur mesure, référencement SEO, création de logiciels et conseil informatique.",
    images: ['/og-image-services.jpg'],
    creator: '@AgenceWebPro',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
