import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white border-b-2 border-gray-400 ">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between h-24">
            <div className="flex items-center">
              <Link to="/">
                <div className="flex-shrink-0">
                  <img className="w-40" src={Logo} alt="Workflow" />
                </div>
              </Link>
              <div className="hidden md:block">
                <div className="relative left-[80%] bottom-8 flex items-baseline space-x-1">
                  <Link
                    to="/"
                    className=" text-black hover:text-[#0191B4] px-1 py-2 relative
                    top-8 rounded-md text-sm font-medium"
                  >
                    {" "}
                    Home
                  </Link>

                  <Link
                    to="/searchdetails"
                    className="text-black hover:text-[#0191B4] px-1 py-2 relative top-8 rounded-md text-sm font-medium"
                  >
                    Find Specialists
                  </Link>

                  <Link
                    to="/upload"
                    className="text-black hover:text-[#0191B4] px-1 py-2 relative top-8 rounded-md text-sm font-medium"
                  >
                    Assessments
                  </Link>

                  <Link
                    to="/aboutus"
                    className="text-black hover:text-[#0191B4] px-1 py-2 relative top-8 rounded-md text-sm font-medium"
                  >
                    Learning Tools
                  </Link>

                  <Link
                    to="/blogs"
                    className="text-black hover:text-[#0191B4] px-1 py-2 relative top-8 rounded-md text-sm font-medium"
                  >
                    Blog
                  </Link>
                  <div className="relative left-[8%]">
                    <Link
                      to="/signin"
                      className="bg-[#FE7A15] hover:bg-[#f8d90f] hover:text-[#0191B4] text-white px-3 py-2 relative left-[10%] top-8 rounded-md text-sm font-medium"
                    >
                      Signin/join
                    </Link>
                  </div>
                  {/* <UserCircleIcon className="h-8 cursor-pointer w-8 text-white relative left-[10%] top-10" /> */}
                  <Link
                    to="/contactus"
                    className="bg-[#FE7A15] hover:bg-[#f8d90f] hover:text-[#0191B4] text-white px-3 py-2 relative left-[10%] top-8 rounded-md text-sm font-medium"
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
