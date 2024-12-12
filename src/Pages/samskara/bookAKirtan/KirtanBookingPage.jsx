import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import banner from "./assets/ban.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import bg3a from "./assets/bg3a.png";
import bg3am from "./assets/bg3am.png";
import bg3b from "./assets/bg3b.png";
import bg4 from "./assets/bg4.png";
import dhol from "./assets/dhol.png";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

const KirtanBookingPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Helper function to get the number of days in a month
  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  // Handle month change (next/prev)
  const changeMonth = (direction) => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear((prev) => prev - 1);
      } else {
        setCurrentMonth((prev) => prev - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear((prev) => prev + 1);
      } else {
        setCurrentMonth((prev) => prev + 1);
      }
    }
  };

  // Handle date selection and format as DD-MM-YYYY
  const selectDate = (day) => {
    const formattedDate = `${String(day).padStart(2, "0")}-${String(
      currentMonth + 1
    ).padStart(2, "0")}-${currentYear}`;
    setSelectedDate(formattedDate);
  };

  // Render calendar days
  const renderCalendarDays = () => {
    const totalDays = daysInMonth(currentMonth, currentYear);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysArray = [];

    // Fill empty spaces before the first day
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
      daysArray.push(
        <div key={`empty-${i}`} className="invisible ">
          {''}
        </div>
      );
    }

    // Fill actual days of the month
    for (let day = 1; day <= totalDays; day++) {
      const formattedDate = `${String(day).padStart(2, "0")}-${String(
        currentMonth + 1
      ).padStart(2, "0")}-${currentYear}`;
      daysArray.push(
        <button
          key={day}
          onClick={() => selectDate(day)}
          className={`w-6 md:w-10 h-6 md:h-10 rounded-full flex items-center justify-center ${
            selectedDate === formattedDate
              ? "bg-red-500 text-white"
              : "hover:bg-red-100"
          }`}
        >
          {day}
        </button>
      );
    }
    return daysArray;
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaChange = () => setIsMobile(mediaQuery.matches);

    handleMediaChange(); // Initial check
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className="w-[100vw] h-auto">
      <Header />
      {/* Header Section */}
      <header className="relative">
        <img
          src={banner}
          alt="ISKCON Banner"
          className="w-full h-[50%] object-cover"
        />
        <div className="w-[90%] md:w-[50%] h-[30px]   md:h-[62px] pt-1 md:p-[0px] bg-[#c61d21] rounded-lg md:rounded-tl-[13px] md:rounded-tr-[21px] md:rounded-bl-[20px] md:rounded-br-[20px] shadow border-2 border-white flex justify-center items-center absolute left-[5%] md:left-[25%] top-[5%]">
          <h1 className="text-white text-sm md:text-3xl font-bold font-['Open Sans'] capitalize">
            Book A Kirtan At ISKCON Vijayawada
          </h1>
        </div>
        {/* Devotional Quote Section */}
        <section className="w-[90%] md:w-[50%]  md:px-12  bg-[#c61d21] rounded-lg border-4 md:border-8 border-white flex flex-col justify-start items-start md:gap-2.5 mx-auto md:mt-6 absolute -bottom-[65%] md:-bottom-[10%] left-[5%] md:left-[25%]">
          <h2 className="text-[#ffdebd] text-lg md:text-5xl font-semibold font-['Open Sans'] text-center w-full">
            BRHAN-NARADIYA PURANA
          </h2>
          <p className="w-full text-center text-white text-base md:text-5xl font-semibold font-['Open Sans'] px-12">
            etan nirvidyamānānām icchatām akuto-bhayam yogināṁ nṛpa nirṇītaṁ
            harer nāmānukīrtanam
          </p>
        </section>
      </header>

      {/*  Devotional path*/}
      <div
        className="w-[100%]  flex flex-col justify-start items-center gap-2.5 pt-[45%]  md:pt-[10%] pb-[5%] md:pb-0 object-cover bg-cover"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        <h2 className="w-[90%] md:w-[80%] text-center text-lg md:text-5xl font-bold text-[#c61d21]">
          Deepen Your Devotional Path
        </h2>
        <div className="w-[90%] md:w-[80%] bg-[#fff0de]/40 rounded-2xl border-2 border-[#bc3521] backdrop-blur-[80.60px] p-3">
          <p className="text-base md:text-2xl  text-justify text-black font-['Open Sans'] font-semibold capitalize ">
            The holy name of Krsna is transcendentally blissful. It bestows all
            spiritual benedictions, for it is Krsna Himself, the reservoir of
            all pleasure. Krsna's name is complete, and it is the form of all
            transcendental mellows. It is not a material name under any
            condition, and it is no less powerful than Krsna Himself. Since
            Krsna's name is not contaminated by the material qualities, there is
            no question of its being involved with māyā. Krsna's name is always
            liberated and spiritual; it is never conditioned by the laws of
            material nature. This is because the name of Krsna and Krsna Himself
            are identical.'
          </p>
        </div>

        {/* Gallery Section */}
        <section
          className="w-[90%] md:w-[100%]  md:py-12 px-2 md:px-20 bg-gray-100 bg-cover mx-auto rounded-lg shadow-2xl"
          style={{
            backgroundImage: `url(${bg2})`,
            boxShadow: isMobile ? "0 0 20px #F9C0AB" : " 0 0",
          }}
        >
          <h2 className="text-center text-[#c61d21] text-xl md:text-5xl font-bold font-['Open Sans'] capitalize mb-6 md:mb-10">
            Book A Kirtan At ISKCON Vijayawada
          </h2>

          <div className="flex flex-wrap gap-3 md:gap-4 ">
            <img
              src={img1}
              className="w-[56%] md:w-[58%] drop-shadow-lg  shadow-red-600 object-fill rounded-lg"
              alt=""
              style={{
                boxShadow: isMobile
                  ? "3px 3px 1px #F9C0AB"
                  : "10px 10px 1px #F9C0AB",
              }}
            />
            <img
              src={img2}
              alt=""
              className="w-[36%] md:w-[38%] object-cover rounded-lg"
              style={{
                boxShadow: isMobile
                  ? "3px 3px 1px #F9C0AB"
                  : "10px 10px 1px #F9C0AB",
              }}
            />
            <img
              src={img3}
              alt="Kirtan 3"
              className="rounded-lg w-[36%] md:w-[38%] object-cover"
              style={{
                boxShadow: isMobile
                  ? "3px 3px 1px #F9C0AB"
                  : "10px 10px 1px #F9C0AB",
              }}
            />
            <img
              src={img4}
              alt="Kirtan 4"
              className="rounded-lg w-[56%] md:w-[58%] "
              style={{
                boxShadow: isMobile
                  ? "3px 3px 1px #F9C0AB"
                  : "10px 10px 1px #F9C0AB",
              }}
            />
          </div>
        </section>

        {/* About Kirtan Mobile Section */}
        <div className="w-[90%] h-[293px] mx-auto bg-white rounded-lg border-2 border-[#F9C0AB] mt-[20%] block md:hidden">
          <div className="flex w-[100%] justify-between relative">
            <img src={bg3b} alt="" className="w-[20%] h-[20%]"/>
            <div className="w-[60%] absolute left-[20%] -top-[45%]">
            <div className="w-[100%]  bg-[#c61d21] rounded-t-sm  flex items-center justify-center p-0.5">
              <span className=" text-white text-base font-bold font-['Open Sans']">
                About Kirtans
              </span>
            </div>
            <img src={img5} alt="" className="w-[100%] h-[150px]"/>
          </div>
            <img src={bg3am} alt="" className="w-[20%] h-[20%]" />
          </div>
          <p className="text-[#c61d21] text-base font-semibold font-['Open Sans'] text-center m-1 mt-2">
              Of all the yogis, those who have immense faith in Him and worship
              Him, are united intimately with Him the most in the form of yoga
              through kirtan.
              <br />
              -Lord Krishna
            </p>
        </div>


      </div>

      {/* About Kirtan Section */}
      <section
        className="w-[100%] py-10 pb-14 px-6 md:px-20 object-cover  bg-cover bg-center bg-[#FCD9B8] hidden md:block"
        style={{
          backgroundImage: `url(${bg3})`,
        }}
      >
        <div className="w-[70%] mx-auto">
          <div className="w-[180px] h-[50px] bg-[#c61d21] rounded-tl-[18.16px] rounded-tr-xl flex items-center justify-center ">
            <span className=" text-white text-xl font-bold font-['Open Sans']">
              About Kirtans
            </span>
          </div>
          <div
            className="w-[100%] h-[18rem] bg-white flex items-center  justify-between gap-6 mx-auto rounded-lg"
            style={{
              boxShadow: "10px 10px 5px #F9C0AB",
            }}
          >
            <img
              src={img5}
              alt="About Kirtan"
              className="w-[30%] object-cover h-[100%]"
            />
            <p className="text-[#c61d21] text-2xl font-semibold font-['Open Sans'] text-start">
              Of all the yogis, those who have immense faith in Him and worship
              Him, are united intimately with Him the most in the form of yoga
              through kirtan.
              <br />
              -Lord Krishna
            </p>
            <img src={bg3a} alt="" className="h-[100%]" />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <div
        className="flex justify-center object-fill bg-cover bg-center py-6 md:py-12  w-full"
        style={{
          backgroundImage: `url(${bg4})`,
          boxShadow: isMobile ? "10px 5px 5px #F9C0AB, -5px -5px 5px #F9C0AB" : "20px 10px 5px #F9C0AB, -10px -10px 5px #F9C0AB",
        }}
      >
        <div className=" flex flex-col w-[90%] md:w-[40%] mx-auto ">
          <div className="flex justify-between">
            <img src={dhol} className="w-10 h-10" />
            <h1 className="text-[#C61D21] text-2xl md:text-4xl font-bold mb-6 text-center">
              Book A Kirtan
            </h1>
            <img src={dhol} alt="" className="w-10 h-10" />
          </div>
          <div className="bg-[#fff1df] border-4 border-[#C61D21]  rounded-lg shadow-md max-w-[100%]">
            <div className="bg-[#C61D21] h-[50px] pb-2  flex items-center justify-around mb-4">
              <button
                onClick={() => changeMonth("prev")}
                className="text-white text-2xl font-bold"
              >
                <RiArrowLeftWideLine />
              </button>
              <div className="text-white text-lg font-semibold">
                {new Date(currentYear, currentMonth).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    year: "numeric",
                  }
                )}
              </div>
              <button
                onClick={() => changeMonth("next")}
                className="text-white text-2xl font-bold"
              >
                <RiArrowRightWideLine />
              </button>
            </div>
            <div className="grid grid-cols-7 text-center gap-1 md:gap-2 mb-4 px-6">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="text-[#C61D21] font-medium text-sm md:text-lg">
                  {day}
                </div>
              ))}
              {renderCalendarDays()}
            </div>
          </div>
          <div className="mt-2">
            <label className="block text-[#C61D21] text-xl font-semibold mb-2 text-start">
              Date
            </label>
          </div>
          <div className="flex items-start   gap-3 w-[100%] ">
            <input
              type="text"
              value={selectedDate ? selectedDate : "Select a date"}
              readOnly
              className="px-3  ring ring-[#C61D21] border-[#C61D21] rounded-md text-red-600  focus:outline-none focus:ring focus:ring-red-300 w-[50%] text-center bg-[#FCD9B8] mt-1"
            />
            <button className="py-2 bg-[#C61D21] text-white rounded-md hover:bg-red-600 w-[40%] text-xs md:text-xl leading-9 font-bold">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KirtanBookingPage;
