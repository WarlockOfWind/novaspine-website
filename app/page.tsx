'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (scrolled > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Header fixe */}
      <header className={`py-4 px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo NovaSpine */}
            <Image
              src="/logo_novaspine-1-1.jpg"
              alt="NovaSpine Logo"
              width={140}
              height={45}
              className="h-11 w-auto"
              priority
            />
          </div>
          <nav className="hidden md:flex gap-8">
            <a 
              href="#produits" 
              className="text-[#333333] hover:text-[#F5C333] transition-colors font-medium"
            >
              PRODUITS
            </a>
            <a 
              href="#innovation" 
              className="text-[#333333] hover:text-[#F5C333] transition-colors font-medium"
            >
              INNOVATION
            </a>
            <a 
              href="#qualite" 
              className="text-[#333333] hover:text-[#F5C333] transition-colors font-medium"
            >
              QUALITÉ
            </a>
            <a 
              href="#actualites" 
              className="text-[#333333] hover:text-[#F5C333] transition-colors font-medium"
            >
              ACTUALITÉS
            </a>
            <a 
              href="#contact" 
              className="text-[#333333] hover:text-[#F5C333] transition-colors font-medium"
            >
              CONTACT
            </a>
          </nav>
          
          {/* CTA Header */}
          <a 
            href="#contact" 
            className="px-6 py-3 bg-[#F5C333] text-white rounded-lg font-semibold hover:bg-[#4A90E2] transition-all duration-300"
          >
            Nous contacter
          </a>
        </div>
      </header>

      {/* 1. Hero visuel impactant */}
      <section className="relative py-32 px-8 min-h-screen flex items-center bg-[#333333] overflow-hidden">
        {/* Fond avec overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#333333] via-[#333333]/95 to-[#333333]/80"></div>
        
        {/* Image de fond - chirurgien en pleine opération */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/chirurgien-operation.jpg"
            alt="Chirurgien en pleine opération rachidienne"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Colonne gauche - Texte */}
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                NovaSpine : l'avenir de la chirurgie rachidienne française
              </h1>
              <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
                25+ ans d'expertise, conçus, fabriqués en France. Sécurité, performance, innovation.
              </p>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="#produits" 
                  className="px-8 py-4 bg-[#F5C333] text-white rounded-lg font-semibold text-lg hover:bg-[#4A90E2] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Nos produits innovants
                </a>
                <a 
                  href="#qualite" 
                  className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white hover:text-[#333333] transition-all duration-300 transform hover:scale-105"
                >
                  Notre approche qualité
                </a>
              </div>
            </div>
            
            {/* Colonne droite - Visuel amélioré */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5C333]/20 to-[#4A90E2]/20 rounded-2xl border border-[#F5C333]/30 backdrop-blur-sm"></div>
                <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-[#F5C333] rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">Technologie de précision</p>
                    <p className="text-sm opacity-75">Chirurgie rachidienne avancée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section "Nos atouts stratégiques" */}
      <section className="py-20 px-8 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#333333]">
            Nos atouts stratégiques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Made in France & expérience */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#F5C333] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#333333]">Made in France & expérience</h3>
              <p className="text-gray-600 leading-relaxed">
                Plus de 25 ans d'expertise médicale et fabrication française, gage de qualité et de traçabilité.
              </p>
            </div>
            
            {/* Sécurité & performance */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#F5C333] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#333333]">Sécurité & performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Technologie avancée et normes ISO 13485 pour garantir la sécurité et la performance de chaque dispositif.
              </p>
            </div>
            
            {/* Présence mondiale */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#F5C333] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#333333]">Présence mondiale</h3>
              <p className="text-gray-600 leading-relaxed">
                Distribution internationale pour accompagner les chirurgiens du monde entier dans leurs interventions.
              </p>
            </div>
            
            {/* Formation & innovation */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#F5C333] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#333333]">Formation & innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Engagement dans la formation des jeunes chirurgiens et développement continu de solutions innovantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Parcours produit mis en avant */}
      <section id="produits" className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#333333]">
            Nos produits phares
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* SOCORE Thoraco-Lumbar */}
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-[#F5C333] transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-[#F0F0F0] to-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F5C333] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">SOCORE Thoraco-Lumbar</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#333333]">SOCORE Thoraco-Lumbar</h3>
              <p className="text-gray-600 mb-6">
                Système complet : Monoaxial, Polyaxial, Crosslinks pour une fixation rachidienne optimale.
              </p>
              <a href="#produits" className="inline-block bg-[#4A90E2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#F5C333] transition-colors">
                En savoir plus
              </a>
            </div>
            
            {/* DIVA Cervical & Lumbar */}
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-[#F5C333] transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-[#F0F0F0] to-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F5C333] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">DIVA Cervical & Lumbar</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#333333]">DIVA Cervical & Lumbar</h3>
              <p className="text-gray-600 mb-6">
                Solutions innovantes pour les pathologies cervicales et lombaires avec une approche minimalement invasive.
              </p>
              <a href="#produits" className="inline-block bg-[#4A90E2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#F5C333] transition-colors">
                En savoir plus
              </a>
            </div>
            
            {/* ALMAS / MATRIS / RODD */}
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-[#F5C333] transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-[#F0F0F0] to-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F5C333] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">ALMAS / MATRIS / RODD</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#333333]">ALMAS / MATRIS / RODD</h3>
              <p className="text-gray-600 mb-6">
                Gamme complète d'instruments de précision et de systèmes de fixation pour tous types d'interventions.
              </p>
              <a href="#produits" className="inline-block bg-[#4A90E2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#F5C333] transition-colors">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section dynamique "Actualité & formation" */}
      <section id="actualites" className="py-20 px-8 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#333333]">
            Actualité & formation
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Formation AJCR */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-full h-32 bg-gradient-to-br from-[#4A90E2] to-[#F5C333] rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 19 16.5 19c-1.746 0-3.332-.523-4.5-1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#333333]">Formation AJCR</h3>
              <p className="text-gray-600 mb-4">
                Participation active aux formations de l'Association des Jeunes Chirurgiens du Rachis.
              </p>
              <div className="text-sm text-[#4A90E2] font-semibold">Formation continue</div>
            </div>
            
            {/* Congrès SFCR */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-full h-32 bg-gradient-to-br from-[#F5C333] to-[#4A90E2] rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#333333]">Congrès SFCR</h3>
              <p className="text-gray-600 mb-4">
                Présentation de nos innovations lors du congrès de la Société Française de Chirurgie du Rachis.
              </p>
              <div className="text-sm text-[#4A90E2] font-semibold">Événement majeur</div>
            </div>
            
            {/* Innovation continue */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-full h-32 bg-gradient-to-br from-[#7ED321] to-[#F5C333] rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#333333]">Innovation continue</h3>
              <p className="text-gray-600 mb-4">
                Développement de nouvelles solutions et amélioration continue de nos produits existants.
              </p>
              <div className="text-sm text-[#4A90E2] font-semibold">R&D active</div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="#actualites" 
              className="inline-block bg-[#F5C333] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#4A90E2] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Voir toutes les actualités
            </a>
          </div>
        </div>
      </section>

      {/* 5. Section "Qualité et certifications" */}
      <section id="qualite" className="py-20 px-8 bg-[#333333] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#F5C333]">
            Qualité et certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#F5C333]/30 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-[#F5C333]">ISO 13485</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Certifié ISO 13485 pour la conception, fabrication et distribution d'implants rachidiens.
                </p>
                <div className="mt-4 text-sm opacity-75">
                  Certification renouvelée jusqu'en 2024
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F5C333] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">CE</span>
                  </div>
                  <p className="text-sm">CE-Mark</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4A90E2] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-sm">ANVISA</span>
                  </div>
                  <p className="text-sm">ANVISA</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#7ED321] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-sm">FDA</span>
                  </div>
                  <p className="text-sm">FDA</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-64 h-64 bg-gradient-to-br from-[#F5C333]/20 to-[#4A90E2]/20 rounded-full flex items-center justify-center mx-auto">
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#F5C333] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold">Qualité certifiée</p>
                  <p className="text-sm opacity-75">Normes internationales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section "À propos & localisation" */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[#333333]">
                À propos de NovaSpine
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fondée en 2006, NovaSpine est devenue un acteur majeur de la chirurgie rachidienne française. 
                Notre siège à Amiens symbolise notre ancrage dans le territoire français et notre engagement 
                pour l'excellence médicale.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#F5C333] rounded-full mr-4"></div>
                  <span className="text-gray-700">Fondation : 2006</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#F5C333] rounded-full mr-4"></div>
                  <span className="text-gray-700">Siège : Amiens, France</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#F5C333] rounded-full mr-4"></div>
                  <span className="text-gray-700">Expertise : 25+ ans</span>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="inline-block bg-[#F5C333] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#4A90E2] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Nous contacter
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-full h-80 bg-gradient-to-br from-[#F0F0F0] to-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#F5C333] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Carte stylisée</p>
                  <p className="text-sm text-gray-500">Amiens, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#333333] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#F5C333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>335 Rue Saint-Fuscien, 80090 Amiens, France</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#F5C333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+33 (0)3 22 50 07 31</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#F5C333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@novaspine.fr</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Produits</h3>
              <ul className="space-y-3">
                <li><a href="#produits" className="hover:text-[#F5C333] transition-colors">SOCORE Thoraco-Lumbar</a></li>
                <li><a href="#produits" className="hover:text-[#F5C333] transition-colors">DIVA Cervical & Lumbar</a></li>
                <li><a href="#produits" className="hover:text-[#F5C333] transition-colors">ALMAS / MATRIS / RODD</a></li>
                <li><a href="#produits" className="hover:text-[#F5C333] transition-colors">Tous nos produits</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Qualité</h3>
              <ul className="space-y-3">
                <li><a href="#qualite" className="hover:text-[#F5C333] transition-colors">Certifications ISO</a></li>
                <li><a href="#qualite" className="hover:text-[#F5C333] transition-colors">Normes CE</a></li>
                <li><a href="#qualite" className="hover:text-[#F5C333] transition-colors">Sécurité & Performance</a></li>
                <li><a href="#qualite" className="hover:text-[#F5C333] transition-colors">Notre approche</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; 2026 NovaSpine. Tous droits réservés. | La colonne vertébrale de l'innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 