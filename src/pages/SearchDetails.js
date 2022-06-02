import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Sticker from "../images/verified.svg";
import Doctor from "../images/Shubhangi.jpg";
import { AiFillLike } from "react-icons/ai";
import { BsFillCalendarEventFill } from "react-icons/bs";

const SearchDetails = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(
      "https://sheet.best/api/sheets/a93e79e9-9876-4270-a558-09e6f0f9db53?_raw=1"
    )
      .then((res) => res.json())
      .then((result) => {
        setDoctors(result);
      });
  }, []);

  function props(data) {
    console.log(data);
  }

  return (
    <div>
      <Navbar />
      <SearchBar alert={props} />
      <div className="flex bg-green py-3 pl-32">
        {/* <div className="flex bg-white bg-opacity-20 w-[12%] rounded-sm ">
          <input type="checkbox" className="mt-[6px] w-[24px] h-[15px] ml-1" />
          <div className="text-lg ml-1 text-white">Video Consult</div>
        </div> */}
        <select
          name=""
          id=""
          className=" bg-white bg-opacity-50 rounded-sm text-lg text-gray-600 font-bold mx-4 px-1"
        >
          <option value="" disabled selected hidden className="">
            Location of service
          </option>
          <option value="" className="text-black">
            Online service
          </option>
          <option value="" className="text-black">
            At home
          </option>
          <option value="" className="text-black">
            At centre
          </option>
        </select>

        <select
          name=""
          id=""
          className=" bg-white bg-opacity-50 rounded-sm text-lg text-gray-600 font-bold mx-4 px-1"
        >
          <option value="" disabled selected hidden className="">
            Availability
          </option>
          <option value="" className="text-black">
            Available Today
          </option>
          <option value="" className="text-black">
            Available Tomorrow
          </option>
          <option value="" className="text-black">
            Available in next 7 days
          </option>
        </select>
        {/* <select
          name=""
          id=""
          className="bg-white bg-opacity-50 rounded-sm text-lg text-gray-600 font-bold mx-4 px-1"
        >
          <option value="" disabled selected hidden className="">
            All Filters
          </option>
          <option value="" className="">
            Gender
          </option>
          <option value="" className="">
            Consultation Fee
          </option>
          <option value="" className="">
            Experience
          </option>
        </select> */}
        <div className="flex mx-8">
          <p className="text-gray-600">Sort By</p>
          <select
            name=""
            id=""
            className="bg-white bg-opacity-50 rounded-sm text-lg text-gray-600 font-bold mx-2 px-1"
          >
            <option value="" selected disabled className="">
              Relevance
            </option>
            <option value="" className="">
              Distance
            </option>
            <option value="" className="">
              Price-Low to High
            </option>
            <option value="" className="">
              Price-High to Low
            </option>
            <option value="" className="">
              Years of Experience
            </option>
          </select>
        </div>
      </div>

      <div className="">
        <div className="mx-16 my-10">
          <div className="font-bold text-2xl">
            81 doctors available in Sigra
          </div>
          <div className="flex mt-4 mb-14">
            <img src={Sticker} alt="" className="" />
            <div className="ml-1">
              Book appointments with minimum wait-time & verified doctor details
            </div>
          </div>
          {console.log(doctors)}
          {doctors.map((props) => {
            return (
              <div className="">
                <div className="flex my-7">
                  <div className="">
                    <img src={Doctor} alt="" className="h-32" />
                    <div className="font-bold text-sm text-blue-400 underline text-center mt-2">
                      View Profile
                    </div>
                  </div>

                  <div className="ml-6 w-[25%]">
                    <div className="text-xl text-blue-400 ">
                      {props.TherapistName}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Dentist</div>
                    <div className="text-sm text-gray-500">
                      {props.YrsExp} years experience overall
                    </div>
                    <div className="flex">
                      <div className="font-bold text-sm">
                        {props.Locality},{props.City}
                      </div>
                      <div className="font-bold text-xl mx-2 text-gray-400 relative bottom-2">
                        .
                      </div>
                      <div className="text-sm">{props.ClinicName}</div>
                    </div>
                    <div className="relative bottom-2">
                      {props.AssessmentFees} Consultation fee at clinic
                    </div>
                    <div className="h-[1px] bg-gray-200 mb-4 mt-2"></div>
                    <div className="flex">
                      <div className="flex bg-green-500 w-[25%] pl-3 rounded-sm">
                        <AiFillLike className="text-white mt-1" />
                        <div className="text-white ml-1">87%</div>
                      </div>
                      <div className="font-bold underline text-sm ml-3 mt-[2px]">
                        7 Patient Stories
                      </div>
                    </div>
                  </div>
                  <div className="relative left-40 mt-24">
                    <div className="flex justify-center">
                      <BsFillCalendarEventFill className="text-green-600 text-[12px] relative top-[5px]" />
                      <div className="text-sm text-green-600 font-bold ml-3">
                        {" "}
                        Available Today{" "}
                      </div>
                    </div>
                    <div className="bg-blue-500 px-10 py-1 rounded-lg mt-4">
                      <div className="text-sm font-bold text-white">
                        Book Appointment
                      </div>
                      <div className="text-[10px] font-bold text-center text-white">
                        No Booking Fee
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[1px] bg-gray-200 w-[70%]"></div>
              </div>
            );
          })}

          <div className="">
            <div className="flex my-7">
              <div className="">
                <img src={Doctor} alt="" className="h-32" />
                <div className="font-bold text-sm text-blue-400 underline text-center mt-2">
                  View Profile
                </div>
              </div>

              <div className="ml-6">
                <div className="text-xl text-blue-400 ">Dr. Ajay Pal Singh</div>
                <div className="text-sm text-gray-500 mt-1">Dentist</div>
                <div className="text-sm text-gray-500">
                  16 years experience overall
                </div>
                <div className="flex">
                  <div className="font-bold text-sm">Chhittupur,Varanasi</div>
                  <div className="font-bold text-xl mx-2 text-gray-400 relative bottom-2">
                    .
                  </div>
                  <div className="text-sm">Sanskriti Dental Clinic</div>
                </div>
                <div className="relative bottom-2">
                  ₹200 Consultation fee at clinic
                </div>
                <div className="h-[1px] bg-gray-200 mb-4 mt-2"></div>
                <div className="flex">
                  <div className="flex bg-green-500 w-[25%] pl-3 rounded-sm">
                    <AiFillLike className="text-white mt-1" />
                    <div className="text-white ml-1">87%</div>
                  </div>
                  <div className="font-bold underline text-sm ml-3 mt-[2px]">
                    7 Patient Stories
                  </div>
                </div>
              </div>
              <div className="ml-60 mt-24">
                <div className="flex justify-center">
                  <BsFillCalendarEventFill className="text-green-600 text-[12px] relative top-[5px]" />
                  <div className="text-sm text-green-600 font-bold ml-3">
                    {" "}
                    Available Today{" "}
                  </div>
                </div>
                <div className="bg-blue-500 px-10 py-1 rounded-lg mt-4">
                  <div className="text-sm font-bold text-white">
                    Book Appointment
                  </div>
                  <div className="text-[10px] font-bold text-center text-white">
                    No Booking Fee
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-gray-200 w-[70%]"></div>
          </div>
          <div className="">
            <div className="flex my-7">
              <div className="">
                <img src={Doctor} alt="" className="h-32" />
                <div className="font-bold text-sm text-blue-400 underline text-center mt-2">
                  View Profile
                </div>
              </div>

              <div className="ml-6">
                <div className="text-xl text-blue-400 ">Dr. Ajay Pal Singh</div>
                <div className="text-sm text-gray-500 mt-1">Dentist</div>
                <div className="text-sm text-gray-500">
                  16 years experience overall
                </div>
                <div className="flex">
                  <div className="font-bold text-sm">Chhittupur,Varanasi</div>
                  <div className="font-bold text-xl mx-2 text-gray-400 relative bottom-2">
                    .
                  </div>
                  <div className="text-sm">Sanskriti Dental Clinic</div>
                </div>
                <div className="relative bottom-2">
                  ₹200 Consultation fee at clinic
                </div>
                <div className="h-[1px] bg-gray-200 mb-4 mt-2"></div>
                <div className="flex">
                  <div className="flex bg-green-500 w-[25%] pl-3 rounded-sm">
                    <AiFillLike className="text-white mt-1" />
                    <div className="text-white ml-1">87%</div>
                  </div>
                  <div className="font-bold underline text-sm ml-3 mt-[2px]">
                    7 Patient Stories
                  </div>
                </div>
              </div>
              <div className="ml-60 mt-24">
                <div className="flex justify-center">
                  <BsFillCalendarEventFill className="text-green-600 text-[12px] relative top-[5px]" />
                  <div className="text-sm text-green-600 font-bold ml-3">
                    {" "}
                    Available Today{" "}
                  </div>
                </div>
                <div className="bg-blue-500 px-10 py-1 rounded-lg mt-4">
                  <div className="text-sm font-bold text-white">
                    Book Appointment
                  </div>
                  <div className="text-[10px] font-bold text-center text-white">
                    No Booking Fee
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-gray-200 w-[70%]"></div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default SearchDetails;
