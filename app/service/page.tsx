"use client";// pages/services.tsx
import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from '@/components/ServiceCard';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Logo & Branding',
    description: 'Your logo is the face of your brand – make it unforgettable with our creative branding solutions.',
    image: '/images/logo-branding.png',
  },
  {
    title: 'Web Development',
    description: 'Your website is your digital storefront – we build fast, modern, and responsive web experiences.',
    image: '/images/web-development.png',
  },
  {
    title: 'Graphic Design',
    description: 'From business cards to social media graphics, we design visually stunning assets for all needs.',
    image: '/images/graphic-design.png',
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your online presence and drive results with our data-driven digital marketing strategies.',
    image: '/images/digital-marketing.png',
  },
];

const ServicesPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current?.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-purple-600 text-white px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">Our Services</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-200">
          Empower your brand with our expert services! From creative logo & branding to cutting-edge web development,
          stunning graphic design, and results-driven digital marketing – we bring your vision to life.
        </p>
      </div>

      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 justify-center items-stretch"
        ref={containerRef}
      >
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
