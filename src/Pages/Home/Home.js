import React, {  useState } from "react";
import "./Home.css";
import "@fontsource/dm-serif-display";
import Header from "../../Components/Header/Header";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import NewsSlider from "../../Components/NewsSlider/NewsSlider";
import YouTubeSlider from "../../Components/YtSlider/YtSlider";
import Footer from "../../Components/Footer/Footer";
import DailyDarshan from "./assets/images/DailyDarshan.png";
import Life from "./assets/images/Life.png";
import Programs from "./assets/images/Programs.png";
import Sevak from "./assets/images/Sevak.png";
import Youth from "./assets/images/Youth.png";
import CircleImage from "./assets/images/Vector.png";
import ImageSlider from "./Components/ImageSlider/ImageSlider";

import { Link, NavLink } from "react-router-dom";
import courseimg from './assets/coures.png'
import festivalimg from './assets/festival.png'
import yatraimg from './assets/yatra.png'
import lord from './assets/lord.png'
import datas from "./joiningformcontect";
import SpeakWithPriestForm from "./Components/formsection/SpeakWithPriestForm";
import RequestKrishnaPrasadForm from "./Components/formsection/RequestKrishnaPrasadForm";
import BookKirtanForm from "./Components/formsection/BookKirtanForm";
import GetConnectForm from "./Components/formsection/GetConnectForm";
import DownloadVideoForm from "./Components/formsection/DownloadVideoForm";
import BookAYagnaForm from "./Components/formsection/BookAYagnaForm";

