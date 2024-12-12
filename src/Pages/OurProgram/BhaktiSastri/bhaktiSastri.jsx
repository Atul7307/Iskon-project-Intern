import React from "react";
import "./styles.css"; 
import sashtri1 from "./assets/sashtri1.png";
import sashtri3 from "./assets/sashtri3.jpg";
import sashtri4 from "./assets/sashtri4.jpg";
import mobPage from "./assets/mob-page.jpg";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";

function BhaktiSastri() {
  return (
    <div className="bg-[#FFF0DE]">
      <Header />
      <div className="desktop w-full bg-[#FFF0DE]">
        <img src={sashtri1} alt="" />
        <div className=" bg-[#FFF0DE]">
          <img src={sashtri3} alt="" />
          <div className="w-4/5 mx-auto mt-[3%]">
            <h1 className="text-[68px] w-3/4 text-[#C61D21] font-semibold">Benefits:</h1>
            <img src={sashtri4} alt="" className=" mt-10" />
          </div>
        </div>
      </div>
      <div className="mobile w-full">
        <img src={mobPage} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default BhaktiSastri;
