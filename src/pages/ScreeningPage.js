/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ScreeningPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#0191B4]">
        <div className="text-center text-4xl font-bold text-white pt-10">
          Autism Screening Tool
        </div>
        <div className="mx-28 mt-10 text-xl font-semibold text-white pb-16">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          tempore consequatur reiciendis dicta labore iste hic eveniet nobis
          iusto. Facilis, optio doloremque facere repellendus distinctio quis
          quo temporibus veniam dolorem similique nostrum ut nemo quasi beatae
          eum mollitia quibusdam corporis porro? Amet excepturi ad, ipsam
          aliquid sed inventore modi dolores saepe. Repellendus at nesciunt
          doloribus molestiae iusto, accusamus ullam! Soluta saepe quasi
          voluptate sed magni doloribus, magnam ducimus consectetur rerum qui
          accusamus consequatur minima numquam reiciendis ipsam, iure ad, earum
          ut quidem quo provident illum beatae! Iure, necessitatibus officia
          quas ab placeat optio obcaecati corrupti quod soluta nam deserunt
          illum.
        </div>
      </div>
      <div className="mt-10">
        <div className="text-4xl text-center font-bold">
          Know wheter you need a Consultant?
        </div>
        <div className="flex ml-48 mt-8 w-[60%]">
          <div className="text-xl">1)</div>
          <div className="ml-2 text-xl">
            if score less than 2 : Need Consultant{" "}
          </div>
        </div>
        <div className="flex ml-48 mt-4 w-[60%]">
          <div className="text-xl">2)</div>
          <div className="ml-2 text-xl">
            if score greater than 2 and less than 10 : Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam, quasi!{" "}
          </div>
        </div>
        <div className="flex ml-48 mt-4 w-[60%]">
          <div className="text-xl">3)</div>
          <div className="ml-2 text-xl">
            if score greater than 10 : Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quasi!{" "}
          </div>
        </div>
      </div>
      <div className="justify-center my-20">
        <iframe
          src="https://www.cognitoforms.com/f/bVGDwp8FUUSd87xqjt8kag/1"
          height="869"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default ScreeningPage;
