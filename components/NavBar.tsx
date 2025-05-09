'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl md:text-2xl font-bold text-primary">
              EA Exam Prep
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/dashboard" className="text-gray-600 hover:text-primary transition-colors px-3 py-2">
              Dashboard
            </Link>
            <Link href="/practice" className="text-gray-600 hover:text-primary transition-colors px-3 py-2">
              Practice
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-primary transition-colors px-3 py-2">
              Resources
            </Link>
            <Link href="/simulated-exam" className="text-gray-600 hover:text-primary transition-colors px-3 py-2">
              Exam
            </Link>
            <Link href="/daily-challenge" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Today's Challenge
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-primary focus:outline-none focus:text-primary"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link 
            href="/dashboard" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link 
            href="/practice" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Practice
          </Link>
          <Link 
            href="/resources" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </Link>
          <Link 
            href="/simulated-exam" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Simulated Exam
          </Link>
          <Link 
            href="/daily-challenge" 
            className="block px-3 py-3 rounded-md text-base font-medium text-white bg-primary"
            onClick={() => setIsOpen(false)}
          >
            Today's Challenge
          </Link>
        </div>
      </div>
    </nav>
  );
} 