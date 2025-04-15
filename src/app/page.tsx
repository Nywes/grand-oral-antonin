import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-teal-400">
      {/* Navigation */}
      <nav className="flex justify-center p-4 border-b border-teal-900">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="hover:text-teal-300 transition">
              ACCUEIL
            </Link>
          </li>
          <li>
            <Link href="/journal" className="hover:text-teal-300 transition">
              JOURNAL
            </Link>
          </li>
          <li>
            <Link href="/preuves" className="hover:text-teal-300 transition">
              PREUVES
            </Link>
          </li>
          <li>
            <Link href="/a-propos" className="hover:text-teal-300 transition">
              À PROPOS
            </Link>
          </li>
          <li>
            <Link href="/transmission" className="hover:text-teal-300 transition">
              TRANSMISSION
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 relative">
        {/* Background static effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-xs"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5,
              }}
            >
              {Math.random() > 0.5 ? '0' : '1'}
            </div>
          ))}
        </div>

        {/* Main title - distorted text grid */}
        <div className="text-center mb-16 font-mono">
          <div className="text-5xl mb-2 tracking-widest glitch-text">X EZURV</div>
          <div className="text-5xl mb-2 tracking-widest glitch-text">MNUOXV</div>
          <div className="text-5xl mb-2 tracking-widest glitch-text">FBFFJXLIC</div>
        </div>

        {/* Call to action button */}
        <Link
          href="/journal"
          className="border-2 border-red-600 text-red-600 px-8 py-3 hover:bg-red-600 hover:text-black transition duration-300 mb-16 text-xl font-bold"
        >
          LIRE LE JOURNAL
        </Link>

        {/* Footer message */}
        <div className="text-center">
          <div className="text-4xl text-red-600 font-bold mb-2">ULTIME MESSAGE</div>
          <div className="text-4xl text-red-600 font-bold mb-8">DE RÉSISTANCE</div>
          <div className="text-2xl text-teal-400">2084</div>
        </div>
      </main>
    </div>
  );
}
