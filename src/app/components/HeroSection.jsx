'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Lottie from 'lottie-react';
import animationData from '/public/animations/hero-animation.json';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-9 place-self-center text-center sm:text-left justify-self-start '
        >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-secondary-600'>
              Hello, I&apos;m{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={['Theertha M K', 1000, 'Full stack Developer', 1000]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div>
            <Link
              href='/#contact'
              className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-secondary-500 hover:bg-slate-200 text-white'
            >
              Hire Me
            </Link>
            <Link
              href='/'
              className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'
            >
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-3 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full lg:w-[600px] lg:h-[600px]'>
            <Lottie
              animationData={animationData}
              loop={true}
              className='w-full h-full'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
