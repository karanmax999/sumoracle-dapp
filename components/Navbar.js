'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Trade', href: '/trade' },
    { label: 'Oracle', href: '/oracle' },
    { label: 'DID', href: '/did' },
    { label: 'Governance', href: '/governance' },
  ];

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-purple-400">SumOracle</div>
      <div className="space-x-6">
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`hover:text-purple-300 ${
              pathname === href ? 'text-purple-400 font-semibold' : 'text-gray-300'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <ConnectButton showBalance={false} />
    </nav>
  );
}
