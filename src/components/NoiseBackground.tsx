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
    let currentNoiseData = generateNoise(); // Use let to allow reassignment
    setNoiseElements(renderNoiseElements(currentNoiseData));

    // Update noise elements periodically
    noiseIntervalRef.current = setInterval(() => {
      // Update based on the *current* state, not the initial state
      currentNoiseData = currentNoiseData.map((item) => {
        // Randomly decide what to change (appear/disappear, move, change content)
        const changeType = Math.floor(Math.random() * 100);

        const updatedItem = { ...item }; // Create a const copy

        if (changeType < 10) {
          // 10% chance to toggle visibility
          updatedItem.visible = !item.visible;
          updatedItem.opacity = updatedItem.visible ? Math.random() * 0.5 + 0.25 : 0;
        } else if (changeType < 25) {
          // 15% chance to move
          // Only move if visible
          if (updatedItem.visible) {
            const currentTop = parseFloat(updatedItem.top) || 0;
            const currentLeft = parseFloat(updatedItem.left) || 0;
            updatedItem.moving = true;
            updatedItem.top = `${Math.min(
              100,
              Math.max(0, currentTop + (Math.random() * 4 - 2))
            )}%`; // Smaller move steps
            updatedItem.left = `${Math.min(
              100,
              Math.max(0, currentLeft + (Math.random() * 4 - 2))
            )}%`; // Smaller move steps
          } else {
            updatedItem.moving = false; // Ensure non-visible don't move
          }
        } else if (changeType < 35) {
          // 10% chance to change content
          updatedItem.content = item.content === '0' ? '1' : '0';
        } else if (changeType < 45) {
          // 10% chance to change color
          updatedItem.color = Math.random() > 0.7 ? '#36B5D9' : '#696969';
        } else {
          // Reset movement state more gradually
          if (updatedItem.moving) {
            // Add a chance to stop moving
            if (Math.random() < 0.5) {
              // 50% chance to stop if it was moving
              updatedItem.moving = false;
            }
          }
        }
        return updatedItem;
      }) as NoiseElement[];

      setNoiseElements(renderNoiseElements(currentNoiseData));
    }, 100); // Faster update interval for smoother movement

    // Clean up interval on unmount
    return () => {
      if (noiseIntervalRef.current) {
        clearInterval(noiseIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 h-screen z-0 opacity-50 pointer-events-none overflow-hidden">
      {' '}
      {/* Added overflow-hidden */}
      {noiseElements}
    </div>
  );
}
