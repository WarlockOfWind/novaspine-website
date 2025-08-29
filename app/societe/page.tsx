'use client';

import React from 'react';

export default function SocietePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e62d0] via-[#4b94e6] to-[#0C1C3D]">
      {/* Header */}
      <header className="py-4 px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">
            NovaSpine
          </a>
          <a 
            href="/" 
            className="text-white hover:opacity-80 transition-opacity"
          >
            ← Retour à l'accueil
          </a>
        </div>
      </header>

      {/* Contenu principal */}
      <div className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-8">
            Notre Société
          </h1>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Découvrez l'histoire, la mission et les valeurs qui font de NovaSpine 
            un leader dans l'innovation de la chirurgie rachidienne.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-4">Notre Histoire</h2>
              <p className="text-lg opacity-90">
                Depuis 25 ans, NovaSpine s'engage à développer des solutions innovantes 
                pour améliorer la qualité de vie des patients atteints de pathologies rachidiennes.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-4">Notre Mission</h2>
              <p className="text-lg opacity-90">
                Accompagner les chirurgiens avec des dispositifs de haute précision, 
                conçus et fabriqués en France selon les normes les plus exigeantes.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <a 
              href="/" 
              className="inline-block bg-white text-[#1e62d0] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
