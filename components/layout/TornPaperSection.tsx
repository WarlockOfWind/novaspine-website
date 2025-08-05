import React from 'react';

interface TornPaperSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'blue-to-white' | 'white-to-blue' | 'gradient';
}

export default function TornPaperSection({ 
  children, 
  className = '', 
  variant = 'blue-to-white' 
}: TornPaperSectionProps) {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'blue-to-white':
        return 'torn-paper-section';
      case 'white-to-blue':
        return 'torn-paper-section-reverse';
      case 'gradient':
        return 'torn-paper-gradient';
      default:
        return 'torn-paper-section';
    }
  };

  return (
    <section className={`relative ${getBackgroundClass()} ${className}`}>
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
} 