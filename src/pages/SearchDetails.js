import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Sticker from "../images/verified.svg";
import Doctor from "../images/consultation.jpg";

import {
  RiStethoscopeLine,
  RiMoneyDollarCircleFill,
  RiPinDistanceLine,
} from "react-icons/ri";
import { GiStarMedal } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { BsFlagFill } from "react-icons/bs";
import { useGeolocated } from "react-geolocated";

const SearchDetails = () => {
  const [doctors, setDoctors] = useState([]);
  const filtereddata = [];

  // const [therapy, setTherapy] = useState();
  // const [location, setLocation] = useState();
  // const [filter, setFilter] = useState(doctors);

  // console.log(location, therapy);
  // useEffect(() => {
  //   fetch(
  //     "https://sheet.best/api/sheets/a93e79e9-9876-4270-a558-09e6f0f9db53?_raw=1"
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       // setDoctors(result);
  //     });
  // }, []);

  const props = (data) => {
    // console.log(data[0]);
    // const updatedList = data[0].map((p) => {
    //   return console.log(p.TherapyLocation3);
    // });
    // console.log(updatedList);
    filtereddata.push(data[0]);
    console.log(filtereddata);
    setDoctors(data);
  };

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  const calculateDistance = (lattitude, longittude) => {
    console.log(longittude);
    const toRadian = (n) => (n * Math.PI) / 180;
    let lat2 = lattitude;
    let lon2 = longittude;
    let lat1 = coords.latitude;
    let lon1 = coords.longitude;

    console.log(lat1, lon1 + "===" + lat2, lon2);
    let R = 6371; // km
    let x1 = lat2 - lat1;
    let dLat = toRadian(x1);
    let x2 = lon2 - lon1;
    let dLon = toRadian(x2);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadian(lat1)) *
        Math.cos(toRadian(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    var e = Math.round(d * 10) / 10;
    console.log("distance==?", e);
    return e;
  };

  const handleService = (e) => {
    console.log(doctors[0]);
    console.log(e.target.value);

    e.preventDefault();
    if (e.target.value === "Online" && doctors[0]) {
      console.log(filtereddata);
      const updatedList = filtereddata[0].filter(
        (p) => p.TherapyLocation3 === e.target.value
      );
      console.log(updatedList);
    }
    if (e.target.value === "Home") {
      const updatedList = filtereddata[0].filter(
        (p) => p.TherapyLocation2 === e.target.value
      );
      console.log(updatedList);
    }
    if (e.target.value === "At Centre") {
      const updatedList = filtereddata[0].filter(
        (p) => p.TherapyLocation1 === e.target.value
      );
      console.log(updatedList);
    }
  };

  // if (doctors.length === 0) {
  //   setMessage("No Doctors are available in this area");
  // }
  // const props1 = (data) => {
  //   setTherapy(data);
  // };

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
          onChange={handleService}
          className=" bg-white bg-opacity-50 rounded-sm text-lg text-gray-600 font-bold mx-4 px-1"
        >
          <option value="" disabled selected hidden className="">
            Location of service
          </option>
          <option value="Online" className="text-black">
            Online service
          </option>
          <option value="Home" className="text-black">
            At home
          </option>
          <option value="At Centre" className="text-black">
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

      <div className="bg-gray-100">
        <div className="mx-16 py-10">
          <div className="font-bold text-2xl">
            81 doctors available in Sigra
          </div>
          <div className="flex mt-4 mb-14">
            <img src={Sticker} alt="" className="" />
            <div className="ml-1">
              Book appointments with minimum wait-time & verified doctor details
            </div>
          </div>

          {doctors[0]?.map((props) => {
            return (
              <div className="">
                <div className="flex my-7">
                  <div className="">
                    <img
                      src={Doctor}
                      alt=""
                      className="h-56 bg-white py-6 rounded-l-2xl relative top-8"
                    />
                  </div>

                  <div className="p-6 bg-white">
                    <div className="text-2xl text-blue-400 ">
                      {props.ClinicName}
                    </div>
                    {coords ? (
                      <div className="">
                        <div className="flex px-2 py-[3px] rounded-xl mt-3 opacity-50 bg-black text-white w-fit">
                          <RiPinDistanceLine className="relative top-[4px] mr-1" />
                          {console.log(props.Latitude, props.Longitude)}
                          {calculateDistance(
                            props.Latitude,
                            props.Longitude
                          )}{" "}
                          km
                        </div>
                      </div>
                    ) : null}
                    <div className="flex mt-6">
                      <div className="w-[60%]">
                        <div className="flex">
                          <RiStethoscopeLine className="font-bold relative top-[2px] text-emerald-500" />
                          <div className="text-sm ml-2">
                            Specialist's Name :&nbsp;
                          </div>
                          {props.TherapistName ? (
                            <div className="text-sm font-bold">
                              {props.TherapistName}
                            </div>
                          ) : (
                            <div className="text-sm font-bold">
                              Not Available
                            </div>
                          )}
                        </div>
                        <div className="flex mt-2">
                          <GiStarMedal className="font-bold relative top-[2px] text-emerald-500" />
                          <div className="text-sm ml-2">
                            Specialization :&nbsp;
                          </div>
                          {props.Specialization1 ? (
                            <div className="text-sm font-bold">
                              {props.Specialization1}
                            </div>
                          ) : (
                            <div className="text-sm font-bold">
                              Not Available
                            </div>
                          )}
                          {/* {props.Specialization2 ? (
                            <div className="text-sm font-bold">
                              {props.Specialization2}
                            </div>
                          ) : (
                            <div className="text-sm font-bold">
                              Not Available
                            </div>
                          )} */}
                        </div>
                        <div className="flex mt-2">
                          <BsFlagFill className="font-bold relative top-[2px] text-emerald-500" />
                          <div className="text-sm ml-2">
                            Years of Experience :&nbsp;
                          </div>
                          {props.YrsExp ? (
                            <div className="text-sm font-bold">
                              {props.YrsExp}
                            </div>
                          ) : (
                            <div className="text-sm font-bold">
                              Not Available
                            </div>
                          )}
                        </div>
                        <div className="flex mt-2">
                          <IoLocationSharp className="font-bold relative top-[2px] text-emerald-500" />
                          <div className="text-sm ml-2">Location :&nbsp;</div>

                          {props.Locality ? (
                            <div className="text-sm font-bold">
                              {props.Locality}&nbsp;,&nbsp;{props.City}
                            </div>
                          ) : (
                            <div className="text-sm font-bold">
                              Not Available
                            </div>
                          )}
                        </div>
                        <div className="flex mt-2">
                          <RiMoneyDollarCircleFill className="font-bold relative top-[2px] text-emerald-500" />
                          <div className="text-sm ml-2">
                            Consultation Fee :&nbsp;
                          </div>

                          {props.AssessmentFees ? (
                            <div className="text-sm font-bold">
                              {props.AssessmentFees}
                            </div>
                          ) : (
                            <div className="text-sm font-bold">
                              Not Available
                            </div>
                          )}
                        </div>

                        {/* <div className="h-[1px] bg-gray-200 mb-4 mt-2"></div> */}
                        {/* <div className="flex">
                          <div className="flex bg-green-500 w-[25%] pl-3 rounded-sm">
                            <AiFillLike className="text-white mt-1" />
                            <div className="text-white ml-1">87%</div>
                          </div>
                          <div className="font-bold underline text-sm ml-3 mt-[2px]">
                            7 Patient Stories
                          </div>
                        </div> */}
                      </div>
                      <div className="w-48 text-sm mr-2 ml-10">
                        {props.Address}
                      </div>
                      <div className="w-[1px] h-36 bg-gray-500 mr-5"></div>
                      <div className="w-[40%]">
                        {/* <div className="flex justify-center">
                          <BsFillCalendarEventFill className="text-green-600 text-[12px] relative top-[5px]" />
                          <div className="text-sm text-green-600 font-bold ml-3">
                            {" "}
                            Available Today{" "}
                          </div>
                        </div> */}
                        <div className="bg-blue-500 px-7 py-1 rounded-lg mt-4">
                          <a href="tel:+91 9749568594">
                            <div className="text-sm font-bold text-white text-center">
                              Call Now
                            </div>
                          </a>
                        </div>
                        <div className="bg-blue-500 px-7 py-1 rounded-lg mt-4">
                          <div className="text-sm font-bold text-white text-center">
                            View Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[1px] bg-gray-200 w-[70%]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchDetails;
