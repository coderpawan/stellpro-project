import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Doctor from "../images/doctors.png";
import ConsultantData from "../data/ConsultantData";
import ExpertData from "../data/ExpertData";
import Pic1 from "../images/aboutus1.jpeg";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex pt-28 pb-16 bg-blue-200 justify-center">
        <div className="w-[35%]">
          <div className="font-bold text-3xl ">Demdee Team</div>
          <div className="">
            Demdee is innovation and research driven holistic care provider for
            children with Special Needs and operates through Home-Based Program
            as well as extensive list of Therapy Centres & Inclusive Schools
            across the globe.
          </div>
        </div>
        <img src={Pic1} alt="" className="h-40 ml-[200px]" />
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