function Home() {
  const [rotatedIndex, setRotatedIndex] = useState(null);
  const [isOpen, setIsOpen] = useState({ status: false, data: null });

  const closePopup = () => setIsOpen({ status: false, data: null });

  // Function to dynamically render form components
  const renderForm = () => {
    switch (isOpen.data) {
      case 1:
        return <SpeakWithPriestForm />;
      case 2:
        return <BookKirtanForm />;
      case 3:
        return <RequestKrishnaPrasadForm />;
      case 4:
        return <BookAYagnaForm />;
      case 5:
        return <DownloadVideoForm />;
      case 6:
        return <GetConnectForm />;
      default:
        return <p>No form available</p>;
    }
  };
  const handleCircleClick = (index) => {
    setRotatedIndex(index);
  };

  return (
    <>
      <Header />
      <div className="mainPage">
        <HomeSlider />
        <div className="mainSection text-center">
          <h1>Hare Krishna</h1>
          <div className="d-flex justify-content-center">
            <h4>
              Welcome to the adobe of Sri Sri Radha Shyamsundar and Sri Sri
              Jagannath, where the most-benevolent lord has come to receive your
              love and to fill your lives with his grace. As devotees of lord we
              are here to serve you and look forward to welcome you at our
              temples.
            </h4>
          </div>
          <NavLink
            to="/more-about-iskcon"
            onClick={() => window.scrollTo(0, 0)}
          >
            <button className="btn mt-3 mb-2">
              Learn more about our Temples
            </button>
          </NavLink>
        </div>

        <ImageSlider />

        {/*  Courses Festival yatra form  Div */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[80%] mx-auto mt-5">
          <div className=" bg-[#c61d21] rounded-[30px] border-8 border-[#c61d21] relative">
            <img src={courseimg} alt="" />
            <div className="w-full  absolute top-[40%] bg-[#b11a1fc3] py-4 flex items-center justify-center">
              <Link to="/courses"
              onClick={() => window.scrollTo(0, 0)}
              className=" text-center text-white text-4xl font-semibold font-['Open Sans'] no-underline hover:underline ">
                Courses
              </Link>
            </div>
          </div>
          <div className=" bg-[#c61d21] rounded-[30px] border-8 border-[#c61d21] relative">
            <img src={festivalimg} alt="" />
            <div className="w-full  absolute top-[40%] bg-[#b11a1fc3] py-4 flex items-center justify-center">
              <Link to="/festival" 
              onClick={() => window.scrollTo(0, 0)}
              className=" text-center text-white text-4xl font-semibold font-['Open Sans'] no-underline hover:underline ">
                Festival
              </Link>
            </div>
          </div>
          <div className=" bg-[#c61d21] rounded-[30px] border-8 border-[#c61d21] relative">
            <img src={yatraimg} alt="" />
            <div className="w-full  absolute top-[40%] bg-[#b11a1fc3] py-4 flex items-center justify-center">
              <Link 
              onClick={() => window.scrollTo(0, 0)}
              className=" text-center text-white text-4xl font-semibold font-['Open Sans'] no-underline hover:underline ">
                Yatra
              </Link>
            </div>
          </div>
        </div>

        {/* Joining the Family of Lord Krishna */}
        <div
          className="w-full  p-6 md:p-8 flex flex-col md:flex-row gap-3 justify-center items-center my-3 md:my-5 relative"
          style={
            {
              background: `url(${lord})`,
              backgroundSize: "cover"
            }
          }
        >
          {/* Modal / Popup */}
          {isOpen.status && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="relative flex bg-white rounded-lg shadow-lg w-[90%] md:w-[60%]">
                {/* Close Button */}
                <button
                  onClick={closePopup}
                  className="absolute top-2 right-2 text-gray-600 hover:text-black text-4xl font-bold"
                >
                  &times;
                </button>

                {/* Render Dynamic Form */}
                {renderForm()}
              </div>
            </div>
          )}
          <div className="w-full md:w-[50%] "
            style={{
              textShadow:
                "-1px -1px 0 #C61D21, 1px -1px 0 #C61D21, -1px 1px 0 #C61D21, 1px 1px 0 #C61D21",

            }}
          ><span className="text-[#600e10]/90 text-2xl md:text-7xl font-normal font-['DM Serif Display'] md:leading-[116px] font-bold block text-start uppercase">Join the family of<br /></span>
            <span className="text-[#600e10]/90 text-4xl md:text-8xl font-normal font-['DM Serif Display'] md:leading-[116px] font-[750] md:font-extrabold">LORD KRISHNA</span>
          </div>
          <div className="w-[90%] md:w-[45%] grid grid-cols-1 md:grid-cols-2 gap-2 place-content-around">
            {
              datas.map((data) => {
                return (
                  <div className=" bg-[#f9eadb]/90 rounded-[10px] border-2 border-[#c61d21] flex gap-4 items-center p-2">
                    <img src={data.img} alt="" className="w-[50px] h-[50px] " />
                    <Link className="text-[#600e10] text-sm font-bold font-['Lato']  m-0 text-start uppercase no-underline hover:underline" onClick={() =>
                      setIsOpen({
                        status: true,
                        data: data.id,
                      })
                    }
                    >
                      {data.content}
                    </Link>
                  </div>
                )
              })
            }
          </div>

        </div>



        <div className="discover-more">
          <h1>Explore More</h1>
          <div className="discover-items">
            {[
              {
                src: DailyDarshan,
                title: "Daily Darshan",
                link: "https://chat.whatsapp.com/LLGNidlvgoCBc0jeiwFvQ5",
              },
              { src: Life, title: "Life Membership", link: "/LifeMembership" },
              { src: Youth, title: "Youth Programs", link: "/YouthSeminar" },
              { src: Programs, title: "Our Programs", link: "#" },
              { src: Sevak, title: "Become Nitya Sevak", link: "/nitya-seva" },
            ].map((item, index) => (
              <div className="item" key={index}>
                <div className="d-flex justify-content-center">
                  <div
                    className="circle-image"
                    onClick={() => handleCircleClick(index)}
                  >
                    <NavLink
                      to={item.link}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <img
                        src={CircleImage}
                        alt="Circle Border"
                        className={`circle ${rotatedIndex === index ? "rotate" : ""
                          }`}
                      />
                      <img
                        src={item.src}
                        alt={item.title}
                        className="inner-image"
                      />
                    </NavLink>
                  </div>
                </div>

                <h3 className="item-title">
                  <NavLink
                    to={item.link}
                    onClick={() => window.scrollTo(0, 0)}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {item.title}
                  </NavLink>
                </h3>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <div
              className="item1"
              style={{ width: "50%", padding: "10px 20px" }}
            >
              <div className="d-flex justify-content-center">
                <div
                  className="circle-image"
                  onClick={() => handleCircleClick(5)}
                >
                  <NavLink
                    to="/nitya-seva"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <img
                      src={CircleImage}
                      alt="Circle Border"
                      className={`circle ${rotatedIndex === 5 ? "rotate" : ""}`}
                    />
                    <img src={Sevak} className="inner-image" alt="sevak"/>
                  </NavLink>
                </div>
              </div>
              <h3 className="item-title">
                <NavLink
                  to="/nitya-seva"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Become Nitya Sevak
                </NavLink>
              </h3>
            </div>
          </div>
        </div>

        <div className="mustWatch md:pt-4 pb-4">
          <h1>Must Watch</h1>
          <YouTubeSlider />
        </div>

        <div className="newsSection">
          <h1>
            ISKCON VIJAYAWADA <br /> In the news
          </h1>
          <NewsSlider />
        </div>

      </div >
      <Footer />
    </>
  );
}

export default Home;
