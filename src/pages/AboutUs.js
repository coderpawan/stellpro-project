import React from "react";
import Logo from "../images/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConsultantData from "../data/ConsultantData";
import ExpertData from "../data/ExpertData";
import Pic1 from "../images/aboutus1.jpeg";
import Bulb from "../images/bulb.png";
import Search from "../images/search.png";
import Settings from "../images/settings.png";
import Community from "../images/community.png";
import Pic2 from "../images/About1.png";
import Pic3 from "../images/About2.png";
import Pic4 from "../images/About3.png";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex pt-28 pb-16 bg-blue-200 justify-center">
        <div className="w-[35%]">
          <img src={Logo} alt="" className="h-12" />
          <div className="mt-2 text-xl">
            Demdee is a wholistic child development platform that is inclusive
            and accessible. We believe in empowering parents and the specialist
            ecosystem to give every child the opportunity to shine to their true
            potential
          </div>
        </div>
        <img src={Pic1} alt="" className="h-40 ml-[200px]" />
      </div>

      <div className="">
        <div className="flex mx-20 mt-20">
          <div className="w-[20%] mx-10">
            <div className="bg-[url('images/doodle.png')] py-7 text-center bg-cover">
              <span className="font-bold text-4xl text-orange">D</span>
              <span className="font-bold text-4xl text-white">iscover</span>
            </div>
            <div className="text-deepblue border-2 border-solid border-emerald-600 text-center py-2 text-xl font-bold rounded-xl">
              Resources
            </div>
            <img
              src={Search}
              alt=""
              className="h-32 relative left-[15%] my-4"
            />
            <div className="justify-center text-center text-deepblue text-xl font-bold mx-5">
              Find doctors, therapists, and educators
            </div>
            <div className="justify-center mt-4 text-center text-deepblue text-xl font-bold mx-5">
              Programs for parents and children from top specialists in the
              country
            </div>
          </div>
          <div className="w-[20%] mx-10">
            <div className="bg-[url('images/doodle.png')] py-7 text-center bg-cover">
              <span className="font-bold text-4xl text-orange">Em</span>
              <span className="font-bold text-4xl text-white">power</span>
            </div>
            <div className="text-deepblue border-2 border-solid border-emerald-600 text-center py-2 text-xl font-bold rounded-xl">
              Young Minds
            </div>
            <img src={Bulb} alt="" className="h-32 relative left-[15%] my-4" />
            <div className="justify-center text-center text-deepblue text-xl font-bold mx-5">
              One on one sessions, access to quality resources from across the
              country
            </div>
          </div>
          <div className="w-[20%] mx-10">
            <div className="bg-[url('images/doodle.png')] py-7 text-center bg-cover">
              <span className="font-bold text-4xl text-orange">De</span>
              <span className="font-bold text-4xl text-white">velop</span>
            </div>
            <div className="text-deepblue border-2 border-solid border-emerald-600 text-center py-2 text-xl font-bold rounded-xl">
              Ecosystem
            </div>
            <img
              src={Settings}
              alt=""
              className="h-32 relative left-[15%] my-4"
            />
            <div className="justify-center text-center text-deepblue text-xl font-bold mx-5">
              One inclusive platform for families and professionals helping
              children with developmental difficulties
            </div>
          </div>
          <div className="w-[20%] mx-10">
            <div className="bg-[url('images/doodle.png')] py-7 text-center bg-cover">
              <span className="font-bold text-4xl text-orange">E</span>
              <span className="font-bold text-4xl text-white">ducate</span>
            </div>
            <div className="text-deepblue border-2 border-solid border-emerald-600 text-center py-2 text-xl font-bold rounded-xl">
              Community
            </div>
            <img
              src={Community}
              alt=""
              className="h-32 relative left-[15%] my-4"
            />
            <div className="justify-center text-center text-deepblue text-xl font-bold mx-5">
              Advocacy and Awareness through the platform
            </div>
            <div className="justify-center mt-4 text-center text-deepblue text-xl font-bold mx-5">
              Finding your community through the platform’s forum
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center mt-16">
          <div className="w-[27%]">
            <img src={Pic2} alt="" className="" />
            <div className="p-10 bg-deepblue">
              <div className="text-5xl font-bold text-center text-green">
                1 in 8
              </div>
              <div className="text-3xl text-white mt-4 text-center">
                Children in India
              </div>
              <div className="text-xl text-center italic text-white">
                between 2-9 years have
              </div>
              <div className="text-green text-center text-3xl mt-2 font-bold">
                neurodevelopmental disorders*
              </div>
              <div className="text-xl text-center italic mt-1 text-white">
                & many more have developmental delays and concerns
              </div>
            </div>
          </div>
          <div className="w-[27%]">
            <div className="p-11 bg-green text-center leading-[45px]">
              <span className="text-blue-700 text-2xl font-bold">
                There is{" "}
              </span>
              <span className="text-blue-700 text-3xl font-bold">
                no top-of-mind{" "}
              </span>
              <span className="text-blue-700 text-3xl font-bold">
                platform{" "}
              </span>
              <span className="text-blue-700 text-2xl font-bold">to </span>
              <span className="text-white text-3xl font-bold">
                connect specialists{" "}
              </span>
              <span className="text-blue-700 text-2xl font-bold">
                including doctors , therapists, special educators{" "}
              </span>
              <span className="text-blue-700 text-3xl font-bold">with </span>
              <span className="text-white text-3xl font-bold">parents</span>
            </div>
            <img src={Pic3} alt="" className="" />
          </div>
          <div className="w-[27%]">
            <img src={Pic4} alt="" className="" />
            <div className="p-10 bg-deepblue leading-8">
              <div className="text-center italic">
                <span className="text-blue-900 text-3xl font-bold ">Low </span>
                <span className="text-white text-3xl font-bold">
                  awareness{" "}
                </span>
                <span className="text-blue-900 text-3xl font-bold">, </span>
              </div>
              <div className="text-center italic">
                <span className="text-blue-900 text-3xl font-bold ">Low </span>
                <span className="text-blue-900 text-3xl font-bold">
                  acceptance{" "}
                </span>
                <span className="text-blue-900 text-3xl font-bold">, </span>
              </div>
              <div className="text-center italic">
                <span className="text-blue-900 text-3xl font-bold ">High </span>
                <span className="text-white text-3xl font-bold">costs </span>
                <span className="text-blue-900 text-3xl font-bold">& </span>
              </div>
              <div className="text-center italic">
                <span className="text-blue-900 text-3xl font-bold ">
                  Lack of{" "}
                </span>
                <span className="text-white text-3xl font-bold">
                  resources{" "}
                </span>
              </div>
              <div className="text-white text-center">
                <span className="text-3xl font-bold">Stop </span>
                <span className="text-2xl">many </span>
                <span className="text-3xl font-bold">parents </span>
                <span className="text-2xl">from seeking timely </span>
                <span className="text-3xl font-bold">professional help </span>
              </div>
            </div>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>

      <div className="relative left-[10%] mt-12">
        <div className="font-bold text-orange">| &nbsp; Title</div>
        <div className="text-2xl font-bold mt-5">Clinical Consultant</div>
        {ConsultantData.map((post) => {
          return (
            <div className="flex mt-5 p-5 w-[70%] shadow-md rounded-xl border-solid border-2 border-gray-200">
              <img src={post.Image} alt="" className="w-44" />
              <div className="ml-4">
                <div className="text-xl font-bold ">{post.Name}</div>
                <div className="text-sm mt-2 text-gray-600">
                  {post.Specialisation}
                </div>
                <div className="text-sm mt-2 text-gray-600">{post.About}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative left-[10%] mt-12 mb-12">
        <div className="font-bold text-orange">| &nbsp; Title</div>
        <div className="text-2xl font-bold mt-5">Clinical Expert</div>
        {ExpertData.map((post) => {
          return (
            <div className="flex mt-5 p-5 w-[70%] shadow-md rounded-xl border-solid border-2 border-gray-200">
              <img src={post.Image} alt="" className="w-44" />
              <div className="ml-4">
                <div className="text-xl font-bold ">{post.Name}</div>
                <div className="text-sm mt-2 text-gray-600">
                  {post.Specialisation}
                </div>
                <div className="text-sm mt-2 text-gray-600">{post.About}</div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
