'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-night text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-poppins font-bold text-white mb-4 block">
              Access-Ability
            </Link>
            <p className="text-blue-sky mb-4">
              Spécialiste de l'aménagement de véhicules accessibles PMR. 
              Solutions sur mesure pour particuliers et professionnels.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+33123456789" className="text-blue-sky hover:text-white transition-colors">
                📞 01 23 45 67 89
              </a>
              <a href="mailto:contact@access-ability.fr" className="text-blue-sky hover:text-white transition-colors">
                ✉️ contact@access-ability.fr
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/transport-pmr" className="text-blue-sky hover:text-white transition-colors">
                  Transport PMR
                </Link>
              </li>
              <li>
                <Link href="/services/amenagement-utilitaires" className="text-blue-sky hover:text-white transition-colors">
                  Aménagement Utilitaires
                </Link>
              </li>
              <li>
                <Link href="/services/solutions-professionnelles" className="text-blue-sky hover:text-white transition-colors">
                  Solutions Professionnelles
                </Link>
              </li>
              <li>
                <Link href="/configurateur" className="text-blue-sky hover:text-white transition-colors">
                  Configurateur
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/realisations" className="text-blue-sky hover:text-white transition-colors">
                  Nos Réalisations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-sky hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-sky hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-sky hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Informations légales */}
        <div className="border-t border-blue-trust/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-blue-sky text-sm">
                © {new Date().getFullYear()} Access-Ability. Tous droits réservés.
              </p>
              <p className="text-blue-sky text-sm mt-1">
                Spécialiste aménagement véhicules PMR - SIRET : 123 456 789 00012
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/mentions-legales" className="text-blue-sky hover:text-white text-sm transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-blue-sky hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="text-blue-sky hover:text-white text-sm transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 