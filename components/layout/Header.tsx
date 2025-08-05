'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-custom sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo-Access-Ability-1.png"
                alt="Access-Ability - Aménagement de véhicules accessibles PMR"
                width={200}
                height={50}
                className="h-10 w-auto logo-text"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/vehicules" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide nav-link">
              VEHICULES
            </Link>
            <Link href="/options-produits" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide nav-link">
              OPTIONS ET PRODUITS
            </Link>
            <Link href="/ressources" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide nav-link">
              RESSOURCES
            </Link>
            <Link href="/about" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide nav-link">
              A PROPOS
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-300 focus:outline-none focus:text-blue-300"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-teal-700/95 backdrop-blur-sm border-t border-blue-300/20 rounded-b-lg">
              <Link href="/vehicules" className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium transition-colors uppercase tracking-wide nav-link">
                VEHICULES
              </Link>
              <Link href="/options-produits" className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium transition-colors uppercase tracking-wide nav-link">
                OPTIONS ET PRODUITS
              </Link>
              <Link href="/ressources" className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium transition-colors uppercase tracking-wide nav-link">
                RESSOURCES
              </Link>
              <Link href="/about" className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium transition-colors uppercase tracking-wide nav-link">
                A PROPOS
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 