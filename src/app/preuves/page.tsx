import Link from 'next/link';
import { proofs } from '@/utils/proofUtils';

export default function PreuvesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-8">PREUVES</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proofs.map((proof) => (
          <div
            key={proof.id}
            className="border border-teal-900 p-6 hover:border-red-600 transition"
          >
            <h2 className="text-2xl font-bold mb-4">Preuve #{proof.id}</h2>
            <p className="mb-4 opacity-70">
              {`Document confidentiel contenant des informations cruciales sur les activités de surveillance du régime.`}
            </p>
            <div className="flex justify-between items-center">
              <div className="text-teal-300 text-sm">{proof.date}</div>
              <Link
                href={`/preuves/${proof.id}`}
                className="text-red-600 hover:text-red-400 transition"
              >
                Déchiffrer
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
