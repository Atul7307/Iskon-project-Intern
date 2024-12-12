import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Donate.css";

const Donate = () => {
  return (
    <>
      <Header />
      <div className="donate-page d-flex justify-content-center">
        <div className="donate-content">
          <h2>Donate</h2>
          <h5>
            As said in Bhagavad Gita 18.5- acts of sacrifice, charity and
            penance are not to be given up; they must be performed. Indeed,
            sacrifice, charity and penance purify even the great souls.
          </h5>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donate;
