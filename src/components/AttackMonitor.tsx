import { useState, useEffect, useRef } from 'react';

interface AttackData {
  ip: string;
  type: string;
  time: string;
  color: string;
}

export default function AttackMonitor() {
  const [attackData, setAttackData] = useState<AttackData[]>([
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
  const [pulseElements, setPulseElements] = useState<React.ReactNode[]>([]);

  useEffect(() => {
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
    <div className="flex flex-col gap-4">
      <div className="border border-blue-500 p-2">
        <div className="text-xl font-bold text-blue-400 mb-2">{'FAILLE DE SÉCURITÉ'}</div>
        <div className="flex space-x-1 mb-3">{pulseElements}</div>
        <div className="text-xs text-blue-300 mb-2">
          {attackData.map((attack, i) => (
            <div
              key={i}
              className="flex justify-between mt-1 attack-line"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <span>{attack.ip}</span>
              <span className={attack.color}>{attack.type}</span>
              <span>{attack.time}</span>
            </div>
          ))}
        </div>
        <div className="text-xs text-red-500 mt-2 blink-fast">
          {'STATUT DU PARE-FEU: SOUS ATTAQUE'}
        </div>
      </div>
      <p className="text-xs text-blue-400"> {'Ils nous retrouveront ...'} </p>
    </div>
  );
}
