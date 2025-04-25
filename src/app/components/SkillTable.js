'use client';

import { useEffect, useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

export default function SkillTable() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newSkill, setNewSkill] = useState({ name: '', level: 'Beginner' });
  const [editingSkill, setEditingSkill] = useState(null);

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

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleAddSkill = async () => {
    try {
      const res = await fetch('/api/skills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSkill),
      });
      if (res.ok) {
        await fetchSkills();
        setNewSkill({ name: '', level: 'Beginner' });
      }
    } catch (err) {
      console.error('Error adding skill:', err);
    }
  };

  const handleEditSkill = async () => {
    try {
      const res = await fetch(`/api/skills/${editingSkill.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingSkill),
      });
      if (res.ok) {
        await fetchSkills();
        setEditingSkill(null);
      }
    } catch (err) {
      console.error('Error editing skill:', err);
    }
  };

  const handleDeleteSkill = async (id) => {
    try {
      const res = await fetch(`/api/skills/${id}`, { method: 'DELETE' });
      if (res.ok) await fetchSkills();
    } catch (err) {
      console.error('Error deleting skill:', err);
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Manage Skills</h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Skill name"
            value={editingSkill ? editingSkill.name : newSkill.name}
            onChange={(e) =>
              editingSkill
                ? setEditingSkill({ ...editingSkill, name: e.target.value })
                : setNewSkill({ ...newSkill, name: e.target.value })
            }
            className="border p-2 mr-2 rounded"
          />
          <select
            value={editingSkill ? editingSkill.level : newSkill.level}
            onChange={(e) =>
              editingSkill
                ? setEditingSkill({ ...editingSkill, level: e.target.value })
                : setNewSkill({ ...newSkill, level: e.target.value })
            }
            className="border p-2 mr-2 rounded"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
          {editingSkill ? (
            <button
              onClick={handleEditSkill}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Update Skill
            </button>
          ) : (
            <button
              onClick={handleAddSkill}
              className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <FiPlus /> Add Skill
            </button>
          )}
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
              <tr>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Level</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill) => (
                <tr key={skill.id} className="border-t border-gray-200 dark:border-gray-600">
                  <td className="p-3">{skill.name}</td>
                  <td className="p-3">{skill.level}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => setEditingSkill(skill)}
                      className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleDeleteSkill(skill.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
              {skills.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center p-4 text-gray-500">
                    No skills added yet.
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
