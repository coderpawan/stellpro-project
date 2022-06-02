import React, { useState, useEffect } from "react";
import { FaSearchLocation, FaMapMarkerAlt } from "react-icons/fa";
// import Data from "../data/SearchBarData";
import { useNavigate } from "react-router-dom";
// import Doodle from "../images/doodle.png";

const SearchBar = () => {
  // const [error, setError] = useState();
  // const [item, setItem] = useState([]);
  // const [filter, setFilter] = useState(item);
  // const [therapy, setTherapy] = useState();
  // const [location, setLocation] = useState();
  // const [filterDoctor, setFilterDoctor] = useState(item);
  const [UniLocation, setUniLocation] = useState([]);
  const [UniTherapy, setUniTherapy] = useState([]);
  const navigate = useNavigate();

  // const handleLocation = (event) => {
  //   const updatedList = item.filter((p) => p.location === event.target.value);
  //   setFilter(updatedList);
  // };
  // const handleDoctor = (event) => {
  //   const updatedList = item.filter(
  //     (p) => p.Specialization1 === event.target.value
  //   );
  //   setFilter(updatedList);
  // };

  useEffect(() => {
    fetch(
      "https://sheet.best/api/sheets/a93e79e9-9876-4270-a558-09e6f0f9db53?_raw=1"
    )
      .then((res) => res.json())
      .then((result) => {
        // setItem(result.slice());
        // setFilter(result.slice());
        // setItem(result);
        setTimeout(() => {
          // console.log(item);
          const UniqueLocation = [];
          const UniqueTherapy = [];
          result.map((items) => {
            var findItem = UniqueLocation.find(
              (e) => e.Locality === items.Locality
            );
            if (!findItem) {
              UniqueLocation.push(items);
            }
          });
          setUniLocation(UniqueLocation);
          result.map((items) => {
            var findItem = UniqueTherapy.find(
              (e) => e.Specialization1 === items.Specialization1
            );
            if (!findItem) {
              UniqueTherapy.push(items);
            }
          });
          setUniTherapy(UniqueTherapy);
        }, 1000);
      });
  }, []);

  // const handleLocation = (event) => {
  //   setLocation(event.target.value);

  //   if (item.map((p) => p.location === event.target.value)) {
  //     return true;
  //   }
  // };

  // const handleTherapy = (event) => {
  //   setTherapy(event.target.value);
  //   if (item.map((p) => p.Specialization1 === event.target.value)) {
  //     return true;
  //   }
  // };

  const SearchDoctors = () => {
    navigate("/searchdetails");
  };

  // console.log(UniLocation, UniTherapy);

  return (
    <div className="pt-24 bg-[url('images/doodle.png')] h-[70vh] bg-cover">
      <div className="text-center text-4xl font-bold text-white relative top-14">
        Find Child Specialists,Therapists & Special Educators In Your Area
      </div>

      <div className="flex justify-center mt-3 bg-white border-[12px] border-opacity-10 border-orange relative left-[15%] top-28 w-[70%] pb-2 pt-5 rounded-2xl">
        <div className="bg-white rounded-2xl w-52 flex items-center mb-3 mx-3 border-2 border-orange">
          <FaMapMarkerAlt className="text-gray-400 m-2" />
          <select
            name="brand"
            value={UniLocation.Locality}
            id=""
            className=""
            // onChange={handleLocation}
          >
            <option value="" disabled selected hidden className="">
              Select the Location
            </option>
            {/* {console.log(UniLocation)} */}
            {UniLocation.map((props) => {
              return (
                <option value={props.Locality} className="" key={props.id}>
                  {props.Locality}
                </option>
              );
            })}
          </select>
        </div>

        <div className="bg-white rounded-2xl w-[55%] p-2 flex items-center mb-3 border-2 border-orange">
          <FaSearchLocation className="text-gray-400 m-2" />
          <select
            name="brand"
            value={UniTherapy.Specialization1}
            id=""
            className="w-full"
            // onChange={handleTherapy}
          >
            <option value="" disabled selected hidden className="">
              Select the Occupation
            </option>
            {UniTherapy.map((props) => {
              return (
                <option
                  value={props.Specialization1}
                  className=""
                  key={props.id}
                >
                  {props.Specialization1}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="border-2 px-5 rounded-2xl mx-6 h-10 relative top-[6px] text-2xl font-bold text-white bg-orange"
          onClick={SearchDoctors}
        >
          Search
        </button>
      </div>
      <div className="flex relative top-44 justify-center">
        <div className="py-2 px-3 bg-white rounded mx-4">
          Occupational Therapy
        </div>
        <div className="py-2 px-3 bg-white rounded mx-4">Speech Therapy</div>
        <div className="py-2 px-3 bg-white rounded mx-4">Audiology</div>
        <div className="py-2 px-3 bg-white rounded mx-4">Child Psychology</div>
        <div className="py-2 px-3 bg-white rounded mx-4">ADHD</div>
        <div className="py-2 px-3 bg-white rounded mx-4">
          Pediatric Physiotherapy
        </div>
        <div className="py-2 px-3 bg-white rounded mx-4">
          Behavioural Therapy
        </div>
        <div className="py-2 px-3 bg-white rounded mx-4">Special Educator</div>
      </div>
      {/* {props.alert(location)} */}
    </div>
  );
};

export default SearchBar;
