'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: '', email: '', message: '' });
        setStatus('success');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-800 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">Contact</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
          Feel free to get in touch with me for collaboration or job opportunities.
        </p>

        <div className="flex justify-center gap-6 mb-10">
          <Link href="mailto:ahmed@example.com" className="text-blue-600 dark:text-blue-400">Email</Link>
          <Link href="https://www.linkedin.com/in/ahmed/" target="_blank" className="text-blue-600 dark:text-blue-400">LinkedIn</Link>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold"
          >
            Send Message
          </button>
          {status === 'success' && (
            <p className="text-green-600">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
