import React from "react";
import bg from "./assets/bg1BV.jpg";
import BV1 from "./assets/bg1BV.jpg";
import "./BhaktiVriksh.css";

function BhaktiVriksh() {
  return (
    <div className="flex w-full flex-col items-center max-h-auto">
      <div
        className="flex flex-col max-w-fit items-center h-auto"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        <h3 className="bg-red-500 text-center mt-[1%] text-white p-1 w-fit md:w-[10%] rounded-bl-[10px] rounded-br-[10px]">
          BHAKTI VRIKSHA
        </h3>
        <div
          className="md:w-[70%] w-[90%] text-[#C61D21] text-center font-open-sans font-semibold text-[20px] md:text-[2.5rem] leading-[1] mt-4"
          style={{ fontWeight: "600" }}
        >
          Bhakti-Vriksh At ISKON Vijayawada:
          <span className="block text-[#C61D21] text-center font-open-sans font-semibold text-[20px] md:text-[2.5rem] leading-[1]">
            Growing In Devotion
          </span>
        </div>

        <div className="flex flex-col mb-5 md:flex-row items-center justify-center w-[80%] mx-auto mt-10 space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-[30%] rounded-[10px] justify-center sm:hidden order-0 sm:order-1 md:order-1 lg:order-1">
            <img
              src={BV1}
              alt=""
              className="w-full rounded-[10px]"
              style={{
                boxShadow: "20px 24px 4px 0px #C61D214D",
              }}
            />
          </div>

          <div className="flex-1 pr-2 text-[22px] text-justify order-1 sm:order-0 ">
            <p className="word-tight  " style={{ wordSpacing: "-6px" }}>
              The <span className="text-red-600">Bhakti-Vriksha</span> Program
              At ISKCON Vijayawada Is Inspired By Lord Caitanya Mahaprabhu's
              Teachings, Where Devotion Is Likened To A Tree That Grows And
              Branches Out. Bhakti-Vriksha Groups Are Small Congregational
              Gatherings, Designed To Nurture Spiritual Growth And Spread The
              Message Of Krishna Consciousness.
            </p>
            <br />
            <p style={{ wordSpacing: "-6px" }}>
              Each Group, Comprising Around 15 Devotees, Meets Weekly To Engage
              in Devotional Practices And Plan Outreach Activities. As The Group
              Grows, It Splits, Ensuring Personal Care And Maintaining A Strong
              Community Bond. The Program Emphasizes Systematic Training,
              Leadership Development, And Active Preaching. Enabling Devotees To
              Deepen Their Practice While Sharing Their Knowledge With Others.
            </p>
          </div>

          <div className="w-full md:w-[30%]  justify-center sm:flex hidden order-0 sm:order-1 ">
            <img
              src={BV1}
              alt=""
              className="w-full shadow-lg rounded-[10px]"
              style={{
                boxShadow: "20px 24px 4px 0px #C61D214D",
                height: "420px",
              }}
            />
          </div>
        </div>
      </div>

      <div className="w-full mx-auto bg-cover-desktop p-3">
        <h1 className="sm:text-[50px]  text-[30px] mt-[10%] text-center w-[60%] mx-auto text-[#C61D21] font-semibold">
          Key Benefits:
        </h1>
        <div className="sm:w-[60%] w-[85%] mx-auto border-2 border-[#C61D21] rounded-md mt-5 p-5 bg-[rgba(255,_240,_222,_0.6)]">
          <ul className="pl-5 list-disc font-semibold">
            <li className="mb-[5px]">Personalized Training Over 64 Weeks.</li>
            <li className="mb-[5px]">Supportive Small-Group Environment.</li>
            <li className="mb-[5px]">
              Opportunities For Leadership And Preaching.
            </li>
            <li className="mb-[5px]">
              Easy To Conduct In Homes, Accessible To All.
            </li>
          </ul>
          <p className="mt-3 font-bold">
            The Bhakti-Vriksha Program Aims To Grow Krishna Consciousness By
            Empowering Devotees To Practice, Preach, And Create New
            Groups—Spreading Lord Caitanya's Message Far And Wide.
          </p>
          <h3 className="mt-5 text-[#C61D21] font-bold">
            Join Us And Be A Part Of This Growing Tree Of Devotion!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default BhaktiVriksh;
