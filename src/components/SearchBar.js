import React from "react";
import { FaSearchLocation, FaMapMarkerAlt } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="mt-10">
      <div className="text-center">
        FIND SPECIALISTS,THERAPISTS,THERAPY CENTRES IN YOUR AREA
      </div>
      <div className="flex justify-center mt-3">
        <div className="bg-white rounded-l-2xl w-64 p-2 flex items-center mb-3 border-2 border-gray-300">
          <FaMapMarkerAlt className="text-gray-400 m-2" />
          <input
            type="text"
            name="location"
            placeholder="Search Location"
            className="bg-white outline-none text-sm flex-1"
          />
        </div>
        <div className="bg-white rounded-r-2xl w-64 p-2 flex items-center mb-3 border-2 border-gray-300">
          <FaSearchLocation className="text-gray-400 m-2" />
          <input
            type="text"
            name="doctors"
            placeholder="Search for Doctors,Therapists e.t.c"
            className="bg-white outline-none text-sm flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
