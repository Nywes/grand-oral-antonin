'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center p-4 border-b border-teal-900">
      <ul className="flex space-x-8">
        <li>
          <Link
            href="/"
            className={`transition ${pathname === '/' ? 'text-blue-400' : 'hover:text-teal-300'}`}
          >
            ACCUEIL
          </Link>
        </li>
        <li>
          <Link
            href="/a-propos"
            className={`transition ${
              pathname === '/a-propos' ? 'text-blue-400' : 'hover:text-teal-300'
            }`}
          >
            À PROPOS
          </Link>
        </li>
        <li>
          <Link
            href="/journal"
            className={`transition ${
              pathname === '/journal' ? 'text-blue-400' : 'hover:text-teal-300'
            }`}
          >
            JOURNAL
          </Link>
        </li>
        <li>
          <Link
            href="/preuves"
            className={`transition ${
              pathname === '/preuves' ? 'text-blue-400' : 'hover:text-teal-300'
            }`}
          >
            PREUVES
          </Link>
        </li>
        <li>
          <Link
            href="/transmission"
            className={`transition ${
              pathname === '/transmission' ? 'text-blue-400' : 'hover:text-teal-300'
            }`}
          >
            TRANSMISSION
          </Link>
        </li>
      </ul>
    </nav>
  );
}
