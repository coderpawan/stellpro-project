/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ScreeningPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#0191B4]">
        <div className="text-center text-4xl font-bold text-white pt-28">
          Autism Screening Tool
        </div>
        <div className="mx-28 mt-10 text-xl font-semibold text-white pb-16">
          1 in 58 children is estimated to have Autism Spectrum Disorder. ASD
          affects child’s social interaction and communication skills and these
          children display restricted and repetitive behaviour patterns. ASD can
          be identified in children from 18 months of age and reliably diagnosed
          from 2 years of age. Early intervention gives the child the best
          chance of success in living a productive life.
        </div>
      </div>
      <div className="mt-10">
        <div className="text-4xl text-center font-bold">
          Know if your child is showing ASD traits?
        </div>
      </div>
      <div className="justify-center my-20">
        <iframe
          src="https://www.cognitoforms.com/f/bVGDwp8FUUSd87xqjt8kag/1"
          height="869"
          width="1400"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default ScreeningPage;
