'use client';

import React, { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Web Design', 'Graphic Design'];
const graphicSubcategories = [
  'All',
  'ID Cards',
  'Letterheads',
  'Brochures',
  'Flyers',
  'Social Media Design',
];

const ITEMS_PER_PAGE = 6; // Show 6 items per "page"

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredProjects = projects.filter((proj) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Graphic Design') {
      if (activeSubcategory === 'All') return proj.category === 'Graphic Design';
      return proj.category === 'Graphic Design' && proj.subcategory === activeSubcategory;
    }
    return proj.category === activeCategory;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const resetPagination = () => {
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setActiveSubcategory('All');
              resetPagination();
            }}
            className={`px-4 py-2 rounded-full ${activeCategory === cat
              ? 'bg-blue-600 text-white'
              : 'bg-blue-100 text-blue-700'
              } transition duration-200`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Subcategory Filter */}
      {activeCategory === 'Graphic Design' && (
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {graphicSubcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => {
                setActiveSubcategory(sub);
                resetPagination();
              }}
              className={`px-3 py-1 rounded-full text-sm ${activeSubcategory === sub
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-700'
                } transition duration-200`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard title={project.title} image={project.image} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show More Button */}
      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
}
