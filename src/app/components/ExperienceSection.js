'use client';

import { useEffect, useState } from 'react';

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch('/api/experiences');
        const data = await res.json();
        setExperiences(data);
      } catch (err) {
        console.error('Failed to fetch experiences:', err);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <section id="experience" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <h3 className="text-3xl font-semibold mb-8 text-center">Experience</h3>
      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-xl font-bold text-blue-600">{exp.role}</h4>
              <span className="text-sm text-gray-500">
                {new Date(exp.startDate).toLocaleDateString()} -{' '}
                {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : 'Present'}
              </span>
            </div>
            <p className="text-md font-semibold text-gray-700 dark:text-gray-300">{exp.company}</p>
            {exp.location && <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>}
            <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
