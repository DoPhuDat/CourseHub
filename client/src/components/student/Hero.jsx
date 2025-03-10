import React from 'react';
import { assets } from '../../assets/img/assets';
import SearchBar from './SearchBar';


const Hero = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='max-w-3xl mx-auto text-gray-800 relative md:text-[46px] text-[28px] '>
        Empower your future with the courses designed to <span className='text-blue-600'>fit your choice.</span><img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-5 right-0' />
      </h1>
      <p className='md:block hidden text-gray-500 max-w-xl mx-auto'>We bring together world-class instructors, interactive content, and a supportive
      community to help you achieve your personal and professional goals.</p>
      <p className='md:hidden text-gray-500 mx-auto max-w-sm'>We bring together world-class instructors to help you achieve your professional goals.</p>
      <SearchBar/>
    </div>
  );
};

export default Hero;
