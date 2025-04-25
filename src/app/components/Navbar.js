'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/education', label: 'Education' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full px-6 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-blue-600"> Nasim Ahamed</h1>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-gray-700"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm md:text-base">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className={`px-3 py-2 rounded-md transition duration-200 cursor-pointer ${
                  pathname === href
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-100'
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 text-lg font-medium">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={closeMenu}>
              <span
                className={`block px-4 py-2 rounded-md transition ${
                  pathname === href
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-800 hover:bg-blue-100'
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
          <button
            className="absolute top-6 right-6 text-gray-700"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </header>
  );
}
