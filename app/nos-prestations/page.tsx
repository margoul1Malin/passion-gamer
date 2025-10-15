'use client';

import { motion } from 'framer-motion';
import { HiCode, HiDesktopComputer, HiChartBar, HiLightBulb, HiCog } from 'react-icons/hi';
import AnimatedCard from '@/components/AnimatedCard';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: HiCode,
      title: 'Développement Web Sur Mesure',
      description: 'Le développement web est au cœur de notre expertise. Notre agence digitale conçoit et développe des sites internet et applications web performants, sécurisés et parfaitement adaptés à vos besoins spécifiques.',
      features: [
        'Sites vitrines modernes et responsive',
        'Plateformes e-commerce performantes',
        'Applications web sur mesure (SaaS, portails, CRM)',
        'Progressive Web Apps (PWA)',
        'APIs REST et intégrations tierces'
      ],
      link: 'https://www.oxelya.com/services/developpement-web',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: HiDesktopComputer,
      title: 'Création de Logiciels Professionnels',
      description: 'Au-delà des sites internet traditionnels, notre agence web excelle dans la création de logiciels professionnels adaptés aux besoins spécifiques de votre entreprise.',
      features: [
        'Logiciels de gestion d&apos;entreprise (ERP, CRM)',
        'Outils de productivité et collaboration',
        'Plateformes SaaS (Software as a Service)',
        'Applications métier spécifiques',
        'Systèmes de réservation et booking'
      ],
      link: 'https://www.oxelya.com/services/creation-logiciels',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: HiChartBar,
      title: 'Optimisation SEO et Référencement',
      description: 'Notre expertise en optimisation SEO et référencement naturel vous permet de positionner votre site web en tête des résultats Google pour les requêtes stratégiques de votre secteur.',
      features: [
        'Audit SEO technique complet',
        'Recherche et analyse de mots-clés',
        'Optimisation on-page (balises, structure)',
        'Stratégie de contenu SEO-friendly',
        'Suivi des positions et reporting'
      ],
      link: 'https://www.oxelya.com/services/optimisation-seo-referencement',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: HiLightBulb,
      title: 'Conseil Informatique et Stratégie',
      description: 'Notre service de conseil informatique vous accompagne dans la définition de votre stratégie digitale, le choix des technologies appropriées et l&apos;optimisation de votre infrastructure.',
      features: [
        'Stratégie digitale et transformation',
        'Architecture technique et choix technologiques',
        'Audit de sécurité et conformité (RGPD)',
        'Optimisation des performances web',
        'Formation des équipes techniques'
      ],
      link: 'https://www.oxelya.com/services/conseil-informatique',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: HiCog,
      title: 'Services de Programmation Avancée',
      description: 'La programmation est l&apos;art de transformer des idées en solutions fonctionnelles. Notre équipe maîtrise un large éventail de langages et de frameworks pour tous vos besoins.',
      features: [
        'JavaScript / TypeScript (React, Next.js)',
        'Node.js pour le développement backend',
        'Python pour data science et IA',
        'PHP et frameworks modernes',
        'Bases de données SQL et NoSQL'
      ],
      link: 'https://www.oxelya.com/services/programmation',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

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
            Nos Prestations <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Digitales</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Des solutions complètes et personnalisées pour répondre à tous vos besoins en création de sites internet, développement web et stratégie digitale.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              Notre <strong className="text-indigo-600">agence web</strong> propose une gamme complète de prestations digitales conçues pour accompagner les entreprises dans leur transformation numérique. Que vous ayez besoin d&apos;un site vitrine élégant, d&apos;une plateforme e-commerce performante, d&apos;une stratégie SEO efficace ou d&apos;un développement logiciel sur mesure, notre équipe d&apos;experts met son savoir-faire technique et créatif à votre service.
            </p>
            <p className="text-lg leading-relaxed">
              Chaque projet est unique et mérite une attention particulière. C&apos;est pourquoi nous adaptons systématiquement nos méthodologies, nos technologies et notre approche stratégique aux spécificités de votre secteur d&apos;activité, à vos objectifs business et aux attentes de votre audience cible.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${service.color} rounded-2xl`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-gray-700">
                        <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.link}
                    rel="dofollow"
                    target="_blank"
                    className="inline-block"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 bg-gradient-to-r ${service.color} text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all`}
                    >
                      En savoir plus
                    </motion.button>
                  </a>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className={`w-32 h-32 opacity-20 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Approche */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            Notre Approche Projet
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Découverte & Analyse',
                description: 'Nous comprenons en profondeur votre entreprise, vos objectifs et vos contraintes pour définir une stratégie digitale parfaitement alignée.'
              },
              {
                step: '02',
                title: 'Conception & Design',
                description: 'Nos designers créent des maquettes élégantes et nous définissons l&apos;architecture technique avant de commencer le développement.'
              },
              {
                step: '03',
                title: 'Développement & Tests',
                description: 'Nous transformons les maquettes en code performant et testons rigoureusement chaque fonctionnalité.'
              },
              {
                step: '04',
                title: 'Lancement & Formation',
                description: 'Nous gérons le déploiement, configurons les outils d&apos;analyse et formons vos équipes.'
              },
              {
                step: '05',
                title: 'Maintenance & Évolution',
                description: 'Notre accompagnement ne s&apos;arrête pas au lancement. Nous assurons maintenance et évolutions.'
              },
              {
                step: '06',
                title: 'Optimisation Continue',
                description: 'Nous analysons les performances et optimisons continuellement votre solution.'
              }
            ].map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-5xl font-bold text-indigo-600 mb-4 opacity-20">{item.step}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
          >
            Technologies que Nous Maîtrisons
          </motion.h2>

          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              Notre <strong className="text-indigo-600">agence digitale</strong> reste constamment à la pointe de l&apos;innovation technologique. Pour le développement web front-end, nous privilégions React et Next.js qui offrent des performances exceptionnelles. TypeScript nous aide à maintenir un code robuste et sans erreurs.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Côté backend, nous travaillons principalement avec Node.js, Python pour des besoins spécifiques liés au traitement de données ou à l&apos;intelligence artificielle, et PHP pour maintenir et faire évoluer des projets existants.
            </p>
            <p className="text-lg leading-relaxed">
              Nous utilisons des outils DevOps modernes (Git, Docker, CI/CD) pour automatiser les déploiements et garantir la qualité du code. Cette approche professionnelle se traduit par des sites web fiables et une maintenance simplifiée.
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
              Prêt à Démarrer Votre Projet Digital ?
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
              Notre <strong>agence web</strong> est à votre disposition pour concrétiser vos ambitions digitales.
              Contactez-nous dès aujourd&apos;hui pour découvrir comment nous pouvons vous aider.
            </p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-indigo-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all"
              >
                Retour à l&apos;accueil
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
