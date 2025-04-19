'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Ahmed Portfolio",
//   description: "Full Stack Software Engineer Portfolio",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Add ProgressBar component to show the progress bar */}
        <ProgressBar
          height="4px" // Height of the progress bar
          color="#fffd00" // Progress bar color (yellow in this case)
          options={{ showSpinner: false }} // Disable spinner
          shallowRouting // Enable shallow routing for navigation
          delay={200} // Delay before showing progress bar
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
