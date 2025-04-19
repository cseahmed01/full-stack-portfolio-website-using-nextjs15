'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center bg-gradient-to-b from-blue-50 dark:from-gray-900 via-white dark:via-gray-950 to-transparent">
      <Image
        src="/profile.jpg"
        alt="Ahmed's profile"
        width={120}
        height={120}
        className="rounded-full border-4 border-blue-500 shadow-lg mb-6"
      />
      <h2 className="text-4xl font-bold mb-2">Hi, I'm Ahmed</h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 max-w-lg">
        A passionate <strong>Full Stack Software Engineer</strong> building modern, scalable web applications.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
          View Projects
        </Link>
        <Link href="/resume.pdf" className="border border-gray-400 dark:border-gray-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Download CV
        </Link>
      </div>
    </section>
  );
}
