import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Sticker from "../images/verified.svg";
import Doctor from "../images/dummyimage.png";
import Map from "../components/Map";
import Logo from "../images/logo.png";
import Modal from "react-modal";
import Review from "../components/Review";

import {
  RiStethoscopeLine,
  RiMoneyDollarCircleFill,
  RiPinDistanceLine,
} from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { GiStarMedal } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { BsFlagFill } from "react-icons/bs";
import { useGeolocated } from "react-geolocated";

const SearchDetails = () => {
  const [doctors, setDoctors] = useState([]);
  // const filtereddata = [];
  // const [filtereddata, setFiltereddata] = useState([]);
  const [length, setLength] = useState();
  const [error, setError] = useState();
  const [googleLat, setGoogleLat] = useState();
  const [googleLong, setGoogleLong] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenMobile, setModalIsOpenMobile] = useState(false);
  const [company, setCompany] = useState();
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

  // const ReviewClinic = () => {
  // };

  const props = (data) => {
    // console.log(data[0]);
    // const updatedList = data[0].map((p) => {
    //   return console.log(p.TherapyLocation3);
    // });
    // console.log(updatedList);
    // filtereddata.push(data[0]);
    // setFiltereddata(data[0]);
    setDoctors(data);
  };
  const props1 = (data) => {
    if (data === 0) {
      setError("No Clinic Present in this area for searched Specialization");
    } else {
      setError("");
    }
    setLength(data);
  };

  // const props2 = (data) => {
  //   setLocation(data);
  // };

  // const props3 = (data) => {
  //   setTherapy(data);
  // };

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

  // const handleService = (e) => {
  //   e.preventDefault();
  //   if (e.target.value === "Online") {
  //     console.log(filtereddata);
  //     const updatedList = filtereddata.filter(
  //       (p) => p.TherapyLocation3 === e.target.value
  //     );
  //     console.log(updatedList);
  //     setDoctors(updatedList);
  //   }
  //   if (e.target.value === "Home") {
  //     const updatedList = filtereddata.filter(
  //       (p) => p.TherapyLocation2 === e.target.value
  //     );
  //     console.log(updatedList);
  //     setDoctors(updatedList);
  //   }
  //   if (e.target.value === "Centre") {
  //     const updatedList = filtereddata.filter(
  //       (p) => p.TherapyLocation1 === e.target.value
  //     );
  //     console.log(updatedList);
  //     setDoctors(updatedList);
  //   }
  // };

  // if (doctors.length === 0) {
  //   setMessage("No Doctors are available in this area");
  // }
  // const props1 = (data) => {
  //   setTherapy(data);
  // };

  return (
    <div>
      <Navbar />
      <SearchBar
        alert={props}
        alert1={props1}
        // alert2={props2}
        // alert3={props3}
      />
      {/* <div className="flex bg-green py-3 pl-32"> */}
      {/* <div className="flex bg-white bg-opacity-20 w-[12%] rounded-sm ">
          <input type="checkbox" className="mt-[6px] w-[24px] h-[15px] ml-1" />
          <div className="text-lg ml-1 text-white">Video Consult</div>
        </div> */}

      {/* <select
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
          <option value="Centre" className="text-black">
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
        </select> */}
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
      {/* <div className="flex mx-8">
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
        </div> */}
      {/* </div> */}
      {error ? (
        <div className="text-2xl font-bold text-center mt-10 text-red-600">
          {error}
        </div>
      ) : (
        <div className="flex">
          <div className="bg-gray-100 w-full">
            <div className="md:mx-16 mx-5 py-10">
              {/* {location ? (
          <div className="">
            <div className="font-bold text-2xl">
              {length} Clinics available in {location}
            </div>
            <div className="flex mt-4 mb-14">
              <img src={Sticker} alt="" className="" />
              <div className="ml-1">
                Book appointments with minimum wait-time & verified doctor
                details
              </div>
            </div>
          </div>
        ) : therapy ? (
          <div className="">
            <div className="font-bold text-2xl">
              {length} Clinics available for this {therapy}
            </div>
            <div className="flex mt-4 mb-14">
              <img src={Sticker} alt="" className="" />
              <div className="ml-1">
                Book appointments with minimum wait-time & verified doctor
                details
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <div className="font-bold text-2xl">
              {length} Clinics available
            </div>
            <div className="flex mt-4 mb-14">
              <img src={Sticker} alt="" className="" />
              <div className="ml-1">
                Book appointments with minimum wait-time & verified doctor
                details
              </div>
            </div>
          </div>
        )} */}
              {length ? (
                <div className="">
                  <div className="font-bold text-2xl">
                    {length} Clinics available
                  </div>
                  <div className="flex mt-4 mb-14">
                    <img src={Sticker} alt="" className="" />
                    <div className="ml-1">
                      Book appointments with minimum wait-time & verified doctor
                      details
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="md:flex">
                <div className="md:w-[70%] w-[100%] md:pr-5">
                  {doctors[0]?.map((props) => {
                    return (
                      <div className="">
                        <div className="md:flex block md:my-7">
                          <div className="">
                            {props.image ? (
                              <img
                                src={props.image}
                                alt=""
                                className="md:h-56 h-40 bg-white py-6 rounded-l-2xl relative top-8 md:left-0 left-[25%]"
                              />
                            ) : (
                              <img
                                src={Doctor}
                                alt=""
                                className="md:h-56 h-40 bg-white py-6 rounded-l-2xl relative top-8 md:left-0 left-[25%]"
                              />
                            )}
                          </div>

                          <div className="md:p-6 py-6 bg-white">
                            <div className="flex">
                              <div className="text-2xl text-blue-400 ">
                                {props.ClinicName}
                              </div>
                            </div>
                            {coords ? (
                              <div className="flex">
                                <div className="flex px-2 py-[3px] rounded-xl mt-3 opacity-50 bg-black text-white w-fit">
                                  <RiPinDistanceLine className="relative top-[4px] mr-1" />
                                  {console.log(props.Latitude, props.Longitude)}
                                  {calculateDistance(
                                    props.Latitude,
                                    props.Longitude
                                  )}{" "}
                                  km
                                </div>
                                <div
                                  onClick={() => {
                                    setGoogleLat(props.Latitude);
                                    setGoogleLong(props.Longitude);
                                  }}
                                  className="md:flex hidden cursor-pointer px-2 py-[3px] rounded-xl mt-3 opacity-50 bg-black text-white w-fit ml-10"
                                >
                                  <MdLocationOn className="text-white mt-1" />
                                  <div className="ml-2 text-white">Map</div>
                                </div>
                              </div>
                            ) : null}

                            <div className="md:flex mt-6">
                              <div className="md:w-[80%]">
                                {props.TherapistName ? (
                                  <div className="flex">
                                    <RiStethoscopeLine className="font-bold relative top-[2px] text-emerald-500" />

                                    <div className="text-sm ml-2">
                                      Specialist's Name :&nbsp;
                                    </div>
                                    <div className="text-sm font-bold">
                                      {props.TherapistName}
                                    </div>
                                  </div>
                                ) : null}
                                <div className="flex mt-2">
                                  <GiStarMedal className="font-bold relative top-[2px] text-emerald-500" />
                                  {props.TherapistName ? (
                                    <div className="flex">
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
                                    </div>
                                  ) : (
                                    <div className="flex">
                                      <div className="text-sm ml-2">
                                        Therapy Service :&nbsp;
                                      </div>
                                      {props.Services1 ? (
                                        <div className="text-sm font-bold">
                                          {props.Services1}
                                        </div>
                                      ) : (
                                        <div className="text-sm font-bold">
                                          Not Available
                                        </div>
                                      )}
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
                                {props.Services2 ? (
                                  <div className="flex mt-2">
                                    <GiStarMedal className="font-bold relative top-[2px] text-emerald-500" />
                                    <div className="flex">
                                      <div className="text-sm ml-2">
                                        Other Services :&nbsp;
                                      </div>
                                      <div className="text-sm font-bold">
                                        {props.Services2}
                                      </div>
                                      {props.Services3 ? (
                                        <div className="text-sm font-bold">
                                          ,&nbsp;{props.Services3}
                                        </div>
                                      ) : null}
                                      {props.Services4 ? (
                                        <div className="text-sm font-bold">
                                          ,&nbsp;{props.Services4}
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                ) : null}
                                {props.Specialization2 ? (
                                  <div className="flex mt-2">
                                    <GiStarMedal className="font-bold relative top-[2px] text-emerald-500" />
                                    <div className="flex">
                                      <div className="text-sm ml-2">
                                        Another Specialization :&nbsp;
                                      </div>
                                      <div className="">
                                        {props.Specialization2}
                                      </div>
                                    </div>
                                  </div>
                                ) : null}

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
                                  <div className="text-sm ml-2">
                                    Location :&nbsp;
                                  </div>

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
                              <div className="md:w-48 text-sm mr-2 md:ml-10 my-2">
                                {props.Address}
                              </div>
                              <div className="md:w-[1px] md:h-36 h-[1px] w-[100%] bg-gray-500 md:mr-5"></div>
                              <div className="md:w-[40%] flex md:block">
                                {/* <div className="flex justify-center">
                        <BsFillCalendarEventFill className="text-green-600 text-[12px] relative top-[5px]" />
                        <div className="text-sm text-green-600 font-bold ml-3">
                          {" "}
                          Available Today{" "}
                        </div>
                      </div> */}
                                <div className="bg-blue-500 md:px-7 px-3 mx-1 py-1 rounded-lg md:mt-4 mt-2">
                                  <a href={`tel:+91 ${props.ContactNo}`}>
                                    <div className="text-sm font-bold text-white text-center">
                                      Call Now
                                    </div>
                                  </a>
                                </div>
                                <div className="bg-blue-500 md:px-7 px-3 mx-1 py-1 rounded-lg md:mt-4 mt-2">
                                  <div className="text-sm font-bold text-white text-center">
                                    View Details
                                  </div>
                                </div>
                                <div className="bg-blue-500 md:px-7 px-3 mx-1 py-1 rounded-lg md:mt-4 mt-2">
                                  <div
                                    onClick={() => {
                                      setModalIsOpen(true);

                                      setCompany(props.ClinicName);
                                    }}
                                    className="cursor-pointer hidden md:block text-sm font-bold text-white text-center"
                                  >
                                    Review this
                                  </div>
                                  <div
                                    onClick={() => {
                                      setModalIsOpenMobile(true);

                                      setCompany(props.ClinicName);
                                    }}
                                    className="cursor-pointer md:hidden text-sm font-bold text-white text-center"
                                  >
                                    Review this
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

                <div className="w-[30%] md:block hidden">
                  <div className="bg-red-300">
                    {/* <iframe
                      src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3721465.8528448674!2d87.8504985!3d24.372814!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1656875570255!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style="border:0;"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe> */}
                    <Map Latitude={googleLat} Longitude={googleLong} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 1000,
            },
            content: {
              backgroundColor: "rgba(250,250,250)",
              width: "40%",
              height: "100vh",
              position: "absolute",
              top: "0px",
              left: "30%",
              right: "40px",
              bottom: "40px",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }}

          // shouldCloseOnOverlayClick={false}
        >
          <div>
            <div className="flex">
              <img src={Logo} alt="" className="h-10" />
              <div
                onClick={() => setModalIsOpen(false)}
                className="relative left-[60%] top-2 cursor-pointer"
              >
                Close
              </div>
            </div>
            <Review company={company} />
          </div>
        </Modal>
      )}
      {modalIsOpenMobile && (
        <Modal
          isOpen={modalIsOpenMobile}
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpenMobile(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 1000,
            },
            content: {
              backgroundColor: "rgba(250,250,250)",
              width: "100%",
              height: "100vh",
              position: "absolute",
              top: "0px",
              left: "0px",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }}

          // shouldCloseOnOverlayClick={false}
        >
          <div>
            <div className="flex">
              <img src={Logo} alt="" className="h-10" />
              <div
                onClick={() => setModalIsOpenMobile(false)}
                className="relative md:left-[60%] left-[40%] top-2 cursor-pointer"
              >
                Close
              </div>
            </div>
            <Review company={company} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SearchDetails;
