import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import banner from "./assets/banner.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img2a from "./assets/img2a.png";
import img2b from "./assets/img2b.png";
import img3 from "./assets/img3.png";
import img3a from "./assets/img3a.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import bg1 from "./assets/bg1.png";
import marker from "./assets/marker.png";
import yagna from "./assets/yagna.png";
import des1 from './assets/des1.png'
import des2 from './assets/des2.png'
import "./bookyagna.css";
import { useEffect, useState } from "react";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

const BookYagna = () => {
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
          {""}
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
    <>
      <Header />
      {/* Header Section */}
      <header className="relative">
        <img
          src={banner}
          alt="ISKCON Banner"
          className="w-full h-[50%] object-cover"
        />

        <h3
          className="absolute top-[10%] left-[31%] text-[#c61d21]  mx-auto text-2xl md:text-8xl font-bold "
          style={{
            textShadow:
              "-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff",
          }}
        >
          Book Yagna
        </h3>
      </header>

      {/* Yagnas */}
      <section className="h-auto flex  md:justify-between items-start md:items-center">
        <img src={img2a} className="w-[20%] h-[90%] object-cover" />
        <div className="w-[110%] flex flex-col gap-3 items-center justify-center">
          <div className="w-[50%] md:w-[30%] md:h-[60px]   bg-[#c61d21] rounded-2xl md:rounded-[50px]  border-2 md:border-8 border-white flex justify-center items-center">
            <h1 className="text-white text-lg md:text-3xl font-bold font-['Open Sans'] capitalize m-0">
              Yagnas
            </h1>
          </div>
          <img src={img6} alt="" className="w-[100%] " />
          <p className="text-white text-[8px] md:text-3xl font-semibold font-['Open Sans'] md:leading-9 text-justify">
            Our Vedic scriptures directs us to perform samskaras, to sanctify
            the person throughout different stages like physical, mental,
            emotional, social, phycological of human life, to imprint positive
            spiritual impressions through fire sacrifice/ yagna for overall
            development.
            <br />
            Samskaras means refining our entire being so that our contribution
            to ourselves and others will be impactful. A person who goes through
            this system grows to be physically strong, emotionally stable,
            mentally benevolent, intellectually truthful, and spiritually filled
            with servitude.
          </p>
        </div>
        <img src={img2b} className="w-[20%] object-cover" />
      </section>

      {/* Samskaras */}
      <div
        className=" sams"
      >
        {/* samskaras */}
        <div className="w-[90%] bg-transparent md:bg-[#fff1df]/40 mx-auto rounded-md md:rounded-t-[20px] md:rounded-bl-[50px] border-2 border-[#c61d21] my-[5%] md:rounded-br-[20px]">
          <div className="flex justify-center items-center  md:p-3 bg-[#c61d21] rounded-t-md md:rounded-t-[20px] ">
            <h3 className="text-white test-3xl md:text-5xl font-semibold font-['Source Serif Pro'] capitalize ">
              Samskaras
            </h3>
          </div>
          <div className="w-[100%] flex flex-col md:flex-row  justify-between gap-2">
            <img src={img2} alt="" className="w-full md:w-[45%] object-fill" />
            <ul className="w-full md:w-[55%] flex flex-col gap-2 md:gap-0 justify-around p-2 md:p-0">
              <li className="">
                <div className="flex gap-2 md:gap-3 items-center">
                  <img
                    src={marker}
                    alt=""
                    className="w-[30px] h-[20px] md:h-[30px] object-fill align-text-top"
                  />
                  <p className="text-xs md:text-3xl align-text-bottom m-0 text-[#c61d21]  font-semibold font-['Open Sans'] capitalize ">
                    House warming ceremony - Vastu Shanti
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-2 md:gap-3 items-center">
                  <img
                    src={marker}
                    alt=""
                    className="w-[30px] h-[20px] md:h-[30px] object-fill align-text-top"
                  />
                  <p className="text-xs md:text-3xl align-text-bottom m-0 text-[#c61d21]  font-semibold font-['Open Sans'] capitalize ">
                    Narasimha Shanti
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-2 md:gap-3 items-center">
                  <img
                    src={marker}
                    alt=""
                    className="w-[30px] h-[20px] md:h-[30px] object-fill align-text-top"
                  />
                  <p className="text-xs md:text-3xl align-text-bottom m-0 text-[#c61d21]  font-semibold font-['Open Sans'] capitalize ">
                    Vivaha Yajna
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-2 md:gap-3 items-center">
                  <img
                    src={marker}
                    alt=""
                    className="w-[30px] h-[20px] md:h-[30px] object-fill align-text-top"
                  />
                  <p className="text-xs md:text-3xl align-text-bottom m-0 text-[#c61d21]  font-semibold font-['Open Sans'] capitalize ">
                    Nama Karanam
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-2 md:gap-3 items-center">
                  <img
                    src={marker}
                    alt=""
                    className="w-[30px] h-[20px] md:h-[30px] object-fill align-text-top"
                  />
                  <p className="text-xs md:text-3xl align-text-bottom m-0 text-[#c61d21]  font-semibold font-['Open Sans'] capitalize ">
                    {" "}
                    Annaprashan
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-2 md:gap-3 items-center">
                  <img
                    src={marker}
                    alt=""
                    className="w-[30px] h-[20px] md:h-[30px] object-fill align-text-top"
                  />
                  <p className="text-xs md:text-3xl align-text-bottom m-0 text-[#c61d21]  font-semibold font-['Open Sans'] capitalize ">
                    {" "}
                    Aksharabhyasam
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-2 md:gap-3 items-center">
                  <img
                    src={marker}
                    alt=""
                    className="w-[30px] h-[20px] md:h-[30px] object-fill align-text-top"
                  />
                  <p className="text-xs md:text-3xl align-text-bottom m-0 text-[#c61d21]  font-semibold font-['Open Sans'] capitalize ">
                    Sudarshan narasimha yajna
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-2 md:gap-3 items-center">
                  <img
                    src={marker}
                    alt=""
                    className="w-[30px] h-[20px] md:h-[30px] object-fill align-text-top"
                  />
                  <p className="text-xs md:text-3xl align-text-bottom m-0 text-[#c61d21]  font-semibold font-['Open Sans'] capitalize ">
                    {" "}
                    Janmadina samskara
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Three Pillers */}
        <div
          className="w-[90%] bg-transparent md:bg-[#fff1df]/40 mx-auto md:border-4 md:border-[#c61d21] rounded-xl mb-[10%] md:mb-[5%] "
          style={{
            boxShadow: isMobile ? " " : "10px 10px 20px #F9C0AB , -10px -10px 20px #F9C0AB",
          }}
        >
          <h3 className="text-center text-xl md:text-5xl text-[#c61d21] md:pt-3 md:p-5">
            Three Pillars of Samskaras
          </h3>

          <div
            className="w-full md:w-[95%] mx-auto mb-[10%] md:mb-[5%] rounded-lg"
            style={{
              boxShadow: isMobile ? "0px 0px 40px #F9C0AB " : "10px 10px 10px #F9C0AB",
            }}
          >
            <div className="w-full md:w-[50%]  md:h-[75px] flex justify-center items-center bg-[#c61d21] rounded-t-xl md:rounded-t-2xl p-2 md:p-0 ">
              <p className="text-white text-lg md:text-2xl font-bold font-['Open Sans'] m-0 ">
                Purification (Remove Taints or Contamination)
              </p>
            </div>
            <div className="w-[100%] flex flex-col md:flex-row justify-between gap-1 ">
              <img src={img3} alt="" className="w-full md:w-[30%]  md:h-[400px]" />
              <p className="text-sm md:text-4xl p-6 m-0 text-[#c61d21] md:text-[#c61d21]/40 font-semibold text-justify">
                Purifies one's ming, body , intellect, consciousness and one's
                birth through scred ceremony and removes the contamination ,
                brings auspiciousness and grace of Gods which helps one to grow
                as an holistic individual and ultimately seek spiritual
                upliftment.
              </p>
              <img src={img3a} alt="" className="w-[30%] h-[400px] hidden md:block" />
            </div>
          </div>

          <div
            className="w-full md:w-[95%] mx-auto mb-[10%] md:mb-[5%] rounded-lg"
            style={{
              boxShadow: isMobile ? "0px 0px 40px #F9C0AB " : "10px 10px 10px #F9C0AB",
            }}
          >
            <div className="w-full md:w-[40%] md:h-[75px] flex justify-center items-center bg-[#c61d21] rounded-t-xl md:rounded-t-2xl p-2 md:p-0">
              <p className="text-white text-lg md:text-2xl font-bold font-['Open Sans'] m-0 ">
                Reformation (Rise of Fresh Qualities)
              </p>
            </div>
            <div className="w-[100%] flex flex-col md:flex-row  justify-between gap-1 ">
              <img src={img4} alt="" className="w-full md:w-[30%] md:h-[400px]" />
              <p className="text-sm md:text-4xl p-6 m-0 text-[#c61d21] md:text-[#c61d21]/40 font-semibold text-justify">
                Forming newer and fresh spiritual positive imprints ro
                impression on mind and consiciousness which helps impart value
                systems and builds personality and character for successful
                life.
              </p>
              <img src={img3a} alt="" className="w-[30%] h-[400px] hidden md:block" />
            </div>
          </div>

          <div
            className="w-full md:w-[95%] mx-auto mb-[10%] md:mb-[5%] rounded-lg"
            style={{
              boxShadow: isMobile ? "0px 0px 40px #F9C0AB " : "10px 10px 10px #F9C0AB",
            }}
          >
            <div className="w-full md:w-[50%] md:h-[75px] flex justify-center items-center bg-[#c61d21] rounded-t-xl md:rounded-t-2xl p-2 md:p-0">
              <p className="text-white text-lg md:text-2xl font-bold font-['Open Sans'] m-0 ">
                Revival (Regards for Culture to Thrive Spirituality)
              </p>
            </div>
            <div className="w-[100%] flex flex-col md:flex-row justify-between gap-1 ">
              <img src={img5} alt="" className="w-full md:w-[30%] md:h-[400px]" />
              <div className="flex items-center justify-center p-6">
                <p className="text-sm md:text-4xl  m-0 text-[#c61d21] md:text-[#c61d21]/40 font-semibold text-justify">
                  Revive our Vedic culture , traditions, customs, rituals as
                  mentioned in out scriptures by reclaiming principles of
                  sanatan dharma for a happier, purposeful and contentful life.
                </p>
              </div>
              <img src={img3a} alt="" className="w-[30%] h-[400px] hidden md:block" />
            </div>
          </div>
        </div>

        {/* Quotes */}
        <div className=" p-2  md:p-6   text-center">
          <p className="text-xl md:text-4xl font-semibold font-['Open Sans']  italic mb-4 quote">
            “These performances of Samskaras will re-establish the flow of
            devotional service in every family and society at large by keeping
            the ignition of bhakti sukriti going on enclosed and embedded within
            culture of samskaras.”
            <br />
            <br />- Srila Gopal Bhatta Goswami
          </p>
        </div>
      </div>

      {/* Booking Section */}
      <div
        className="flex justify-center object-fill bg-cover bg-center py-6 md:py-12  w-full"
        style={{
          boxShadow: isMobile
            ? "10px 5px 5px #F9C0AB, -5px -5px 5px #F9C0AB"
            : "20px 10px 5px #F9C0AB, -10px -10px 5px #F9C0AB",
        }}
      >
        <div className=" w-full flex justify-between  items-center">
          <img src={des1} alt="" 
          className="w-[25%] hidden md:block"
          />

          <div className="w-[100%] md:w-[40%] flex flex-col items-center">
            <div className="w-[100%] flex justify-between items-center mb-3">
              <img src={yagna} className="w-10 md:w-20 h-10 md:h-20" />
              <h1 className="text-[#C61D21] text-2xl md:text-5xl font-bold text-center m-0">
                Book Yagna
              </h1>
              <img src={yagna} alt="" className="w-10 md:w-20 h-10 md:h-20" />
            </div>
            <div className="bg-[#fff1df] border-4 border-[#C61D21]  rounded-lg shadow-md w-[85%]">
              <div className="bg-[#C61D21] h-[50px] pb-2  flex items-center justify-around mb-4">
                <button
                  onClick={() => changeMonth("prev")}
                  className="text-white text-2xl font-bold"
                >
                  <RiArrowLeftWideLine />
                </button>
                <div className="text-white text-sm md:text-xl font-semibold">
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
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day) => (
                    <div key={day} className="text-[#C61D21] font-medium text-sm md:text-lg">
                      {day}
                    </div>
                  )
                )}
                {renderCalendarDays()}
              </div>
            </div>
            <div className="mt-2 text-start w-[85%]">
              <label className="block text-[#C61D21] text-xl font-semibold mb-2 text-start">
                Date
              </label>
            </div>
            <div className="flex items-start gap-2 md:gap-3 w-[85%] ">
              <input
                type="text"
                value={selectedDate ? selectedDate : "Select a date"}
                readOnly
                className="px-3  ring ring-[#C61D21] border-[#C61D21] rounded-md text-red-600  focus:outline-none focus:ring focus:ring-red-300 w-[45%] md:w-[50%] text-center bg-[#FCD9B8] mt-1"
              />
              <button className="py-[17px] md:py-2.5 bg-[#C61D21] text-white rounded-md hover:bg-red-600 w-[45%] md:w-[40%] text-xs md:text-xl leading-12 font-bold">
                BOOK NOW
              </button>
            </div>
          </div>
          <img src={des2} alt="" 
          className="w-[25%] hidden md:block"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookYagna;
