import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='my-auto mt-20 sm:mx-8 flex flex-col items-center lg:mt-[200px] lg:mx-[60px]'>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 lg:gap-60">
        {/* Left Side: Heading and Paragraph */}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-[#000000] text-center sm:text-left">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-[#000000] text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Right Side: Buttons and Paragraph */}
        <div className="flex flex-col gap-2 ">
          {/* Buttons Container */}
          <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
            <button className="text-[#505050] rounded-md border border-[#000000] p-3 w-[100%] m-auto sm:w-[265px] h-[48px]">
              Enter your email
            </button>
            <button className="text-center border border-[#000000] rounded-md p-3 w-full sm:w-[119px] h-[48px]">
              Subscribe
            </button>
          </div>
          {/* Paragraph Below Buttons */}
          <p className="text-sm text-[#000000]">
            By subscribing you agree to our <span className='underline'>Privacy Policy.</span>
          </p>
        </div>
      </div>

      <div className="text-[#000000] py-1 mt-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 lg:gap-40">
          {/* Column 1: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image src="/Ddsgnr Library.png" alt=""
            height={150}
            width={150}/>
          </div>

          {/* Column 2: Courses */}
          <div>
            <h3 className="text-md font-semibold mb-4">Courses</h3>
            <ul className="space-y-5">
              <li><a href="#" className="text-[#000000]">Business</a></li>
              <li><a href="#" className="text-[#000000]">Development</a></li>
              <li><a href="#" className="text-[#000000]">Technology</a></li>
              <li><a href="#" className="text-[#000000]">Design</a></li>
              <li><a href="#" className="text-[#000000]">Programming</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <ul className="space-y-5">
              <li><a href="#" className="text-[#000000]">Career</a></li>
              <li><a href="#" className="text-[#000000]">Resume</a></li>
              <li><a href="#" className="text-[#000000]">Learning</a></li>
              <li><a href="#" className="text-[#000000]">Interview Preparation</a></li>
              <li><a href="#" className="text-[#000000]">Jobs</a></li>
            </ul>
          </div>

          {/* Column 4: About Us */}
          <div>
            <h3 className="text-md font-semibold mb-4">About Us</h3>
            <ul className="space-y-5">
              <li><a href="#" className="text-[#000000]">Contact</a></li>
              <li><a href="#" className="text-[#000000]">Help/Support</a></li>
              <li><a href="#" className="text-[#000000]">FAQ</a></li>
              <li><a href="#" className="text-[#000000]">Terms and Conditions</a></li>
              <li><a href="#" className="text-[#000000]">Partners</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-[#000000] mt-10 pt-6 pb-6 mx-3'>
        <footer className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 ">
            <p className='text-center'>2023 Ddsgnr. All right reserved.</p>
            <ul className="flex space-x-8 underline">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#contact">Cookie Settings</a></li>
            </ul>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0 lg:space-x-4 lg:pl-[410px]">
            <FaFacebook className="text-[#000000] text-2xl" />
            <FaInstagram className="text-[#000000] text-2xl" />
            <FaTwitter className="text-[#000000] text-2xl" />
            <FaLinkedin className="text-[#000000] text-2xl" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
