'use client'

import { useEffect, useState } from 'react'

export default function ContactList() {
  const [messages, setMessages] = useState([]) // ✅ Always start as an array

  useEffect(() => {
    fetch('/api/contact')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setMessages(data.data)
        } else {
          console.error('Invalid data format:', data)
          setMessages([]) // Fallback if not an array
        }
      })
      .catch((err) => {
        console.error('Fetch error:', err)
        setMessages([])
      })
  }, [])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li key={msg.id} className="bg-white p-4 shadow rounded">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p><small>{new Date(msg.createdAt).toLocaleString()}</small></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
