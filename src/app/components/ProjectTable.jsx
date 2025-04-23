'use client'

import { useEffect, useState } from 'react'

export default function ProjectTable() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data) // Use data directly
        } else {
          setProjects([])
        }
      })
      .catch(() => setProjects([]))
  }, [])
  

  return (
    <div className="overflow-x-auto bg-white shadow rounded p-4">
      <h2 className="text-2xl font-bold mb-4">Project List</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border">Title</th>
              <th className="px-4 py-2 text-left border">Description</th>
              <th className="px-4 py-2 text-left border">Tech Stack</th>
              <th className="px-4 py-2 text-left border">GitHub</th>
              <th className="px-4 py-2 text-left border">Live</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{project.title}</td>
                <td className="px-4 py-2 border">{project.description}</td>
                <td className="px-4 py-2 border">{project.techStack}</td>
                <td className="px-4 py-2 border">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      GitHub
                    </a>
                  ) : (
                    '-'
                  )}
                </td>
                <td className="px-4 py-2 border">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 underline"
                    >
                      Live
                    </a>
                  ) : (
                    '-'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
