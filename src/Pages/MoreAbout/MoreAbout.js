import React from "react";
import "./MoreAbout.css";
import "@fontsource/source-sans-pro";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MainBanner from "./components/MainBanner/MainBanner";
import img from "./assets/images/img.png";
import Banner from "./components/Banner/Banner";

const MoreAbout = () => {
  return (
    <>
      <Header />
      <div className="more-about-page">
        <MainBanner />
        <div className="d-flex justify-content-center more-about-img">
          <div className="text-center">
            <img src={img} alt="Founder" className="more-about" />
          </div>
        </div>
        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default MoreAbout;
