import React from "react";
import "./About.css";
import "@fontsource/source-sans-pro";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MainBanner from "./components/MainBanner/MainBanner";
import img from "./assets/images/img.png";
import Banner from "./components/Banner/Banner";
import List from "./components/List/List";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-page">
        <MainBanner />
        <div className="d-flex justify-content-center p-4 ">
          <img src={img} alt="About" className="about" />
        </div>
        <Banner />
        <List />
      </div>
      <Footer />
    </>
  );
};

export default About;
