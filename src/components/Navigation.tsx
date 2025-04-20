'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center p-4 sticky top-0">
      <div className="flex flex-col space-y-4 font-mono text-lg text-end">
        <Link
          href="/"
          className={`text-cyan-400 hover:text-cyan-300 transition-colors ${
            pathname === '/' ? 'text-cyan-300' : ''
          }`}
        >
          &gt;_Accueil
        </Link>
        <Link
          href="/a-propos"
          className={`text-cyan-400 hover:text-cyan-300 transition-colors ${
            pathname === '/a-propos' ? 'text-cyan-300' : ''
          }`}
        >
          &gt;_A_propos
        </Link>
        <Link
          href="/journal"
          className={`text-cyan-400 hover:text-cyan-300 transition-colors ${
            pathname === '/journal' ? 'text-cyan-300' : ''
          }`}
        >
          &gt;_Journal
        </Link>
        <Link
          href="/preuves"
          className={`text-cyan-400 hover:text-cyan-300 transition-colors ${
            pathname === '/preuves' ? 'text-cyan-300' : ''
          }`}
        >
          &gt;_Preuves
        </Link>
        <Link
          href="/transmission"
          className={`text-cyan-400 hover:text-cyan-300 transition-colors ${
            pathname === '/transmission' ? 'text-cyan-300' : ''
          }`}
        >
          &gt;_Transmission
        </Link>
      </div>
    </nav>
  );
}
