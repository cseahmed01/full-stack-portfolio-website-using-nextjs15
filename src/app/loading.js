'use client'
// src/app/loading.js
import React, { useEffect, useState } from 'react';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay of 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      {isLoading ? (
        <h1>Loading...</h1> // Show loading message
      ) : (
        <h1>Content Loaded!</h1> // Show actual content after loading
      )}
    </div>
  );
}
