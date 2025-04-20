'use client';

import { useState, useEffect } from 'react';
import PlanetSection from '../components/PlanetSection';
import DeloreanSection from '../components/DeloreanSection';
import AttackMonitor from '../components/AttackMonitor';
import FaceGif from '../components/FaceGif';
import NoiseBackground from '../components/NoiseBackground';
import FuturisticCaptcha from '../components/FuturisticCaptcha';
import Navigation from '../components/Navigation';

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleComponents, setVisibleComponents] = useState([false, false, false, false]);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'appareil est mobile
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent) || window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    // Vérifier si le CAPTCHA a déjà été validé
    const captchaValidated = localStorage.getItem('captchaValidated');
    const captchaTime = localStorage.getItem('captchaValidatedTime');

    // Validation expire après 7 jours
    const validationExpired =
      captchaTime && Date.now() - parseInt(captchaTime) > 7 * 24 * 60 * 60 * 1000;

    if (captchaValidated === 'true' && !validationExpired) {
      setIsVerified(true);
      setContentVisible(true);
    }

    setIsLoading(false);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Handle content visibility after verification
  useEffect(() => {
    if (isVerified) {
      // Add a small delay before showing content
      setTimeout(() => {
        setContentVisible(true);
      }, 500);
    }
  }, [isVerified]);

  // Sequential fade-in for components
  useEffect(() => {
    if (contentVisible && !isLoading && !isMobile) {
      // Check if animation has already been shown
      const animationShown = localStorage.getItem('animationShown');

      if (animationShown === 'true') {
        // If animation was already shown, immediately display all components
        setVisibleComponents([true, true, true, true]);
        return;
      }

      // Setup random delays for each component fade-in
      let cumulativeDelay = 0;

      const timeouts = visibleComponents.map((_, index) => {
        // Random delay between 1-3 seconds
        const randomDelay = Math.floor(Math.random() * 2000) + 1000;
        cumulativeDelay += randomDelay;

        return setTimeout(() => {
          setVisibleComponents((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });

          // After the last component is shown, mark animation as complete
          if (index === visibleComponents.length - 1) {
            localStorage.setItem('animationShown', 'true');
          }
        }, cumulativeDelay);
      });

      return () => {
        timeouts.forEach((timeout) => clearTimeout(timeout));
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentVisible, isLoading, isMobile]);

  const handleVerification = () => {
    setIsVerified(true);
  };

  if (isLoading) {
    return null; // Évite de flasher le CAPTCHA pendant le chargement
  }

  // Afficher un message pour les utilisateurs mobiles
  if (isMobile) {
    return (
      <div className="bg-black text-blue-400 min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-10"></div>
        <NoiseBackground />

        <div className="border-2 border-blue-500 p-8 max-w-md mx-auto bg-black/80 backdrop-blur-sm">
          <h1 className="text-2xl font-bold mb-6 text-red-500">
            [ERREUR DE COMPATIBILITÉ TEMPORELLE]
          </h1>

          <div className="mb-6 text-sm">
            <div className="animate-pulse text-yellow-500 mb-4">
              Incompatibilité détectée. Accès refusé.
            </div>
            <p className="mb-4">
              Les transmissions temporelles depuis 2084 ne peuvent être reçues et décodées que par
              des terminaux fixes de type ordinateur.
            </p>
            <p className="mb-4">
              Les appareils mobiles ne disposent pas de la capacité de calcul nécessaire pour
              stabiliser le flux temporel.
            </p>
            <p className="text-red-400">
              Pour votre sécurité et la mienne, veuillez accéder à ce portail depuis un ordinateur.
            </p>
          </div>

          <div className="text-xs opacity-70 mt-8 font-mono">
            [ID.TRANSMISSION: TCH-2084-ERR-7734]
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isVerified && <FuturisticCaptcha onVerified={handleVerification} />}

      <div
        className={`flex flex-col items-center justify-center py-8 px-4 relative bg-black min-h-screen transition-opacity duration-1000 ease-in-out ${
          contentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Effet de lignes de scan */}
        <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-10"></div>

        {/* Bruit numérique de fond */}
        <NoiseBackground />

        {/* Nouvelle disposition en grille */}
        <div className="grid grid-cols-12 gap-4 w-full max-w-6xl mb-8">
          {/* Orb Component (6 colonnes) */}
          <div className="col-span-12 md:col-span-4 flex items-end justify-center h-96">
            <div
              className={`transition-opacity duration-1000 ease-in-out ${
                visibleComponents[0] ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <PlanetSection />
            </div>
          </div>

          {/* YouTube lives component (6 colonnes) */}
          <div
            className={`col-span-12 md:col-span-8 pt-24 pr-32 pb-8 flex items-center justify-center h-96 transition-opacity duration-1000 ease-in-out ${
              visibleComponents[1] ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <DeloreanSection />
          </div>

          {/* Title section (8 colonnes) */}
          <div className="col-span-12 md:col-span-9 flex items-center justify-center h-12">
            <h2 className="text-3xl font-bold italic uppercase text-blue-800">
              UN message de 2084
            </h2>
          </div>

          {/* Text section (4 colonnes, prend toute la hauteur des deux composants inférieurs) */}
          <div className="col-span-12 md:col-span-3 md:row-span-2 sticky top-0">
            <div className="text-white w-full">
              <Navigation />
            </div>
          </div>

          {/* DataMap Component (4 colonnes) */}
          <div className="col-span-12 md:col-span-5 h-64">
            <div
              className={`transition-opacity duration-1000 ease-in-out ${
                visibleComponents[2] ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <FaceGif />
            </div>
          </div>

          {/* Security Error Component (4 colonnes) */}
          <div className="col-span-12 md:col-span-4 h-64 pt-4">
            <div
              className={`transition-opacity duration-1000 ease-in-out ${
                visibleComponents[3] ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <AttackMonitor />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
