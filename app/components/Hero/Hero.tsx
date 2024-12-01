// import React from "react";
// import { Roboto } from 'next/font/google';

// const roboto = Roboto({
//     subsets: ['latin'],
//     weight: ['400', '700'],
//   });

// const CoursesSection = () => {
//   return (
//     <div className="px-6 py-12 gap-5 bg-[#FFFFFF]">
//       <div className={`{${roboto.className} flex flex-rows-3 gap-2 pl-[480px] pb-[50px]`}>
//           <ul className="border-b-[1px] border-[#000000] p-3">Popular</ul>
//           <ul className="p-3">Recommended</ul>
//           <ul className="p-3">Best Price</ul>
//         </div>

//       {/* Grid Container */}
//       <div className={`${roboto.className} grid grid-cols-1 md:grid-cols-3 gap-[100px] gap-y-[50px]`}>
//         {/* Course 1 */}
//         <div className="bg-[#F7F7F7] rounded-sm p-0 flex flex-col items-start h-[534px] w-[416px]">
//           <img
//             src="./Pic1.jpeg"
//             alt="Course 1"
//             className="w-[416px] h-[300px] object-cover rounded-sm mb-4"
//           />

//           <div className="small text-sm font-semibold mt-0 ml-3">Design
//           <span className="text-xs text-[#000000] mb-2 mt-0 font-bold ml-[300px] "><span className="text-lg mb-2 mt-0 font-bold mr-1 text-[#D9D9D9]">★</span> 5.0 </span>

//           </div>
//           <div className="flex justify-between w-full items-center">

//             <div className="pt-2 ml-3">
//                 <h1 className="text-2xl font-bold">UX/UI Design 201</h1>
//                 <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
//                <div className="pt-5">
//                 <button className="w-[110px] h-[38px] text-[#000000] border border-[#000000] text-sm px-3 py-1 rounded-md">
//               Enroll Now
//             </button>
//             <span className="text-sm font-semibold text-[#000000] pl-[30px]">$400</span>
//             </div>

//             </div>


//           </div>
//         </div>
//         <div className="bg-[#F7F7F7] rounded-sm p-0 flex flex-col items-start h-[534px] w-[416px]">
//           <img
//             src="./Pic2.jpeg"
//             alt="Course 1"
//             className="w-[416px] h-[300px] object-cover rounded-sm mb-4"
//           />

//           <div className="small text-sm font-semibold mt-0 ml-3">Programming
//           <span className="text-xs text-[#000000] mb-2 mt-0 font-bold ml-[260px] "><span className="text-lg mb-2 mt-0 font-bold mr-1 text-[#D9D9D9]">★</span> 5.0 </span>

//           </div>
//           <div className="flex justify-between w-full items-center">

//             <div className="pt-2 ml-3">
//                 <h1 className="text-2xl font-bold">Introduction to Python</h1>
//                 <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
//                <div className="pt-5">
//                 <button className="w-[110px] h-[38px] text-[#000000] border border-[#000000] text-sm px-3 py-1 rounded-md">
//               Enroll Now
//             </button>
//             <span className="text-sm font-semibold text-[#000000] pl-[30px]">$400</span>
//             </div>

//             </div>


//           </div>
//         </div>
//         <div className="bg-[#F7F7F7] rounded-sm p-0 flex flex-col items-start h-[534px] w-[416px]">
//           <img
//             src="./Pic3.jpeg"
//             alt="Course 1"
//             className="w-[416px] h-[300px] object-cover rounded-sm mb-4"
//           />

//           <div className="small text-sm font-semibold mt-0 ml-3">Business
//           <span className="text-xs text-[#000000] mb-2 mt-0 font-bold ml-[290px] "><span className="text-lg mb-2 mt-0 font-bold mr-1 text-[#D9D9D9]">★</span> 5.0 </span>

//           </div>
//           <div className="flex justify-between w-full items-center">

//             <div className="pt-2 ml-3">
//                 <h1 className="text-2xl font-bold">Data Analysis</h1>
//                 <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
//                <div className="pt-5">
//                 <button className="w-[110px] h-[38px] text-[#000000] border border-[#000000] text-sm px-3 py-1 rounded-md">
//               Enroll Now
//             </button>
//             <span className="text-sm font-semibold text-[#000000] pl-[30px]">$400</span>
//             </div>

//             </div>


//           </div>
//         </div>
//         <div className="bg-[#F7F7F7] rounded-sm p-0 flex flex-col items-start h-[534px] w-[416px]">
//           <img
//             src="./Pic4.jpeg"
//             alt="Course 1"
//             className="w-[416px] h-[300px] object-cover rounded-sm mb-4"
//           />

//           <div className="small text-sm font-semibold mt-0 ml-3">Art
//           <span className="text-xs text-[#000000] mb-2 mt-0 font-bold ml-[330px] "><span className="text-lg mb-2 mt-0 font-bold mr-1 text-[#D9D9D9]">★</span> 5.0 </span>

//           </div>
//           <div className="flex justify-between w-full items-center">

