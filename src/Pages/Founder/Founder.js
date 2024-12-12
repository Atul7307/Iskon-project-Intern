import React from "react";
import "./Founder.css";
import "@fontsource/source-sans-pro";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MainBanner from "./components/MainBanner/MainBanner";
import img from "./assets/images/img.png";
import Banner from "./components/Banner/Banner";
const Founder = () => {
  return (
    <>
      <Header />
      <div className="founder-page">
        <MainBanner />
        <div className="d-flex justify-content-center founder-img">
          <div className="text-center">
            <h5
              className="img-headline"
              style={{ paddingTop: "40px", paddingBottom: "25px" }}
            >
              His Divine Grace <br />
              A.C. BHAKTIVEDANTA SWAMI PRABHUPADA
            </h5>
            <div className="d-flex justify-content-center">
              <img src={img} alt="Founder" className="founder" />
            </div>
          </div>
        </div>
        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default Founder;
