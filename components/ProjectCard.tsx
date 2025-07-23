import React from 'react';

export default function ProjectCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:scale-105 duration-300">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4 text-center font-semibold text-gray-800">{title}</div>
    </div>
  );
}
