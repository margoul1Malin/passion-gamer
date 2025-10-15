import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agence Web Pro | Création Site Internet & Agence Digitale",
  description: "Agence web spécialisée dans la création de sites internet professionnels, le développement web sur mesure et les solutions digitales. Expertise SEO et stratégie digitale pour votre entreprise.",
  keywords: "création site internet, création de sites web, agence web, agence digitale, développement web, SEO, référencement naturel",
  alternates: {
    canonical: "/"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
