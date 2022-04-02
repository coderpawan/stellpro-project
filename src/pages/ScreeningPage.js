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
      <div className="justify-center my-20">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSceIbdGm7lcRcJb_NycBNPKGRsgYW2q5tc_oM0cpqp7SOWCdQ/viewform?embedded=true"
          width="1100"
          height="1239"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </div>
  );
};

export default ScreeningPage;
