'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="max-w-7xl mx-auto w-full px-6 py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-tight">Ahmed</h1>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center justify-center p-2 text-gray-500"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
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

      {/* Mobile Modal Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white w-3/4 p-6 rounded-lg relative">
            <nav className="flex flex-col space-y-6 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/skills', label: 'Skills' },
                { href: '/experiences', label: 'Experience' },
                { href: '/education', label: 'Education' },
                { href: '/contact', label: 'Contact' }
              ].map(({ href, label }) => (
                <Link key={href} href={href} onClick={closeMenu}>
                  <span
                    className={`${
                      pathname === href ? 'bg-blue-500 text-white' : 'text-black'
                    } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </nav>
            <button className="absolute top-4 right-4 text-gray-600" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm md:text-base">
        {[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/projects', label: 'Projects' },
          { href: '/skills', label: 'Skills' },
          { href: '/experiences', label: 'Experiences' },
          { href: '/education', label: 'Education' },
          { href: '/contact', label: 'Contact' }
        ].map(({ href, label }) => (
          <Link key={href} href={href}>
            <span
              className={`${
                pathname === href ? 'bg-blue-500 text-white' : 'text-black'
              } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
            >
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
