import { CiFaceSmile } from "react-icons/ci";
import { IoMdMan } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";

import workPic from "../Assets/Component_Pics/howworkPic1.png";

const HowWork = () => {
  return (
    <section className="mt-5 text-gray-600 bg-opacity-50 body-font">
      
      <div className="container flex flex-wrap items-center px-5 py-16 mx-auto">
      <h1 className="mx-auto text-3xl font-bold text-[#FF6B35] mb-8 md:mb-0">How it Works?</h1>
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="relative flex pb-6">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none" />
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-[#FF6B35] rounded-full">
                <MdOutlinePhoneInTalk />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-[#FF6B35] title-font">
                  STEP 1
                </h2>
                <p className="text-3xl font-bold leading-relaxed text-black ">
                  Book Service
                </p>
              </div>
            </div>
            <div className="relative flex pb-6">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none" />
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-[#FF6B35] rounded-full">
                <IoMdMan />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-[#FF6B35] title-font">
                  STEP 2
                </h2>
                <p className="text-3xl font-bold leading-relaxed text-black ">
                  Handyman Arrives
                </p>
              </div>
            </div>
            <div className="relative flex pb-6">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none" />
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-[#FF6B35] rounded-full">
              <IoCheckmarkDone />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-[#FF6B35] title-font">
                  STEP 3
                </h2>
                <p className="text-3xl font-bold leading-relaxed text-black ">
                  Job Done
                </p>
              </div>
            </div>

            <div className="relative flex">
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-[#FF6B35] rounded-full">
                <CiFaceSmile />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="mb-1 text-lg font-medium tracking-wider text-[#FF6B35] title-font">
                  STEP 4
                </h2>
                <p className="text-3xl font-bold leading-relaxed text-black ">
                  Satisfaction Guranteed
                </p>
              </div>
            </div>
          </div>
          <img
            className="object-fill mx-auto mt-1 rounded-lg md:mt-12 h-96"
            src={workPic}
            alt="step"
          />
        </div>
      </div>
    </section>
  );
};

export default HowWork;
