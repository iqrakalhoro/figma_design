import React from 'react';
import { Roboto } from 'next/font/google';
import { LiaRandomSolid } from 'react-icons/lia';
import { CiMicrophoneOn } from 'react-icons/ci';
import { CiVolumeHigh } from 'react-icons/ci';
import { CiPen } from 'react-icons/ci';
import { RiLinksFill } from 'react-icons/ri';
import { GoArrowSwitch } from 'react-icons/go';
import { FiBook } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { SlBriefcase } from 'react-icons/sl';


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const HeroCategory = () => {
  return (
    <div className={`${roboto.className} w-full mb-24 pt-6 md:mt-16`}>
      {/* Heading Section */}
      <div className="text-center px-4 md:px-0">
        <h1 className="md:text-3xl lg:text-5xl font-bold">
          Explore Courses By Category
        </h1>
        <p className="pt-4 md:pt-8 text-sm md:text-base text-gray-600">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-10 px-4 ">
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {/* Card Component */}
          {[
            { title: 'Design & Development', icon: <CiPen className="text-[gray-700] text-2xl" />, courses: '50+ Courses Available' },
            { title: 'Marketing', icon: <CiVolumeHigh className="text-[gray-700] text-2xl" />, courses: '50+ Courses Available' },
            { title: 'Development', icon: <LiaRandomSolid size="24" color="#292D32" />, courses: '50+ Courses Available' },
            { title: 'Communication', icon: <CiMicrophoneOn  className="text-[gray-700] text-2xl" />, courses: '50+ Courses Available' },
            { title: 'Digital Marketing', icon: <RiLinksFill className="text-[gray-700] text-2xl" />, courses: '50+ Courses Available' },
            { title: 'Self Development', icon: <GoArrowSwitch size={24} />, courses: '50+ Courses Available' },
            { title: 'Business', icon: <SlBriefcase size={24} />, courses: '50+ Courses Available' },
            { title: 'Finance', icon: <FiBook size={24} />, courses: '50+ Courses Available' },
            { title: 'Consulting', icon: <HiOutlineBookOpen size={24} />, courses: '50+ Courses Available' },
          ].map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border p-4 rounded-lg bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center w-16 h-16 border rounded-full bg-white">
                {category.icon}
              </div>
              <div>
                <h2 className="text-lg font-semibold">{category.title}</h2>
                <p className="text-sm text-gray-500">{category.courses}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="border border-black rounded-md px-6 py-2 hover:bg-black hover:text-white transition duration-300">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCategory;
