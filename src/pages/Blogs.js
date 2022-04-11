import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Data from "../data/BlogsData";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiShareAlt } from "react-icons/bi";
import { RWebShare } from "react-web-share";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="text-center text-3xl text-[#0191B4] font-bold mt-10">
          Blogs
        </div>
        <div className="text-center">
          <button className="px-3 py-1 bg-[#0191B4] text-white rounded-lg mt-4">
            All Posts
          </button>
        </div>
        <div className="flex justify-center mt-5 mb-20">
          <button className="px-3 py-1 mx-3 bg-white shadow-xl rounded-lg">
            Activities
          </button>
          <button className="px-3 py-1 mx-3 bg-white shadow-xl rounded-lg">
            Community
          </button>
          <button className="px-3 py-1 mx-3 bg-white shadow-xl rounded-lg">
            Parenting
          </button>
          <button className="px-3 py-1 mx-3 bg-white shadow-xl rounded-lg">
            Resources
          </button>
          <button className="px-3 py-1 mx-3 bg-white shadow-xl rounded-lg">
            Demdee
          </button>
        </div>
      </div>
      <div className="bg-gray-100 pb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12  py-10">
          {Data.map((post) => {
            return (
              <div class="overflow-hidden shadow-lg rounded-2xl h-90 w-60 md:w-80 cursor-pointer m-auto">
                <div class="w-full block h-full">
                  <div class="bg-white  w-full p-4">
                    <Link to="/blogdetails">
                      <img
                        alt="blogphoto"
                        src={post.image}
                        class="max-h-40 w-full object-cover mb-4 rounded-3xl"
                      />
                      <p class="text-black text-xl font-bold text-center px-3 text-md">
                        {post.topic}
                      </p>

                      <p class="text-gray-400 text-center mt-5 mb-2">
                        {post.date} in{" "}
                        <span className="text-black">{post.tag}</span>
                      </p>
                    </Link>
                    <RWebShare
                      data={{
                        text: "share this blog",
                        url: "https://www.practo.com/healthfeed?utm_source=practo_home",
                        title: "blog",
                      }}
                      onClick={() => console.log("shared successfully!")}
                    >
                      <div className="relative left-[10%] mt-4">
                        <BiShareAlt />
                      </div>
                    </RWebShare>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#FE7A15] w-[8%] h-10 mb-5 relative left-[45%] py-auto px-auto rounded-xl">
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
