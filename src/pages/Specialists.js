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
      <div className="md:flex bg-gray-100 w-[80%] relative left-[10%] md:px-20 px-3 pt-16 rounded-2xl">
        <img src={Care} alt="" className="md:w-[45%] pt-10 pb-5" />
        <div className="md:w-[50%] md:ml-16 md:mt-10">
          <div className="text-xl font-bold text-gray-600 text-center md:mt-24 ">
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
            <a
              href="https://forms.gle/WiwgU2ZCHZN2ET157"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#fe7a15]  px-3 md:px-7 py-2 rounded-lg mr-5 text-sm md:text-xl font-bold text-white">
                List with us
              </div>
            </a>
            <a
              href="https://forms.gle/6ttB8CwSkFkLZxK19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-green  px-3 md:px-7 py-2 rounded-lg mr-5 text-sm md:text-xl font-bold text-white">
                Become a Program Partner
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center">
        <div className="md:w-[20%] md:mx-20 mx-3 md:my-20 my-10">
          <img src={Artboard2} alt="" className="" />
          <div className=" mt-2">
            <div className="text-center text-2xl font-bold mt-6">
              Incremental Earnings
            </div>
            <div className="text-xl mt-3">
              <div className="">
                More leads for any setup (At the centre, online, or at home)
              </div>
              <a
                href="https://forms.gle/WiwgU2ZCHZN2ET157"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-[#fe7a15] px-7 relative md:left-[20%]  left-[30%]  py-1 w-fit mt-3 rounded-lg mr-5 text-xl font-bold text-white">
                  List here
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-[20%] md:mx-20 mx-3 md:my-20 my-10">
          <img src={Artboard3} alt="" className="" />
          <div className=" mt-2">
            <div className="text-center text-2xl font-bold mt-6">
              Flexibility
            </div>
            <div className="text-xl mt-3">
              Host Recorded or Live Programs to increase your reach across the
              globe
            </div>
          </div>
        </div>
        <div className="md:w-[20%] md:mx-20 mx-3 md:my-20 my-10">
          <img src={Artboard4} alt="" className="" />
          <div className=" mt-2">
            <div className="text-center text-2xl font-bold mt-6">
              Grow with Us
            </div>
            <div className="text-xl mt-3">
              Promote with us by listing your course or workshop details with
              Demdee and as guest blog writer
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-[70%] relative left-[15%] pb-12 mb-12">
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
      </div> */}
      <Footer />
    </div>
  );
};

export default Specialists;
