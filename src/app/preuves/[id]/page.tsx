'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { isProofPDF, getProofById } from '@/utils/proofUtils';
import { useParams } from 'next/navigation';

// Define the Proof type based on the proofs array structure
type Proof = {
  id: number;
  title: string;
  date: string;
  documentUrl: string;
};


export default function PreuvePage() {
  const { id } = useParams();

  const numericId = parseInt(id as string, 10);
  const [isPDF, setIsPDF] = useState<boolean>(false);
  const [proof, setProof] = useState<Proof | null>(null);

  useEffect(() => {
    setIsPDF(isProofPDF(id as string));
    setProof(getProofById(numericId));
  }, [id, numericId]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/preuves" className="text-teal-300 hover:text-teal-400 transition">
          ← Retour aux preuves
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-red-600 mb-8">Preuve #{id}</h1>

      <div className="max-w-4xl mx-auto border border-teal-900 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="text-teal-300">Document #X-{id}4372</div>
          <div className="text-red-600 font-mono">CONFIDENTIEL</div>
        </div>

        {isPDF ? (
          <div className="text-center p-4">
            <p className="text-teal-300 mb-2">Document PDF</p>
            {proof?.documentUrl && (
              <iframe
                src={proof.documentUrl}
                className="w-full h-[600px] border border-teal-700"
                title={`PDF Document - ${proof.title}`}
              />
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem vel orci finibus
              lacinia. Aenean condimentum metus at efficitur interdum. Suspendisse potenti. In hac
              habitasse platea dictumst.
            </p>

            <div className="font-mono bg-black bg-opacity-50 p-4 border border-teal-700 text-teal-400">
              <p>COORDONNÉES: 47.2334° N, 38.1233° E</p>
              <p>DATE: {proof?.date || '12.06.2082'}</p>
              <p>TÉMOINS: 3</p>
            </div>

            <p>
              Duis consequat orci id sapien fringilla, eu finibus quam sodales. Cras volutpat, justo
              at fermentum faucibus, arcu sem fermentum ante, ac facilisis lacus dolor nec nunc.
            </p>

            <div className="border-l-4 border-red-600 pl-4 italic">
              &quot;Ils ont remplacé sept membres du conseil d&apos;administration. Le projet ECHO
              est maintenant en phase finale. L&apos;humanité n&apos;est pas prête pour ce qui va
              suivre.&quot;
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
