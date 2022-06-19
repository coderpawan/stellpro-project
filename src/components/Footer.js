import React from "react";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { AiTwotonePhone, AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div class="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
      <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
        <ul class="text-lg font-light pb-8 flex flex-wrap justify-center">
          <li class="w-1/2 md:w-1/3 lg:w-1/3">
            <div class="text-center">
              <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Navigations
              </h2>
              <ul>
                <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link to="/">Home</Link>
                </li>
                <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link to="/blogs">Blog</Link>
                </li>
                <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link to="/searchdetails">Find Specialists</Link>
                </li>
                <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link to="/assessments">Assessments</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="w-1/2 md:w-1/3 lg:w-1/3">
            <div class="text-center">
              <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Policies
              </h2>
              <ul>
                <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link to="/terms">T&C</Link>
                </li>
                <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="w-1/2 md:w-1/3 lg:w-1/3">
            <div class="text-center">
              <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Get In Touch
              </h2>
              <ul>
                <li class="mb-4 hover:text-gray-800 dark:hover:text-white relative left-32 transition-colors duration-200">
                  <Link to="/" className="flex">
                    <MdLocationPin />
                    <div className="ml-3 text-sm w-[50%]">
                      #3, 14th main, HSR Layout Block 5 c/o Social Alpha,
                      Bengaluru, Karnataka 560102
                    </div>
                  </Link>
                </li>
                <li class="mb-4 hover:text-gray-800 dark:hover:text-white relative left-32 transition-colors duration-200">
                  <a href="mailto:someone@example.com" className="flex">
                    <GrMail />
                    <div className=" text-sm w-[35%]">Hello@gmail.com</div>
                  </a>
                </li>
                <li class="mb-4 hover:text-gray-800 dark:hover:text-white relative left-32 transition-colors duration-200">
                  <a href="tel:+91 9749568594" className="flex">
                    <AiTwotonePhone />
                    <div className=" text-sm w-[35%]">+91 9749568594</div>
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
          stellprolearning © 2021
        </div>
      </div>
    </div>
  );
};

export default Footer;
