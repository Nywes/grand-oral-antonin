import Link from 'next/link';
import { proofs } from '@/utils/proofUtils';
import Navigation from '@/components/Navigation';

export default function PreuvesPage() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 p-6 h-screen sticky top-0">
        <Navigation />
      </div>

      <div className="w-3/4 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofs.map((proof) => (
            <div
              key={proof.id}
              className="flex flex-col justify-between border border-teal-900 p-6 hover:border-red-600 transition"
            >
              <div className="flex flex-col justify-between">
                <h2 className="text-2xl font-bold mb-4">{'Preuve #' + proof.id}</h2>
                <p className="mb-4 opacity-70">{proof.title}</p>
              </div>
              <div className="flex flex-wrap justify-between items-center gap-2">
                <div className="text-teal-300 text-sm">{proof.date}</div>
                <Link
                  href={`/preuves/${proof.id}`}
                  className="text-red-600 hover:text-red-400 transition"
                >
                  <p>{`Déchiffrer`}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
