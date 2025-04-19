'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // For Next.js 15+
import { useState } from 'react'; // Import useState for handling mobile menu

export default function Navbar() {
  const pathname = usePathname(); // Get the current pathname to apply active class
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Toggle the menu open/close
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="max-w-7xl mx-auto w-full px-6 py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-tight">Ahmed</h1>

      {/* Hamburger icon for mobile */}
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Modal Menu for Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white w-3/4 p-6 rounded-lg">
            <nav className="flex flex-col space-y-6 text-sm">
              <Link href="/" onClick={closeMenu}>
                <span
                  className={`${
                    pathname === '/' ? 'bg-blue-500 text-white' : 'text-black'
                  } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
                >
                  Home
                </span>
              </Link>
              <Link href="/about" onClick={closeMenu}>
                <span
                  className={`${
                    pathname === '/about' ? 'bg-blue-500 text-white' : 'text-black'
                  } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
                >
                  About
                </span>
              </Link>
              <Link href="/projects" onClick={closeMenu}>
                <span
                  className={`${
                    pathname === '/projects' ? 'bg-blue-500 text-white' : 'text-black'
                  } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
                >
                  Projects
                </span>
              </Link>
              <Link href="/skills" onClick={closeMenu}>
                <span
                  className={`${
                    pathname === '/skills' ? 'bg-blue-500 text-white' : 'text-black'
                  } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
                >
                  Skills
                </span>
              </Link>
              <Link href="/education" onClick={closeMenu}>
                <span
                  className={`${
                    pathname === '/education' ? 'bg-blue-500 text-white' : 'text-black'
                  } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
                >
                  Education
                </span>
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                <span
                  className={`${
                    pathname === '/contact' ? 'bg-blue-500 text-white' : 'text-black'
                  } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
                >
                  Contact
                </span>
              </Link>
            </nav>
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex space-x-6 text-sm md:text-base">
        <Link href="/">
          <span
            className={`${
              pathname === '/' ? 'bg-blue-500 text-white' : 'text-black'
            } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
          >
            Home
          </span>
        </Link>
        <Link href="/about">
          <span
            className={`${
              pathname === '/about' ? 'bg-blue-500 text-white' : 'text-black'
            } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
          >
            About
          </span>
        </Link>
        <Link href="/projects">
          <span
            className={`${
              pathname === '/projects' ? 'bg-blue-500 text-white' : 'text-black'
            } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
          >
            Projects
          </span>
        </Link>
        <Link href="/skills">
          <span
            className={`${
              pathname === '/skills' ? 'bg-blue-500 text-white' : 'text-black'
            } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
          >
            Skills
          </span>
        </Link>
        <Link href="/education">
          <span
            className={`${
              pathname === '/education' ? 'bg-blue-500 text-white' : 'text-black'
            } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
          >
            Education
          </span>
        </Link>
        <Link href="/contact">
          <span
            className={`${
              pathname === '/contact' ? 'bg-blue-500 text-white' : 'text-black'
            } px-2 py-1 rounded transition duration-200 hover:bg-blue-200`}
          >
            Contact
          </span>
        </Link>
      </nav>
    </header>
  );
}
