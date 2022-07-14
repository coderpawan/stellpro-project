import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Data from "../data/BlogsData";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Blogs = () => {
  const [visible, setVisible] = useState(9);
  const [item, setItem] = useState(Data);
  const ShowMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const handleFilter = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    if (e.target.value === "Parenting") {
      const updatedList = Data.filter((p) => p.tag === "Parenting");

      setItem(updatedList);
    }
    if (e.target.value === "Activity") {
      const updatedList = Data.filter((p) => p.tag === "Activity");

      setItem(updatedList);
    }
    if (e.target.value === "Demdee") {
      const updatedList = Data.filter((p) => p.tag === "Demdee");

      setItem(updatedList);
    }
    if (e.target.value === "Resources") {
      const updatedList = Data.filter((p) => p.tag === "Resources");

      setItem(updatedList);
    }
    if (e.target.value === "Community") {
      const updatedList = Data.filter((p) => p.tag === "Community");

      setItem(updatedList);
    }
    if (e.target.value === "Allpost") {
      setItem(Data);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="">
        <div className="text-center text-3xl text-[#0191B4] font-bold pt-28">
          Blogs
        </div>
        <div className="text-center">
          <button
            onClick={handleFilter}
            value="Allpost"
            className="px-3 py-1 bg-[#0191B4] text-white rounded-lg mt-4"
          >
            All Posts
          </button>
        </div>
        <div className="md:flex justify-center mt-5 md:mb-20 mb-5">
          <div className="flex">
            <button
              onClick={handleFilter}
              value="Activity"
              className="px-3 py-1 border-solid border-2 border-gray-100 mx-3 bg-white shadow-xl rounded-lg"
            >
              Activities
            </button>
            <button
              onClick={handleFilter}
              value="Community"
              className="px-3 py-1 border-solid border-2 border-gray-100 mx-3 bg-white shadow-xl rounded-lg"
            >
              Community
            </button>
            <button
              onClick={handleFilter}
              value="Parenting"
              className="px-3 py-1 border-solid border-2 border-gray-100 mx-3 bg-white shadow-xl rounded-lg"
            >
              Parenting
            </button>
          </div>
          <div className="flex justify-center mt-3">
            <button
              onClick={handleFilter}
              value="Resources"
              className="px-3 py-1 border-solid border-2 border-gray-100 mx-3 bg-white shadow-xl rounded-lg"
            >
              Resources
            </button>
            <button
              onClick={handleFilter}
              value="Demdee"
              className="px-3 py-1 border-solid border-2 border-gray-100 mx-3 bg-white shadow-xl rounded-lg"
            >
              Demdee
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 pb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12  py-10">
          {item.slice(0, visible).map((post) => {
            return (
              <div class="overflow-hidden shadow-lg rounded-2xl h-90 w-60 md:w-80 cursor-pointer m-auto">
                <div class="w-full block h-full">
                  <div class="bg-white  w-full p-4">
                    <Link to={`/blogs/${post.link}`}>
                      <img
                        alt="blogphoto"
                        src={post.image}
                        class="max-h-40 w-full object-cover mb-4 rounded-3xl"
                      />
                      <p class="text-black text-xl font-bold text-center px-3 text-md">
                        {post.topic}
                      </p>

                      {/* <p class="text-gray-400 text-center mt-5 mb-2">
                        {post.date} in{" "}
                        <span className="text-black">{post.tag}</span>
                      </p> */}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          onClick={ShowMore}
          className="bg-[#FE7A15] cursor-pointer md:w-[8%] w-[30%] h-10 mb-5 relative left-[35%] md:left-[45%] py-auto px-auto rounded-xl"
        >
          <div className="relative left-6 top-1">
            <div className="text-lg text-white font-semibold ">Next</div>
            <MdKeyboardArrowRight className="text-3xl relative left-10 bottom-7 text-white" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
