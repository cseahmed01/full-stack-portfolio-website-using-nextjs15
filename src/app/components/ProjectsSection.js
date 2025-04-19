'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error('Failed to load projects:', err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800 py-16 px-6">
      <h3 className="text-3xl font-semibold mb-4">Projects</h3>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
              <div className="flex gap-4 mt-2">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    Live Site
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
