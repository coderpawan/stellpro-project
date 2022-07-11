import React, { useState } from "react";
import StarsRating from "stars-rating";

const Review = ({ company }) => {
  const [rating, setRating] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [title, setTitle] = useState();
  const [message, setMessage] = useState();
  const ratingChanged = async (newRating) => {
    setRating(newRating);
  };
  const sendMessage = async () => {
    let item = {
      company: company,
      ratings: rating,
      name: name,
      email: email,
      location: location,
      title: title,
      message: message,
    };

    var response = await fetch(
      "https://sheet.best/api/sheets/3e7e69e5-2e2e-443f-a15c-2898f477fbec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // Authorization: "Bearer " + token,
        },
        body: JSON.stringify(item),
      }
    );
    let result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <div className="text-center font-bold md:text-3xl text-xl mx-10 mt-3">
        {company}
      </div>
      <div className="text-center text-gray-500 md:text-3xl text-xl mt-5">
        Rate it{" "}
      </div>
      <StarsRating
        value={rating}
        count={5}
        onChange={ratingChanged}
        size={50}
        color2={"#FFD700"}
        className="relative md:left-[30%] left-[20%]"
      />
      <input
        type="text"
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="mx-6 py-1 my-2 px-3 rounded-lg w-[90%] border-solid border-2 border-gray-300"
        placeholder="Name"
      />
      <input
        type="email"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="mx-6 py-1 my-2 px-3 rounded-lg w-[90%] border-solid border-2 border-gray-300"
        placeholder="Email"
      />
      <input
        type="text"
        required
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        className="mx-6 py-1 my-2 px-3 rounded-lg w-[90%] border-solid border-2 border-gray-300"
        placeholder="Location"
      />
      <input
        type="text"
        required
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="mx-6 py-1 my-2 px-3 rounded-lg w-[90%] border-solid border-2 border-gray-300"
        placeholder="Title"
      />
      <textarea
        rows="4"
        required
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        type="text"
        className="mx-6 py-1 px-3 rounded-lg w-[90%] border-solid border-2 border-gray-300"
        placeholder="Message"
      />
      <div
        onClick={sendMessage}
        className="rounded-lg py-2 px-5 bg-orange relative left-[30%] md:left-[40%] text-white mt-4 w-fit"
      >
        Send Message
      </div>
    </div>
  );
};

export default Review;
