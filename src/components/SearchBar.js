import React, { useState, useEffect } from "react";
import { FaSearchLocation, FaMapMarkerAlt } from "react-icons/fa";
// import Data from "../data/SearchBarData";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
// import Doodle from "../images/doodle.png";

const SearchBar = (props) => {
  // const [filter, setFilter] = useState([]);
  const filter = [];
  const [item, setItem] = useState([]);
  const [therapy, setTherapy] = useState();
  const [location, setLocation] = useState(null);
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
      "https://sheet.best/api/sheets/1824a705-c180-4d14-aeea-379945cbd08b?_raw=1"
    )
      .then((res) => res.json())
      .then((result) => {
        // setItem(result.slice());
        // setFilter(result.slice());
        setItem(result);
        filter.push(result);
        if (props.alert) {
          props.alert(filter);
        }
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
            return UniqueLocation;
          });
          setUniLocation(UniqueLocation);
          result.map((items) => {
            var findItem = UniqueTherapy.find(
              (e) => e.Specialization1 === items.Specialization1
            );
            if (!findItem) {
              UniqueTherapy.push(items);
            }
            return UniqueTherapy;
          });
          setUniTherapy(UniqueTherapy);
        }, 1000);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleLocation = (event) => {
  //   setLocation(event.target.value);

  //   if (item.map((p) => p.location === event.target.value)) {
  //     return true;
  //   }
  // };

  const handleTherapy = (event) => {
    setTherapy(event.target.value);
    if (item.map((p) => p.Specialization1 === event.target.value)) {
      return true;
    }
  };
  const options = UniLocation.map((props) => {
    return { value: props.Locality, label: props.Locality };
  });

  const SearchDoctors = () => {
    navigate("/searchdetails");
    console.log(location.value, therapy);

    if (location && therapy) {
      const updatedList = item.filter(
        (p) =>
          (p.Locality === location.value && p.Specialization1 === therapy) ||
          (p.Locality === location.value && p.Services1 === therapy) ||
          (p.City === location.value && p.Services1 === therapy) ||
          (p.City === location.value && p.Specialization1 === therapy)
      );
      console.log(updatedList);
      const length = updatedList.length;
      if (props.alert1) {
        props.alert1(length);
      }
      filter.push(updatedList);
      console.log(filter);
    }

    if (props.alert) {
      props.alert(filter);
    }
  };

  const handleFilter = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    if (e.target.value === "Speech") {
      const updatedList = item.filter(
        (p) => p.Specialization1 === "Speech Therapy"
      );

      filter.push(updatedList);
    }
    if (e.target.value === "Occupational") {
      const updatedList = item.filter(
        (p) => p.Specialization1 === "Occupational Therapy"
      );

      filter.push(updatedList);
    }
    if (e.target.value === "Adhd") {
      const updatedList = item.filter((p) => p.Specialization1 === "ADHD");

      filter.push(updatedList);
    }
    if (e.target.value === "Pediatric") {
      const updatedList = item.filter(
        (p) => p.Specialization1 === "Pediatrician"
      );

      filter.push(updatedList);
    }
    if (e.target.value === "Audiology") {
      const updatedList = item.filter((p) => p.Specialization1 === "Audiology");

      filter.push(updatedList);
    }
    if (e.target.value === "Child") {
      const updatedList = item.filter(
        (p) => p.Specialization1 === "Child health care centre"
      );

      filter.push(updatedList);
    }
    if (e.target.value === "Psychologist") {
      const updatedList = item.filter(
        (p) => p.Specialization1 === "Psychologist"
      );

      filter.push(updatedList);
    }
    if (e.target.value === "Addiction") {
      const updatedList = item.filter(
        (p) => p.Specialization1 === "Addiction treatment center"
      );

      filter.push(updatedList);
    }
    if (props.alert) {
      props.alert(filter);
    }
  };

  // if (filter.size() === 0) {
  //   console.log("No Clinic present in this area");
  //   setError("No Clinic present in this area");
  // }

  // console.log(UniLocation, UniTherapy);

  return (
    <div className="pt-24 bg-[url('images/doodle.png')] h-[70vh] bg-cover">
      <div className="text-center text-4xl font-bold text-white relative top-14">
        Find Child Specialists,Therapists & Special Educators In Your Area
      </div>

      <div className="flex justify-center mt-3 bg-white border-[12px] border-opacity-10 border-orange relative left-[15%] top-28 w-[70%] pb-2 pt-5 rounded-2xl">
        <div className="bg-white rounded-2xl w-52 flex items-center mb-3 mx-3 border-2 border-orange">
          <FaMapMarkerAlt className="text-gray-400 m-2" />
          {/* <select
            name="brand"
            value={UniLocation.Locality}
            id=""
            className=""
            onChange={handleLocation}
          >
            <option value="" disabled selected hidden className="">
              Select the Location
            </option>
            
            {UniLocation.map((props) => {
              return (
                <option value={props.Locality} className="" key={props.id}>
                  {props.Locality}
                </option>
              );
            })}
          </select> */}
          <Select
            defaultValue={location}
            onChange={setLocation}
            options={options}
            className="w-40 text-sm"
            placeholder="Search Location"
          />
        </div>

        <div className="bg-white rounded-2xl w-[55%] p-2 flex items-center mb-3 border-2 border-orange">
          <FaSearchLocation className="text-gray-400 m-2" />
          <select
            name="brand"
            value={UniTherapy.Specialization1}
            id=""
            className="w-full text-sm"
            onChange={handleTherapy}
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
      <div className="flex relative top-44 pb-16 justify-center">
        <button
          className="py-2 px-3 bg-white rounded mx-4"
          value="Occupational"
          onClick={handleFilter}
        >
          Occupational Therapy
        </button>
        <button
          className="py-2 px-3 bg-white rounded mx-4"
          value="Speech"
          onClick={handleFilter}
        >
          Speech Therapy
        </button>
        <button
          className="py-2 px-3 bg-white rounded mx-4"
          value="Audiology"
          onClick={handleFilter}
        >
          Audiology
        </button>
        <button
          className="py-2 px-3 bg-white rounded mx-4"
          value="Psychologist"
          onClick={handleFilter}
        >
          Psychologist
        </button>
        <button
          className="py-2 px-3 bg-white rounded mx-4"
          value="Adhd"
          onClick={handleFilter}
        >
          ADHD
        </button>
        <button
          className="py-2 px-3 bg-white rounded mx-4"
          value="Pediatric"
          onClick={handleFilter}
        >
          Pediatrician
        </button>
        <button
          className="py-2 px-3 bg-white rounded mx-4"
          value="Child"
          onClick={handleFilter}
        >
          Child Health Care
        </button>
        <button
          className="py-2 px-3 bg-white rounded mx-4"
          value="Addiction"
          onClick={handleFilter}
        >
          Addiction Treatment
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
