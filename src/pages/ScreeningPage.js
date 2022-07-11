/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ScreeningPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#0191B4]">
        <div className="text-center md:text-4xl  text-2xl font-bold text-white pt-28">
          Autism Screening Tool
        </div>
        <div className="md:mx-28 mx-5 md:mt-10 mt-5 md:text-xl text-sm font-semibold text-white pb-16">
          1 in 58 children is estimated to have Autism Spectrum Disorder. ASD
          affects child’s social interaction and communication skills and these
          children display restricted and repetitive behaviour patterns. ASD can
          be identified in children from 18 months of age and reliably diagnosed
          from 2 years of age. Early intervention gives the child the best
          chance of success in living a productive life.
        </div>
      </div>
      <div className="mt-10">
        <div className="md:text-4xl text-2xl text-center font-bold">
          Know if your child is showing ASD traits?
        </div>
      </div>
      <div className="justify-center md:my-20 my-10">
        <iframe
          src="https://www.cognitoforms.com/f/bVGDwp8FUUSd87xqjt8kag/1"
          height="869"
          className="md:w-[1400px] w-[350px]"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default ScreeningPage;
