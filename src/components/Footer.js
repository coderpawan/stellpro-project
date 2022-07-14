import React from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { AiTwotonePhone, AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div class="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
      <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
        <ul class="text-lg pb-8 flex">
          <li class="w-1/4 md:w-1/3 mx-4">
            <div class="text-center">
              <h2 class="text-gray-500 dark:text-gray-200 text-sm md:text-xl uppercase mb-4">
                Navigations
              </h2>
              <ul>
                <li class="md:mb-4 mb-1 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 md:text-xl text-[12px]">
                  <Link to="/">Home</Link>
                </li>
                <li class="md:mb-4 mb-1 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 md:text-xl text-[12px]">
                  <Link to="/blogs">Blog</Link>
                </li>
                <li class="md:mb-4 mb-1 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 md:text-xl text-[12px]">
                  <Link to="/searchdetails">Find Specialists</Link>
                </li>
                <li class="md:mb-4 mb-1 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 md:text-xl text-[12px]">
                  <Link to="/assessments">Assessments</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="w-1/4 md:w-1/3">
            <div class="text-center">
              <h2 class="text-gray-500 dark:text-gray-200 md:text-xl text-sm uppercase mb-4">
                Policies
              </h2>
              <ul>
                <li class="md:mb-4 mb-1 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 md:text-xl text-sm">
                  <Link to="/terms">T&C</Link>
                </li>
                <li class="md:mb-4 mb-1 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 md:text-xl text-sm">
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="w-1/3">
            <div class="text-center">
              <h2 class="text-gray-500 dark:text-gray-200 md:text-xl text-sm uppercase mb-4">
                Get In Touch
              </h2>
              <ul>
                <li class="md:mb-4 mb-1 hover:text-gray-800 dark:hover:text-white relative md:left-32 transition-colors duration-200">
                  <Link to="/" className="flex">
                    <IoLocationSharp className="text-3xl md:text-xl relative md:bottom-0 bottom-1" />
                    <div className="md:ml-0 ml-3 md:text-sm text-[9px] md:left-0 md:bottom-0 md:w-[50%] relative right-4 top-1 leading-4">
                      JASAS C-58/8, SECTOR-62, NOIDA ,UP ,201301
                    </div>
                  </Link>
                </li>
                <li class="md:mb-4 mb-1 hover:text-gray-800 dark:hover:text-white relative md:left-32 transition-colors duration-200">
                  <a href="mailto:connect@demdee.com" className="flex">
                    <GrMail />
                    <div className="md:text-sm text-[10px] relative md:left-4 md:bottom-0 left-2 bottom-1 md:w-[35%]">
                      connect@demdee.com
                    </div>
                  </a>
                </li>
                <li class="md:mb-4 mb-1 hover:text-gray-800 dark:hover:text-white relative md:left-32 transition-colors duration-200">
                  <a href="tel:+91 8826241114" className="flex">
                    <AiTwotonePhone />
                    <div className="md:text-sm text-[10px] relative left-2 bottom-1 md:left-0 md:bottom-0 md:w-[35%]">
                      +91 8826241114
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="pt-8 flex border-t border-gray-200 max-w-[150px] mx-auto items-center justify-between">
          <a href="/">
            <FaFacebookF className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" />
          </a>
          <a href="/">
            <BsTwitter className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" />
          </a>
          <a href="/">
            <AiFillInstagram className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" />
          </a>
        </div>
        <div class="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          Stellprolearning © 2022
        </div>
      </div>
    </div>
  );
};

export default Footer;