//             <div className="pt-2 ml-3">
//                 <h1 className="text-2xl font-bold">Art Specialization</h1>
//                 <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
//                <div className="pt-5">
//                 <button className="w-[110px] h-[38px] text-[#000000] border border-[#000000] text-sm px-3 py-1 rounded-md">
//               Enroll Now
//             </button>
//             <span className="text-sm font-semibold text-[#000000] pl-[30px]">$400</span>
//             </div>

//             </div>


//           </div>
//         </div>
//         <div className="bg-[#F7F7F7] shadow rounded-sm p-0 flex flex-col items-start h-[534px] w-[416px]">
//           <img
//             src="./Pic5.jpeg"
//             alt="Course 1"
//             className="w-[416px] h-[300px] object-cover rounded-sm mb-4"
//           />

//           <div className="small text-sm font-semibold mt-0 ml-3 ">Law

//           <span className="text-xs text-[#000000] mb-2 mt-0 font-bold ml-[320px] "><span className="text-lg mb-2 mt-0 font-bold mr-1 text-[#D9D9D9]">★</span> 5.0 </span>

//           </div>
//           <div className="flex justify-between w-full items-center">

//             <div className="pt-2 ml-3">
//                 <h1 className="text-2xl font-bold">Rule of Law</h1>
//                 <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
//                <div className="pt-5">
//                 <button className="w-[110px] h-[38px] text-[#000000] border border-[#000000] text-sm px-3 py-1 rounded-md">
//               Enroll Now
//             </button>
//             <span className="text-sm font-semibold text-[#000000] pl-[30px]">$400</span>
//             </div>

//             </div>


//           </div>
//         </div>
//         <div className="bg-[#F7F7F7]  rounded-sm p-0 flex flex-col items-start h-[534px] w-[416px]">
//           <img
//             src="./Pic6.jpeg"
//             alt="Course 1"
//             className="w-[416px] h-[300px] object-cover rounded-sm mb-4"
//           />

//           <div className="small text-sm font-semibold mt-0 ml-3">Tech
//           <span className="text-xs text-[#000000] mb-2 mt-0 font-bold ml-[320px] "><span className="text-lg mb-2 mt-0 font-bold mr-1 text-[#D9D9D9]">★</span> 5.0 </span>

//           </div>
//           <div className="flex justify-between w-full items-center">

//             <div className="pt-2 ml-3">
//                 <h1 className="text-2xl font-bold">Introduction to webflow</h1>
//                 <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
//                <div className="pt-5">
//                 <button className="w-[110px] h-[38px] text-[#000000] border border-[#000000] text-sm px-3 py-1 rounded-md">
//               Enroll Now
//             </button>
//             <span className="text-sm font-semibold text-[#000000] pl-[30px]">$400</span>
//             </div>

//             </div>


//           </div>
//         </div>
//         <div className='btn px-[600px] py-10'>
//           <button className=' border border-[#000000] rounded-md h-[40px] w-[155px] '>View All Courses</button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CoursesSection;



