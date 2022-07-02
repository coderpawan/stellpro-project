import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Pic1 from "../images/mildautism1.png";
// import Pic2 from "../images/mildautism2.png";
// import Pic3 from "../images/mildautism3.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { RiSignalTowerFill } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import Recommended from "../data/RecommendedData";
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";

const MildAutism = () => {
  const url = window.location.href;
  return (
    <div>
      <Navbar />
      <div className="flex mx-28 pt-28 mb-16">
        <div className=" w-[70%]">
          <div className="flex">
            <div className="text-3xl my-4 font-bold">
              Mild Autism: Definition and Signs
            </div>
            <div className="ml-20 relative top-6"> ~ Posted on 23 Jun 2022</div>
          </div>
          <div className=""></div>
          <div className="text-2xl my-4">Final Thoughts</div>
          <div className="">
            According to earlier estimates from 2007, ADHD in females stays
            untreated between 50 and 75 percent of the time. However, greater
            knowledge of the particular ways in which females experience ADHD
            symptoms can assist them in receiving the appropriate diagnosis and
            treatment. This assistance may significantly impact their academic
            achievement and personal connections, not to mention their entire
            mental health and well-being.
          </div>
          <div className="my-4">
            Just knowing your child has ADHD can lift her weight of guilt and
            improve her self-esteem. It can also liberate her from the negative
            labels of "spacey," "unmotivated," "dumb," or "lazy." Your child
            isn't any of those things; she has ADHD.{" "}
          </div>

          <div className="flex mt-12">
            <div className="">Share This With Your Friends</div>
            <FacebookShareButton url={url}>
              <div className="flex cursor-pointer border-solid border-blue-900 border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
                <FaFacebookF className="relative top-1 text-blue-900" />
                <div className="ml-3 text-blue-900 font-bold">SHARE</div>
              </div>
            </FacebookShareButton>
            <TwitterShareButton url={url}>
              <div className="flex cursor-pointer border-solid border-blue-400 border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
                <BsTwitter className="relative top-1 text-blue-400" />
                <div className="ml-3 text-blue-400 font-bold">TWEET</div>
              </div>
            </TwitterShareButton>
            <WhatsappShareButton url={url}>
              <div className="flex cursor-pointer border-solid border-emerald-600 border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
                <BsWhatsapp className="relative top-1 text-emerald-600" />
                <div className="ml-3 text-emerald-600 font-bold">SHARE</div>
              </div>
            </WhatsappShareButton>
            <div className="flex cursor-pointer border-solid border-orange border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
              <RiSignalTowerFill className="relative top-1 text-orange" />
              <div className="ml-3 text-orange font-bold">SUBSCRIBE</div>
            </div>
          </div>
        </div>
        <div className="w-[27%]">
          <div className="border-solid border-2 border-gray-200 rounded-lg ml-5">
            <div className="flex relative left-3 mt-3 mb-2">
              <IoDocumentTextOutline className="text-orange-400" />
              <div className="text-[12px] font-bold text-orange-400 ml-1">
                RECOMMENDED CONTENT
              </div>
            </div>
            <div className="h-[2px] bg-gray-200 w-[90%] relative left-3"></div>
            {Recommended.map((props) => {
              return (
                <div className="flex my-3">
                  <img
                    src={props.image}
                    alt=""
                    className="h-14 relative left-3"
                  />
                  <div className="ml-5 text-[12px] mr-14 text-blue-500">
                    {props.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MildAutism;
