import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page non trouvée - Prompt Consulting',
  description: 'La page que vous recherchez n\'existe pas. Retournez à l\'accueil de Prompt Consulting.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <img 
              src="/assets/logo.png" 
              alt="Prompt Consulting" 
              className="h-12 mx-auto"
            />
          </Link>
        </div>

        {/* Contenu 404 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Page non trouvée
            </h2>
            <p className="text-gray-600 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Link
              href="/"
              className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Retour à l'accueil
            </Link>
            
            <div className="flex space-x-4">
              <Link
                href="/contact"
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Nous contacter
              </Link>
              <Link
                href="/insights"
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Nos insights
              </Link>
            </div>
          </div>

          {/* Recherche */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">
              Ou recherchez ce que vous cherchez :
            </p>
            <form action="/insights" method="GET" className="flex">
              <input
                type="text"
                name="q"
                placeholder="Rechercher..."
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                🔍
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            Si vous pensez qu'il s'agit d'une erreur,{' '}
            <Link href="/contact" className="text-blue-600 hover:underline">
              contactez-nous
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 