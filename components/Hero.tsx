'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center text-white"
      style={{ backgroundImage: "url('/images/bg brandnest.png')" }} // ✅ Make sure the path is correct and the file exists
    >
      {/* Overlay (optional for better text readability) */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Welcome to BrandNest<br />Solutions – Your<br />Creative Digital Partner.
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            At BrandNest Solution, we specialize in logo design, branding, graphic design, website design, and digital marketing services. Our mission is to help businesses like yours stand out in a crowded marketplace by creating visually appealing and impactful brand identities.
          </p>
          <Link href="/contact">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Right side empty or use if needed */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default Hero;
