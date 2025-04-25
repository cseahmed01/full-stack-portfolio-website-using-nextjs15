'use client';

import { useEffect, useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

export default function ExperienceTable() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newExp, setNewExp] = useState({
    company: '',
    role: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
  });
  const [editingExp, setEditingExp] = useState(null);

  const fetchExperiences = async () => {
    try {
      const res = await fetch('/api/experiences');
      const data = await res.json();
      setExperiences(data);
    } catch (err) {
      console.error('Failed to load experiences:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  const handleAddExperience = async () => {
    try {
      const res = await fetch('/api/experiences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newExp, startDate: new Date(newExp.startDate), endDate: newExp.endDate ? new Date(newExp.endDate) : null }),
      });
      if (res.ok) {
        await fetchExperiences();
        setNewExp({
          company: '',
          role: '',
          description: '',
          startDate: '',
          endDate: '',
          location: '',
        });
      }
    } catch (err) {
      console.error('Error adding experience:', err);
    }
  };

  const handleEditExperience = async () => {
    try {
      const res = await fetch(`/api/experiences/${editingExp.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...editingExp, startDate: new Date(editingExp.startDate), endDate: editingExp.endDate ? new Date(editingExp.endDate) : null }),
      });
      if (res.ok) {
        await fetchExperiences();
        setEditingExp(null);
      }
    } catch (err) {
      console.error('Error updating experience:', err);
    }
  };

  const handleDeleteExperience = async (id) => {
    try {
      const res = await fetch(`/api/experiences/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) await fetchExperiences();
    } catch (err) {
      console.error('Error deleting experience:', err);
    }
  };

  const handleInputChange = (field, value) => {
    if (editingExp) {
      setEditingExp({ ...editingExp, [field]: value });
    } else {
      setNewExp({ ...newExp, [field]: value });
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Manage Experience</h2>

        <div className="grid gap-4 mb-6 md:grid-cols-2">
          <input
            type="text"
            placeholder="Company"
            value={editingExp ? editingExp.company : newExp.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Role"
            value={editingExp ? editingExp.role : newExp.role}
            onChange={(e) => handleInputChange('role', e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={editingExp ? editingExp.location : newExp.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="date"
            placeholder="Start Date"
            value={editingExp ? editingExp.startDate?.slice(0, 10) : newExp.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="date"
            placeholder="End Date"
            value={editingExp ? editingExp.endDate?.slice(0, 10) : newExp.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Description"
            value={editingExp ? editingExp.description : newExp.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="border p-2 rounded col-span-2"
          />

          {editingExp ? (
            <button
              onClick={handleEditExperience}
              className="bg-blue-600 text-white px-4 py-2 rounded col-span-2"
            >
              Update Experience
            </button>
          ) : (
            <button
              onClick={handleAddExperience}
              className="bg-green-600 text-white px-4 py-2 rounded flex items-center justify-center gap-2 col-span-2"
            >
              <FiPlus /> Add Experience
            </button>
          )}
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
              <tr>
                <th className="text-left p-3">Company</th>
                <th className="text-left p-3">Role</th>
                <th className="text-left p-3">Period</th>
                <th className="text-left p-3">Location</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {experiences.map((exp) => (
                <tr key={exp.id} className="border-t border-gray-200 dark:border-gray-600">
                  <td className="p-3">{exp.company}</td>
                  <td className="p-3">{exp.role}</td>
                  <td className="p-3">
                    {new Date(exp.startDate).toLocaleDateString()} -{' '}
                    {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : 'Present'}
                  </td>
                  <td className="p-3">{exp.location}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => setEditingExp({ ...exp })}
                      className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleDeleteExperience(exp.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
              {experiences.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center p-4 text-gray-500">
                    No experience added yet.
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
