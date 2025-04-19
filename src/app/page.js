'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EducationSection from './components/EducationSection';

export default function Home() {
  return (
    <>
      {/* SEO */}
      <Head>
        <title>Ahmed | Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Ahmed's portfolio - Full Stack Software Engineer specialized in modern web and backend development."
        />
        <meta
          name="keywords"
          content="Ahmed, Portfolio, Software Engineer, Web Developer, Full Stack, JavaScript, React, Node.js, Next.js"
        />
        <meta name="author" content="Ahmed" />
        <meta property="og:title" content="Ahmed | Software Engineer Portfolio" />
        <meta
          property="og:description"
          content="Discover projects and skills of Ahmed, a full-stack developer with expertise in modern web technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Main Layout */}
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection/>
      <ContactSection />

    </>
  );
}
