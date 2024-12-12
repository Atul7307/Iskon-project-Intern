import React from "react";
import BV1 from "./assets/BV1.jpg";
import "./BhaktiShastri.css";

function BhaktiShastri() {
  return (
    <div className="flex w-full flex-col items-center max-h-auto">
      <div className="flex flex-col max-w-fit bg-desktop1 items-center h-auto ">
        <h3 className="bg-red-500 text-center  text-white max-h-[60px]   md:w-[10%] rounded-bl-[10px] rounded-br-[10px]">
          BHAKTI SHASTRI
        </h3>
        <div
          className="md:w-[70%] w-[95%] text-[#C61D21] font-bold text-center font-open-sans text-[20px] md:text-[2.5rem] leading-[1] mt-4"
          style={{ fontWeight: "600" }}
        >
          Program At ISKCON Vijayawada:
          <span className="block text-[#C61D21] text-center font-open-sans font-semibold text-[20px] md:text-[2.5rem] leading-[1]">
            Deepening Scriptural Knowledge
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

          <div className="flex-1 w-[95%] pr-2 text-[22px] mt-[10%] order-1 sm:order-0 ">
            <p className="word-tight " style={{ wordSpacing: "-1px" }}>
              The <span className="text-red-600">Bhakti Shastri </span>
              Program At ISKCON Vijayawada Is An in- Depth Course Designed For
              Devotees Eager To Systematically Study The Key Scriptures Of
              Gaudiya Vaishnavism. This Program Offers A Structured, Academic
              Approach To Understanding The Essential Teachings Of The
              Bhagavad-Gita, Nectar Of Devotion, Nectar Of Instruction, And Sri
              Isopanisad. It Helps Devotees Deepen Their Knowledge And Practice
              Of Krishna Consciousness.
            </p>
            <br />
            <p style={{ wordSpacing: "-1px" }}>
              The Program is Ideal For Those Who Wish To Strengthen Their
              Understanding Of Bhakti-Yoga, Apply The Wisdom Of The Scriptures
              in Daily Life, And Develop Preaching And Leadership Skills Within
              The ISKCON Community
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

      <div className="bg-[#FFE5CC]">
        <div className=" w-full items-center rounded-sm p-5 mt-[2%] bgm-desktop">
          <h1
            className="sm:w-[80%] w-[90%] mb-2 text-center sm:font-serif font-semibold text-[26px] sm:text-[48px] text-[#F3B01B] flex flex-col mx-auto "
            style={{ wordSpacing: "-2px" }}
          >
            Key Features Of The Bhakti Shastri Program:
          </h1>

          <ul className="pl-5 sm:w-[80%] w-[95%] text-justify list-disc  sm:text-[26px]  font-sans text-white  items-center mx-auto ">
            <li className="mb-[5px]">
              <b>Comprehensive Study:</b> Focus On Four Essential Vaishnava
              Texts-Bhagavad-Gita Sri Isopanisad, Nectar of Devotion, And Nectar
              of Instruction.
            </li>
            <li className="mb-[5px]">
              <b>Guided Learning:</b> Experienced Instructors Guide Participants
              Through The Texts, Encouraing Critical Thinking And Application
            </li>
            <li className="mb-[5px]">
              <b>Interactive Format:</b> Includes Discussions, Quizzes, And
              Group Activities. To Ensure A Practical Understanding Of The
              Scriptures
            </li>
            <li className="mb-[5px]">
              <b>Certificate Program:</b> Upon Successful Completion,
              Participants Receive The Bhakti Shastri Certificate, Recognized
              Across All ISKCON Centers Worldwide
            </li>
          </ul>
        </div>

        <div className="w-full mx-auto bg-cover-desktop p-3">
          <h1 className="sm:text-[50px] text-center text-[30px] mt-[5%]  w-[60%] sm:mx-auto text-[#C61D21] font-semibold">
            Benefits:
          </h1>
          <div className="sm:w-[80%] sm:text-[24px] w-[85%] mx-auto border-2 border-[#C61D21] rounded-md mt-5 p-5 bg-[rgba(255,_240,_222,_0.6)]">
            <ul className="pl-5 list-disc font-semibold">
              <li className="mb-[5px]">
                <span className="font-bold">Scriptural Mastery:</span> Gain A
                Deep Understanding Of Core Vaishnava Texts.
              </li>
              <li className="mb-[5px]">
                <span className="font-bold">Spiritual Growth:</span> Strengthen
                Your Personal Practice Of Bhakti-Yoga Through The Application Of
                Scriptural Knowledge
              </li>
              <li className="mb-[5px]">
                <span className="font-bold">Preaching And Leadership:</span>{" "}
                Equip Yourself To Become A Preacher Or Leader in Your Local
                Congregation.
              </li>
              <li className="mb-[5px]">
                <span className="font-bold">Community Support:</span> Be Part Of
                A Supportive Group Of Devotees Working Together To Grow
                Spiritually.
              </li>
            </ul>
            <p className="mt-3 font-bold">
              The Bhakti Shastri Program At ISKCON Vijayawada Is An Opportunity
              For Serious Students Of Krishna Consciousness To Advance Their
              Knowledge, Improve Their Devotional Practice, And Share The
              Teachings With Others.
            </p>
            <h3 className="mt-5 text-[#C61D21] font-bold">
              Join Us And Be A Part Of This Growing Tree Of Devotion!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BhaktiShastri;
