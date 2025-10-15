'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiCode, HiMail, HiPhone, HiLocationMarker, HiSparkles } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden footer-text">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <HiCode className="w-10 h-10 text-indigo-400" />
                <HiSparkles className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Agence Web Pro</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour la création de sites internet professionnels
              et le développement de solutions digitales sur mesure.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-indigo-300">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/nos-prestations', label: 'Nos Prestations' },
                { href: '/a-propos', label: 'À propos' }
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4 text-indigo-300">Nos Services</h4>
            <ul className="space-y-3">
              {[
                { href: 'https://www.oxelya.com/services/developpement-web', label: 'Développement Web' },
                { href: 'https://www.oxelya.com/services/optimisation-seo-referencement', label: 'Référencement SEO' },
                { href: 'https://www.oxelya.com/services/creation-logiciels', label: 'Création de Logiciels' }
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    rel="dofollow"
                    target="_blank"
                    className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-4 text-indigo-300">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <HiMail className="w-5 h-5 text-indigo-400 mt-0.5" />
                <span>contact@oxelya.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <HiPhone className="w-5 h-5 text-indigo-400 mt-0.5" />
                <span>+33 6 43 32 34 12</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <HiLocationMarker className="w-5 h-5 text-indigo-400 mt-0.5" />
                <strong>Bordeaux, France</strong>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Agence Web Pro. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm">
              Propulsé par{' '}
              <a
                href="https://www.oxelya.com"
                rel="dofollow"
                target="_blank"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
              >
                Oxelya
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
