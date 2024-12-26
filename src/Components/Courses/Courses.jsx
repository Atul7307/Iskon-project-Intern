import React from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import banner from "./assets/banner.png";
import bg from "./assets/bg.png";
import paths from "./course.js";
import "./course.css"

function Courses() {
  return (
    <div>
      <Header />
      {/* Banner Section */}
      <div className="w-full relative">
        <img src={banner} alt="banner" className="w-full " />
        <div className="absolute w-[40%]  bg-[#c61d21]/50 top-[15%] md:top-[30%]  left-[30%] flex justify-center items-center p-4 ">
          <h2 className="text-center text-white text-2xl md:text-9xl font-normal font-['DM Serif Display'] m-0 uppercase ">
            Courses
          </h2>
        </div>
      </div>

      <div
        className="main"
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-[85%] mx-auto text-center relative flex flex-col justify-center items-center subheading">
          <h3 className="text-black text-xl md:text-[82px] md:font-normal font-['DM Serif Display'] font-bold ">
            PROGRESS ON THE PATH
            <br />
          </h3>
          <p className="text-center md:text-center text-black text-base md:text-4xl font-normal font-['Open Sans'] md:leading-[44px] m-0">
            No matter where you are on your spiritual journey we offer a wide
            cross-section of seminars and courses to help you progress on the
            path of Bhakti and Krishna Consciousness. Our courses are all free
            of cost and open to all.
          </p>
          
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 box gap-5  md:gap-14 ">
          {paths.map((path) => (
            <div className=" bg-[#f6f2e8] rounded-xl md:rounded-[25px]  shadow-[-1px_6px_10.6px_7px_rgba(0,0,0,0.25)]" key={path.id}>
              <img src={path.Image} alt="" className="w-[110%] "/>
              <p className="text-[#c61d21] text-base md:text-4xl font-semibold font-['Poppins']  content m-0">{path.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Courses;
