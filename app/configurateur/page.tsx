'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ConfigurateurStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface Pack {
  id: string;
  name: string;
  description: string;
  price: string;
  installationTime: string;
  image: string;
  badge: string;
  selected: boolean;
}

interface Option {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  selected: boolean;
}

export default function ConfigurateurPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedObjective, setSelectedObjective] = useState('');
  const [userProfile, setUserProfile] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState({
    brand: '',
    model: '',
    year: ''
  });
  const [selectedPacks, setSelectedPacks] = useState<string[]>([]);
  const [comfortLevel, setComfortLevel] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [userContact, setUserContact] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const steps: ConfigurateurStep[] = [
    { id: 1, title: 'Objectif', description: 'Votre besoin principal', completed: false },
    { id: 2, title: 'Profil', description: 'Votre situation', completed: false },
    { id: 3, title: 'Véhicule', description: 'Votre véhicule', completed: false },
    { id: 4, title: 'Solutions', description: 'Packs recommandés', completed: false },
    { id: 5, title: 'Options', description: 'Confort & modules', completed: false },
    { id: 6, title: 'Aides', description: 'Subventions', completed: false },
    { id: 7, title: 'Devis', description: 'Récapitulatif', completed: false }
  ];

  const objectives = [
    { id: 'transport', name: 'Transporter une personne en fauteuil', icon: '🦽' },
    { id: 'conduite', name: 'Conduire avec un handicap', icon: '🚗' },
    { id: 'acces', name: 'Accéder plus facilement au véhicule', icon: '♿' },
    { id: 'pro', name: 'Adapter un véhicule pour un usage pro', icon: '🏢' },
    { id: 'unknown', name: 'Je ne sais pas', icon: '❓' }
  ];

  const profiles = [
    { id: 'particulier', name: 'Particulier', description: 'Pour un usage personnel' },
    { id: 'pro', name: 'Professionnel', description: 'Pour un usage professionnel' },
    { id: 'transporteur', name: 'Transporteur TPMR', description: 'Transport de personnes' }
  ];

  const packs: Pack[] = [
    {
      id: 'rampe-side',
      name: 'Rampes Side-Entry',
      description: 'Accès latéral pour fauteuil roulant',
      price: 'À partir de 2 500€',
      installationTime: '1-2 jours',
      image: '/rampe-side.jpg',
      badge: 'RGAA',
      selected: false
    },
    {
      id: 'elevateur-tpmr',
      name: 'Élévateur TPMR Joey Lift',
      description: 'Plateforme élévatrice sécurisée',
      price: 'À partir de 8 500€',
      installationTime: '2-3 jours',
      image: '/elevateur-tpmr.jpg',
      badge: 'Certifié',
      selected: false
    },
    {
      id: 'siege-pivotant',
      name: 'Siège Pivotant',
      description: 'Transfert confortable et sécurisé',
      price: 'À partir de 1 800€',
      installationTime: '1 jour',
      image: '/siege-pivotant.jpg',
      badge: 'Label',
      selected: false
    },
    {
      id: 'commandes-conduite',
      name: 'Commandes de Conduite',
      description: 'Hand controls et commandes adaptées',
      price: 'À partir de 3 200€',
      installationTime: '2 jours',
      image: '/commandes-conduite.jpg',
      badge: 'RGAA',
      selected: false
    }
  ];

  const options: Option[] = [
    { id: 'ceinture-thoracique', name: 'Ceinture Thoracique', description: 'Sécurité renforcée', price: '+ 450€', category: 'Sécurité', selected: false },
    { id: 'support-enfant', name: 'Support Enfant', description: 'Fixation siège enfant', price: '+ 280€', category: 'Confort', selected: false },
    { id: 'amortisseurs', name: 'Amortisseurs Suspension', description: 'Confort de conduite', price: '+ 650€', category: 'Confort', selected: false },
    { id: 'harnais', name: 'Harnais de Fixation', description: 'Fixation sécurisée', price: '+ 320€', category: 'Sécurité', selected: false }
  ];

  const handleObjectiveSelect = (objectiveId: string) => {
    setSelectedObjective(objectiveId);
    setCurrentStep(2);
  };

  const handleProfileSelect = (profileId: string) => {
    setUserProfile(profileId);
    setCurrentStep(3);
  };

  const handlePackSelect = (packId: string) => {
    setSelectedPacks(prev => 
      prev.includes(packId) 
        ? prev.filter(id => id !== packId)
        : [...prev, packId]
    );
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log('Configuration soumise:', {
      objective: selectedObjective,
      profile: userProfile,
      vehicle: vehicleInfo,
      packs: selectedPacks,
      options: selectedOptions,
      contact: userContact
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#0C1C3D] mb-4">
                Quel est votre objectif principal ?
              </h2>
              <p className="text-lg text-[#0C1C3D]/70">
                Sélectionnez votre besoin pour personnaliser votre configuration
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {objectives.map((objective) => (
                <button
                  key={objective.id}
                  onClick={() => handleObjectiveSelect(objective.id)}
                  className="p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-[#1e62d0] hover:bg-[#1e62d0]/5 transition-all duration-300 text-left group"
                >
                  <div className="text-4xl mb-4">{objective.icon}</div>
                  <h3 className="text-lg font-semibold text-[#0C1C3D] group-hover:text-[#1e62d0]">
                    {objective.name}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#0C1C3D] mb-4">
                Votre profil utilisateur
              </h2>
              <p className="text-lg text-[#0C1C3D]/70">
                Nous adapterons votre parcours selon votre situation
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {profiles.map((profile) => (
                <button
                  key={profile.id}
                  onClick={() => handleProfileSelect(profile.id)}
                  className="p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-[#1e62d0] hover:bg-[#1e62d0]/5 transition-all duration-300 text-center group"
                >
                  <h3 className="text-xl font-semibold text-[#0C1C3D] group-hover:text-[#1e62d0] mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-[#0C1C3D]/70">
                    {profile.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#0C1C3D] mb-4">
                Votre véhicule
              </h2>
              <p className="text-lg text-[#0C1C3D]/70">
                Informations pour adapter les solutions à votre véhicule
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0C1C3D] mb-2">
                    Marque
                  </label>
                  <input
                    type="text"
                    value={vehicleInfo.brand}
                    onChange={(e) => setVehicleInfo(prev => ({ ...prev, brand: e.target.value }))}
                    placeholder="Ex: Renault"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e62d0]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0C1C3D] mb-2">
                    Modèle
                  </label>
                  <input
                    type="text"
                    value={vehicleInfo.model}
                    onChange={(e) => setVehicleInfo(prev => ({ ...prev, model: e.target.value }))}
                    placeholder="Ex: Kangoo"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e62d0]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0C1C3D] mb-2">
                    Année
                  </label>
                  <input
                    type="text"
                    value={vehicleInfo.year}
                    onChange={(e) => setVehicleInfo(prev => ({ ...prev, year: e.target.value }))}
                    placeholder="Ex: 2020"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e62d0]"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={() => setCurrentStep(4)}
                  className="bg-[#f2cb05] text-[#1e62d0] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e6c205] transition-colors"
                >
                  Continuer vers les solutions
                </button>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#0C1C3D] mb-4">
                Solutions adaptées
              </h2>
              <p className="text-lg text-[#0C1C3D]/70">
                Ce pack correspond à vos besoins et véhicule
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {packs.map((pack) => (
                <div
                  key={pack.id}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    selectedPacks.includes(pack.id)
                      ? 'border-[#1e62d0] bg-[#1e62d0]/5'
                      : 'border-gray-200 bg-white hover:border-[#1e62d0] hover:bg-[#1e62d0]/5'
                  }`}
                  onClick={() => handlePackSelect(pack.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[#0C1C3D]">
                      {pack.name}
                    </h3>
                    <span className="px-3 py-1 bg-[#f2cb05] text-[#1e62d0] text-sm font-semibold rounded-full">
                      {pack.badge}
                    </span>
                  </div>
                  <p className="text-[#0C1C3D]/70 mb-4">
                    {pack.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#0C1C3D]/60">
                      <div>Prix: {pack.price}</div>
                      <div>Installation: {pack.installationTime}</div>
                    </div>
                    <button
                      className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                        selectedPacks.includes(pack.id)
                          ? 'bg-[#1e62d0] text-white'
                          : 'bg-[#f2cb05] text-[#1e62d0] hover:bg-[#e6c205]'
                      }`}
                    >
                      {selectedPacks.includes(pack.id) ? 'Sélectionné' : 'Ajouter'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setCurrentStep(5)}
                className="bg-[#f2cb05] text-[#1e62d0] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e6c205] transition-colors"
              >
                Continuer vers les options
              </button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#0C1C3D] mb-4">
                Options & confort
              </h2>
              <p className="text-lg text-[#0C1C3D]/70">
                Personnalisez votre configuration avec des modules complémentaires
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#0C1C3D] mb-4">
                  Niveau de confort
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {['Essentiel', 'Confort', 'Premium'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setComfortLevel(level)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        comfortLevel === level
                          ? 'border-[#1e62d0] bg-[#1e62d0]/5'
                          : 'border-gray-200 bg-white hover:border-[#1e62d0]'
                      }`}
                    >
                      <h4 className="font-semibold text-[#0C1C3D]">{level}</h4>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#0C1C3D] mb-4">
                  Modules complémentaires
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {options.map((option) => (
                    <div
                      key={option.id}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                        selectedOptions.includes(option.id)
                          ? 'border-[#1e62d0] bg-[#1e62d0]/5'
                          : 'border-gray-200 bg-white hover:border-[#1e62d0]'
                      }`}
                      onClick={() => handleOptionSelect(option.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-[#0C1C3D]">{option.name}</h4>
                          <p className="text-sm text-[#0C1C3D]/70">{option.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-[#0C1C3D]">{option.price}</div>
                          <div className="text-xs text-[#0C1C3D]/60">{option.category}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center mt-8">
                <button
                  onClick={() => setCurrentStep(6)}
                  className="bg-[#f2cb05] text-[#1e62d0] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e6c205] transition-colors"
                >
                  Continuer vers les aides
                </button>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#0C1C3D] mb-4">
                Éligibilité aux subventions
              </h2>
              <p className="text-lg text-[#0C1C3D]/70">
                Vérifiez les aides disponibles pour votre situation
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#1e62d0]/10 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold text-[#0C1C3D] mb-4">
                  Aides disponibles
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#f2cb05] rounded-full"></div>
                      <span className="text-[#0C1C3D]">PCH (Prestation de Compensation du Handicap)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#f2cb05] rounded-full"></div>
                      <span className="text-[#0C1C3D]">AAH (Allocation Adulte Handicapé)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#f2cb05] rounded-full"></div>
                      <span className="text-[#0C1C3D]">Programmes régionaux</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-[#0C1C3D] mb-2">Aide estimée</h4>
                    <p className="text-2xl font-bold text-[#1e62d0]">Jusqu'à 75%</p>
                    <p className="text-sm text-[#0C1C3D]/70">du coût total selon votre situation</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={() => setCurrentStep(7)}
                  className="bg-[#f2cb05] text-[#1e62d0] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e6c205] transition-colors"
                >
                  Continuer vers le devis
                </button>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#0C1C3D] mb-4">
                Récapitulatif & devis
              </h2>
              <p className="text-lg text-[#0C1C3D]/70">
                Recevez un devis clair sans obligation
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                <h3 className="text-xl font-semibold text-[#0C1C3D] mb-4">
                  Votre configuration
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#0C1C3D]">Packs sélectionnés</span>
                    <span className="font-semibold text-[#0C1C3D]">
                      {selectedPacks.length} pack(s)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0C1C3D]">Options choisies</span>
                    <span className="font-semibold text-[#0C1C3D]">
                      {selectedOptions.length} option(s)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0C1C3D]">Niveau de confort</span>
                    <span className="font-semibold text-[#0C1C3D]">{comfortLevel}</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between items-center text-lg font-bold text-[#0C1C3D]">
                    <span>Estimation totale</span>
                    <span>À partir de 8 500€</span>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0C1C3D] mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={userContact.name}
                      onChange={(e) => setUserContact(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e62d0]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0C1C3D] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={userContact.email}
                      onChange={(e) => setUserContact(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e62d0]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0C1C3D] mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={userContact.phone}
                    onChange={(e) => setUserContact(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e62d0]"
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <button
                    type="submit"
                    className="bg-[#f2cb05] text-[#1e62d0] px-6 py-4 rounded-lg font-semibold hover:bg-[#e6c205] transition-colors"
                  >
                    Recevoir mon devis personnalisé
                  </button>
                  <button
                    type="button"
                    className="bg-white border-2 border-[#1e62d0] text-[#1e62d0] px-6 py-4 rounded-lg font-semibold hover:bg-[#1e62d0] hover:text-white transition-colors"
                  >
                    Exporter en PDF
                  </button>
                  <button
                    type="button"
                    className="bg-[#1e62d0] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#0C1C3D] transition-colors"
                  >
                    Rendez-vous installateur
                  </button>
                </div>
              </form>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/Logo-Access-Ability-1.png"
                alt="Access-Ability"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="text-sm text-[#0C1C3D]/60">
              Étape {currentStep} sur {steps.length}
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                  currentStep >= step.id
                    ? 'bg-[#1e62d0] text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step.id ? 'bg-[#1e62d0]' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderStepContent()}
      </main>

      {/* Footer */}
      <footer className="bg-[#0C1C3D] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © 2024 Access-Ability. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
} 