import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const SearchDetails = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="">
        <div className="">
          <div className="flex">
            <input type="checkbox" className="" />
            <div className="">Video Consult</div>
          </div>
          <select name="" id="" className="w-60%">
            <option value="" disabled selected hidden className="">
              Availability
            </option>
            <option value="" className="">
              Available Today
            </option>
            <option value="" className="">
              Available Tomorrow
            </option>
            <option value="" className="">
              Available in next 7 days
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchDetails;
