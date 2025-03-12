import React from 'react';
import { assets } from '../../assets/img/assets';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10 relative">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center md:gap-32 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center w-full">
          <div className="flex justify-center items-center">
            <img className="mr-2 h-7" src={assets.favicon} alt="logo" />
            <p className="text-white font-medium text-xl">Eduka</p>
          </div>
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="flex flex-col md:items-center w-full">
          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-white mb-5">Company</h2>
            <ul className="text-sm text-white/80 space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-white/80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 
            outline-none w-64 h-9 rounded px-2 text-sm"
              type="email"
              placeholder="Enter your email"
            />
            <button className="text-white bg-blue-600 w-24 h-9 rounded border-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="flex justify-center text-white/50 my-3">
        dophudat2003@gmail.com
      </p>
    </footer>
  );
};

export default Footer;
