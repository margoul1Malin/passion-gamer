'use client';

import { motion } from 'framer-motion';
import { HiHeart, HiLightBulb, HiShieldCheck, HiUsers, HiTrendingUp, HiAcademicCap } from 'react-icons/hi';
import AnimatedCard from '@/components/AnimatedCard';
import ParallaxSection from '@/components/ParallaxSection';
import Link from 'next/link';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden hero-text">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            À Propos de Notre <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Agence Web</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            L&apos;histoire d&apos;une passion pour le web, l&apos;innovation technologique et l&apos;accompagnement des entreprises vers la réussite digitale.
          </motion.p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
          >
            Notre Histoire : De la Passion à l&apos;Excellence
          </motion.h2>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              Notre <strong className="text-indigo-600">agence web</strong> est née d&apos;une conviction profonde : chaque entreprise, quelle que soit sa taille, mérite une présence en ligne exceptionnelle qui reflète fidèlement son identité et ses ambitions. Fondée il y a plusieurs années par une équipe de développeurs passionnés et de stratèges digitaux visionnaires, notre agence s&apos;est rapidement imposée comme un acteur de référence dans le domaine de la <strong className="text-indigo-600">création de sites internet</strong> et du développement web sur mesure.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Tout a commencé dans un petit bureau partagé, avec quelques ordinateurs, beaucoup de café et une ambition démesurée : révolutionner la manière dont les entreprises conçoivent et utilisent leur présence digitale. Nos premiers projets, bien que modestes en taille, ont immédiatement démontré notre capacité à allier créativité artistique et excellence technique pour livrer des sites web qui ne se contentent pas d&apos;être beaux, mais qui génèrent des résultats tangibles et mesurables pour nos clients.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Au fil des années, nous avons accompagné des dizaines d&apos;entreprises dans leur transformation numérique, des startups innovantes aux PME établies, en passant par des associations et des entrepreneurs individuels. Chaque projet nous a permis d&apos;affiner notre méthodologie, d&apos;approfondir notre expertise technique et de mieux comprendre les enjeux business de nos clients.
            </p>
            
            <p className="text-lg leading-relaxed">
              Aujourd&apos;hui, notre équipe s&apos;est agrandie, nos bureaux se sont modernisés, mais notre philosophie reste inchangée : placer le client au cœur de notre démarche, cultiver l&apos;excellence dans tout ce que nous faisons, et rester constamment à la pointe de l&apos;innovation technologique pour offrir à nos clients les meilleures solutions du marché.
            </p>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            Les Valeurs Qui Nous Guident
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HiHeart,
                title: 'Passion et Engagement',
                description: 'Nous aimons profondément ce que nous faisons. Chaque projet de création de site internet est abordé avec enthousiasme, dévouement et un engagement total envers la réussite de nos clients.',
                color: 'from-rose-500 to-pink-600'
              },
              {
                icon: HiLightBulb,
                title: 'Innovation et Créativité',
                description: 'Le monde digital évolue à une vitesse fulgurante. Nous restons constamment à l&apos;affût des dernières tendances, technologies et méthodologies pour proposer des solutions innovantes.',
                color: 'from-amber-500 to-orange-600'
              },
              {
                icon: HiShieldCheck,
                title: 'Transparence et Intégrité',
                description: 'La confiance se construit sur l&apos;honnêteté. Nous communiquons ouvertement sur nos méthodes, nos délais, nos prix et nos résultats.',
                color: 'from-emerald-500 to-teal-600'
              },
              {
                icon: HiUsers,
                title: 'Collaboration et Écoute',
                description: 'Nos clients ne sont pas de simples donneurs d&apos;ordres, mais de véritables partenaires. Nous prenons le temps d&apos;écouter attentivement leurs besoins.',
                color: 'from-blue-500 to-cyan-600'
              },
              {
                icon: HiTrendingUp,
                title: 'Orientation Résultats',
                description: 'Un beau site ne suffit pas : il doit performer. Nous concevons chaque projet avec des objectifs business clairs et mesurables.',
                color: 'from-violet-500 to-purple-600'
              },
              {
                icon: HiAcademicCap,
                title: 'Formation Continue',
                description: 'Nos équipes se forment régulièrement aux nouvelles technologies, frameworks et méthodologies pour maintenir notre expertise au plus haut niveau.',
                color: 'from-indigo-500 to-blue-600'
              }
            ].map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex justify-center mb-6">
                  <div className={`p-4 bg-gradient-to-br ${item.color} rounded-2xl`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overlay-text">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Une Équipe d&apos;Experts Passionnés
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Le succès de notre <strong>agence web</strong> repose avant tout sur la qualité et la diversité de nos talents. Notre équipe multidisciplinaire réunit des profils complémentaires qui collaborent harmonieusement.
            </p>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Notre Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
          >
            Notre Vision du Web et de la Transformation Digitale
          </motion.h2>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              Nous croyons profondément que le web est bien plus qu&apos;un simple outil de communication : c&apos;est un formidable levier de croissance, un vecteur d&apos;innovation et un catalyseur de transformation pour les entreprises de toutes tailles. Notre vision va au-delà de la simple <strong className="text-indigo-600">création de sites internet</strong> ; nous aspirons à devenir les architectes de votre réussite digitale.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Dans un écosystème digital de plus en plus concurrentiel, nous pensons que la différenciation passe par trois éléments clés : une expérience utilisateur exceptionnelle qui capte l&apos;attention et fidélise les visiteurs, une performance technique irréprochable qui garantit rapidité et fiabilité, et une stratégie de contenu et de référencement naturel qui assure une visibilité maximale sur les moteurs de recherche.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Notre <strong className="text-indigo-600">agence digitale</strong> s&apos;engage à démocratiser l&apos;accès à l&apos;excellence web. Nous sommes convaincus que toute entreprise, quel que soit son budget ou son secteur d&apos;activité, doit pouvoir bénéficier d&apos;un site internet professionnel qui rivalise avec les plus grands acteurs du marché.
            </p>
            
            <p className="text-lg leading-relaxed">
              Nous imaginons un futur où chaque interaction digitale est fluide, intuitive et mémorable, où les sites web ne sont plus de simples vitrines statiques mais des plateformes dynamiques génératrices de valeur, et où la technologie se met au service de l&apos;humain pour créer des expériences en ligne véritablement transformatrices.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-600 text-contrast-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Travaillons Ensemble sur Votre Projet
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
              Maintenant que vous connaissez mieux notre <strong>agence web</strong>, découvrez comment nous pouvons concrétiser votre projet de <strong>création de site internet</strong>.
            </p>
            <Link href="/nos-prestations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-indigo-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all"
              >
                Découvrir nos prestations
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
