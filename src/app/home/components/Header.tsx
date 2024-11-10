"use client";
// app/home/components/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="p-4 bg-gray-900 backdrop-blur border-t sticky top-0 backdrop-blur border-b z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="text-lg   text-white font-bold">Hotel Booking</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="https://wa.me/1234567890?text=I%20want%20to%20book%20the%20Standard%20Room" className="px-4 py-2 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-transform duration-300 hover:scale-105">
            BOOK NOW
          </Link>
          <Link href="/" className="hover:scale-105  text-white hover:font-semibold transition-transform duration-300">
            Home
          </Link>
          <Link href="/ContactUs" className="hover:scale-105  text-white  hover:font-semibold transition-transform duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none  text-white">
            <svg className="w-6 h-6  text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-10 right-0 bg-white shadow-lg p-4 rounded-lg w-48">
              <Link href="#price" className="  text-white block px-2 py-2 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-transform duration-300 hover:scale-105">
                BOOK NOW
              </Link>
              <Link href="/" className="  block py-2 hover:bg-gray-100 rounded">Home</Link>
              <Link href="/ContactUs" className="   block py-2 hover:bg-gray-100 rounded">Contact</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
