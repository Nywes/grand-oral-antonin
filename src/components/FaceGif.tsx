import React from 'react';
import Image from 'next/image';

export default function FaceGif() {
  return (
    <div className="border border-blue-500 p-2">
      <div className="flex items-center justify-center">
        <Image
          src="/face.gif"
          alt="Digital face visualization"
          width={500}
          height={500}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
