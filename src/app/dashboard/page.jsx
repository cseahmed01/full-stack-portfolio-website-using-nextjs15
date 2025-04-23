'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import jwt from 'jsonwebtoken'

export default function DashboardHome() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return router.push('/login')

    try {
      const decoded = jwt.decode(token)
      setUser(decoded)
    } catch (err) {
      localStorage.removeItem('token')
      router.push('/login')
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>

      {user ? (
        <div className="bg-white shadow rounded p-6">
          <p className="text-lg">Welcome back, <strong>{user.email}</strong> 👋</p>
          <p className="text-gray-600 mt-2">Here’s a quick look at your admin panel.</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
