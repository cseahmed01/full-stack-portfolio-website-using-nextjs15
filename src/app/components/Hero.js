'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiDownload, FiEye } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center px-4 py-20 md:py-28 text-center bg-gradient-to-br from-[#eef2ff] via-white to-[#f0fdf4] dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 opacity-30 blur-[120px] rounded-full mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 opacity-30 blur-[120px] rounded-full mix-blend-multiply pointer-events-none"></div>
      <div className="absolute -top-20 right-1/3 w-80 h-80 bg-pink-300 opacity-20 blur-[100px] rounded-full mix-blend-multiply pointer-events-none"></div>

      {/* Profile image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <Image
            src="/images/profile.jpg"
            alt="Ahmed's profile"
            width={140}
            height={140}
            className="rounded-full border-4 border-white dark:border-gray-800 shadow-xl mb-6 relative z-10"
          />
          <div className="absolute inset-0 m-auto w-36 h-36 rounded-full bg-blue-500 dark:bg-blue-600 opacity-10 blur-xl -z-10"></div>
        </div>
      </motion.div>

      {/* Name & title */}
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ahmed</span>
      </motion.h1>

      <motion.p 
        className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        A passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Engineer</span> crafting modern, performant web applications with cutting-edge technologies.
      </motion.p>

      {/* Buttons */}
      <motion.div 
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Link 
          href="/projects" 
          className="group relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
        >
          <FiEye className="transition-transform group-hover:scale-110" />
          <span>View Projects</span>
          <span className="absolute inset-0 rounded-full border-2 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
        
        <Link 
          href="https://drive.google.com/uc?export=download&id=1FDE25it0GJ3upSolOuy37NhcESwOIE_Z"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:shadow-sm"
        >
          <FiDownload className="transition-transform group-hover:scale-110" />
          <span>Download CV</span>
          <span className="absolute inset-0 rounded-full border-2 border-gray-400 opacity-0 group-hover:opacity-30 dark:group-hover:opacity-20 transition-opacity duration-300"></span>
        </Link>
      </motion.div>
    </section>
  );
}
