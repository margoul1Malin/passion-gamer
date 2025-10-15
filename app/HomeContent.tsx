'use client';

import { useEffect, useRef, ComponentType } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiCode, HiLightningBolt, HiTrendingUp, HiUserGroup, HiCheckCircle, HiStar } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCard from '@/components/AnimatedCard';
import ParallaxSection from '@/components/ParallaxSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HomeContentProps {
  Hero3D: ComponentType;
}

export default function HomeContent({ Hero3D }: HomeContentProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.3
      });

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.6
      });

      gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.9
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section with 3D Background */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 hero-text"
      >
        <div className="absolute inset-0 w-full h-full">
          <Hero3D />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="hero-title text-5xl md:text-7xl font-bold mb-6 text-shadow"
          >
            Création de <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Sites Internet</span>
            <br />
            Professionnels & Innovants
          </motion.h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 w-full my-8 mx-auto text-center">
            Votre <strong>agence web</strong> de confiance pour transformer vos ambitions digitales en réalité.
            Nous concevons des <strong>sites web performants</strong>, élégants et optimisés pour les moteurs de recherche.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/nos-prestations">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all"
              >
                Découvrir nos services
              </motion.button>
            </Link>
            <Link href="/a-propos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/20 transition-all"
              >
                En savoir plus
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.section>

      {/* Presentation Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
          >
            Votre Partenaire pour la Création de Sites Web Performants
          </motion.h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p>
              Dans un monde digital en constante évolution, disposer d&apos;un <strong>site internet professionnel</strong> est devenu indispensable pour toute entreprise souhaitant développer sa visibilité et sa crédibilité. Notre <strong>agence digitale</strong> accompagne les entreprises de toutes tailles dans leur transformation numérique, en proposant des solutions web adaptées à leurs besoins spécifiques et à leurs objectifs de croissance.
            </p>
            <p>
              Que vous soyez une start-up ambitieuse cherchant à établir sa présence en ligne, une PME désireuse de moderniser son image digitale, ou une grande entreprise nécessitant des solutions web complexes et évolutives, notre équipe d&apos;experts met son savoir-faire à votre service. Nous croyons fermement que chaque projet de <strong>création de site internet</strong> est unique et mérite une attention particulière, une approche personnalisée et une exécution irréprochable.
            </p>
            <p>
              Notre philosophie repose sur trois piliers fondamentaux : l&apos;excellence technique, la créativité sans compromis et l&apos;orientation résultats. Nous ne nous contentons pas de créer de beaux sites web ; nous développons des outils digitaux stratégiques qui génèrent du trafic qualifié, convertissent les visiteurs en clients et contribuent directement à la croissance de votre chiffre d&apos;affaires.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Animated Cards */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            Pourquoi Choisir Notre Agence Web ?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HiCode,
                title: 'Expertise Technique Avancée',
                description: 'Notre équipe maîtrise les dernières technologies web et les meilleures pratiques du développement moderne. Nous utilisons des frameworks performants comme Next.js, React et Node.js pour garantir des sites rapides, sécurisés et évolutifs.',
                delay: 0
              },
              {
                icon: HiTrendingUp,
                title: 'SEO et Référencement Naturel',
                description: 'Chaque site web que nous créons est optimisé dès sa conception pour le référencement naturel. Structure sémantique parfaite, temps de chargement optimisés, balises meta pertinentes : nous mettons tout en œuvre pour votre visibilité sur Google.',
                delay: 0.1
              },
              {
                icon: HiUserGroup,
                title: 'Accompagnement Personnalisé',
                description: 'De la phase de conception à la mise en ligne et au-delà, nous restons à vos côtés. Notre agence digitale vous offre un suivi régulier, des conseils stratégiques et un support technique réactif pour assurer le succès de votre projet.',
                delay: 0.2
              },
              {
                icon: HiLightningBolt,
                title: 'Performance et Rapidité',
                description: 'La vitesse de chargement est cruciale pour l&apos;expérience utilisateur et le SEO. Nous optimisons chaque aspect technique de votre site pour garantir des performances exceptionnelles sur tous les appareils et toutes les connexions.',
                delay: 0.3
              },
              {
                icon: HiCheckCircle,
                title: 'Design Moderne et Responsive',
                description: 'Vos clients naviguent depuis leur mobile, tablette ou ordinateur. Nous créons des interfaces élégantes qui s&apos;adaptent parfaitement à tous les écrans, offrant une expérience utilisateur fluide et professionnelle en toutes circonstances.',
                delay: 0.4
              },
              {
                icon: HiStar,
                title: 'Solutions Sur Mesure',
                description: 'Pas de templates génériques : chaque projet de création de site internet bénéficie d&apos;une conception unique, pensée pour refléter votre identité de marque et répondre précisément à vos objectifs business.',
                delay: 0.5
              }
            ].map((item, index) => (
              <AnimatedCard key={index} delay={item.delay} className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overlay-text">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Une Équipe Passionnée à Votre Service
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Fort de plusieurs années d&apos;expérience dans le <strong>développement web</strong> et la stratégie digitale, notre agence maîtrise un large éventail de compétences techniques et créatives.
            </p>
            <Link href="/a-propos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all"
              >
                Découvrir notre équipe
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Expertise Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
          >
            Nos Domaines d&apos;Expertise en Développement Web
          </motion.h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p>
              Fort de plusieurs années d&apos;expérience dans le <strong>développement web</strong> et la stratégie digitale, notre agence maîtrise un large éventail de compétences techniques et créatives. Nous sommes spécialisés dans la <strong>création de sites internet</strong> vitrine élégants et percutants, capables de transformer vos visiteurs en clients grâce à un design soigné et une ergonomie optimisée.
            </p>
            <p>
              Notre expertise s&apos;étend également aux plateformes e-commerce complexes et sécurisées, conçues pour maximiser vos ventes en ligne. Nous développons des boutiques en ligne performantes intégrant les dernières solutions de paiement, des systèmes de gestion de stocks intelligents et des parcours d&apos;achat optimisés pour la conversion.
            </p>
            <div className="p-8 rounded-2xl my-8">
              <h3 className="text-white font-bold text-2xl mb-4">L&apos;Approche Technique de Notre Agence Web</h3>
              <p className="text-gray-200">
                Nous privilégions les architectures modernes basées sur les technologies JavaScript avancées, notamment React et Next.js, pour garantir des interfaces utilisateur réactives et performantes. Notre stack technique inclut également TypeScript pour une meilleure maintenabilité du code, Node.js pour le développement backend robuste, et des solutions de déploiement cloud optimisées pour la scalabilité.
              </p>
            </div>
            <p>
              Le <strong>référencement naturel</strong> (SEO) est au cœur de notre démarche de <strong>création de sites web</strong>. Nous structurons chaque page selon les recommandations de Google, optimisons les contenus pour les mots-clés stratégiques de votre secteur, améliorons la vitesse de chargement grâce à des techniques d&apos;optimisation avancées, et mettons en place une stratégie de linking interne cohérente pour maximiser votre visibilité dans les résultats de recherche.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            Ce Que Disent Nos Clients
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Excellente agence web qui a su comprendre nos besoins et livrer un site internet moderne et performant. Notre trafic a doublé en 6 mois grâce à leur expertise SEO.",
                author: "Marie Dubois",
                role: "Directrice Marketing, TechCorp",
                delay: 0
              },
              {
                quote: "Un accompagnement de qualité du début à la fin. L&apos;équipe a été réactive, professionnelle et force de proposition. Notre nouveau site reflète parfaitement notre image.",
                author: "Jean Martin",
                role: "Fondateur, InnoSolutions",
                delay: 0.2
              },
              {
                quote: "Grâce à cette agence digitale, nous avons enfin un site qui convertit. Le design est élégant et l&apos;interface utilisateur très intuitive. Nos clients adorent!",
                author: "Sophie Laurent",
                role: "CEO, DesignPro",
                delay: 0.4
              }
            ].map((testimonial, index) => (
              <AnimatedCard key={index} delay={testimonial.delay} className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Parallax */}
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop" reverse>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center overlay-text">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Transformer Votre Présence en Ligne ?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Notre <strong>agence web</strong> est prête à donner vie à votre projet de <strong>création de site internet</strong>.
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et obtenir un devis personnalisé gratuit.
            </p>
            <Link href="/nos-prestations">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-indigo-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all"
              >
                Découvrir toutes nos prestations
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* SEO Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 gradient-text"
          >
            Pourquoi Investir dans un Site Internet Professionnel ?
          </motion.h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p>
              À l&apos;ère du numérique, un <strong>site internet professionnel</strong> n&apos;est plus un luxe, mais une nécessité absolue pour toute entreprise souhaitant prospérer. C&apos;est votre vitrine digitale ouverte 24h/24, 7j/7, accessible à des millions de clients potentiels partout dans le monde. Un site bien conçu renforce votre crédibilité, professionnalise votre image de marque et vous positionne comme un acteur sérieux et fiable dans votre secteur d&apos;activité.
            </p>
            <p>
              La <strong>création d&apos;un site web</strong> stratégiquement pensé vous permet de générer des leads qualifiés en continu, de présenter vos produits et services de manière attractive, de vous différencier de la concurrence, et d&apos;établir une relation de confiance durable avec votre audience. C&apos;est un investissement rentable qui génère des retours mesurables sur le long terme.
            </p>
            <p>
              Contrairement aux idées reçues, faire appel à une <strong>agence digitale</strong> professionnelle n&apos;est pas un coût, mais un investissement stratégique qui se rentabilise rapidement grâce à l&apos;augmentation de votre visibilité, de votre notoriété et de vos conversions. Notre expertise nous permet de livrer des sites optimisés qui surpassent largement les performances des solutions génériques et des templates standards.
            </p>
            <p>
              Que vous ayez besoin d&apos;un site vitrine élégant pour présenter votre activité, d&apos;une boutique en ligne performante pour vendre vos produits, d&apos;un blog optimisé pour votre stratégie de content marketing, ou d&apos;une application web sur mesure pour répondre à des besoins spécifiques, notre <strong>agence web</strong> possède l&apos;expertise et les ressources nécessaires pour concrétiser votre vision digitale.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
