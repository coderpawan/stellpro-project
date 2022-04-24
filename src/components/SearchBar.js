import React, { useEffect, useState } from "react";
import { FaSearchLocation, FaMapMarkerAlt } from "react-icons/fa";
import Data from "../data/SearchBarData";
import Locationbar from "./Locationbar";

const SearchBar = () => {
  const [error, setError] = useState();
  const [item, setItem] = useState(Data);
  const [filter, setFilter] = useState(item);
  // const [filterDoctor, setFilterDoctor] = useState(item);
  const UniqueLocation = [];
  const UniqueTherapy = [];
  item.map((items) => {
    var findItem = UniqueLocation.find((e) => e.location === items.location);
    if (!findItem) {
      UniqueLocation.push(items);
    }
  });
  item.map((items) => {
    var findItem = UniqueTherapy.find((e) => e.therapy === items.therapy);
    if (!findItem) {
      UniqueTherapy.push(items);
    }
  });
  const handleType = (event) => {
    const updatedList = item.filter((p) => p.location === event.target.value);
    setFilter(updatedList);
  };
  const handleDoctor = (event) => {
    const updatedList = item.filter((p) => p.doctor === event.target.value);
    setFilter(updatedList);
  };

  // useEffect(() => {
  //   fetch("https://sheet.best/api/sheets/6ac90cfa-3584-467e-81bc-c27ad07ceef0")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setItem(result);
  //         setFilter(result);
  //       },

  //       (error) => {
  //         setError(error);
  //       }
  //     );
  // }, []);

  return (
    <div className="pt-24">
      <div className="text-center">
        FIND SPECIALISTS,THERAPISTS,THERAPY CENTRES IN YOUR AREA
      </div>
      <div className="flex justify-center mt-3">
        <div className="bg-white rounded-l-2xl w-64 p-2 flex items-center mb-3 border-2 border-gray-300">
          <FaMapMarkerAlt className="text-gray-400 m-2" />
          <select
            name="brand"
            value={UniqueLocation.location}
            id=""
            className=""
            onChange={handleType}
          >
            <option value="" disabled selected hidden className="">
              Select the Location
            </option>
            {UniqueLocation.map((props) => {
              return (
                <option value={props.location} className="" key={props.id}>
                  {props.location}
                </option>
              );
            })}
          </select>
        </div>
        <div className="bg-white rounded-r-2xl w-64 p-2 flex items-center mb-3 border-2 border-gray-300">
          <FaSearchLocation className="text-gray-400 m-2" />
          <select
            name="brand"
            value={UniqueTherapy.therapy}
            id=""
            className=""
            onChange={handleDoctor}
          >
            <option value="" disabled selected hidden className="">
              Select the Occupation
            </option>
            {UniqueTherapy.map((props) => {
              return (
                <option value={props.therapy} className="" key={props.id}>
                  {props.therapy}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
