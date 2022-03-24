import React from "react";
import Navbar from "../components/Navbar";
import { FaSearchLocation } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Doctors from "../images/doctors.png";
import Treatment from "../images/treatment.png";
import Consultation from "../images/consultation.jpg";

const Cards = ({ title, content }) => {
  return (
    <div class="max-w-[230px] rounded-2xl overflow-hidden shadow-2xl mx-5">
      <img class="w-full" src={Consultation} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="mt-10">
          <div className="text-center">
            FIND SPECIALISTS,THERAPISTS,THERAPY CENTRES IN YOUR AREA
          </div>
          <div className="flex justify-center mt-3">
            <div className="bg-white w-64 p-2 flex items-center mb-3 border-2 border-gray-300">
              <FaMapMarkerAlt className="text-gray-400 m-2" />
              <input
                type="text"
                name="location"
                placeholder="Search Location"
                className="bg-white outline-none text-sm flex-1"
              />
            </div>
            <div className="bg-white w-64 p-2 flex items-center mb-3 border-2 border-gray-300">
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
      </div>
      <div className="flex bg-[#0191B4] mt-10">
        <div className="text-center px-20 py-12 w-[60%]">
          <div className="text-7xl px-20 pt-6">
            Child Specialists Online Now
          </div>
          <div className="text-[26px] font-bold pt-7">
            We help children aged 2-10 years with behavior, motor, academic, and
            speech delays or concerns
          </div>
          <button className="bg-white px-10 py-4 text-xl border-2 mt-6">
            BOOK A FREE CONSULTATION
          </button>
          <div className="text-[26px] font-bold pt-8">
            Is your Child's development on Track{" "}
          </div>
          <button className="bg-white px-10 py-4 text-xl border-2 mt-6">
            TAKE FREE ASSESSMENT
          </button>
        </div>
        <img src={Doctors} alt="" className="w-[40%]" />
      </div>
      <div className="flex justify-center mt-24">
        <div className="w-[55%] text-center mt-3">
          <div className="">WHAT WE DO</div>
          <div className="uppercase mt-12">
            We aspire to be your partner in your child's developmental journey.
            We want make finding intervention services effortless , so that you
            have one less thing to worry about.
          </div>
        </div>
        <img src={Treatment} alt="" className="h-48" />
      </div>
      <div className="mt-24">
        <div className="text-5xl text-center"> Services we offer</div>
        <div className="flex my-10 justify-center">
          <Cards
            title="Instant Video Consultation"
            content="Lorem ipsum dolor sit amet."
          />
          <Cards
            title="Find Doctors Near You"
            content="Lorem ipsum dolor sit amet."
          />
          <Cards title="Medicines" content="Lorem ipsum dolor sit amet." />
          <Cards title="Lab Tests" content="Lorem ipsum dolor sit amet." />
          <Cards title="Surgeries" content="Lorem ipsum dolor sit amet." />
        </div>
      </div>
      <div className="py-16">
        <div className="uppercase text-center">About us</div>
        <div className="text-4xl text-center mt-4">Company news</div>
        <div className="flex justify-center mt-20">
          <div className="w-[30%] pr-20 pl-4 ">
            <div className="text-3xl w-[80%]">10 Quick Tips About Blogging</div>
            <div className="mt-8">FEB 21,2019</div>
            <div className="text-xl mt-2">
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
            <div className="mt-8">FEB 21,2019</div>
            <div className="text-xl mt-2">
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
            <div className="mt-8">FEB 21,2019</div>
            <div className="text-xl mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className=""></div>
      </div>
    </div>
  );
};

export default LandingPage;
