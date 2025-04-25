"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DashboardLayout({ children }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-6">My Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className={`block p-2 rounded hover:bg-gray-700 ${
                pathname === '/dashboard' ? 'bg-gray-700' : ''
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/contacts"
              className={`block p-2 rounded hover:bg-gray-700 ${
                pathname === '/dashboard/contacts' ? 'bg-gray-700' : ''
              }`}
            >
              Contact Messages
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/profile"
              className={`block p-2 rounded hover:bg-gray-700 ${
                pathname === '/dashboard/profile' ? 'bg-gray-700' : ''
              }`}
            >
              Profile
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/projects"
              className={`block p-2 rounded hover:bg-gray-700 ${
                pathname === '/dashboard/projects' ? 'bg-gray-700' : ''
              }`}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/skills"
              className={`block p-2 rounded hover:bg-gray-700 ${
                pathname === '/dashboard/skills' ? 'bg-gray-700' : ''
              }`}
            >
              Skills
            </Link>
          </li>


          <li>
            <Link
              href="/dashboard/experience"
              className={`block p-2 rounded hover:bg-gray-700 ${
                pathname === '/dashboard/experience' ? 'bg-gray-700' : ''
              }`}
            >
              Experinec
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/education"
              className={`block p-2 rounded hover:bg-gray-700 ${
                pathname === '/dashboard/education' ? 'bg-gray-700' : ''
              }`}
            >
              Education
            </Link>
          </li>

        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">
        {children}
      </main>
    </div>
  )
}
