'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const miniConfigRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [carAnimation, setCarAnimation] = useState('idle');
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showCloud, setShowCloud] = useState(false);
  const [hideCloud, setHideCloud] = useState(false);
  const [miniConfigCarAnimated, setMiniConfigCarAnimated] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          
          // Changement de style du header
          if (scrolled > 300) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          // Effet parallax principal - optimisé
          if (parallaxRef.current) {
            const rate = scrolled * -0.3; // Réduit pour un effet plus subtil
            parallaxRef.current.style.transform = `translateY(${rate}px)`;
          }

          // Parallaxe pour le texte - effet plus doux
          if (heroTextRef.current) {
            const rate = scrolled * 0.15;
            heroTextRef.current.style.transform = `translateY(${rate}px)`;
          }

          // Parallaxe pour l'image - effet inversé
          if (heroImageRef.current) {
            const rate = scrolled * -0.1;
            heroImageRef.current.style.transform = `translateY(${rate}px)`;
          }

          // Effet sur le titre et sous-titre
          const maxScroll = 300;
          const progress = Math.min(scrolled / maxScroll, 1);
          setScrollProgress(progress);

          // Animation de la voiture après un court scroll - déclenchement uniquement
          if (scrolled > 75 && !hasAnimated) {
            setHasAnimated(true);
            setCarAnimation('vibrate');
            // L'animation se poursuit indépendamment du scroll
            const animationSequence = () => {
              setTimeout(() => {
                setCarAnimation('drive-away');
                setShowCloud(true);
                // Faire disparaître le nuage après quelques secondes
                setTimeout(() => {
                  setHideCloud(true);
                }, 3000);
              }, 1200);
            };
            animationSequence();
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Test initial
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer pour l'animation du mini configurateur
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !miniConfigCarAnimated) {
            setMiniConfigCarAnimated(true);
          }
        });
      },
      {
        threshold: 0.3, // Déclenche quand 30% de l'élément est visible
        rootMargin: '0px 0px -100px 0px' // Déclenche un peu avant
      }
    );

    if (miniConfigRef.current) {
      observer.observe(miniConfigRef.current);
    }

    return () => {
      if (miniConfigRef.current) {
        observer.unobserve(miniConfigRef.current);
      }
    };
  }, [miniConfigCarAnimated]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fond parallaxe - optimisé */}
      <div ref={parallaxRef} className="parallax-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e62d0] via-[#4b94e6] to-[#d9e6f8]"></div>
        <Image
          src="/abstract-bluish-paint-background-wallpaper.png"
          alt="Fond abstrait bleu"
          fill
          className="object-cover object-top opacity-60"
          priority
        />
        {/* Couche de vagues supplémentaires */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 pt-32">
        {/* 1. Header fixe */}
        <header className={`py-2 px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg header-scrolled' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="logo-container">
              <Image
                src="/Logo-Access-Ability-1.png"
                alt="AccessAbility Logo"
                width={1200}
                height={640}
                className="h-20 w-auto"
                priority
              />
            </a>
            <div className="flex items-center gap-8">
              <nav className="flex gap-8">
                <a 
                  href="/configurateur" 
                  className={`text-xl font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-[#0C1C3D] hover:text-[#1e62d0]' 
                      : 'text-white hover:opacity-80'
                  }`}
                >
                Configurateur
                </a>
                <a 
                  href="/solutions" 
                  className={`text-xl font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-[#0C1C3D] hover:text-[#1e62d0]' 
                      : 'text-white hover:opacity-80'
                  }`}
                >
                  Solutions
                </a>
                <a 
                  href="/a-propos" 
                  className={`text-xl font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-[#0C1C3D] hover:text-[#1e62d0]' 
                      : 'text-white hover:opacity-80'
                  }`}
                >
                  À propos
                </a>
                <a 
                  href="/contact" 
                  className={`text-xl font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-[#0C1C3D] hover:text-[#1e62d0]' 
                      : 'text-white hover:opacity-80'
                  }`}
                >
                  Contact
                </a>
              </nav>
              
              {/* CTA Header */}
              <a 
                href="#devis-express" 
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-[#f2cb05] text-[#1e62d0] hover:bg-[#e6c205]' 
                    : 'bg-[#f2cb05] text-[#1e62d0] hover:bg-[#e6c205]'
                }`}
              >
                Demander un devis
              </a>
              
              {/* Icônes réseaux sociaux */}
              <div className="flex gap-4 ml-8">
                <a 
                  href="https://instagram.com/accessability" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-[#0C1C3D] hover:text-[#f2cb05]' 
                      : 'text-white hover:text-[#f2cb05]'
                  }`}
                  aria-label="Suivez-nous sur Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/accessability" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-[#0C1C3D] hover:text-[#f2cb05]' 
                      : 'text-white hover:text-[#f2cb05]'
                  }`}
                  aria-label="Suivez-nous sur LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* 2. Hero section - avec parallax amélioré */}
        <section className="relative py-16 px-8 min-h-[70vh] flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Colonne gauche - Texte avec parallaxe */}
              <div ref={heroTextRef} className="text-left text-white">
                <h1 className="text-6xl font-bold mb-6 drop-shadow-lg leading-tight">
                  Des solutions de mobilité<br />
                  pour l'autonomie
                </h1>
                <p className="text-xl mb-8 opacity-90 drop-shadow-md">
                  Configurez ou commandez un véhicule accessible adapté à vos besoins.
                </p>
                
                {/* CTA Hero */}
                <div className="space-y-4 mb-8">
                  <a 
                    href="#configurateur" 
                    className="block w-full bg-[#f2cb05] text-[#1e62d0] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e6c205] transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    Configurer mon véhicule
                  </a>
                  <a 
                    href="#devis-express" 
                    className="block w-full bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Obtenir un devis personnalisé
                  </a>
                </div>
              </div>
              
              {/* Colonne droite - Image avec parallaxe */}
              <div ref={heroImageRef} className="flex justify-center lg:justify-end overflow-hidden w-full">
                <div className="relative w-full max-w-3xl">
                  <Image
                    src="/heroimage.png"
                    alt="Véhicule accessible AccessAbility"
                    width={1000}
                    height={800}
                    className={`w-full max-w-2xl h-auto drop-shadow-2xl scale-x-[-1] transition-all duration-700 ${
                      carAnimation === 'vibrate' ? 'animate-vibrate' : 
                      carAnimation === 'drive-away' ? 'animate-drive-away' : ''
                    }`}
                    priority
                  />
                  {/* Nuage qui apparaît derrière la voiture quand elle démarre */}
                  <Image
                    src="/nuage.png"
                    alt="Nuage"
                    width={200}
                    height={100}
                    className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
                      showCloud && !hideCloud ? 'opacity-100 translate-x-[-20px] translate-y-[-10px]' : 'opacity-0 translate-x-0 translate-y-0'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Bloc "Segmentation des besoins" */}
        <section className="relative py-16 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#0C1C3D]">
              Quel est votre besoin ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <a href="/parcours/conducteur" className="group">
                <div className="bg-white shadow-xl border border-gray-100 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl h-full flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1e62d0] to-[#4b94e6] rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:from-[#4b94e6] group-hover:to-[#1e62d0] transition-all duration-300 shadow-lg transform group-hover:rotate-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#0C1C3D] text-center flex-grow">Je souhaite accéder ou conduire moi-même</h3>
                  <p className="text-gray-600 text-center mb-6 flex-grow">
                    Solutions pour conduire en autonomie ou accéder facilement à votre véhicule
                  </p>
                  <div className="text-center mt-auto">
                    <span className="inline-block bg-[#f2cb05] text-[#1e62d0] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#e6c205] transition-colors shadow-lg">
                      Découvrir les solutions
                    </span>
                  </div>
                </div>
              </a>
              
              <a href="/parcours/transport" className="group">
                <div className="bg-white shadow-xl border border-gray-100 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl h-full flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#4b94e6] to-[#1e62d0] rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:from-[#1e62d0] group-hover:to-[#4b94e6] transition-all duration-300 shadow-lg transform group-hover:-rotate-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#0C1C3D] text-center flex-grow">Je transporte une personne en fauteuil</h3>
                  <p className="text-gray-600 text-center mb-6 flex-grow">
                    Aménagements pour transporter confortablement et en sécurité
                  </p>
                  <div className="text-center mt-auto">
                    <span className="inline-block bg-[#f2cb05] text-[#1e62d0] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#e6c205] transition-colors shadow-lg">
                      Voir les aménagements
                    </span>
                  </div>
                </div>
              </a>
              
              <a href="/parcours/professionnel" className="group">
                <div className="bg-white shadow-xl border border-gray-100 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl h-full flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#f2cb05] to-[#e6c205] rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:from-[#e6c205] group-hover:to-[#f2cb05] transition-all duration-300 shadow-lg transform group-hover:rotate-6">
                    <div className="w-8 h-6 bg-[#1e62d0]/20 rounded-md transform group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#0C1C3D] text-center flex-grow">Je suis un professionnel ou installateur</h3>
                  <p className="text-gray-600 text-center mb-6 flex-grow">
                    Solutions techniques et formations pour les professionnels
                  </p>
                  <div className="text-center mt-auto">
                    <span className="inline-block bg-[#f2cb05] text-[#1e62d0] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#e6c205] transition-colors shadow-lg">
                      Espace professionnel
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 4. Bloc "Mini configurateur rapide" */}
        <section ref={miniConfigRef} className="relative py-16 px-8 bg-[#1e62d0]/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Colonne gauche - Image de la voiture */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/heroimage.png"
                  alt="Véhicule accessible AccessAbility"
                  width={1000}
                  height={800}
                  className={`w-full max-w-3xl h-auto drop-shadow-2xl scale-x-[-1] ${
                    miniConfigCarAnimated ? 'animate-car-appear' : 'opacity-0'
                  }`}
                  priority
                />
              </div>
              
              {/* Colonne droite - Formulaire */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl font-bold text-[#0C1C3D] mb-4">
                    Besoin express d'adaptation ?
                  </h2>
                  <p className="text-xl text-[#0C1C3D]/80">
                    2 questions → 30 sec → solutions adaptées
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-lg font-semibold text-[#0C1C3D] mb-4 text-center lg:text-left">
                        Objectif principal
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          className="p-4 rounded-lg border-2 border-gray-200 bg-white/80 backdrop-blur-sm text-[#0C1C3D] transition-all duration-300 hover:border-[#1e62d0] hover:bg-[#1e62d0]/10 focus:outline-none focus:ring-2 focus:ring-[#1e62d0] text-sm font-medium"
                        >
                          Transporter une personne en fauteuil
                        </button>
                        <button
                          type="button"
                          className="p-4 rounded-lg border-2 border-gray-200 bg-white/80 backdrop-blur-sm text-[#0C1C3D] transition-all duration-300 hover:border-[#1e62d0] hover:bg-[#1e62d0]/10 focus:outline-none focus:ring-2 focus:ring-[#1e62d0] text-sm font-medium"
                        >
                          Conduire avec un handicap
                        </button>
                        <button
                          type="button"
                          className="p-4 rounded-lg border-2 border-gray-200 bg-white/80 backdrop-blur-sm text-[#0C1C3D] transition-all duration-300 hover:border-[#1e62d0] hover:bg-[#1e62d0]/10 focus:outline-none focus:ring-2 focus:ring-[#1e62d0] text-sm font-medium"
                        >
                          Accéder plus facilement au véhicule
                        </button>
                        <button
                          type="button"
                          className="p-4 rounded-lg border-2 border-gray-200 bg-white/80 backdrop-blur-sm text-[#0C1C3D] transition-all duration-300 hover:border-[#1e62d0] hover:bg-[#1e62d0]/10 focus:outline-none focus:ring-2 focus:ring-[#1e62d0] text-sm font-medium"
                        >
                          Adapter un véhicule pour un usage pro
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-[#0C1C3D] mb-3 text-center lg:text-left">
                        Véhicule concerné <span className="text-sm font-normal">(optionnel)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Marque, modèle, année..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm text-[#0C1C3D] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1e62d0] focus:border-transparent"
                      />
                    </div>

                    <div className="text-center">
                      <a
                        href="#"
                        className="inline-block bg-[#FFD700] text-[#0C1C3D] px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 hover:bg-[#FFD700]/90 shadow-lg w-full sm:w-auto"
                      >
                        Voir les packs d'adaptation
                      </a>
                    </div>

                    <p className="text-base text-[#0C1C3D]/70 text-center">
                      <a href="#" className="underline hover:text-[#1e62d0] transition-colors duration-300">
                        Laissez-vous guider par un configurateur guidé complet
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Bloc "Produits phares" */}
        <section className="relative py-16 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#0C1C3D]">
              Nos produits phares
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-xl border border-gray-100 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e62d0] to-[#4b94e6] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg transform group-hover:rotate-3">
                  <div className="w-6 h-6 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#0C1C3D] text-center flex-grow">Élévateurs TPMR</h3>
                <p className="text-gray-600 text-center mb-4 text-sm flex-grow">
                  Accès facile et sécurisé pour fauteuils roulants
                </p>
                <div className="text-center mt-auto">
                  <a href="/produits/elevateurs-tpmr" className="inline-block bg-[#f2cb05] text-[#1e62d0] px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#e6c205] transition-colors shadow-lg">
                    Découvrir ce produit
                  </a>
                </div>
              </div>
              
              <div className="bg-white shadow-xl border border-gray-100 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4b94e6] to-[#1e62d0] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg transform group-hover:-rotate-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#0C1C3D] text-center flex-grow">Sièges pivotants</h3>
                <p className="text-gray-600 text-center mb-4 text-sm flex-grow">
                  Transfert confortable et sécurisé
                </p>
                <div className="text-center mt-auto">
                  <a href="/produits/sieges-pivotants" className="inline-block bg-[#f2cb05] text-[#1e62d0] px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#e6c205] transition-colors shadow-lg">
                    Découvrir ce produit
                  </a>
                </div>
              </div>
              
              <div className="bg-white shadow-xl border border-gray-100 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f2cb05] to-[#e6c205] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg transform group-hover:rotate-6">
                  <div className="w-6 h-4 bg-[#1e62d0]/20 rounded-md"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#0C1C3D] text-center flex-grow">Commandes de conduite</h3>
                <p className="text-gray-600 text-center mb-4 text-sm flex-grow">
                  Conduite adaptée et sécurisée
                </p>
                <div className="text-center mt-auto">
                  <a href="/produits/commandes-conduite" className="inline-block bg-[#f2cb05] text-[#1e62d0] px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#e6c205] transition-colors shadow-lg">
                    Découvrir ce produit
                  </a>
                </div>
              </div>
              
              <div className="bg-white shadow-xl border border-gray-100 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e62d0] to-[#4b94e6] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg transform group-hover:rotate-3">
                  <div className="w-6 h-6 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#0C1C3D] text-center flex-grow">Robots chargeurs</h3>
                <p className="text-gray-600 text-center mb-4 text-sm flex-grow">
                  Chargement automatique et intelligent
                </p>
                <div className="text-center mt-auto">
                  <a href="/produits/robots-chargeurs" className="inline-block bg-[#f2cb05] text-[#1e62d0] px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#e6c205] transition-colors shadow-lg">
                    Découvrir ce produit
                  </a>
                </div>
              </div>
              
              <div className="bg-white shadow-xl border border-gray-100 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4b94e6] to-[#1e62d0] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg transform group-hover:-rotate-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#0C1C3D] text-center flex-grow">Plateformes élévatrices</h3>
                <p className="text-gray-600 text-center mb-4 text-sm flex-grow">
                  Accès vertical sécurisé et stable
                </p>
                <div className="text-center mt-auto">
                  <a href="/produits/plateformes-elevatrices" className="inline-block bg-[#f2cb05] text-[#1e62d0] px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#e6c205] transition-colors shadow-lg">
                    Découvrir ce produit
                  </a>
                </div>
              </div>
              
              <div className="bg-white shadow-xl border border-gray-100 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f2cb05] to-[#e6c205] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg transform group-hover:rotate-6">
                  <div className="w-6 h-4 bg-[#1e62d0]/20 rounded-md"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#0C1C3D] text-center flex-grow">Aménagements sur mesure</h3>
                <p className="text-gray-600 text-center mb-4 text-sm flex-grow">
                  Solutions personnalisées selon vos besoins
                </p>
                <div className="text-center mt-auto">
                  <a href="/produits/amenagements-sur-mesure" className="inline-block bg-[#f2cb05] text-[#1e62d0] px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#e6c205] transition-colors shadow-lg">
                    Découvrir ce produit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Bloc "Aides au financement" */}
        <section className="relative py-16 px-8 bg-[#1e62d0]/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8 drop-shadow-lg">
              Aides au financement
            </h2>
            <p className="text-xl mb-8 opacity-90 drop-shadow-md">
              Découvrez les aides disponibles pour financer votre véhicule adapté
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e62d0] to-[#4b94e6] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <div className="w-6 h-6 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="font-semibold mb-2 text-lg">PCH (Prestation de Compensation du Handicap)</h3>
                <p className="text-base opacity-90">Jusqu'à 100% du coût du véhicule et des aménagements</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4b94e6] to-[#1e62d0] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
                <h3 className="font-semibold mb-2 text-lg">MDPH</h3>
                <p className="text-base opacity-90">Maison Départementale des Personnes Handicapées</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f2cb05] to-[#e6c205] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <div className="w-6 h-4 bg-[#1e62d0]/20 rounded-md"></div>
                </div>
                <h3 className="font-semibold mb-2 text-lg">Crédit d'impôt</h3>
                <p className="text-base opacity-90">25% du montant des travaux d'aménagement</p>
              </div>
            </div>
            <a 
              href="/aides-financement" 
              className="inline-block bg-[#f2cb05] text-[#1e62d0] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e6c205] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Vérifier mon éligibilité
            </a>
          </div>
        </section>

        {/* 7. Bloc "Témoignages & usages réels" */}
        <section className="relative py-16 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#0C1C3D]">
              Témoignages & usages réels
            </h2>
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-[#f2cb05] text-[#1e62d0] px-6 py-3 rounded-full shadow-lg">
                <span className="text-xl font-bold">4,9</span>
                <span className="ml-2 text-lg">/ 5</span>
                <span className="ml-2 text-lg">⭐</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white shadow-xl border border-gray-100 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1e62d0] to-[#4b94e6] rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold">T</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e62d0] text-lg">Transporteur spécialisé</p>
                    <p className="text-sm text-gray-600">Van aménagé pour 3 fauteuils</p>
                  </div>
                </div>
                <p className="text-lg italic mb-4 text-gray-700 flex-grow">
                  "Nos vans aménagés par AccessAbility nous permettent de transporter nos clients en toute sécurité. Un vrai gain de temps et de confort."
                </p>
                <div className="flex items-center mt-auto">
                  <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              
              <div className="bg-white shadow-xl border border-gray-100 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4b94e6] to-[#1e62d0] rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold">F</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e62d0] text-lg">Famille avec enfant PMR</p>
                    <p className="text-sm text-gray-600">Voiture familiale adaptée</p>
                  </div>
                </div>
                <p className="text-lg italic mb-4 text-gray-700 flex-grow">
                  "Grâce à AccessAbility, notre fils peut maintenant voyager confortablement. L'équipe a été très à l'écoute de nos besoins."
                </p>
                <div className="flex items-center mt-auto">
                  <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              
              <div className="bg-white shadow-xl border border-gray-100 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f2cb05] to-[#e6c205] rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-[#1e62d0] font-bold">P</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e62d0] text-lg">Professionnel de santé</p>
                    <p className="text-sm text-gray-600">Véhicule de soins à domicile</p>
                  </div>
                </div>
                <p className="text-lg italic mb-4 text-gray-700 flex-grow">
                  "Mon véhicule aménagé me permet de rendre visite à mes patients en toute autonomie. Un investissement qui change tout."
                </p>
                <div className="flex items-center mt-auto">
                  <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <a 
                href="/realisations" 
                className="inline-block bg-[#f2cb05] text-[#1e62d0] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e6c205] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Voir nos réalisations
              </a>
            </div>
          </div>
        </section>

        {/* 8. Bloc "Devis rapide" */}
        <section className="relative py-16 px-8 bg-[#1e62d0]/10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
              Un projet en tête ?
            </h2>
            <p className="text-xl mb-8 opacity-90 drop-shadow-md">
              Recevez un devis personnalisé pour votre projet
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-center mb-2 font-semibold text-lg">Type de besoin</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#f2cb05] transition-all duration-300">
                      <option value="">Sélectionnez votre besoin</option>
                      <option value="conduite">Conduite adaptée</option>
                      <option value="transport">Transport de personne en fauteuil</option>
                      <option value="accessibilite">Accessibilité véhicule</option>
                      <option value="professionnel">Usage professionnel</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-center mb-2 font-semibold text-lg">Type de véhicule (optionnel)</label>
                    <input 
                      type="text" 
                      placeholder="Marque, modèle, année..." 
                      className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#f2cb05] transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-center mb-2 font-semibold text-lg">Téléphone</label>
                    <input 
                      type="tel" 
                      placeholder="Votre numéro de téléphone" 
                      className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#f2cb05] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-center mb-2 font-semibold text-lg">Email</label>
                    <input 
                      type="email" 
                      placeholder="Votre adresse email" 
                      className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#f2cb05] transition-all duration-300"
                    />
                  </div>
                </div>
                <button className="w-full bg-[#f2cb05] text-[#1e62d0] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e6c205] transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Recevoir mon devis personnalisé
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 9. Footer amélioré */}
        <footer className="bg-[#1e62d0]/90 backdrop-blur-sm text-white py-12 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">AccessAbility</h3>
                <p className="text-sm opacity-90 mb-4">Des solutions de mobilité pour l'autonomie</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/accessability" className="hover:text-[#f2cb05] transition-colors">
                    <span className="sr-only">Instagram</span>
                    📷
                  </a>
                  <a href="https://linkedin.com/company/accessability" className="hover:text-[#f2cb05] transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    💼
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Solutions</h3>
                <ul className="text-sm space-y-2 opacity-90">
                  <li><a href="/elevateurs-tpmr" className="hover:opacity-100">Élévateurs TPMR</a></li>
                  <li><a href="/sieges-pivotants" className="hover:opacity-100">Sièges pivotants</a></li>
                  <li><a href="/commandes-conduite" className="hover:opacity-100">Commandes de conduite</a></li>
                  <li><a href="/robots-chargeurs" className="hover:opacity-100">Robots chargeurs</a></li>
                  <li><a href="/plateformes-elevatrices" className="hover:opacity-100">Plateformes élévatrices</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="text-sm space-y-2 opacity-90">
                  <li>📞 01 23 45 67 89</li>
                  <li>📧 contact@access-ability.fr</li>
                  <li>📍 France entière</li>
                  <li>🕒 Lun-Ven 9h-18h</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Légal & Accessibilité</h3>
                <ul className="text-sm space-y-2 opacity-90">
                  <li><a href="/mentions-legales" className="hover:opacity-100">Mentions légales</a></li>
                  <li><a href="/cgv" className="hover:opacity-100">CGV</a></li>
                  <li><a href="/politique-confidentialite" className="hover:opacity-100">Politique de confidentialité</a></li>
                  <li><a href="/accessibilite" className="hover:opacity-100">♿ Accessibilité RGAA</a></li>
                  <li><a href="/boutique" className="hover:opacity-100">🛒 Boutique en ligne</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 text-center">
              <div className="flex justify-center items-center gap-4 mb-4">
                <span className="text-sm opacity-75">♿ Accessibilité</span>
                <span className="text-sm opacity-75">📋 Normes CE</span>
                <span className="text-sm opacity-75">🔒 RGAA</span>
              </div>
              <p className="text-sm opacity-75">&copy; 2024 AccessAbility. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 