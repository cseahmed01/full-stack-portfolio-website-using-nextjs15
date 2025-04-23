'use client';

import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCpu, FiTrendingUp } from 'react-icons/fi';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              I build digital experiences that matter
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Developer</span> with 5+ years of experience crafting modern web applications. My journey in tech began with a curiosity about how things work, which evolved into a passion for building solutions that solve real problems.
              </p>
              
              <p>
                I specialize in the <span className="font-semibold">JavaScript ecosystem</span>, with expertise in React, Node.js, and modern frameworks like Next.js. What excites me most is creating seamless, performant interfaces backed by robust, scalable architectures.
              </p>
              
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, exploring new technologies, or mentoring junior developers. I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <FiCode className="text-xl text-blue-500" />
                <span className="font-medium text-gray-800 dark:text-gray-200">Frontend</span>
              </div>
              <div className="flex items-center gap-3">
                <FiServer className="text-xl text-blue-500" />
                <span className="font-medium text-gray-800 dark:text-gray-200">Backend</span>
              </div>
              <div className="flex items-center gap-3">
                <FiCpu className="text-xl text-blue-500" />
                <span className="font-medium text-gray-800 dark:text-gray-200">DevOps</span>
              </div>
              <div className="flex items-center gap-3">
                <FiTrendingUp className="text-xl text-blue-500" />
                <span className="font-medium text-gray-800 dark:text-gray-200">Performance</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-1 aspect-h-1 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/developer-working.jpg" 
                alt="Developer working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-xl shadow-lg border-4 border-white dark:border-gray-900 overflow-hidden">
              <img 
                src="/coding-screen.jpg" 
                alt="Code screen" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}