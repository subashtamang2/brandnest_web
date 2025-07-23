import React from 'react';
import ProjectGallery from '@/components/ProjectGallery';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-center pt-10">Our Projects</h1>
      <p className="text-center text-gray-500 mt-2 mb-10">Explore our creative work below</p>

      <ProjectGallery />
    </main>
  );
}
