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
              Backend-focused developer & deployment specialist
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">Backend Developer</span> with strong experience in PHP OOP, MySQL, and Linux server environments. I have a proven track record of building robust server-side applications and deploying them reliably on production systems.
              </p>

              <p>
                I bring a unique mix of <span className="font-semibold">technical depth and project leadership</span>. From designing APIs and managing databases to configuring CI/CD pipelines and handling client communications — I ensure smooth development and deployment cycles.
              </p>

              <p>
                I'm perceived as versatile, unconventional, and committed. I'm always seeking new and interesting programming challenges where I can apply my skills, work collaboratively, and deliver impactful solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <FiCode className="text-xl text-blue-500" />
                <span className="font-medium text-gray-800 dark:text-gray-200">Backend</span>
              </div>
              <div className="flex items-center gap-3">
                <FiServer className="text-xl text-blue-500" />
                <span className="font-medium text-gray-800 dark:text-gray-200">Server Deployment</span>
              </div>
              <div className="flex items-center gap-3">
                <FiCpu className="text-xl text-blue-500" />
                <span className="font-medium text-gray-800 dark:text-gray-200">Database</span>
              </div>
              <div className="flex items-center gap-3">
                <FiTrendingUp className="text-xl text-blue-500" />
                <span className="font-medium text-gray-800 dark:text-gray-200">Project Management</span>
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
                src="/images/developer-working.jpg" 
                alt="Developer working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-xl shadow-lg border-4 border-white dark:border-gray-900 overflow-hidden">
              <img 
                src="/images/coding-screen.jpg" 
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
