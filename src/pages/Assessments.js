import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Autism from "../images/child autism.png";
import { Link } from "react-router-dom";

const Assessments = () => {
  return (
    <div>
      <Navbar />
      <div className="flex my-10 relative left-[10%]">
        <img src={Autism} alt="" className="w-[450px]" />
        <div className="">
          <div className="text-3xl font-bold ">
            Screen your child for Autism
          </div>
          <div className=" text-gray-500 mt-8">
            For early childhood (18-36 months)
          </div>
          <div className=" text-gray-500 mt-12 w-[63%]">
            Children with Autism Spectrum Disorder (ASD) think and view the
            world differently. Their symptoms vary widely, but commonly show
            challenges with social skills, behaviours and communication as with
            everything else, early intervention is of utmost importance.
          </div>
          <div className="font-semibold text-gray-600 mt-12">
            Take this quick 5-min quiz
          </div>
          <Link to="/screening">
            <button className="bg-[#0191B4] px-5 py-2 rounded-2xl font-bold text-white">
              Start
            </button>
          </Link>
          <Link to="/autism">
            <div className="font-semibold text-[#FE7A15] mt-6 cursor-pointer">
              Know More About Autism
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Assessments;
