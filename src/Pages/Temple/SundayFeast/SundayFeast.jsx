import React from "react";
import Slider1 from "./Slider1";
import "./sundayfeast.css";
import img5 from "./assets/img5.png";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import { CgMail } from "react-icons/cg";
import Slider2 from "./Slider2";

function SundayFeast() {
  return (
    <div className=" w-full">
      <Header />

      <div className="flex flex-col justify-center items-center card1 bg-cover bg-center ">
        <p className=" w-[226px]  lg:w-[463px] h-[42px] lg:h-[82px] p-[9/16px] lg:p-[18px] bg-[#c61d21] rounded-tl-[5.09px] lg:rounded-tl-[10px] rounded-tr-[5.09px] lg:rounded-tr-[10px] rounded-bl-[10.18px]lg:rounded-bl-[20px] rounded-br-[10.18px] lg:rounded-br-[20px] shadow border-2 border-white justify-center items-center gap-[5.09px] lg:gap-2.5 text-white text-xl lg:text-4xl font-bold font-['Open Sans'] capitalize leading-snug ">
          Sunday Feast
        </p>
        {/* <h1 className="text-center text-[#c61d21] text-2xl lg:text-8xl font-bold font-['Open Sans'] sunday">
          Sunday Feast
        </h1> */}
        <div className="flex items-center  flex-col lg:flex-row lg:mt-7">
          <img
            src={img5}
            className="w-[304px] h-[193px] lg:w-[850px] lg:h-[540px] "
            alt=""
          />
          <div className="flex flex-col  justify-start items-start">
            <p className="w-[350px] h-[29.16px] lg:w-[653px] lg:h-[85px]  text-[#c61d21] text-2xl lg:text-5xl font-semibold font-['Source Serif Pro'] capitalize text-start">
              Join Us for the Sunday Feast!
            </p>


            <p className="w-[350px] lg:w-[591px] lg:h-[313px] text-black lg:text-5xl font-light font-['Inter'] capitalize text-base text-start">
              At <strong className="font-semibold">ISKCON Vijayawada,</strong>{" "}
              we invite you to experience the joy and devotion of our Sunday
              Feast. This weekly event is more than just a meal.
            </p>
          </div>
        </div>
        <p className="w-[350px] lg:w-[85rem] text-[#c61d21] textbase lg:text-4xl font-bold font-['Inter'] text-start lg:my-16 mx-auto">
          It is an opportunity to come together as a community, nourish our
          bodies and souls, and immerse ourselves in the teachings of Lord
          Krishna
        </p>
      </div>

      <Slider1 />
      <Slider2 />

      <div className="w-full bg2 lg:bg-cover bg-center py-10 bg-contain">
        {/* Shehedule Of Event */}
        <div className="w-[382px] lg:w-[89.93rem] h-[317px] lg:h-[31.43rem] flex flex-col gap-6 lg:gap-12 items-center justify-center px-14 lg:py-10 bg-[#fff1df]/40 border-2 rounded-[5.19px] border-[#bc3521] backdrop-blur-[80.60px] mx-auto lg:mb-32 mb-10 lg:mt-20">
          <h2 className="text-2xl lg:text-6xl text-[#c61d21] font-bold lg:font-semibold font-['Source Serif'] lg:mt-10">
            Schedule of Events
          </h2>
          <div className="flex items-center justify-center gap-1 lg:gap-8  flex-col lg:flex-row ">
            <img
              src={img1}
              className="w-[189px] lg:w-[27.93rem] h-[110px] lg:h-[16.31rem] "
              alt=""
            />
            <ul className="w-[331px] lg:w-[50rem] list-disc text-start ">
              <li className="  ">
                <p className="font-normal text-black font-['Open Sans'] leading-[3.125rem] capitalize text-baase lg:text-3xl text-start m-0">
                  <strong className="  font-bold  ">Time : </strong>
                  Every Sunday from 8 AM to 11 AM.
                </p>
              </li>
              <li>
                <p className=" font-normal text-black font-['Open Sans'] lg:leading-[3.125rem] capitalize text-base lg:text-3xl text-start m-0">
                  <strong className=" font-bold  ">Location : </strong>
                  ISKCON Sri Radha Shyam Sundar Mandir, Vijayawada.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Attend  */}
        <div className="w-full h-[1750px] lg:h-[56rem] bg-[#c61d21] lg:py-10 py-8 ">
          <h2 className="text-[#f3b01b] text-3xl lg:text-[4.25rem] font-semibold font-['Source Serif Pro'] capitalize text-center ">
            Why Attend?
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mt-12">
            <div className="w-full lg:w-[41.68rem] flex-col flex justify-center items-center gap-6 lg:gap-14 ">
              <img
                src={img2}
                alt=""
                className=" lg:w-[26.625rem] h-[342.95px] lg:h-[29.93rem]"
              />
              <div className="w-[305px] lg:w-[26.625rem] h-[8.25rem] flex-col justify-start items-start lg:gap-1.5 flex">
                <p className="self-stretch text-justify text-[#f3b01b] text-2xl lg:text-4xl font-bold font-['Source Serif Pro'] capitalize">
                  Community Spirit
                </p>
                <p className="self-stretch text-justify text-white text-base lg:text-xl font-semibold font-['Open Sans'] capitalize">
                  Connect with fellow devotees and form lasting friendships
                  while sharing a meal in a joyful atmosphere.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[41.68rem]  flex-col flex justify-center items-center gap-6 lg:gap-14 ">
              <img
                src={img3}
                alt=""
                className="w-[305px] lg:w-[26.625rem] h-[342.95px] lg:h-[29.93rem]"
              />
              <div className="w-[305px] lg:w-[26.625rem] h-[8.25rem] flex-col justify-start items-start lg:gap-1.5 flex">
                <p className="self-stretch text-justify text-[#f3b01b] text-2xl lg:text-4xl font-bold font-['Source Serif Pro'] capitalize">
                  Spiritual Nourishment
                </p>
                <p className="self-stretch text-justify text-white text-base lg:text-xl font-semibold font-['Open Sans'] capitalize">
                  Engage in devotional practices that enhance your spiritual
                  journey and bring you closer to Lord Krishna.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[41.68rem]  flex-col flex justify-center items-center gap-6 lg:gap-14 ">
              <img
                src={img4}
                alt=""
                className="w-[305px] lg:w-[26.625rem] h-[342.95px] lg:h-[29.93rem]"
              />
              <div className="w-[305px] lg:w-[26.625rem] h-[8.25rem] flex-col justify-start items-start lg:gap-1.5 flex">
                <p className="self-stretch text-justify text-[#f3b01b] text-2xl lg:text-4xl font-bold font-['Source Serif Pro'] capitalize">
                  Family-Friendly
                </p>
                <p className="self-stretch text-justify text-white text-base lg:text-xl font-semibold font-['Open Sans'] capitalize">
                  Our Sunday Feast is a perfect outing for families, with
                  activities and programs suitable for all ages.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Participate */}
        <div className="w-[382px] h-[629px] lg:w-[88.37rem] lg:h-[35.25rem] bg-[#fff1df]/40 rounded-[5.19px] lg:rounded-xl border-4 border-[#c61d21] lg:my-24 my-7 mx-auto">
          <div className=" h-[44.66px] lg:w-full lg:h-[115px] bg-[#c61d21] flex items-center justify-center  ">
            <p className=" text-white text-base lg:text-[1.95rem] font-bold font['Open Sans'] text-center">
              How to Participate
            </p>
          </div>
          <div className="w-[338px]  lg:w-[87.43rem] lg:h-[14.31rem] justify-center items-start gap-4 inline-flex flex-col lg:flex-row mt-2 mb-9  pl-7 lg:px-7">
            <div className="w-full lg:w-[22.87rem] h-[145px] lg:h-[14.31rem] relative bg-[#fff0dc] rounded-xl border-2 border-[#c20000] flex-col justify-start items-start flex lg:py-5 py-2 px-4 lg:px-7">
              <div className="w-[60px] lg:w-[5.43rem] text-[#c61d21] text-2xl lg:text-4xl font-bold font-['Lato'] leading-[38px] lg:leading-9">
                RSVP
              </div>
              <div className="h-[51px] lg:w-[15.93] lg:h-12 text-[#c61d21] text-base lg:text-xl font-normal font-['Lato'] leading-relaxed ">
                Please let us know if you’ll be joining us by
              </div>
              <div className="flex gap-1 lg:gap-3 items-center justify-center lg:mt-8 mx-auto w-full">
                <span className="text-xl lg:text-2xl text-[#c61d21]">
                  <CgMail />
                </span>
                <p className="text-black text-base lg:text-xl font-semibold font-['Open Sans'] ">
                  seva@iskconvijayawada.org
                </p>
              </div>
            </div>
            <div className="w-full h-[229px] px-6 py-10  grow shrink basis-0 self-stretch lg:px-12 lg:py-[41px] bg-[#c61d21] rounded-[10px] border-2 border-[#c61d21] flex-col justify-start items-start gap-2.5 inline-flex donation">
              <div className="w-[277px] h-[166px] lg:w-[880px] lg:h-[135px] flex-col justify-start items-start gap-6 lg:gap-[22px] flex">
                <div className="self-stretch text-[#ffdebd] text-2xl lg:text-4xl font-bold font-['Open Sans'] leading-[38px]">
                  Donations
                </div>
                <div className="self-stretch  text-[#ffdebd] text-base lg:text-2xl font-normal font-['Lato'] leading-relaxed">
                  While the feast is free, we welcome donations to help support
                  our ongoing programs and community service initiatives.
                </div>
              </div>
            </div>
          </div>

          <p className="text-black text-start text-base lg:text-4xl font-normal font-['Open Sans'] capitalize leading-7 lg:leading-[3.18rem] w-[319px] lg:w-[71.30rem] lg:h-[6.5rem] mx-auto">
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

export default SundayFeast;
