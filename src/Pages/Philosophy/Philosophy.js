import React from "react";
import "./Philosophy.css";
import "@fontsource/source-sans-pro";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MainBanner from "./components/MainBanner/MainBanner";
import img from "./assets/images/img.png";
import img1 from "./assets/images/img1.png";
import Banner from "./components/Banner/Banner";

const Philosophy = () => {
  return (
    <>
      <Header />
      <div className="philosophy-page">
        <MainBanner />
        <div className="d-flex justify-content-center philosophy-img">
          <div className="text-center">
            <div className="d-flex justify-content-center">
              <img
                src={img}
                alt="philosophy-1"
                className="philosophy"
                style={{
                  padding: "5rem",
                }}
              />
            </div>
            <h5 className="headline">
              Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama,
              Hare Rama, Rama Rama, Hare Hare
            </h5>
            <div className="d-flex justify-content-center">
              <img
                src={img1}
                alt="philosophy-2"
                className="philosophy"
                style={{
                  padding: "5rem",
                }}
              />
            </div>
          </div>
        </div>
        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default Philosophy;
