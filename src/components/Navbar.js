import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../images/logo.png";
import { UserCircleIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white border-b-2 border-gray-400 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0 relative right-[17%]">
                <img className="w-40" src={Logo} alt="Workflow" />
              </div>
              <div className="hidden md:block">
                <div className="relative left-[20%] bottom-8 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className=" text-black hover:text-[#0191B4] px-3 py-2 relative
                    top-8 rounded-md text-sm font-medium"
                  >
                    {" "}
                    HOME
                  </Link>

                  <a
                    href="/"
                    className="text-black hover:text-[#0191B4] px-3 py-2 relative top-8 rounded-md text-sm font-medium"
                  >
                    FIND SPECIALISTS
                  </a>

                  <Link
                    to="/upload"
                    className="text-black hover:text-[#0191B4] px-3 py-2 relative top-8 rounded-md text-sm font-medium"
                  >
                    ASSESSMENTS
                  </Link>

                  <Link
                    to="/aboutus"
                    className="text-black hover:text-[#0191B4] px-3 py-2 relative top-8 rounded-md text-sm font-medium"
                  >
                    LEARNING TOOLS
                  </Link>

                  <Link
                    to="/contactus"
                    className="text-black hover:text-[#0191B4] px-3 py-2 relative top-8 rounded-md text-sm font-medium"
                  >
                    BLOG
                  </Link>
                  <div className="relative left-[8%]">
                    <Link
                      to="/signin"
                      className="text-black hover:text-[#0191B4] px-3 py-2 relative top-8 rounded-md text-sm font-medium"
                    >
                      Signin/join
                    </Link>
                    <div className="ml-28">
                      {/* <SearchIcon className="h-5 relative top-4 left-2 z-10 text-gray-300" />
                      <input
                        type="text"
                        placeholder="Search"
                        class="ring-1 ring-gray-300 w-80 text-[14px] md:text-[16px]  rounded-md relative bottom-6 px-10 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                      /> */}
                    </div>
                  </div>
                  {/* <UserCircleIcon className="h-8 cursor-pointer w-8 text-white relative left-[10%] top-10" /> */}
                  <Link
                    to="/contactus"
                    className="bg-[#FE7A15] text-white px-3 py-2 relative left-[10%] top-8 rounded-md text-sm font-medium"
                  >
                    FOR SPECIALISTS
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to=""
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2
                  rounded-md text-base font-medium"
                >
                  {" "}
                  HOME
                </Link>

                <Link
                  to=""
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  FIND SPECIALISTS
                </Link>

                <Link
                  to=""
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  ASSESSMENTS
                </Link>

                <Link
                  to=""
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  LEARNING TOOLS
                </Link>

                <Link
                  to=""
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  BLOG
                </Link>
                <Link
                  to="/signin"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Signin/join
                </Link>
                <Link
                  to="/contactus"
                  className="bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  FOR SPECIALISTS
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
