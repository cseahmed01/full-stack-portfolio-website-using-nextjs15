'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch('/api/skills');
        const data = await res.json();
        setSkills(data);
      } catch (err) {
        console.error('Failed to load skills:', err);
      }
    };
    fetchSkills();
  }, []);

  // Get badge color based on level
  const levelColor = {
    Beginner: 'bg-yellow-100 text-yellow-800',
    Intermediate: 'bg-blue-100 text-blue-800',
    Expert: 'bg-green-100 text-green-800',
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-r from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h3 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col gap-2 items-start">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h4>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${levelColor[skill.level] || 'bg-gray-200 text-gray-700'}`}
              >
                {skill.level}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
