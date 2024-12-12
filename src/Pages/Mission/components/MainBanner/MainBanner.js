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
          <span>OUR MISSION</span>
          <div className="text">
            <div className={`text-box pt-4 mb-2 ${showMore ? "expanded" : ""}`}>
              <h5>
                The International Society for Krsna Consciousness (ISKCON) was
                established in T 1966 by His Divine Grace A. C. Bhaktivedanta
                Swami Prabhupada (Srila Prabhupada). ISKCON has since developed
                into a worldwide confederation of 10,000 temple devotees and
                2,50,000 congregational devotees. Better known as the Hare
                Krishna movement, ISKCON is comprised of more than 350 centers,
                60 rural communities, 50 schools and 60 restaurants worldwide.
                The mission of this nonsectarian, monotheistic movement is to
                promote the well-being of society by teaching the science of
                Krsna consciousness according to Bhagavad-gita and other ancient
                scriptures.
              </h5>

              {/*               
              <h5>
                <a className="readMore" onClick={toggleShowMore}>
                  {showMore ? "SHOW LESS <<" : "READ MORE >>"}
                </a>
              </h5> */}
            </div>
          </div>
        </div>
        <img src={rightBg} alt="Right bg" className="right-bg" />
      </div>
    </>
  );
};

export default MainBanner;
