import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Doctors from "../images/Picture1.png";

import WhiteProLogo from "../images/white pro logo.jpeg";

import Footer from "../components/Footer";
import Care1 from "../images/dravid.webp";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import Artboard1 from "../images/whatwedo.jpeg";
import ChildAssesment from "../images/Child Assessment.jpeg";
import FindSpecialist from "../images/FindSpecialist.jpeg";
import OnlineSession from "../images/OnlineSession.jpeg";
import ResourcesPrograms from "../images/Programs.jpeg";
import JoinCommunity from "../images/JoinCommunity.jpeg";

const Cards = ({ title, content, image, link }) => {
  return (
    <div class="max-w-[190px] rounded-2xl overflow-hidden shadow-2xl mx-5">
      <Link to={`${link}`}>
        <img class="w-full" src={image} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-gray-600 text-xl mb-2">{title}</div>
          <p class="text-gray-700 text-base">{content}</p>
        </div>
      </Link>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className=""></div>

      <div className="flex justify-center mt-24 mx-20">
        <div className="w-[55%] text-center mt-3">
          <div className="text-deepblue text-4xl font-bold italic">
            At demdee, we are on a mission to make child development inclusive
            and accessible
          </div>
          <div className="mt-12 text-gray-600 text-2xl">
            We want to make finding intervention services and resources
            effortless , so that you have one less thing to worry about.
          </div>
        </div>
        <img src={Artboard1} alt="" className="h-96 rounded-xl ml-16" />
      </div>
      <div className="mt-24">
        <div className="text-5xl text-gray-600 text-center">
          Services We Offer{" "}
        </div>
        <div className="flex my-10 justify-center">
          <Cards
            title="Find Specialists Near You"
            // content="Lorem ipsum dolor sit amet."
            image={FindSpecialist}
            link="/searchdetails"
          />
          <Cards
            title="Book Online Sessions"
            // content="Lorem ipsum dolor sit amet."
            image={OnlineSession}
            link="/assessments"
          />
          <Cards
            title="Take Child Assessment"
            // content="Lorem ipsum dolor sit amet."
            image={ChildAssesment}
            link="/assessments"
          />
          <Cards
            title="Resources and Programs"
            // content="Lorem ipsum dolor sit amet."
            image={ResourcesPrograms}
            link="/videoondemand"
          />
          <Cards
            title="Join Community"
            // content="Lorem ipsum dolor sit amet."
            image={JoinCommunity}
            link="/community"
          />
        </div>
      </div>
      <div className="flex bg-[#0191B4] my-20 mx-16 rounded-3xl">
        <div className="text-center px-20 py-12 w-[60%]">
          <div className="text-4xl px-20 pt-6 text-white">
            Connect with Child Specialists Online at
          </div>
          <img
            src={WhiteProLogo}
            alt=""
            className=" w-[50%] relative left-40"
          />
          <div className="text-xl font-bold text-white">
            Get professional help for children aged 2-10 years with academic,
            speech, behavioral, motor and sensory delays or concerns
          </div>
          <div className="flex justify-center">
            <button className="px-6 py-2 text-lg font-bold text-white border-2 mt-6 rounded-xl bg-[#FE7A15] hover:bg-[#f8d90f] hover:text-[#0191B4]">
              BOOK A FREE CONSULTATION
            </button>
            <Link to="care">
              <button className="px-6 ml-3 py-3 font-bold text-white text-sm border-2 mt-6 rounded-xl bg-[#35bbca] hover:bg-[#f8d90f] hover:text-[#0191B4]">
                KNOW MORE
              </button>
            </Link>
          </div>
        </div>
        <img src={Doctors} alt="" className="w-[30%]" />
      </div>
      <Testimonial />
      <div className="py-16">
        <div className="uppercase text-center">About us</div>
        <div className="text-4xl text-center mt-4">Company news</div>
        <div className="flex justify-center mt-20">
          <div className="w-[30%] pr-20 pl-4 ">
            <div className="text-3xl w-[80%]">10 Quick Tips About Blogging</div>
            <div className="mt-8 text-gray-500">FEB 21,2019</div>
            <div className="text-xl mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </div>
          </div>
          <div className="w-[30%] pr-20 pl-4">
            <div className="text-3xl w-[90%]">
              15 Best Blogs To Follow About Web Design
            </div>
            <div className="mt-8 text-gray-500">FEB 21,2019</div>
            <div className="text-xl mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </div>
          </div>
          <div className="w-[30%] pr-20 pl-4">
            <div className="text-3xl  w-[90%]">
              {" "}
              7 of the Best Examples of Beautiful Blog Design{" "}
            </div>
            <div className="mt-8 text-gray-500">FEB 21,2019</div>
            <div className="text-xl mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </div>
          </div>
        </div>
      </div>
      <div className="fixed left-[75%] top-[510px] flex bg-gradient-to-r from-[#d3dd18] to-[#ffffff] rounded-2xl z-50">
        <div className="w-36 ml-3 mt-2">
          <img src={Logo} alt="" className="w-20" />
          <div className="mt-3">
            <span className="font-extrabold">FREE</span>
            <span className="font-bold ml-1">Consultation</span>
          </div>
          <div className="text-[12px]">with Demdee Care surgeon</div>
          <Link to="care">
            <button className="mt-3 text-[10px] px-2 py-1 bg-[#fe7a15] rounded-[8px]">
              KNOW MORE
            </button>
          </Link>
        </div>
        <img src={Care1} alt="" className="w-40 rounded-b-2xl" />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
