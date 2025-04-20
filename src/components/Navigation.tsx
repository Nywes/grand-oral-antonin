'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  // Fonction utilitaire pour générer les classes CSS des liens
  const getLinkClassName = (path: string) => {
    const baseClasses = 'transition-colors';
    const activeClasses = 'text-blue-700 font-bold';
    const inactiveClasses = 'text-cyan-400 hover:text-cyan-300';

    return `${baseClasses} ${pathname === path ? activeClasses : inactiveClasses}`;
  };

  // Données de navigation
  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'A_propos' },
    { path: '/journal', label: 'Journal' },
    { path: '/preuves', label: 'Preuves' },
    { path: '/transmission', label: 'Transmission' },
  ];

  return (
    <nav className="flex justify-center p-4 sticky top-0">
      <div className="flex flex-col space-y-4 font-mono text-lg text-end">
        {navLinks.map((link) => (
          <Link key={link.path} href={link.path} className={getLinkClassName(link.path)}>
            &gt;_{link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
