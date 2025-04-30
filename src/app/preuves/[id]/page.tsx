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
  const [pdfError, setPdfError] = useState<boolean>(false);

  useEffect(() => {
    setIsPDF(isProofPDF(id as string));
    setProof(getProofById(numericId));
    setPdfError(false);
  }, [id, numericId]);

  const handlePdfError = () => {
    setPdfError(true);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto border border-cyan-900 p-8">
        <div className="flex justify-between items-center mb-4">
          <Link href="/preuves" className="text-cyan-300 hover:text-cyan-400 transition">
            ← {'Retour aux preuves'}
          </Link>

          <div className="text-orange-600 font-mono">{'CONFIDENTIEL'}</div>
        </div>

        {isPDF ? (
          <div className="text-center">
            {proof?.documentUrl && !pdfError ? (
              <iframe
                src={proof.documentUrl}
                className="w-full h-[80vh] border border-cyan-700"
                title={`PDF Document - ${proof.title}`}
                loading="lazy"
                onError={handlePdfError}
              />
            ) : pdfError ? (
              <div className="w-full h-[600px] border border-cyan-700 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-orange-500">
                  <p>Erreur de chargement du document</p>
                  <p className="text-xs mt-2">
                    Le document est peut-être actuellement inaccessible
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="space-y-6">
            <p>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem vel orci finibus lacinia. Aenean condimentum metus at efficitur interdum. Suspendisse potenti. In hac habitasse platea dictumst.'
              }
            </p>

            <div className="font-mono bg-black bg-opacity-50 p-4 border border-cyan-700 text-cyan-400">
              <p>{'COORDONNÉES: 47.2334° N, 38.1233° E'}</p>
              <p>{'DATE: ' + proof?.date || '12.06.2082'}</p>
              <p>{'TÉMOINS: 3'}</p>
            </div>

            <p>
              {
                'Duis consequat orci id sapien fringilla, eu finibus quam sodales. Cras volutpat, justo at fermentum faucibus, arcu sem fermentum ante, ac facilisis lacus dolor nec nunc.'
              }
            </p>

            <div className="border-l-4 border-orange-600 pl-4 italic">
              {
                "Ils ont remplacé sept membres du conseil d'administration. Le projet ECHO est maintenant en phase finale. L'humanité n'est pas prête pour ce qui va suivre."
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
