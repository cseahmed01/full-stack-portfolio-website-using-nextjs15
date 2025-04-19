'use client';

export default function Footer() {
  return (
    <footer className="border-t mt-10 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Ahmed. All rights reserved.
    </footer>
  );
}
