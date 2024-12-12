import React, { useState } from "react";
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
import Banner from "./assets/images/Banner.png";
import ImageSlider from "./Components/ImageSlider/ImageSlider";

import { NavLink } from "react-router-dom";

function Home() {
  const [rotatedIndex, setRotatedIndex] = useState(null);

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

        {/* <div className="banner-container">
          <img src={Banner} alt="Banner" className="banner" />
          <a
            href="https://iskconvjagita4you.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="register-button">REGISTER NOW</button>
          </a>
        </div> */}

        <ImageSlider />

        <div className="discover-more">
          <h1>Discover More</h1>
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
                        className={`circle ${
                          rotatedIndex === index ? "rotate" : ""
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
                    <img src={Sevak} className="inner-image" />
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

        <div className="newsSection">
          <h1>
            ISKCON VIJAYAWADA <br /> In the news
          </h1>
          <NewsSlider />
        </div>
        <div className="mustWatch pt-4 pb-4">
          <h1>Must Watch</h1>
          <YouTubeSlider />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
