import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Doctors from "../images/illustration_4.png";
import { NavLink } from "react-router-dom";
import Thumbnail from "../images/Video Thumbnail.png";
const VideoOnDemand = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-10">
        <div className="flex bg-waterblue mt-10 pt-6 pb-10 pl-[10%]">
          <div className="mt-7">
            <div className="text-3xl font-bold">
              Discover Programs for your Child
            </div>
            <div className="text-sm mt-3 w-[90%]">
              Check out the array of programs that we have designed for you &
              your child. You can explore the benefits and all the details right
              here.
            </div>
          </div>
          <img src={Doctors} alt="" className="h-40 relative right-20" />
        </div>
      </div>
      <div className="">
        <div className="flex ml-40 mt-10 mb-10">
          <div className="w-[17%]">
            <div className="font-bold my-2">Filter by Program Type</div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="Programs"
                value="option1"
              />
              <label class="form-check-label inline-block text-gray-800 font-bold my-2 relative bottom-2">
                All Program Types
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="Programs"
                value="option2"
              />
              <label class="form-check-label inline-block text-gray-800 font-bold my-2 relative bottom-2">
                Online Programs
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="Programs"
                value="option3"
              />
              <label class="form-check-label inline-block text-gray-800 font-bold my-2 relative bottom-2">
                Home Based Programs
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="Programs"
                value="option4"
              />
              <label class="form-check-label inline-block text-gray-800 font-bold my-2 relative bottom-2">
                Live Programs
              </label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="Programs"
                value="option8"
              />
              <label class="form-check-label inline-block text-gray-800 font-bold my-2 relative bottom-2">
                Offline Programs
              </label>
            </div>
            <div className="bg-gray-300 h-[1px]"></div>
            <div className="font-bold my-2">Filter By Age Group</div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="Age"
                value="option1"
              />
              <label class="form-check-label inline-block text-gray-800 font-bold my-2 relative bottom-2">
                All Age Group
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="Age"
                value="option2"
              />
              <label class="form-check-label inline-block text-gray-800 font-bold my-2 relative bottom-2">
                0-2 Years
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="Age"
                value="option3"
              />
              <label class="form-check-label inline-block text-gray-800 font-bold my-2 relative bottom-2">
                2-5 Years
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="Age"
                value="option4"
              />
              <label class="form-check-label inline-block text-gray-800 font-bold my-2 relative bottom-2">
                Above 5 year
              </label>
            </div>
            <div className="bg-gray-300 h-[1px]"></div>
            <div className="font-bold my-2">Filter By Price</div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="price"
                value="option1"
              />
              <label class="form-check-label inline-block text-gray-800 font-bold my-2 relative bottom-2">
                Free Programs
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="price"
                value="option2"
              />
              <label class="form-check-label inline-block text-gray-800 font-bold my-2 relative bottom-2">
                Premium Programs
              </label>
            </div>
          </div>
          <div className="w-[70%] ml-8">
            <div className="font-bold text-2xl mb-4">
              Showing All 18 Programs
            </div>
            <div className="flex items-baseline space-x-4">
              <NavLink
                activeclassname="tab"
                to="/videoondemand"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-[#FE7A15] text-black hover:text-white px-2 py-2 rounded-md text-sm font-bold"
              >
                Popular
              </NavLink>
              <NavLink
                activeclassname="tab"
                to="/videoondemand"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-[#FE7A15] text-black hover:text-white px-2 py-2 rounded-md text-sm font-bold"
              >
                New
              </NavLink>
              <NavLink
                activeclassname="tab"
                to="/videoondemand"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-[#FE7A15] text-black hover:text-white px-2 py-2 rounded-md text-sm font-bold"
              >
                For Parents
              </NavLink>

              <NavLink
                activeclassname="tab"
                to="/videoondemand"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-[#FE7A15] text-black hover:text-white px-2 py-2 rounded-md text-sm font-bold"
              >
                For Specials
              </NavLink>
              <NavLink
                activeclassname="tab"
                to="/videoondemand"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-[#FE7A15] text-black hover:text-white px-2 py-2 rounded-md text-sm font-bold"
              >
                Must Check
              </NavLink>
            </div>
            <div className="h-[1px] bg-gray-400 "></div>
            <div className="">
              <div className="flex hover:bg-gray-50 pt-5 pb-10 px-5 mt-5">
                <img src={Thumbnail} alt="" className="h-36 relative right-3" />
                <div className="w-[45%] ml-5">
                  <div className="font-bold">Ready For School Program</div>
                  <div className="flex mt-2">
                    <div className="bg-yellow h-5 px-2 rounded-2xl text-sm">
                      Premium
                    </div>
                    <div className="text-3xl relative bottom-4 mx-1">.</div>
                    <div className="text-sm">Comprehensive Program</div>
                    <div className="text-3xl relative bottom-4 mx-1">.</div>
                    <div className="text-sm">English</div>
                    <div className="text-3xl relative bottom-4 mx-1">.</div>
                    <div className="text-sm">For Parents</div>
                  </div>
                  <div className="text-sm mt-3">
                    Schools are back in full session. Help your child make a
                    successful transition and develop early literacy skills.
                    Parents can support their children with the help of a
                    multidisciplinary team of experts. Help to educate child in
                    an intricate manner.
                  </div>
                </div>
                <div className="relative left-20">
                  <div className="bg-red-100 flex h-5 px-3 rounded-2xl w-[50%]">
                    <div className="text-3xl text-red-600 relative bottom-4 mr-2">
                      .
                    </div>
                    <div className="text-sm text-red-600 ">Live</div>
                  </div>
                  <div className="text-2xl font-bold mt-4">₹1999</div>
                  <div className="bg-yellow h-5 px-2 rounded-2xl text-sm mt-4">
                    Start on Every Month
                  </div>
                  <div className="text-sm mt-4">1000 Enrolled</div>
                </div>
              </div>
              <div className="h-[0.5px] bg-gray-400"></div>
            </div>
            <div className="">
              <div className="flex hover:bg-gray-50 pt-5 pb-10 px-5 mt-5">
                <img src={Thumbnail} alt="" className="h-36 relative right-3" />
                <div className="w-[45%] ml-5">
                  <div className="font-bold">Ready For School Program</div>
                  <div className="flex mt-2">
                    <div className="bg-yellow h-5 px-2 rounded-2xl text-sm">
                      Premium
                    </div>
                    <div className="text-3xl relative bottom-4 mx-1">.</div>
                    <div className="text-sm">Comprehensive Program</div>
                    <div className="text-3xl relative bottom-4 mx-1">.</div>
                    <div className="text-sm">English</div>
                    <div className="text-3xl relative bottom-4 mx-1">.</div>
                    <div className="text-sm">For Parents</div>
                  </div>
                  <div className="text-sm mt-3">
                    Schools are back in full session. Help your child make a
                    successful transition and develop early literacy skills.
                    Parents can support their children with the help of a
                    multidisciplinary team of experts. Help to educate child in
                    an intricate manner.
                  </div>
                </div>
                <div className="relative left-20">
                  <div className="bg-red-100 flex h-5 px-3 rounded-2xl w-[50%]">
                    <div className="text-3xl text-red-600 relative bottom-4 mr-2">
                      .
                    </div>
                    <div className="text-sm text-red-600 ">Live</div>
                  </div>
                  <div className="text-2xl font-bold mt-4">₹1999</div>
                  <div className="bg-yellow h-5 px-2 rounded-2xl text-sm mt-4">
                    Start on Every Month
                  </div>
                  <div className="text-sm mt-4">1000 Enrolled</div>
                </div>
              </div>
              <div className="h-[0.5px] bg-gray-400"></div>
            </div>
            <div className="">
              <div className="flex hover:bg-gray-50 pt-5 pb-10 px-5 mt-5">
                <img src={Thumbnail} alt="" className="h-36 relative right-3" />
                <div className="w-[45%] ml-5">
                  <div className="font-bold">Ready For School Program</div>
                  <div className="flex mt-2">
                    <div className="bg-yellow h-5 px-2 rounded-2xl text-sm">
                      Premium
                    </div>
                    <div className="text-3xl relative bottom-4 mx-1">.</div>
                    <div className="text-sm">Comprehensive Program</div>
                    <div className="text-3xl relative bottom-4 mx-1">.</div>
                    <div className="text-sm">English</div>
                    <div className="text-3xl relative bottom-4 mx-1">.</div>
                    <div className="text-sm">For Parents</div>
                  </div>
                  <div className="text-sm mt-3">
                    Schools are back in full session. Help your child make a
                    successful transition and develop early literacy skills.
                    Parents can support their children with the help of a
                    multidisciplinary team of experts. Help to educate child in
                    an intricate manner.
                  </div>
                </div>
                <div className="relative left-20">
                  <div className="bg-red-100 flex h-5 px-3 rounded-2xl w-[50%]">
                    <div className="text-3xl text-red-600 relative bottom-4 mr-2">
                      .
                    </div>
                    <div className="text-sm text-red-600 ">Live</div>
                  </div>
                  <div className="text-2xl font-bold mt-4">₹1999</div>
                  <div className="bg-yellow h-5 px-2 rounded-2xl text-sm mt-4">
                    Start on Every Month
                  </div>
                  <div className="text-sm mt-4">1000 Enrolled</div>
                </div>
              </div>
              <div className="h-[0.5px] bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideoOnDemand;
