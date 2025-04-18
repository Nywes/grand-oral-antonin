'use client';

import Link from 'next/link';
import PlanetSection from '../components/PlanetSection';
import DeloreanSection from '../components/DeloreanSection';
import AttackMonitor from '../components/AttackMonitor';
import DataMap from '../components/DataMap';
import NoiseBackground from '../components/NoiseBackground';
import BarcodeFooter from '../components/BarcodeFooter';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 relative bg-black">
      {/* Effet de lignes de scan */}
      <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-10"></div>

      {/* Bruit numérique de fond */}
      <NoiseBackground />

      {/* En-tête principal - GRAND ORAL */}
      <div className="relative text-center mb-8 font-mono glitch w-full max-w-5xl overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index} className="text-7xl font-bold tracking-widest line">
            GRAND ORAL
          </span>
        ))}
      </div>

      {/* Disposition en grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mb-8">
        {/* Section Terre/Planète */}
        <PlanetSection />

        {/* Section Voiture Delorean */}
        <DeloreanSection />

        {/* Moniteur d'attaques */}
        <AttackMonitor />

        {/* Carte de données */}
        <DataMap />
      </div>

      {/* Bouton d'appel à l'action */}
      <Link
        href="/a-propos"
        className="border-2 border-blue-600 text-blue-400 px-8 py-2 hover:bg-blue-900 transition duration-300 mb-4 text-xl font-bold"
      >
        {'ACCÉDER AU TERMINAL'}
      </Link>

      {/* Message de pied de page */}
      <div className="text-center mb-4">
        <div className="text-3xl text-blue-500 font-bold mb-1">{'TRANSMISSION FINALE'}</div>
        <div className="text-3xl text-blue-400 font-bold mb-4">{'AVANT EFFONDREMENT'}</div>
        <div className="text-xl text-blue-300">{'2084'}</div>
      </div>

      {/* Code-barres/Bande de données */}
      <BarcodeFooter />
    </div>
  );
}
