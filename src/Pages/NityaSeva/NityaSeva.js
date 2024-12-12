import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import NityaContent from "./components/NityaContent/NityaContent";
import NityaSevak from "./components/NityaSevak/NityaSevak";
import NityaContribution from "./components/NityaContribution/NityaContribution";
import img from "./assets/images/img.png";
import mainBanner from "./assets/images/mainBanner.png";
import becomeNityaSevak from "./assets/images/becomeNityaSevak.png";
import becomeNityaSevakCard from "./assets/images/becomeNityaSevakCard.jpg";
import "./NityaSeva.css";

const NityaSeva = () => {
  return (
    <>
      <Header />
      <div className="nitya-seva-page">
        <div>
          <img
            src={mainBanner}
            alt="Main Banner"
            className="nitya-seva-banner"
          />
        </div>
        <NityaContent />
        <div className="d-flex justify-content-center">
          <h5 className="head-nitya-seva">
            "Nitya Seva is a monthly donation program where a devotee like you
            can monthly contribute in the lotus feet of the Lord."
          </h5>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ padding: "2em 0" }}
        >
          <img src={img} alt="nitya-seva" className="nitya-seva-img" />
        </div>
        <div className="d-inline-block image-wrapper">
          <img
            src={becomeNityaSevak}
            alt="Become Nitya Sevak"
            className="become-nitya-sevak"
          />
          <img
            src={becomeNityaSevakCard}
            alt="Become Nitya Sevak Card"
            className="become-nitya-sevak-card"
          />
        </div>
        <NityaSevak />
        <NityaContribution />
      </div>
      <Footer />
    </>
  );
};

export default NityaSeva;
