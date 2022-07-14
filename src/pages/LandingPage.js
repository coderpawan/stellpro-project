import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Doctors from "../images/Picture1.png";

import WhiteProLogo from "../images/white pro logo.jpeg";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import Artboard1 from "../images/whatwedo.jpeg";
import ChildAssesment from "../images/Child Assessment.jpeg";
import FindSpecialist from "../images/FindSpecialist.jpeg";
import OnlineSession from "../images/OnlineSession.jpeg";
import ResourcesPrograms from "../images/Programs.jpeg";
import JoinCommunity from "../images/JoinCommunity.jpeg";
import Data from "../data/BlogsData";

const Cards = ({ title, content, image, link, externallink }) => {
  return (
    <div>
      {link ? (
        <Link to={`${link}`}>
          <div class="md:max-w-[190px] my-3 md:my-auto md:border-none border-solid border-gray-100 border-2 flex md:block rounded-2xl overflow-hidden shadow-2xl mx-5">
            <img
              class="md:w-full w-[50%] h-20 md:h-auto md:mt-auto md:ml-auto mt-2 ml-3"
              src={image}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-gray-600 text-xl mb-2">{title}</div>
              <p class="text-gray-700 text-base">{content}</p>
            </div>
          </div>
        </Link>
      ) : externallink ? (
        <a href={externallink} target="_blank" rel="noopener noreferrer">
          <div class="md:max-w-[190px] my-3 md:my-auto md:border-none border-solid border-gray-100 border-2 flex md:block rounded-2xl overflow-hidden shadow-2xl mx-5">
            <img
              class="md:w-full w-[50%] h-20 md:h-auto md:mt-auto md:ml-auto mt-2 ml-3"
              src={image}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-gray-600 text-xl mb-2">{title}</div>
              <p class="text-gray-700 text-base">{content}</p>
            </div>
          </div>
        </a>
      ) : (
        <div
          onClick={() => {
            alert("This Service will be coming soon");
          }}
          class="md:max-w-[190px] my-3 md:my-auto md:border-none border-solid border-gray-100 border-2 flex md:block rounded-2xl overflow-hidden shadow-2xl mx-5"
        >
          <img
            class="md:w-full w-[50%] h-20 md:h-auto md:mt-auto md:ml-auto mt-2 ml-3"
            src={image}
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-gray-600 text-xl mb-2">{title}</div>
            <p class="text-gray-700 text-base">{content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className=""></div>

      <div className="flex flex-col-reverse md:flex-row justify-center md:mt-24 mt-14 md:mx-20 mx-3">
        <div className="md:w-[55%] text-center mt-3">
          <div className="text-deepblue md:text-4xl font-bold italic">
            At demdee, we are on a mission to make child development inclusive
            and accessible
          </div>
          <div className="md:mt-12 mt-3 text-gray-600 text-sm md:text-2xl">
            We want to make finding intervention services and resources
            effortless , so that you have one less thing to worry about.
          </div>
        </div>
        <img
          src={Artboard1}
          alt=""
          className="md:h-96 h-56 rounded-xl md:ml-16"
        />
      </div>
      <div className="md:mt-24 mt-10">
        <div className="md:text-5xl text-2xl text-gray-600 text-center">
          Services We Offer{" "}
        </div>
        <div className="md:flex my-10 justify-center">
          <Cards
            title="Find Specialists Near You"
            // content="Lorem ipsum dolor sit amet."
            image={FindSpecialist}
            link="/searchdetails"
          />
          <Cards
            title="Book Online Sessions"
            // content="Lorem ipsum dolor sit amet."
            image={OnlineSession}
          />
          <Cards
            title="Take Child Assessment"
            // content="Lorem ipsum dolor sit amet."
            image={ChildAssesment}
            link="/assessments"
          />
          <Cards
            title="Resources and Programs"
            // content="Lorem ipsum dolor sit amet."
            image={ResourcesPrograms}
            externallink="https://shashiyadav6219.ongraphy.com/"
          />
          <Cards
            title="Join Community"
            // content="Lorem ipsum dolor sit amet."
            image={JoinCommunity}
            link="/community"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row bg-[#0191B4] md:my-20 my-10 md:mx-16 mx-3 rounded-3xl">
        <div className="text-center md:px-20 px-3 md:py-12 py-6 md:w-[60%]">
          <div className="md:text-4xl text-2xl md:px-20 md:pt-6 text-white">
            Connect with Child Specialists Online at
          </div>
          <img
            src={WhiteProLogo}
            alt=""
            className="md:w-[50%] w-[75%] relative md:left-40 left-10"
          />
          <div className="md:text-xl text-sm font-bold text-white">
            Get professional help for children aged 2-10 years with academic,
            speech, behavioral, motor and sensory delays or concerns
          </div>
          <div className="flex justify-center">
            <button className="md:px-6 px-2 md:py-2 py-1 md:text-lg text-[12px] font-bold text-white border-2 mt-6 rounded-xl bg-[#FE7A15] hover:bg-[#f8d90f] hover:text-[#0191B4]">
              BOOK A FREE CONSULTATION
            </button>
            {/* <Link to="care">
              <button className="px-6 ml-3 md:py-3 py-1 font-bold text-white md:text-sm border-2 mt-6 rounded-xl bg-[#35bbca] hover:bg-[#f8d90f] hover:text-[#0191B4]">
                KNOW MORE
              </button>
            </Link> */}
          </div>
        </div>
        <img
          src={Doctors}
          alt=""
          className="md:w-[30%] w-[80%] relative left-[10%]"
        />
      </div>
      <Testimonial />
      <div className="md:py-16 mb-10 mt-10 md:mt-0">
        <div className="md:text-5xl text-3xl font-bold text-gray-600 text-center">
          Blogs
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12  py-10">
          {Data.slice(0, 3).map((post) => {
            return (
              <div class="overflow-hidden shadow-lg rounded-2xl h-90 w-60 md:w-80 cursor-pointer m-auto">
                <div class="w-full block h-full">
                  <div class="bg-white  w-full p-4">
                    <Link to={`/blogs/${post.link}`}>
                      <img
                        alt="blogphoto"
                        src={post.image}
                        class="max-h-40 w-full object-cover mb-4 rounded-3xl"
                      />
                      <p class="text-black text-xl font-bold text-center px-3 text-md">
                        {post.topic}
                      </p>

                      {/* <p class="text-gray-400 text-center mt-5 mb-2">
                        {post.date} in{" "}
                        <span className="text-black">{post.tag}</span>
                      </p> */}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/blogs">
          <div className="bg-orange cursor-pointer px-8 py-2 rounded-xl mt-6 w-fit relative left-[45%] text-white font-bold">
            More Blogs
          </div>
        </Link>
      </div>
      {/* <div className="fixed left-[75%] top-[510px] flex bg-gradient-to-r from-[#d3dd18] to-[#ffffff] rounded-2xl z-50">
        <div className="w-36 ml-3 mt-2">
          <img src={Logo} alt="" className="w-20" />
          <div className="mt-3">
            <span className="font-extrabold">FREE</span>
            <span className="font-bold ml-1">Consultation</span>
          </div>
          <div className="text-[12px]">with Demdee Care surgeon</div>
          <Link to="care">
            <button className="mt-3 text-[10px] px-2 py-1 bg-[#fe7a15] rounded-[8px]">
              KNOW MORE
            </button>
          </Link>
        </div>
        <img src={Care1} alt="" className="w-40 rounded-b-2xl" />
      </div> */}

      <Footer />
    </div>
  );
};

export default LandingPage;
