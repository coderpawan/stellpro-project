import React from "react";
import Navbar from "../components/Navbar";
import LogoPro from "../images/white pro logo.jpeg";
import Care1 from "../images/care.png";
import { GrUserManager, GrNotes } from "react-icons/gr";
import { FaRegHandshake } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import House from "../images/house.png";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import AnalFissure from "../images/anal-fissure.webp";
import GeneralSurgery from "../images/general-surgery.webp";
import Appendicitis from "../images/appendicitis.webp";
import Circumcision from "../images/circumcision.webp";
import GallStones from "../images/gall-stones.webp";
import Hernia from "../images/hernia.webp";
import lipomaRemoval from "../images/lipoma-removal.webp";
import KidneyStone from "../images/kidney-stone.webp";
import Piles from "../images/piles.webp";
import PilonidalSinus from "../images/pilonidal-sinus.webp";
import Varicose from "../images/varicose-veins.webp";
import { IoLocationOutline } from "react-icons/io5";
import { RiThumbUpFill } from "react-icons/ri";
import Shubhangi from "../images/Shubhangi.jpg";

const StellproCare = () => {
  return (
    <div>
      <Navbar />

      <div className="flex bg-[#0191B4] mb-20 pb-20 pt-16 mx-28">
        <div className=" ml-16">
          <img src={LogoPro} alt="" className="w-[65%]" />
          <div className="ml-10">
            <div className="text-5xl font-bold text-white w-[95%]">
              Experts in end to end surgical care
            </div>
            <div className="w-20 h-1 bg-white my-8"></div>
            <div className="text-white text-2xl w-[90%]">
              We bring expertise,care and technology together to give you
              end-to-end surgical solutions for 50+ ailments
            </div>
            <button className="bg-white px-28 font-semibold rounded-xl mt-16 py-3">
              Call 0804-568-6920
            </button>
          </div>
        </div>
        <img src={Care1} alt="" className="h-[60vh] relative top-20 right-16" />
      </div>
      <div className="flex">
        <div className="ml-36 w-[45%]">
          <div className="flex my-7">
            <div className="px-3 py-3 bg-gray-200 rounded-full">
              <GrUserManager className="text-2xl" />
            </div>
            <div className="mt-3 ml-4">
              Expert surgeons with 10+ years of experience
            </div>
          </div>
          <div className="flex my-7">
            <div className="px-3 py-3 bg-gray-200 rounded-full">
              <GrNotes className="text-2xl" />
            </div>
            <div className="mt-3 ml-4">Advanced Surgical Technologies</div>
          </div>
          <div className="flex my-7">
            <div className="px-3 py-3 bg-gray-200 rounded-full">
              <FaRegHandshake className="text-2xl" />
            </div>
            <div className="mt-3 ml-4">Personal Care Assistants</div>
          </div>
          <div className="flex my-7">
            <div className="px-3 py-3 bg-gray-200 rounded-full">
              <BiRupee className="text-2xl" />
            </div>
            <div className="mt-3 ml-4">Financial Aid & Assistance</div>
          </div>
          <div className="flex my-7">
            <div className="px-3 py-3 bg-gray-200 rounded-full">
              <MdOutlineHealthAndSafety className="text-2xl" />
            </div>
            <div className="mt-3 ml-4">
              High quality,affordable surgical procedures
            </div>
          </div>
          <div className="h-2 bg-gray-200 mt-2 mb-8"></div>
          <div className="flex mb-8">
            <div className="mx-16">
              <div className="text-center text-3xl font-bold text-blue-800">
                200+
              </div>
              <div className="">surgeons</div>
            </div>
            <div className="mx-16">
              <div className="text-center text-3xl font-bold text-blue-800">
                30+
              </div>
              <div className="">clinics</div>
            </div>
            <div className="mx-16">
              <div className="text-center text-3xl font-bold text-blue-800">
                50+
              </div>
              <div className="">procedures</div>
            </div>
          </div>
          <div className="flex bg-green-200 mb-10 px-8 rounded-2xl py-3">
            <img src={House} alt="" className="w-20" />
            <div className="ml-4 ">
              <div className="">
                <span className="text-3xl font-bold text-blue-800">7+</span>
                <span className="ml-3 relative bottom-1">Locations</span>
              </div>
              <div className="">
                <span>BANGALORE</span>
                <span className="font-extrabold relative bottom-1 mx-1">.</span>
                <span>MUMBAI</span>
                <span className="font-extrabold relative bottom-1 mx-1">.</span>
                <span>DELHI</span>
                <span className="font-extrabold relative bottom-1 mx-1">.</span>
                <span>4+</span>
                <span>CITIES</span>
              </div>
            </div>
          </div>
          <div className="h-2 bg-gray-200 mt-2 mb-8"></div>
          <div className="">
            <div className="flex">
              <img src={GeneralSurgery} alt="" className="w-10" />
              <div className="relative top-2 ml-4">General Surgery</div>
            </div>
            <div className="">
              <div className="flex my-6">
                <div className="mx-16">
                  <img src={Piles} alt="" className="w-16" />
                  <div className="text-center mt-3">Piles</div>
                </div>
                <div className="mx-16">
                  <img src={Hernia} alt="" className="w-16" />
                  <div className="text-center mt-3">Hernia</div>
                </div>
                <div className="mx-16">
                  <img src={AnalFissure} alt="" className="w-16" />
                  <div className="text-center mt-3">Anal Fissure</div>
                </div>
              </div>
              <div className="flex my-6">
                <div className="mx-16">
                  <img src={GallStones} alt="" className="w-16" />
                  <div className="text-center mt-3">Gall Stones</div>
                </div>
                <div className="mx-16">
                  <img src={Circumcision} alt="" className="w-16" />
                  <div className="text-center mt-3">Circumcision</div>
                </div>
                <div className="mx-16">
                  <img src={Varicose} alt="" className="w-16" />
                  <div className="text-center mt-3">Varicose</div>
                </div>
              </div>
              <div className="flex my-6">
                <div className="mx-16">
                  <img src={KidneyStone} alt="" className="w-16" />
                  <div className="text-center mt-3">Kidney Stone</div>
                </div>
                <div className="mx-16">
                  <img src={lipomaRemoval} alt="" className="w-16" />
                  <div className="text-center mt-3">lipoma Removal</div>
                </div>
                <div className="mx-16">
                  <img src={Appendicitis} alt="" className="w-16" />
                  <div className="text-center mt-3">Appendicitis</div>
                </div>
              </div>
              <div className="flex my-6">
                <div className="mx-16">
                  <img src={PilonidalSinus} alt="" className="w-16" />
                  <div className="text-center mt-3">Pilonidal Sinus</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-[90%] relative left-6 bg-gray-200 mt-2 mb-5"></div>
          <div className="h-2 bg-gray-200 mt-2 mb-5"></div>
          <div className="">
            <div className="text-2xl ml-6 font-bold ">Why Practo Care?</div>
            <div className="flex ml-7 mt-12">
              <div className="px-3 py-3 bg-gray-200 rounded-full">
                <GrUserManager className="text-2xl" />
              </div>
              <div className="mt-3 ml-4 font-bold">Expert surgeons</div>
            </div>
            <div className="ml-8 mt-3 mb-4">
              You can expect the highest standards in surgeries and care with
              our cutting-edge modern medical technology, designed to provide
              you the most advanced level of medical care.
            </div>
            <div className="h-[1px] bg-gray-200 mt-2 mb-5 ml-8"></div>
            <div className="flex ml-7 mt-12">
              <div className="px-3 py-3 bg-gray-200 rounded-full">
                <GrNotes className="text-2xl" />
              </div>
              <div className="mt-3 ml-4 font-bold">
                Advanced Surgical Technologies
              </div>
            </div>
            <div className="ml-8 mt-3 mb-4">
              You can expect the highest standards in surgeries and care with
              our cutting-edge modern medical technology, designed to provide
              you the most advanced level of medical care.
            </div>
            <div className="h-[1px] bg-gray-200 mt-2 mb-5 ml-8"></div>
            <div className="flex ml-7 mt-12">
              <div className="px-3 py-3 bg-gray-200 rounded-full">
                <FaRegHandshake className="text-2xl" />
              </div>
              <div className="mt-3 ml-4 font-bold">
                Personal Care Assistants
              </div>
            </div>
            <div className="ml-8 mt-3 mb-4">
              You can expect the highest standards in surgeries and care with
              our cutting-edge modern medical technology, designed to provide
              you the most advanced level of medical care.
            </div>
            <div className="h-[1px] bg-gray-200 mt-2 mb-5 ml-8"></div>
            <div className="flex ml-7 mt-12">
              <div className="px-3 py-3 bg-gray-200 rounded-full">
                <BiRupee className="text-2xl" />
              </div>
              <div className="mt-3 ml-4 font-bold">
                Financial Aid & Assistance
              </div>
            </div>
            <div className="ml-8 mt-3 mb-4">
              You can expect the highest standards in surgeries and care with
              our cutting-edge modern medical technology, designed to provide
              you the most advanced level of medical care.
            </div>
            <div className="h-[1px] bg-gray-200 mt-2 mb-5 ml-8"></div>
            <div className="flex ml-7 mt-12">
              <div className="px-3 py-3 bg-gray-200 rounded-full">
                <MdOutlineHealthAndSafety className="text-2xl" />
              </div>
              <div className="mt-3 ml-4 font-bold">Postoperative Care</div>
            </div>
            <div className="ml-8 mt-3 mb-4">
              You can expect the highest standards in surgeries and care with
              our cutting-edge modern medical technology, designed to provide
              you the most advanced level of medical care.
            </div>
            <div className="h-2 bg-gray-200 mb-5 mt-10"></div>
          </div>
          <div className="">
            <div className="flex">
              <IoLocationOutline className="text-2xl ml-8 relative top-1" />
              <div className="text-2xl font-bold ml-2">Our doctors in</div>
              <select name="" id="" className="ml-72 ">
                <option className="" disabled selected hidden>
                  Bengaluru
                </option>
                <option className="">Mumbai</option>
                <option className="">Chennai</option>
                <option className="">Kolkata</option>
                <option className="">Delhi</option>
              </select>
            </div>
            <div className="flex ml-16 my-8">
              <img src={Shubhangi} alt="" className="w-20" />
              <div className="ml-4">
                <div className="font-bold">Dr.Aditi Agrawal</div>
                <div className="">General Surgeon</div>
                <div className="flex">
                  <RiThumbUpFill className="text-green-600 mt-1" />
                  <div className="ml-2 font-semibold text-gray-500">97%</div>
                  <div className="font-extrabold text-2xl relative bottom-3 mx-2 text-gray-500">
                    .
                  </div>
                  <div className="font-semibold text-gray-500">
                    17 Years Exp.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex ml-16 my-8">
              <img src={Shubhangi} alt="" className="w-20" />
              <div className="ml-4">
                <div className="font-bold">Dr.Aditi Agrawal</div>
                <div className="">General Surgeon</div>
                <div className="flex">
                  <RiThumbUpFill className="text-green-600 mt-1" />
                  <div className="ml-2 font-semibold text-gray-500">97%</div>
                  <div className="font-extrabold text-2xl relative bottom-3 mx-2 text-gray-500">
                    .
                  </div>
                  <div className="font-semibold text-gray-500">
                    17 Years Exp.
                  </div>
                </div>
              </div>
            </div>
            <div className="h-2 bg-gray-200 mb-5 mt-10"></div>
          </div>
          <div className="">
            <div className="text-2xl ml-6 font-bold ">What customers say</div>
            <div className="border-2 ml-6 mt-6 border-solid border-gray-200 py-4 px-5 mb-16">
              <div className="font-semibold">Vivek</div>
              <div className="text-gray-500">Delhi</div>
              <div className="text-gray-500">
                "Thanks to Practo Care, I could focus on my recovery while the
                team took care of all the paperwork, logistics and financial
                support. The doctor was good and clearly explained the issue and
                treatment. After that, from consultation to discharge,
                everything was handled smoothly by Practo Care. Very happy with
                my experience.
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-[60%] border-4 rounded-2xl ml-36 bg-blue-50 border-solid border-blue-600 ">
            <div className="flex mt-7 mb-3">
              <div className="font-bold ml-5 mt-7 w-[50%]">
                Let's Schedule Your Appointment
              </div>
              <img
                src={Shubhangi}
                alt=""
                className="w-20 relative left-[18%]"
              />
            </div>

            <input
              type="text"
              placeholder="Name*"
              className="w-[90%] text-sm my-4 font-semibold border-[1px] ml-5 border-solid border-black px-5 py-3 rounded-xl"
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-[90%] text-sm my-4 font-semibold border-[1px] ml-5 border-solid border-black px-5 py-3 rounded-xl"
            />
            <input
              type="text"
              placeholder="location*"
              className="w-[90%] text-sm my-4 font-semibold border-[1px] ml-5 border-solid border-black px-5 py-3 rounded-xl"
            />

            <button className="w-[90%] text-sm text-white my-4 font-semibold  ml-5 bg-blue-600 px-5 py-4 rounded-xl">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#0191B4] w-[80%] relative left-36">
        <div className="pt-12 ml-28 pb-40 mb-6">
          <img src={LogoPro} alt="" className="w-[20%]" />
          <div className=" text-white ml-8 w-[70%] text-xl mt-4">
            Our vision is to help mankind live healthier, longer lives by making
            quality healthcare accessible, affordable and convenient.
          </div>
          <div className="underline mt-2 ml-8  text-white">
            Locate Our Clinics
          </div>
          <div className=" text-white mt-2 ml-8 ">
            Made by Practeons @ Bangalore
          </div>
        </div>
      </div>
    </div>
  );
};

export default StellproCare;
