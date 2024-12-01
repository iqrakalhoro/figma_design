'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import { HiMenu, HiX } from "react-icons/hi";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav
        className={`${roboto.className} w-[100%] m-auto bg-[#f7f7f7] border-b border-gray-300 py-4 flex justify-between items-center relative`}
      >
        {/* Logo */}
        <div className="flex-shrink-0 lg:ml-14 lg:mt-1">
          <Image
            src="/Ddsgnr Library.png"
            alt="Designer Library"
            width={130}
            height={50}
            className=''
          />
        </div>

        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        <div
          className={`absolute sm:static top-16 sm:top-auto left-0 sm:left-auto w-full sm:w-auto bg-[#f7f7f7] sm:bg-transparent shadow-md sm:shadow-none transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"
            } sm:flex flex-col sm:flex-row items-start sm:items-center gap-6 py-4 sm:py-0`}
        >
          <ul className="flex flex-col sm:flex-row gap-2 md:gap-6 lg:gap-10 items-start sm:items-center w-full sm:w-auto px-4 sm:px-0 lg:flex lg:flex-row  lg:pl-2 lg:bg-white lg:items-center">
            <li className="text-xs md:text-lg hover:bg-[#F7F7F7] cursor-pointer lg:border-b-[1px] lg:border-[#000000] lg:border-spacing-5 lg:p-3">Home</li>
            <li className="text-xs md:text-lg  hover:bg-[#F7F7F7] cursor-pointer">Courses</li>
            <li className="text-xs md:text-lg  hover:bg-[#F7F7F7] cursor-pointer">Services</li>
            <li className="text-xs md:text-lg  hover:bg-[#F7F7F7] cursor-pointer">Achievement</li>
            <li className="text-xs md:text-lg  hover:bg-[#F7F7F7] cursor-pointer">About Us</li>
            <li className="text-xs md:text-lg  hover:bg-[#F7F7F7] cursor-pointer">Testimonial</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto mt-4 sm:mt-0 px-2 lg:px-4 sm:px-0 lg:flex lg:gap-3">
            <button className="w-full sm:w-auto border-[1px] border-[#000] py-2 px-4 rounded-lg bg-white  text-sm md:text-base">
              Login
            </button>
            <button className="w-full sm:w-auto border-[1px] bg-[#0c0c0c] text-white py-2 px-4 text-xs md:text-base">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
