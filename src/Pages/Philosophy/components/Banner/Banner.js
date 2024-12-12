import React, { useState } from "react";
import "./Banner.css";
import leftBg from "../../assets/images/leftBg.png";
import rightBg from "../../assets/images/rightBg.png";

const Banner = () => {
  const [showMore1, setShowMore1] = useState(false);

  const toggleShowMore1 = () => {
    setShowMore1((prevShowMore1) => !prevShowMore1);
  };

  return (
    <>
      <div className="banner bannerNor d-flex pb-4">
        <img src={leftBg} alt="Left bg" className="left-bg1" />
        <div className="text-center content">
          <div className="text">
            <div className={`text-box ban ${showMore1 ? "expanded" : ""}`}>
              <h5>
                as promoted by Sri Caitanya, is accepted by the Vedas as the
                most effective means of self-purification in this age. The Vedas
                describe the mantra as a prayer to the Lord, “Please Lord,
                engage me in Your service”. Devotees may accept formal
                initiation into the chanting of the Holy Name vowing to abstain
                from intoxication, gambling, illicit sexual connections and the
                eating of meat, fish or eggs. ISKCON members believe indulgence
                in the aforementioned activities disrupts physical, mental and
                spiritual well-being, and increases anxiety and conflict in
                society. At the time of initiation devotees also agree to chant
                a prescribed number of mantras each day.
              </h5>

              {/* <h5>
                <a className={`readMore`} onClick={toggleShowMore1}>
                  {showMore1 ? "SHOW LESS <<" : "READ MORE >>"}
                </a>
              </h5> */}
            </div>
          </div>
        </div>
        <img src={rightBg} alt="Right bg" className="right-bg1" />
      </div>
    </>
  );
};

export default Banner;
