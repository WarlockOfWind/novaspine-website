import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette Access-Ability
        'blue-trust': '#1E62D0',      // CTA, boutons, éléments interactifs
        'blue-night': '#0C1C3D',      // Titres, fond de footer, header sombre
        'white-soft': '#F9FAFB',      // Fond général, respirations visuelles
        'gray-soft': '#DDE2E6',       // Séparateurs, hover, lignes discrètes
        'blue-sky': '#D9E6F8',        // Backgrounds secondaires + bloc promo
        'green-access': '#3CB371',    // Feedback, badge conformité RGAA
        
        // Couleurs système
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-access': 'linear-gradient(135deg, #1E62D0 0%, #0C1C3D 100%)',
        // Effet papier déchiré
        'torn-paper': 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'paper\' patternUnits=\'userSpaceOnUse\' width=\'100\' height=\'100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f8fafc\'/%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\' fill=\'%23e2e8f0\' opacity=\'0.3\'/%3E%3Ccircle cx=\'80\' cy=\'40\' r=\'0.5\' fill=\'%23cbd5e1\' opacity=\'0.2\'/%3E%3Ccircle cx=\'40\' cy=\'80\' r=\'0.8\' fill=\'%23e2e8f0\' opacity=\'0.4\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23paper)\'/%3E%3C/svg%3E")',
        'torn-paper-blue': 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'paper-blue\' patternUnits=\'userSpaceOnUse\' width=\'100\' height=\'100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23d9e6f8\'/%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\' fill=\'%23bfdbfe\' opacity=\'0.3\'/%3E%3Ccircle cx=\'80\' cy=\'40\' r=\'0.5\' fill=\'%23a5b4fc\' opacity=\'0.2\'/%3E%3Ccircle cx=\'40\' cy=\'80\' r=\'0.8\' fill=\'%23bfdbfe\' opacity=\'0.4\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23paper-blue)\'/%3E%3C/svg%3E")',
      },
      boxShadow: {
        'access-card': '0 4px 16px rgba(30, 98, 208, 0.08)',
        'access-hover': '0 8px 32px rgba(30, 98, 208, 0.12)',
        'access-cta': '0 4px 20px rgba(30, 98, 208, 0.3)',
      },
      borderRadius: {
        'access': '999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      // Effet de papier déchiré
      clipPath: {
        'torn-paper': 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        'torn-paper-reverse': 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)',
        'torn-paper-natural': 'polygon(0 0, 100% 0, 100% 70%, 95% 75%, 90% 80%, 85% 85%, 80% 90%, 75% 95%, 70% 100%, 65% 95%, 60% 90%, 55% 85%, 50% 80%, 45% 75%, 40% 70%, 35% 75%, 30% 80%, 25% 85%, 20% 90%, 15% 95%, 10% 100%, 5% 95%, 0 90%)',
      },
    },
  },
  plugins: [],
}

export default config
