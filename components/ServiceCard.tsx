"use client";
// components/ServiceCard.tsx
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-sm w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-contain mb-4 mx-auto"
        onError={(e) => (e.currentTarget.src = '/images/placeholder.png')}
      />
      <h3 className="text-pink-600 font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
