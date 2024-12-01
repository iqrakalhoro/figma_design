
import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Herosection = () => {
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center sm:flex-row gap-20 sm:gap-40 lg:gap-20 ">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start sm:items-center w-full sm:w-1/2 gap-6 lg:gap-10 ml-8 lg:p-16 mt-8 sm:mt-0">
        <div className={`${roboto.className} text-3xl sm:text-4xl lg:text-5xl font-bold`}>
          <h1>Learn new skills <br className='block sm:hidden' /> online with ease </h1>
        </div>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700">
          Discover a wide range of courses covering a <br className='block sm:hidden' /> variety  of subjects, taught by expert instructors.
        </p>
        <div className="flex flex-row gap-3">
          <button className="bg-black text-white py-1.5 px-2 md:py-1 md:px-2 lg:py-3 lg:px-4  rounded-md text-sm lg:text-base">
            Start learning now
          </button>
          <button className="border-black py-1.5 px-2 md:py-1 md:px-2 lg:py-3 lg:px-4 rounded-md bg-white border-2 text-sm lg:text-base">
            Explore courses
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-1/2 flex justify-center lg:justify-end">
        <Image src="/Image2.png" alt="Image" width={550} height={0} className="w-full max-w-xs sm:max-w-sm lg:max-w-md" />
      </div>
    </div>
  );
};

export default Herosection;
