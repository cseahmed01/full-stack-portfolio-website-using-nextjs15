'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function EducationSection() {
  const [educationList, setEducationList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEducation() {
      try {
        const res = await fetch('/api/education');
        const data = await res.json();
        setEducationList(data);
      } catch (err) {
        console.error('Failed to fetch education:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchEducation();
  }, []);

  return (
    <section id="education" className="bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50 border-solid"></div>
          </div>
        ) : (
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/50 to-blue-500/20 dark:from-blue-400/20 dark:via-blue-400/50 dark:to-blue-400/20"></div>
            
            <div className="space-y-8 ml-12">
              {educationList.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500 group-hover:border-blue-600">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            <FiBook size={20} />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {edu.degree} in {edu.field}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <FiAward className="text-blue-500" size={16} />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        <FiCalendar size={14} />
                        <span>
                          {new Date(edu.startDate).getFullYear()} – {new Date(edu.endDate).getFullYear()}
                        </span>
                      </div>
                    </div>

                    {edu.location && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4 text-sm">
                        <FiMapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                        Grade: {edu.grade}
                      </span>
                    </div>

                    {edu.description && (
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}