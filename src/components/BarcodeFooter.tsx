import { useState, useEffect } from 'react';

export default function BarcodeFooter() {
  const [barcodeElements, setBarcodeElements] = useState<React.ReactNode[]>([]);

  useEffect(() => {
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
  }, []);

  return (
    <div className="w-full max-w-xl mb-4">
      <div className="flex">{barcodeElements}</div>
    </div>
  );
}
