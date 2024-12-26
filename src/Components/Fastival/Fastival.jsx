import React from "react";
import banner from "./assets/banner.png";
import "./fastival.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import boxes from "./boxes.js";
import line from "./assets/line.png";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify.js";

function Fastival() {
  return (
    <div>
      {/* Banner Section */}
      <Header />
      <div className="relative w-full">
        <img
          src={banner}
          alt="Festival Banner"
          className="w-full h-[50vh] md:h-[70vh] object-cover"
        />
        <div className="absolute w-[90%] md:w-[80%] flex flex-col gap-1 md:gap-3 items-center top-[0%] md:top-[6%] left-[5%] md:left-[10%]">
          <div className="w-[30%] md:w-[20%] h-[30px] md:h-[62px] pt-1 md:p-[0px] bg-[#c61d21] shadow border-2 border-white flex justify-center items-center rounded-b-lg mb-3 md:mb-24">
            <h1 className="text-white text-sm md:text-3xl font-bold font-['Open Sans'] capitalize">
              FESTIVAL
            </h1>
          </div>
          <h2 className="text-center text-xl md:text-5xl font-semibold font-['Source Serif Pro'] capitalize design">
            Join us in the celebration
          </h2>
          <p className="text-center text-black text-xs md:text-3xl font-semibold font-['Open Sans'] capitalize">
            Every breath in Krishna Consciousness is celebratory, and yet there
            are a few occasions that further elevate the unceasing joy of
            Bhakti, of servitude, and love. Srila Prabhupada described festivals
            as the “mothers of devotion”—days when the nectar of Bhakti is
            available to one and all. At Sri Sri Radha Madhava Temple, festivals
            are celebrated with splendor, fervor, and piety in equal measure.
            Come join in the festivities. Hare Krishna!
          </p>
        </div>
      </div>

      {/* Festival Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 py-10 md:py-20 px-8 md:px-24 gap-5 festival">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="bg-[#fff0de] rounded-t-3xl rounded-b-2xl relative"
            style={{ boxShadow: "0 0 15px #000" }}
          >
            <img src={box.img} alt={box.heading} className="w-full" />
            <div className="w-[60%] md:w-[50%] md:px-8 py-2 md:py-3 bg-[#fff0de] rounded-lg border-2 border-[#c20000] justify-center items-center gap-2.5 flex absolute top-[25%] md:top-[33%] left-[20%] md:left-[25%]">
              <Link
                to={`/donation-form/${slugify(box.heading)}`}
                onClick={() => window.scrollTo(0, 0)}
                className="text-center text-[#c20000] text-sm md:text-2xl font-normal font-['Open Sans'] md:leading-[21px]"
              >
                Sponsor the Festival
              </Link>
            </div>
            <div className="flex flex-col items-center md:gap-2 px-4 py-3">
              <h2 className="design text-base md:text-3xl font-bold font-['Source Serif Pro'] capitalize">
                {box.heading}
              </h2>
              <img src={line} alt="Divider" className="w-[80%]" />
              <p className="md:text-center text-black text-xs md:text-2xl font-semibold font-['Open Sans'] capitalize md:leading-10 m-0">
                {box.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Fastival;
