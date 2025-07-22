"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Logo & Branding" | "Website Design" | "Graphic Design" | "Marketing";

interface Project {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
}

const categories: Category[] = ["All", "Logo & Branding", "Website Design", "Graphic Design", "Marketing"];

const projects: Project[] = [
  { id: 1, title: "Shanvi Engineering", category: "Logo & Branding", imageUrl: "/images/abu.jpg" },
  { id: 2, title: "Somaya Technologies", category: "Logo & Branding", imageUrl: "/images/chiya.jpg" },
  { id: 3, title: "Zyotis Guru", category: "Logo & Branding", imageUrl: "/images/denim.jpg" },
  { id: 4, title: "Zyotis Guru", category: "Logo & Branding", imageUrl: "/images/goley.jpg" }, { id: 3, title: "Zyotis Guru", category: "Logo & Branding", imageUrl: "/images/krishna.jpg" },
  { id: 5, title: "NextSoft Website", category: "Website Design", imageUrl: "/images/branding1.png" },
  { id: 6, title: "NextSoft Website", category: "Website Design", imageUrl: "/images/branding2.png" },
  { id: 7, title: "NextSoft Website", category: "Website Design", imageUrl: "/images/branding3.png" },
  { id: 8, title: "NextSoft Website", category: "Website Design", imageUrl: "/images/branding4.png" },
  { id: 9, title: "NextSoft Website", category: "Website Design", imageUrl: "/images/branding5.png" },
  { id: 10, title: "NextSoft Website", category: "Website Design", imageUrl: "/images/branding6.png" },
  { id: 11, title: "Creative Flyer", category: "Graphic Design", imageUrl: "/images/flyer.png" },
  { id: , title: "Social Campaign", category: "Marketing", imageUrl: "/images/social.png" },
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-4"
      >
        Our Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-gray-600 mb-10"
      >
        Explore our creative and technical projects across various domains.
      </motion.p>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
              }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
