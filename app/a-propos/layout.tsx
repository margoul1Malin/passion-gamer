import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "À Propos | Notre Histoire & Valeurs - Agence Web Pro",
  description: "Découvrez l&apos;histoire de notre agence web, nos valeurs et notre vision de la transformation digitale. Une équipe passionnée dédiée à votre réussite en ligne depuis plusieurs années.",
  keywords: ['agence web', 'à propos', 'histoire agence', 'valeurs entreprise', 'équipe développement', 'expertise digitale'],
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/a-propos',
    title: "À Propos | Notre Histoire & Valeurs - Agence Web Pro",
    description: "Découvrez l&apos;histoire de notre agence web, nos valeurs et notre vision de la transformation digitale.",
    siteName: 'Agence Web Pro',
    images: [
      {
        url: '/og-image-about.jpg',
        width: 1200,
        height: 630,
        alt: 'À propos de notre agence web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "À Propos | Notre Histoire & Valeurs - Agence Web Pro",
    description: "Découvrez l&apos;histoire de notre agence web, nos valeurs et notre vision de la transformation digitale.",
    images: ['/og-image-about.jpg'],
    creator: '@AgenceWebPro',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
