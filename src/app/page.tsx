'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// Define a type for noise element data
interface NoiseElement {
  key: number;
  top: string;
  left: string;
  opacity: number;
  color: string;
  content: string;
  visible: boolean;
  moving: boolean;
}

export default function Home() {
  const [attackData, setAttackData] = useState([
    { ip: '192.168.1.42', type: 'INJECTION SQL', time: 'il y a 3s', color: 'text-red-400' },
    { ip: '176.28.14.102', type: 'FORCE BRUTE', time: 'il y a 17s', color: 'text-yellow-400' },
    { ip: '103.45.11.89', type: 'TENTATIVE XSS', time: 'il y a 32s', color: 'text-red-400' },
  ]);

  const attackTypes = [
    'INJECTION SQL',
    'FORCE BRUTE',
    'TENTATIVE XSS',
    'DDOS',
    'RANSOMWARE',
    'CONTOURNEMENT AUTH',
    'FUITE DE DONNÉES',
  ];
  const intervalIds = useRef<NodeJS.Timeout[]>([]);
  const [noiseElements, setNoiseElements] = useState<React.ReactNode[]>([]);
  const [pulseElements, setPulseElements] = useState<React.ReactNode[]>([]);
  const [barcodeElements, setBarcodeElements] = useState<React.ReactNode[]>([]);
  const noiseIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Generate initial noise elements (increased from 100 to 250 elements)
    const generateNoise = () => {
      return Array.from({ length: 250 }).map((_, i) => {
        const visible = Math.random() > 0.2; // 80% chance to be visible initially
        return {
          key: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: visible ? Math.random() * 0.5 + 0.25 : 0,
          color: Math.random() > 0.7 ? '#36B5D9' : '#696969',
          content: Math.random() > 0.5 ? '0' : '1',
          visible,
          moving: false,
        };
      });
    };

    // Render noise elements from state
    const renderNoiseElements = (noiseData: NoiseElement[]) => {
      return noiseData.map((item) => (
        <div
          key={item.key}
          className="absolute text-xs transition-all duration-1000"
          style={{
            top: item.top,
            left: item.left,
            opacity: item.opacity,
            color: item.color,
            transform: item.moving ? `translateY(${Math.random() > 0.5 ? -15 : 15}px)` : 'none',
          }}
        >
          {item.content}
        </div>
      ));
    };

    // Initial noise generation
    const initialNoiseData = generateNoise();
    setNoiseElements(renderNoiseElements(initialNoiseData));

    // Update noise elements periodically
    noiseIntervalRef.current = setInterval(() => {
      const updatedNoiseData = initialNoiseData.map((item) => {
        // Randomly decide what to change (appear/disappear, move, change content)
        const changeType = Math.floor(Math.random() * 100);

        if (changeType < 10) {
          // 10% chance to toggle visibility
          return {
            ...item,
            visible: !item.visible,
            opacity: item.visible ? 0 : Math.random() * 0.5 + 0.25,
          };
        } else if (changeType < 25) {
          // 15% chance to move
          return {
            ...item,
            moving: true,
            top: `${Math.min(100, Math.max(0, parseFloat(item.top) + (Math.random() * 10 - 5)))}%`,
            left: `${Math.min(
              100,
              Math.max(0, parseFloat(item.left) + (Math.random() * 10 - 5))
            )}%`,
          };
        } else if (changeType < 35) {
          // 10% chance to change content
          return {
            ...item,
            content: item.content === '0' ? '1' : '0',
          };
        } else if (changeType < 45) {
          // 10% chance to change color
          return {
            ...item,
            color: Math.random() > 0.7 ? '#36B5D9' : '#696969',
          };
        } else {
          // 55% chance to reset movement
          return {
            ...item,
            moving: false,
          };
        }
      }) as NoiseElement[];

      setNoiseElements(renderNoiseElements(updatedNoiseData));
    }, 800);

    const pulses = Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="h-1 flex-1 attack-pulse"
        style={{
          animationDelay: `${i * 0.1}s`,
          backgroundColor: Math.random() > 0.7 ? '#ff3b30' : '#36B5D9',
        }}
      ></div>
    ));
    setPulseElements(pulses);

    const barcodes = Array.from({ length: 40 }).map((_, i) => (
      <div
        key={i}
        className="h-6"
        style={{
          width: `${Math.random() * 8 + 2}px`,
          backgroundColor: Math.random() > 0.6 ? '#36B5D9' : 'transparent',
        }}
      ></div>
    ));
    setBarcodeElements(barcodes);

    // Clean up interval on unmount
    return () => {
      if (noiseIntervalRef.current) {
        clearInterval(noiseIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const initialLength = attackData.length;
    const localIntervalIds: NodeJS.Timeout[] = [];

    for (let i = 0; i < initialLength; i++) {
      const updateLine = () => {
        const randomDelay = Math.floor(Math.random() * 3000) + 1000;

        const newAttack = {
          ip: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(
            Math.random() * 255
          )}.${Math.floor(Math.random() * 255)}`,
          type: attackTypes[Math.floor(Math.random() * attackTypes.length)],
          time: `il y a ${Math.floor(Math.random() * 60)}s`,
          color: Math.random() > 0.5 ? 'text-red-400' : 'text-yellow-400',
        };

        setAttackData((prev) => {
          const newData = [...prev];
          newData[i] = newAttack;
          return newData;
        });

        const timeoutId = setTimeout(updateLine, randomDelay);
        intervalIds.current[i] = timeoutId;
        localIntervalIds[i] = timeoutId;
      };

      const initialTimeoutId = setTimeout(updateLine, Math.floor(Math.random() * 2000) + 500);
      intervalIds.current[i] = initialTimeoutId;
      localIntervalIds[i] = initialTimeoutId;
    }

    return () => {
      localIntervalIds.forEach((id) => clearTimeout(id));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4 relative h-screen overflow-hidden bg-black">
      {/* Effet de lignes de scan */}
      <div className="fixed inset-0 pointer-events-none bg-scanlines opacity-10"></div>

      {/* Bruit numérique de fond */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">{noiseElements}</div>

      {/* En-tête principal - GRAND ORAL */}
      <div className="text-center mb-8 font-mono">
        <div className="text-7xl font-bold tracking-widest text-blue-400 glitch-text mb-1 pixel-font">
          GRAND
        </div>
        <div className="text-7xl font-bold tracking-widest text-blue-300 border-2 border-blue-400 px-4 glitch-text">
          ORAL
        </div>
      </div>

      {/* Disposition en grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mb-8">
        {/* Section Terre/Planète */}
        <div className="border border-blue-500 p-4 relative">
          <div className="text-xs text-blue-400 mb-1">
            {'>'}
            {'>'}
          </div>
          <div className="flex items-center justify-center h-48 relative">
            <div className="absolute w-32 h-32 rounded-full bg-gray-700 overflow-hidden">
              <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-400 opacity-30"></div>
            </div>
            <div className="absolute top-0 right-4 text-white">+ + + +</div>
          </div>
          <div className="bg-blue-900/30 p-2 text-blue-300 text-sm">
            {
              "Voyagez au-delà de l'horizon—où le passé rencontre le futur"
            }
          </div>
        </div>

        {/* Section Voiture Delorean */}
        <div className="border border-blue-500 p-4">
          <div className="flex justify-between text-xs text-blue-400 mb-1">
            <span>{"Delorean"}</span>
            <span>{"Démarrer"}</span>
          </div>
          <div className="h-48 bg-gradient-to-b from-transparent to-blue-900/20 flex items-center justify-center">
            {/* Conteneur de silhouette de voiture */}
            <div className="w-full h-32 relative">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-16 bg-gray-500 rounded-sm"></div>
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-gray-300"></div>
            </div>
          </div>
          <div className="mt-2 text-gray-400 text-xs">
            {"Loran Off. rêve dans un monde cybernétique"}
          </div>
        </div>

        {/* Moniteur d'attaques */}
        <div className="border border-blue-500 p-2">
          <div className="text-xl font-bold text-blue-400 mb-2">{"FAILLE DE SÉCURITÉ"}</div>
          <div className="flex space-x-1 mb-3">{pulseElements}</div>
          <div className="text-xs text-blue-300 mb-2">
            {attackData.map((attack, i) => (
              <div
                key={i}
                className="flex justify-between mt-1 attack-line"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <span>{attack.ip}</span>
                <span className={attack.color}>{attack.type}</span>
                <span>{attack.time}</span>
              </div>
            ))}
          </div>
          <div className="text-xs text-red-500 mt-2 blink-fast">
            {"STATUT DU PARE-FEU: SOUS ATTAQUE"}
          </div>
        </div>

        {/* Carte de données */}
        <div className="border border-blue-500 p-2">
          <div className="flex justify-between items-center mb-2">
            <div className="text-xl font-bold bg-gray-800 px-2">{"CARTE"}</div>
            <div className="text-xl font-bold text-blue-400 px-2">{"DONNÉES"}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <div className="text-gray-400">
                {"STATUT: "}
                <span className="text-blue-400">{"ALERTE"}</span>
              </div>
              <div className="text-gray-400">
                {"DATE: "}
                <span className="text-blue-400">{"2077.13.31"}</span>
              </div>
              <div className="text-gray-400">
                {"MODE: "}
                <span className="text-blue-400">{"DELOREAN"}</span>
              </div>
            </div>
            <div className="w-16 h-16 bg-blue-900/40 flex items-center justify-center">
              <div className="text-2xl text-blue-400">{"→"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton d'appel à l'action */}
      <Link
        href="/a-propos"
        className="border-2 border-blue-600 text-blue-400 px-8 py-2 hover:bg-blue-900 transition duration-300 mb-4 text-xl font-bold"
      >
        {"ACCÉDER AU TERMINAL"}
      </Link>

      {/* Message de pied de page */}
      <div className="text-center mb-4">
        <div className="text-3xl text-blue-500 font-bold mb-1">{"TRANSMISSION FINALE"}</div>
        <div className="text-3xl text-blue-400 font-bold mb-4">{"AVANT EFFONDREMENT"}</div>
        <div className="text-xl text-blue-300">{"2084"}</div>
      </div>

      {/* Code-barres/Bande de données */}
      <div className="w-full max-w-xl mb-4">
        <div className="flex">{barcodeElements}</div>
      </div>
    </div>
  );
}
