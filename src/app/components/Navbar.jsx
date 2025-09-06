'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Contact', path: '#contact' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed mx-auto top-0 left-0 right-0 z-10 transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link
          href='/'
          className='text-2xl md:text-2xl bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent font-semibold'
        >
          Theertha M K
        </Link>

        {/* Mobile menu button */}
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>

        {/* Desktop menu */}
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className='text-lg font-medium bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent hover:text-white'
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
