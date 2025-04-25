// components/EducationTable.jsx
'use client'

import { useEffect, useState } from 'react'
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi'

export default function EducationTable() {
  const [educations, setEducations] = useState([])
  const [loading, setLoading] = useState(true)
  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    field: '',
    grade: '',
    startDate: '',
    endDate: '',
    description: '',
  })
  const [editingEducation, setEditingEducation] = useState(null)

  const fetchEducation = async () => {
    try {
      const res = await fetch('/api/education')
      const data = await res.json()
      setEducations(data)
    } catch (err) {
      console.error('Error fetching education:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEducation()
  }, [])

  const handleAdd = async () => {
    try {
      const res = await fetch('/api/education', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEducation),
      })
      if (res.ok) {
        await fetchEducation()
        setNewEducation({ institution: '', degree: '', field: '', grade: '', startDate: '', endDate: '', description: '' })
      }
    } catch (err) {
      console.error('Error adding education:', err)
    }
  }

  const handleUpdate = async () => {
    try {
      const res = await fetch(`/api/education/${editingEducation.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingEducation),
      })
      if (res.ok) {
        await fetchEducation()
        setEditingEducation(null)
      }
    } catch (err) {
      console.error('Error updating education:', err)
    }
  }

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/education/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) await fetchEducation()
    } catch (err) {
      console.error('Error deleting education:', err)
    }
  }

  const current = editingEducation || newEducation

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Education</h2>
      <div className="space-y-2 mb-6">
        <input placeholder="Institution" className="border p-2 rounded w-full" value={current.institution} onChange={(e) => (editingEducation ? setEditingEducation({ ...current, institution: e.target.value }) : setNewEducation({ ...current, institution: e.target.value }))} />
        <input placeholder="Degree" className="border p-2 rounded w-full" value={current.degree} onChange={(e) => (editingEducation ? setEditingEducation({ ...current, degree: e.target.value }) : setNewEducation({ ...current, degree: e.target.value }))} />
        <input placeholder="Field" className="border p-2 rounded w-full" value={current.field} onChange={(e) => (editingEducation ? setEditingEducation({ ...current, field: e.target.value }) : setNewEducation({ ...current, field: e.target.value }))} />
        <input placeholder="Grade" className="border p-2 rounded w-full" value={current.grade || ''} onChange={(e) => (editingEducation ? setEditingEducation({ ...current, grade: e.target.value }) : setNewEducation({ ...current, grade: e.target.value }))} />
        <input type="date" className="border p-2 rounded w-full" value={current.startDate} onChange={(e) => (editingEducation ? setEditingEducation({ ...current, startDate: e.target.value }) : setNewEducation({ ...current, startDate: e.target.value }))} />
        <input type="date" className="border p-2 rounded w-full" value={current.endDate || ''} onChange={(e) => (editingEducation ? setEditingEducation({ ...current, endDate: e.target.value }) : setNewEducation({ ...current, endDate: e.target.value }))} />
        <textarea placeholder="Description" className="border p-2 rounded w-full" value={current.description || ''} onChange={(e) => (editingEducation ? setEditingEducation({ ...current, description: e.target.value }) : setNewEducation({ ...current, description: e.target.value }))}></textarea>
        {editingEducation ? (
          <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
        ) : (
          <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"><FiPlus /> Add</button>
        )}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Institution</th>
              <th className="border px-2 py-1">Degree</th>
              <th className="border px-2 py-1">Field</th>
              <th className="border px-2 py-1">Dates</th>
              <th className="border px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {educations.map((edu) => (
              <tr key={edu.id} className="hover:bg-gray-50">
                <td className="border px-2 py-1">{edu.institution}</td>
                <td className="border px-2 py-1">{edu.degree}</td>
                <td className="border px-2 py-1">{edu.field}</td>
                <td className="border px-2 py-1">{edu.startDate?.slice(0, 10)} - {edu.endDate?.slice(0, 10) || 'Present'}</td>
                <td className="border px-2 py-1 flex gap-2">
                  <button onClick={() => setEditingEducation(edu)} className="text-blue-600"><FiEdit2 /></button>
                  <button onClick={() => handleDelete(edu.id)} className="text-red-600"><FiTrash2 /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}