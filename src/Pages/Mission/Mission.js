import React from "react";
import "./Mission.css";
import "@fontsource/source-sans-pro";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MainBanner from "./components/MainBanner/MainBanner";
import List from "./components/List/List";

const Mission = () => {
  return (
    <>
      <Header />
      <div className="mission-page">
        <MainBanner />
        <List />
      </div>
      <Footer />
    </>
  );
};

export default Mission;
