'use client';

import { useEffect, useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

export default function ProjectTable() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    techStack: '',
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
  });
  const [editingProject, setEditingProject] = useState(null);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      if (Array.isArray(data)) setProjects(data);
      else setProjects([]);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAddProject = async () => {
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });
      if (res.ok) {
        await fetchProjects();
        setNewProject({
          title: '',
          description: '',
          techStack: '',
          githubUrl: '',
          liveUrl: '',
          imageUrl: '',
        });
      }
    } catch (err) {
      console.error('Error adding project:', err);
    }
  };

  const handleEditProject = async () => {
    try {
      const res = await fetch(`/api/projects/${editingProject.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingProject),
      });
      if (res.ok) {
        await fetchProjects();
        setEditingProject(null);
      }
    } catch (err) {
      console.error('Error updating project:', err);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) await fetchProjects();
    } catch (err) {
      console.error('Error deleting project:', err);
    }
  };

  const handleInputChange = (field, value) => {
    if (editingProject) {
      setEditingProject({ ...editingProject, [field]: value });
    } else {
      setNewProject({ ...newProject, [field]: value });
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Manage Projects</h2>

        <div className="grid gap-4 mb-6 md:grid-cols-2">
          <input
            type="text"
            placeholder="Title"
            value={editingProject ? editingProject.title : newProject.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Tech Stack"
            value={editingProject ? editingProject.techStack : newProject.techStack}
            onChange={(e) => handleInputChange('techStack', e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="GitHub URL"
            value={editingProject ? editingProject.githubUrl : newProject.githubUrl}
            onChange={(e) => handleInputChange('githubUrl', e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Live URL"
            value={editingProject ? editingProject.liveUrl : newProject.liveUrl}
            onChange={(e) => handleInputChange('liveUrl', e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={editingProject ? editingProject.imageUrl : newProject.imageUrl}
            onChange={(e) => handleInputChange('imageUrl', e.target.value)}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Description"
            value={editingProject ? editingProject.description : newProject.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="border p-2 rounded col-span-2"
          />
          {editingProject ? (
            <button
              onClick={handleEditProject}
              className="bg-blue-600 text-white px-4 py-2 rounded col-span-2"
            >
              Update Project
            </button>
          ) : (
            <button
              onClick={handleAddProject}
              className="bg-green-600 text-white px-4 py-2 rounded flex items-center justify-center gap-2 col-span-2"
            >
              <FiPlus /> Add Project
            </button>
          )}
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full table-auto border border-gray-200 bg-white rounded shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Tech Stack</th>
                <th className="px-4 py-2 border">GitHub</th>
                <th className="px-4 py-2 border">Live</th>
                <th className="px-4 py-2 border">Actions</th>
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
                  <td className="px-4 py-2 border flex gap-2">
                    <button
                      onClick={() => setEditingProject({ ...project })}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-4 text-gray-500">
                    No projects added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
