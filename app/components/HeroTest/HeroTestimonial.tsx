import React from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <section className=" bg-[#F7F7F7] py-12 px-4 ">
      <div className=" container mx-auto">
        <h1 className="text-3xl font-extrabold text-left text-[#000000] mb-3 ml-[30px]">
          Customer Testimonials
        </h1>
        <p className="mb-20 ml-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        {/* Section Heading */}
        <div className="flex justify-center">

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6   ml-[30px]">
            {/* Testimonial 1 */}
            <div className="bg-[#F7F7F7] p-6  flex flex-col border border-[#000000]">
              {/* Star Rating */}
              <div className="flex justify-start mb-4 text-[#000000]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Content */}
              <p className="text-gray-600 mb-6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
              </p>
              {/* Profile */}
              <div className="flex items-center">
                <img
                  src="img1.png"
                  alt="James Nduku"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">James Nduku</h4>
                  <span className="text-sm text-gray-600">Software Developer</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F7F7F7] p-6 flex flex-col border border-[#000000]">
              {/* Star Rating */}
              <div className="flex justify-start mb-4 text-[#000000]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Content */}
              <p className="text-gray-600 mb-6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
              </p>
              {/* Profile */}
              <div className="flex items-center">
                <img
                  src="img2.png"
                  alt="Erick Kipkemboi"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Erick Kipkemboi</h4>
                  <span className="text-sm text-gray-600">Scrum Master</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F7F7F7] p-6 flex flex-col border border-[#000000]">
              {/* Star Rating */}
              <div className="flex justify-start mb-4 text-[#000000]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Content */}
              <p className="text-gray-600 mb-6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
              </p>
              {/* Profile */}
              <div className="flex items-center">
                <img
                  src="img3.png"
                  alt="Stephen Kerubo"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Stephen Kerubo</h4>
                  <span className="text-sm text-gray-600">
                    UI/UX Designer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex justify-between  mt-4  ml-[30px]">
          <div className="flex gap-2  text-left mt-5 text-[#000000]">
            <span className="w-2 h-2 bg-[#000000] rounded-full"></span>
            <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
            <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
            <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
            <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
          </div>
          <span>
            <button className="p-3 border border-[#000000] rounded-full mr-2 hover:bg-[#F7F7F7] ">
              <FaArrowLeft />
            </button>
            <button className="p-3 border border-[#000000] rounded-full mr-2 hover:bg-[#F7F7F7]">
              <FaArrowRight />
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
