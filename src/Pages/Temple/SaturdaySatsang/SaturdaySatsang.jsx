import React from "react";
import Slider1 from "./Slider1";
import "../SundayFeast/sundayfeast.css";
import img5 from "./assets/img5.png";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import { CgMail } from "react-icons/cg";
import Slider2 from "./Slider2";
function SaturdaySatsang() {
  return (
    <div className=" w-full">
      <Header />

      <div className="flex flex-col justify-center items-center card1 bg-cover bg-center ">
        <p className=" w-[226px]  lg:w-[463px] h-[42px] lg:h-[82px] p-[9/16px] lg:p-[18px] bg-[#c61d21] rounded-tl-[5.09px] lg:rounded-tl-[10px] rounded-tr-[5.09px] lg:rounded-tr-[10px] rounded-bl-[10.18px]lg:rounded-bl-[20px] rounded-br-[10.18px] lg:rounded-br-[20px] shadow border-2 border-white justify-center items-center gap-[5.09px] lg:gap-2.5 text-white text-xl lg:text-4xl font-bold font-['Open Sans'] capitalize leading-snug ">
        Saturday Satsung
        </p>
        <h1 className="text-center text-[#c61d21] text-2xl lg:text-6xl font-bold font-['Open Sans'] sunday lg:my-7">
        Saturday Satsang - ISKCON Sri Jagannath Mandir
        </h1>
        <div className="flex items-center  flex-col lg:flex-row mt-1 lg:mt-7 ">
          <img
            src={img5}
            className="w-[304px] h-[193px] lg:w-[850px] lg:h-[540px] "
            alt=""
          />
          <div className="flex flex-col  justify-start items-start lg:h-[500px] ">
            <p className="w-[350px] h-[29.16px] lg:w-[653px] lg:h-[85px]  text-[#c61d21] text-2xl lg:text-5xl font-semibold font-['Source Serif Pro'] capitalize text-center">
            Join Us for Saturday Satsang!
            </p>
           
           
            <p className="w-[350px] lg:w-[591px] lg:h-[313px] text-black lg:text-4xl font-light font-['Inter'] capitalize text-base text-justify">
              At <strong className="font-semibold">ISKCON Sri Jagannath Mandir,</strong>{" "}
              we invite you to our Saturday Satsang, a spiritual gathering designed to uplift your soul and deepen your connection with Krishna. This is a wonderful opportunity to engage in devotional practices and connect with fellow devotees.
            </p>
          </div>
        </div>
        <p className="w-[350px] lg:w-[85rem] text-[#c61d21] text-base lg:text-4xl font-bold font-['Inter'] text-justify lg:text-start lg:my-16 mx-auto">
          It is an opportunity to come together as a community, nourish our
          bodies and souls, and immerse ourselves in the teachings of Lord
          Krishna
        </p>
      </div>

      <Slider1 />
      <Slider2 />

      <div className="w-full bg2 lg:bg-cover bg-center py-10 bg-contain">
        {/* Shehedule Of Event */}
        <div className="w-[382px] lg:w-[89.93rem] h-[317px] lg:h-[31.43rem] flex flex-col gap-2 lg:gap-12 items-center justify-center px-14 lg:py-10 bg-[#fff1df]/40 border-2 rounded-[5.19px] border-[#bc3521] backdrop-blur-[80.60px] mx-auto lg:mb-32 mb-10 lg:mt-20">
          <h2 className="text-3xl lg:text-6xl text-[#c61d21] font-bold lg:font-semibold font-['Source Serif'] lg:mt-10">
            Schedule of Events
          </h2>
          <div className="flex items-center justify-center gap-1 lg:gap-8  flex-col lg:flex-row ">
            <img
              src={img1}
              className="w-[250px] lg:w-[27.93rem] h-[140px] lg:h-[16.31rem] "
              alt=""
            />
            <ul className="w-[339px] lg:w-[50rem] list-disc text-start ">
              <li className=" lg:m-2 my-1 ">
                <p className="font-normal text-black font-['Open Sans'] lg:leading-[3.125rem] capitalize text-base lg:text-4xl text-start m-0">
                  <strong className="  font-bold  ">Time : </strong>
                  Every Saturday from 6 PM to 9 PM.
                </p>
              </li>
              <li className="lg:m-2 my-1">
                <p className=" font-normal text-black font-['Open Sans'] lg:leading-[3.125rem] capitalize text-base lg:text-4xl text-start m-0">
                  <strong className=" font-bold  ">Location : </strong>
                  ISKCON Sri Jagannath Mandir
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Attend  */}
        <div className="w-full h-[1650px] lg:h-[56rem] bg-[#c61d21] lg:py-10 py-7 lg:mx-auto">
          <h2 className="text-[#f3b01b] text-4xl lg:text-[4.25rem] font-semibold font-['Source Serif Pro'] capitalize text-center lg:my-5">
            Why Attend?
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mt-7 lg:mt-[68px]">
            <div className="w-full lg:w-[41.68rem] flex-col flex justify-center items-center gap-6 lg:gap-14 ">
              <img
                src={img2}
                alt=""
                className=" lg:w-[26.625rem] h-[342.95px] lg:h-[29.93rem]"
              />
              <div className="w-[305px] lg:w-[26.625rem] h-[8.25rem] flex-col justify-start items-start lg:gap-1.5 flex">
                <p className="self-stretch text-justify text-[#f3b01b] text-2xl lg:text-4xl font-bold font-['Source Serif Pro'] capitalize">
                Spiritual Upliftment 
                </p>
                <p className="self-stretch text-justify text-white text-base lg:text-xl font-semibold font-['Open Sans'] capitalize">
                Engage in practices that enhance your spiritual growth and bring peace to your mind and heart.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[41.68rem] flex-col flex justify-center items-center gap-6 lg:gap-14 ">
              <img
                src={img3}
                alt=""
                className="w-[305px] lg:w-[26.625rem] h-[342.95px] lg:h-[29.93rem]"
              />
              <div className="w-[305px] lg:w-[26.625rem] h-[8.25rem] flex-col justify-start items-start lg:gap-1.5 flex">
                <p className="self-stretch text-justify text-[#f3b01b] text-2xl lg:text-4xl font-bold font-['Source Serif Pro'] capitalize">
                Community Connection
                </p>
                <p className="self-stretch text-justify text-white text-base lg:text-xl font-semibold font-['Open Sans'] capitalize">
                Connect with fellow devotees and build lasting friendships in a warm and welcoming environment.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[41.68rem] flex-col flex justify-center items-center gap-6 lg:gap-14 ">
              <img
                src={img4}
                alt=""
                className="w-[305px] lg:w-[26.625rem] h-[342.95px] lg:h-[29.93rem]"
              />
              <div className="w-[305px] lg:w-[26.625rem] h-[8.25rem] flex-col justify-start items-start lg:gap-1.5 flex">
                <p className="self-stretch text-justify text-[#f3b01b] text-2xl lg:text-4xl font-bold font-['Source Serif Pro'] capitalize">
                Service Opportunity 
                </p>
                <p className="self-stretch text-justify text-white text-base lg:text-xl font-semibold font-['Open Sans'] capitalize">
                Participate in Annadaan and experience the joy of serving others.

                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="w-[382px] h-[232px] lg:w-[88.37rem] lg:h-[24.31rem] bg-[#fff1df]/40 rounded-[5.19px] lg:rounded-xl border-4 border-[#c61d21] lg:my-24 mt-9 mx-auto">
          <div className=" h-[44.66px] lg:w-full lg:h-[115px] bg-[#c61d21] flex items-center justify-center  ">
            <p className=" text-white text-2xl lg:text-5xl font-bold font['Open Sans'] text-center m-0 mb-1 lg:m-0">
              Join Us
            </p>
          </div>
          

          <p className="text-black text-justify lg:text-start text-base lg:text-4xl font-normal font-['Open Sans'] capitalize leading-7 lg:leading-[3.18rem] w-[319px] lg:w-[79.30rem] lg:h-[6.5rem] mx-auto my-9 lg:my-20">
            Be A Part Of{" "}
            <span className="font-semibold">Out Saturday Satsang</span> At{" "}
            <span className="font-semibold">ISKCON Sri Jagannath Mandir.</span>{" "}
            Together, let us chant, learn, and serve in the spirit of devotion.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SaturdaySatsang;
