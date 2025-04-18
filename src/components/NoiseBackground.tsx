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

export default function NoiseBackground() {
  const [noiseElements, setNoiseElements] = useState<React.ReactNode[]>([]);
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

    // Clean up interval on unmount
    return () => {
      if (noiseIntervalRef.current) {
        clearInterval(noiseIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 h-screen z-0 opacity-15 pointer-events-none">
      {noiseElements}
    </div>
  );
}