import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const CoursesSection = () => {
  return (
    <div className="px-4 sm:px-6 py-8 sm:py-12 gap-5 bg-[#FFFFFF]">
      {/* Tabs Section */}
      <div className={`${roboto.className} flex flex-row sm:gap-4 text-center justify-center sm:pb-10`}>
        <ul className="border-b-[1px] border-[#000000] p-3 cursor-pointer">Popular</ul>
        <ul className="p-3 cursor-pointer">Recommended</ul>
        <ul className="p-3 cursor-pointer">Best Price</ul>
      </div>

      {/* Grid Container */}
      <div
        className={`${roboto.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-20`}
      >
        {/* Course Card 1 */}
        <div className="bg-[#F7F7F7] rounded-sm flex flex-col items-start h-auto w-full">
          <img
            src="./Pic1.jpeg"
            alt="Course 1"
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-t-sm"
          />
          <div className="w-full text-sm font-semibold px-4 pt-3 flex justify-between">
            <span className="mt-1">Design</span>
            <span className="text-xs text-[#000000] ml-auto ">
              <span className="text-lg font-bold text-[#D9D9D9] mr-1">★</span>{" "}
              5.0
            </span>
          </div>
          <div className="flex flex-col px-4 py-4 gap-2">
            <h1 className="text-lg sm:text-xl font-bold">UX/UI Design 201</h1>
            <p className="text-sm sm:text-base text-[#333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex justify-between items-center pt-3">
              <button className="text-sm sm:text-base border border-[#000000] text-[#000000] py-1 px-4 rounded-md">
                Enroll Now
              </button>
              <span className="text-sm font-semibold">$400</span>
            </div>
          </div>
        </div>

        {/* Course Card 2 */}
        <div className="bg-[#F7F7F7] rounded-sm flex flex-col items-start h-auto w-full">
          <img
            src="./Pic2.jpeg"
            alt="Course 2"
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-t-sm"
          />
          <div className="w-full text-sm font-semibold px-4 pt-3 flex justify-between">
            <span className="mt-1">Programming</span>
            <span className="text-xs text-[#000000] ml-auto ">
              <span className="text-lg font-bold text-[#D9D9D9] mr-1">★</span>{" "}
              5.0
            </span>
          </div>
          <div className="flex flex-col px-4 py-4 gap-2">
            <h1 className="text-lg sm:text-xl font-bold">Introduction to Python</h1>
            <p className="text-sm sm:text-base text-[#333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex justify-between items-center pt-3">
              <button className="text-sm sm:text-base border border-[#000000] text-[#000000] py-1 px-4 rounded-md">
                Enroll Now
              </button>
              <span className="text-sm font-semibold">$400</span>
            </div>
          </div>
        </div>

        {/* Course Card 3 */}
        <div className="bg-[#F7F7F7] rounded-sm flex flex-col items-start h-auto w-full">
          <img
            src="./Pic3.jpeg"
            alt="Course 3"
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-t-sm"
          />
          <div className="w-full text-sm font-semibold px-4 pt-3 flex justify-between">
            <span className="mt-1">Business</span>
            <span className="text-xs text-[#000000] ml-auto ">
              <span className="text-lg font-bold text-[#D9D9D9] mr-1">★</span>{" "}
              5.0
            </span>
          </div>
          <div className="flex flex-col px-4 py-4 gap-2">
            <h1 className="text-lg sm:text-xl font-bold">Data Analysis</h1>
            <p className="text-sm sm:text-base text-[#333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex justify-between items-center pt-3">
              <button className="text-sm sm:text-base border border-[#000000] text-[#000000] py-1 px-4 rounded-md">
                Enroll Now
              </button>
              <span className="text-sm font-semibold">$400</span>
            </div>
          </div>
        </div>
        {/* Course Card 4 */}
        <div className="bg-[#F7F7F7] rounded-sm hidden sm:flex flex-col items-start h-auto w-full">
          <img
            src="./Pic4.jpeg"
            alt="Course 3"
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-t-sm"
          />
          <div className="w-full text-sm font-semibold px-4 pt-3 flex justify-between">
            <span className="mt-1">Art</span>
            <span className="text-xs text-[#000000] ml-auto ">
              <span className="text-lg font-bold text-[#D9D9D9] mr-1">★</span>{" "}
              5.0
            </span>
          </div>
          <div className="flex flex-col px-4 py-4 gap-2">
            <h1 className="text-lg sm:text-xl font-bold">Art Specialization</h1>
            <p className="text-sm sm:text-base text-[#333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex justify-between items-center pt-3">
              <button className="text-sm sm:text-base border border-[#000000] text-[#000000] py-1 px-4 rounded-md">
                Enroll Now
              </button>
              <span className="text-sm font-semibold">$400</span>
            </div>
          </div>
        </div>
        {/* Course Card 5 */}
        <div className="bg-[#F7F7F7] rounded-sm hidden sm:flex flex-col items-start h-auto w-full">
          <img
            src="./Pic5.jpeg"
            alt="Course 3"
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-t-sm"
          />
          <div className="w-full text-sm font-semibold px-4 pt-3 flex justify-between">
            <span className="mt-1">Law</span>
            <span className="text-xs text-[#000000] ml-auto ">
              <span className="text-lg font-bold text-[#D9D9D9] mr-1">★</span>{" "}
              5.0
            </span>
          </div>
          <div className="flex flex-col px-4 py-4 gap-2">
            <h1 className="text-lg sm:text-xl font-bold">Rule of Law</h1>
            <p className="text-sm sm:text-base text-[#333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex justify-between items-center pt-3">
              <button className="text-sm sm:text-base border border-[#000000] text-[#000000] py-1 px-4 rounded-md">
                Enroll Now
              </button>
              <span className="text-sm font-semibold">$400</span>
            </div>
          </div>
        </div>
        {/* Course Card 6 */}
        <div className="bg-[#F7F7F7] rounded-sm hidden sm:flex flex-col items-start h-auto w-full">
          <img
            src="./Pic6.jpeg"
            alt="Course 3"
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-t-sm"
          />
          <div className="w-full text-sm font-semibold px-4 pt-3 flex justify-between">
            <span className="mt-1">Tech</span>
            <span className="text-xs text-[#000000] ml-auto ">
              <span className="text-lg font-bold text-[#D9D9D9] mr-1">★</span>{" "}
              5.0
            </span>
          </div>
          <div className="flex flex-col px-4 py-4 gap-2">
            <h1 className="text-lg sm:text-xl font-bold">Introduction to webflow</h1>
            <p className="text-sm sm:text-base text-[#333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex justify-between items-center pt-3">
              <button className="text-sm sm:text-base border border-[#000000] text-[#000000] py-1 px-4 rounded-md">
                Enroll Now
              </button>
              <span className="text-sm font-semibold">$400</span>
            </div>
          </div>
        </div>

        {/* Repeat similar structure for other cards */}
      </div>

      {/* View All Button */}
      <div className="flex justify-center py-6">
        <button className="border border-[#000000] rounded-md h-[40px] w-[155px]">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default CoursesSection;