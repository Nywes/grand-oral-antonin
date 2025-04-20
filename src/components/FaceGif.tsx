import React from 'react';
import Image from 'next/image';

export default function FaceGif() {
  return (
    <div className="flex flex-col gap-4">
      <div className="border border-blue-500 p-2">
        <div className="flex items-center justify-center">
          <Image
            src="/face.gif"
            alt="Digital face visualization"
            width={500}
            height={500}
            className="w-auto h-full"
            priority
          />
        </div>
      </div>
      <p className="text-xs text-blue-400"> {'Ils nous écoutent ...'} </p>
    </div>
  );
}
