import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Artboard2 from "../images/earning.png";
import Artboard3 from "../images/hostrecord.png";
import Artboard4 from "../images/listing.png";
import Care from "../images/care.png";

const Specialists = () => {
  return (
    <div>
      <Navbar />
      <div className="flex bg-gray-100 w-[80%] relative left-[10%] px-20 py-16 rounded-2xl">
        <img src={Care} alt="" className="w-[40%] py-16" />
        <div className="w-[40%] ml-16">
          <div className="text-xl font-bold text-gray-600 text-center mt-24">
            Are you a specialist who can help children 2-12 in their
            developmental journey?
          </div>
          {/* <div className="text-2xl mt-6 px-10 font-bold bg-[#0191b4] text-center text-white py-2 rounded-2xl">
            Become a DemDee Professional
          </div>
          <div className="text-xl text-gray-400 text-center mt-8">
            Work from home, earn and build your practice
          </div> */}
          <div className="flex mt-8">
            <div className="bg-[#fe7a15] px-12 py-2 rounded-lg mr-5 text-sm font-bold text-white">
              CTA1: List with us
            </div>
            <div className="bg-green px-12 py-2 rounded-lg mr-5 text-sm font-bold text-white">
              CTA2: Become a Program Partner
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[20%] mx-20 my-20">
          <img src={Artboard2} alt="" className="" />
          <div className=" mt-2">
            <div className="text-center text-2xl font-bold mt-6">
              Secured Earnings
            </div>
            <div className="text-xl mt-3">
              Earn per session starting from Rs 250 –Rs 500 depending on your
              experience
            </div>
          </div>
        </div>
        <div className="w-[20%] mx-20 my-20">
          <img src={Artboard3} alt="" className="" />
          <div className=" mt-2">
            <div className="text-center text-2xl font-bold mt-6">
              Flexibility
            </div>
            <div className="text-xl mt-3">
              Work from Anywhere, set your own work hours
            </div>
          </div>
        </div>
        <div className="w-[20%] mx-20 my-20">
          <img src={Artboard4} alt="" className="" />
          <div className=" mt-2">
            <div className="text-center text-2xl font-bold mt-6">
              Grow with Us
            </div>
            <div className="text-xl mt-3">
              Gain experience and visibility Pan India , be part of upskilling
              programs.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] relative left-[15%] pb-12 mb-12">
        <div className="font-extrabold text-3xl text-center px-48 pt-10">
          If you meet the requirements below,{" "}
          <span className="text-[#0191b4]">APPLY NOW</span>
        </div>
        <div className="flex mt-8">
          <div className="w-[30%]">
            <div className="font-bold text-lg ">You are a:</div>
            <div className="text-gray-500">
              <div className="ml-5">
                <span className="text-4xl font-bold relative bottom-1">.</span>
                <span className="ml-2">Behaviour Therapist</span>
              </div>
              <div className="ml-5">
                <span className="text-4xl font-bold relative bottom-1">.</span>
                <span className="ml-2">Child Psychologist</span>
              </div>
              <div className="ml-5">
                <span className="text-4xl font-bold relative bottom-1">.</span>
                <span className="ml-2">Occupational Therapist</span>
              </div>
              <div className="ml-5">
                <span className="text-4xl font-bold relative bottom-1">.</span>
                <span className="ml-2">Remediation Expert</span>
              </div>
              <div className="ml-5">
                <span className="text-4xl font-bold relative bottom-1">.</span>
                <span className="ml-2">Special Educator</span>
              </div>
              <div className="ml-5">
                <span className="text-4xl font-bold relative bottom-1">.</span>
                <span className="ml-2">Speech Therapist</span>
              </div>
            </div>
          </div>
          <div className=" w-[30%]">
            <div className="font-bold text-lg ">You have:</div>
            <div className="text-gray-500">
              <div className="ml-5">
                <span className="text-4xl font-bold relative bottom-1">.</span>
                <span className="ml-2">
                  relevant work experience of 2-12 years
                </span>
              </div>
              <div className="ml-5">
                <span className="text-4xl font-bold relative bottom-1">.</span>
                <span className="ml-2">a stable internet connection</span>
              </div>
              <div className="ml-5">
                <span className="text-4xl font-bold relative bottom-1">.</span>
                <span className="ml-2">a laptop to attend sessions</span>
              </div>
            </div>
          </div>
          <div className="ml-12 w-[30%]">
            <div className="font-bold text-lg ">You are available:</div>
            <div className="text-gray-500">
              <div className="ml-5">
                <span className="text-4xl font-bold relative bottom-1">.</span>
                <span className="ml-2">At least 10 - 15 hours a week.</span>
              </div>
              <div className="ml-5">
                <span className="text-4xl font-bold relative bottom-1">.</span>
                <span className="ml-2">
                  Preferably in the evenings and over the weekend, due to higher
                  demand
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Specialists;
