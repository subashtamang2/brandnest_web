'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Service', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="BrandNest Logo" className="h-10 w-auto" />
            <span className="font-bold text-lg text-gray-900">
              <span className="text-pink-600">Brand</span>Nest
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-pink-600 text-sm font-medium ${pathname === link.href ? 'text-pink-600' : 'text-gray-800'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4 text-gray-800 text-lg">
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl text-gray-700">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block text-base font-medium ${pathname === link.href ? 'text-pink-600' : 'text-gray-800'
                }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex mt-4 space-x-4 text-gray-700 text-xl">
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
