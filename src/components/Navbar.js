import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../images/logo.png";
import Modal from "react-modal";
import SignIn from "./SignIn";
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [more, setMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  /* const [user, setUser] = useState(); */
  const user = auth.currentUser;
  console.log(user);
  const Signin = () => {
    setModalIsOpen(true);
  };
  const Logout = async (e) => {
    e.preventDefault();
    await signOut(auth);
    window.location.reload(false);
  };

  /* onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setModalIsOpen(!modalIsOpen);
  }); */

  return (
    <div>
      <nav
        onMouseLeave={() => {
          setDropdown(false);
          setMore(false);
        }}
        className="bg-white shadow-sm fixed w-full z-10"
      >
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link to="/">
                  <img src={Logo} alt="" className="h-12" />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    activeclassname="tab"
                    to="/"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-[#FE7A15] text-gray-600 hover:text-white px-2 py-2 rounded-md text-[16px] font-bold"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    activeclassname="tab"
                    to="/searchdetails"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-[#FE7A15] text-gray-600 hover:text-white px-2 py-2 rounded-md text-[16px] font-bold"
                  >
                    Find Specialists
                  </NavLink>
                  <NavLink
                    activeclassname="tab"
                    to="/community"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-[#FE7A15] text-gray-600 hover:text-white px-2 py-2 rounded-md text-[16px] font-bold"
                  >
                    Community
                  </NavLink>

                  <div className=""></div>

                  <div
                    onMouseEnter={() => {
                      setDropdown(true);
                    }}
                    className="cursor-pointer hover:bg-[#FE7A15] text-gray-600 hover:text-white px-2 py-2 rounded-md text-[16px] font-bold"
                  >
                    Learning Tools
                  </div>
                  {dropdown ? (
                    <div
                      onMouseEnter={() => {
                        setDropdown(true);
                      }}
                      onMouseLeave={() => {
                        setDropdown(false);
                      }}
                      className="px-1 py-2 bg-white absolute top-16 rounded-sm right-[400px] border-2 border-solid border-gray-300"
                    >
                      <div className="">
                        <a
                          href="https://shashiyadav6219.ongraphy.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 text-lg px-2 py-1 rounded-sm hover:text-[#FE7A15]"
                        >
                          Programs
                        </a>
                      </div>
                      <div className="">
                        <NavLink
                          activeclassname="tab"
                          to="/assessments"
                          smooth={true}
                          offset={50}
                          duration={500}
                          className="mt-5 text-lg px-2 py-1 rounded-sm hover:text-[#FE7A15]"
                        >
                          Assessments
                        </NavLink>
                      </div>
                    </div>
                  ) : null}
                  <NavLink
                    activeclassname="tab"
                    to="/blogs"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-[#FE7A15] text-gray-600 hover:text-white px-2 py-2 rounded-md text-[16px] font-bold"
                  >
                    Blog
                  </NavLink>
                  <div
                    onMouseEnter={() => {
                      setMore(true);
                    }}
                    className="cursor-pointer hover:bg-[#FE7A15] text-gray-600 hover:text-white px-2 py-2 rounded-md text-[16px] font-bold"
                  >
                    More
                  </div>
                  {more ? (
                    <div
                      onMouseEnter={() => {
                        setMore(true);
                      }}
                      onMouseLeave={() => {
                        setMore(false);
                      }}
                      className="px-1 py-2 bg-white absolute top-16 rounded-sm right-[230px] border-2 border-solid border-gray-300"
                    >
                      <div className="">
                        <NavLink
                          activeclassname="tab"
                          to="/aboutus"
                          smooth={true}
                          offset={50}
                          duration={500}
                          className="mt-2 text-lg px-2 py-1 rounded-sm hover:text-[#FE7A15]"
                        >
                          About Us
                        </NavLink>
                      </div>
                      <div className="">
                        <NavLink
                          activeclassname="tab"
                          to="/"
                          smooth={true}
                          offset={50}
                          duration={500}
                          className="mt-5 text-lg px-2 py-1 rounded-sm hover:text-[#FE7A15]"
                        >
                          Our Team
                        </NavLink>
                      </div>
                    </div>
                  ) : null}
                  {user ? (
                    <div
                      onClick={Logout}
                      className="cursor-pointer bg-[#FE7A15] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
                    >
                      SignOut
                    </div>
                  ) : (
                    <div
                      onClick={Signin}
                      className="cursor-pointer bg-[#FE7A15] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
                    >
                      SignIn
                    </div>
                  )}

                  {modalIsOpen && (
                    <Modal
                      isOpen={modalIsOpen}
                      ariaHideApp={false}
                      onRequestClose={() => setModalIsOpen(false)}
                      style={{
                        overlay: {
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          zIndex: 1000,
                        },
                        content: {
                          backgroundColor: "rgba(250,250,250)",
                          width: "40%",
                          height: "100vh",
                          position: "absolute",
                          top: "0px",
                          left: "30%",
                          right: "40px",
                          bottom: "40px",
                          border: "1px solid #ccc",
                          background: "#fff",
                          overflow: "auto",
                          WebkitOverflowScrolling: "touch",
                          borderRadius: "4px",
                          outline: "none",
                          padding: "20px",
                        },
                      }}

                      // shouldCloseOnOverlayClick={false}
                    >
                      <div>
                        <div className="flex">
                          <img src={Logo} alt="" className="h-10" />
                          <div
                            onClick={() => setModalIsOpen(false)}
                            className="relative left-[60%] top-2 cursor-pointer"
                          >
                            Close
                          </div>
                        </div>
                        <SignIn />
                      </div>
                    </Modal>
                  )}
                  <NavLink
                    activeclassname="contact"
                    to="/specialists"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer bg-[#FE7A15] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
                  >
                    For Specialists
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
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
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <NavLink
                  href="/home"
                  activeclassname="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </NavLink>
                <NavLink
                  href="/about"
                  activeclassname="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </NavLink>

                <NavLink
                  href="/work"
                  activeclassname="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </NavLink>
                <NavLink
                  href="/services"
                  activeclassname="services"
                  to="services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </NavLink>

                <NavLink
                  href="/contact"
                  activeclassname="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
