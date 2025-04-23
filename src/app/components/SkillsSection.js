'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiAward, FiCode } from 'react-icons/fi';

export default function SkillsSection() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch('/api/skills');
        const data = await res.json();
        setSkills(data);
      } catch (err) {
        console.error('Failed to load skills:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  // Get badge color based on level
  const levelColor = {
    Beginner: {
      bg: 'bg-yellow-100/80 dark:bg-yellow-900/30',
      text: 'text-yellow-800 dark:text-yellow-200',
      icon: <FiStar className="text-yellow-500" />
    },
    Intermediate: {
      bg: 'bg-blue-100/80 dark:bg-blue-900/30',
      text: 'text-blue-800 dark:text-blue-200',
      icon: <FiStar className="text-blue-500" />
    },
    Expert: {
      bg: 'bg-green-100/80 dark:bg-green-900/30',
      text: 'text-green-800 dark:text-green-200',
      icon: <FiAward className="text-green-500" />
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I've worked with and my proficiency level in each
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50 border-solid"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="h-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    {skill.icon && (
                      <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                        {skill.icon}
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  
                  <div className="mt-auto">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${levelColor[skill.level]?.bg || 'bg-gray-200 dark:bg-gray-700'} ${levelColor[skill.level]?.text || 'text-gray-800 dark:text-gray-200'}`}>
                      {levelColor[skill.level]?.icon || <FiCode />}
                      <span>{skill.level}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}