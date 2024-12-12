import React, { useState } from "react";
import "./MainBanner.css";
import leftBg from "../../assets/images/leftBg.png";
import rightBg from "../../assets/images/rightBg.png";

const MainBanner = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <>
      <div className="banner d-flex pb-4">
        <img src={leftBg} alt="Left bg" className="left-bg" />
        <div className="text-center content">
          <span>LEARN MORE ABOUT THE ISKCON</span>
          <div className="text">
            <div className={`text-box mt-2 pt-4 ${showMore ? "expanded" : ""}`}>
              <h5>
                ISKCON Vijayawada Sri Sri Radha Shayamsundar Mandir Situated in
                Undavalli, overlooking the majestic Krishna River and nestled
                beside the Amravathi-Karakatta road, ISKCON Vijayawada Sri Sri
                Radha Shyamsundar Mandir is a divine haven merely a 2-minute
                ride from the iconic Prakasham Barrage. Adjacent to the renowned
                Sarada Peetham, our temple stands as a testament to the
                spiritual synergy that flows through this sacred land.
              </h5>

              <br className={`${showMore ? "show" : "hide"}`} />
              <h5 className={`${showMore ? "show" : "hide"}`}>
                The seed for this divine abode was planted after the monumental
                Rath Yatra of Jan'1993, orchestrated under the guidance of HH
                Bhakti Swaroop Damodar Maharaj. The Bhoomi Puja in 1994 marked
                the beginning, and with the support of Sri Gokaraju Gangaraju
                and a devoted congregation of over 50 families, the temple took
                shape over the next six to seven years. On the auspicious Basant
                Panchami of Feb 17, 2002, their Lordships were joyously
                installed in the newly constructed temple complex.
              </h5>
              <br className={`${showMore ? "show" : "hide"}`} />
              <h5>
                <a className="readMore showRead" onClick={toggleShowMore}>
                  {showMore ? "SHOW LESS <<" : "READ MORE >>"}
                </a>
              </h5>
            </div>
          </div>
        </div>
        <img src={rightBg} alt="Right bg" className="right-bg" />
      </div>
    </>
  );
};

export default MainBanner;
