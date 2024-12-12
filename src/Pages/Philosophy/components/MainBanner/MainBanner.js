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
          <span>OUR PHILOSOPHY</span>
          <div className="text">
            <div className={`text-box mt-2 pt-4 ${showMore ? "expanded" : ""}`}>
              <h5>
                The Vedic scriptures state that spiritual life begins when one
                inquires into the nature of the absolute truth, the Supreme
                Godhead. Gaudiya Vaisnavas are monotheists and know the
                personality of Godhead as Krishna, the All-attractive. But it is
                also recognised that the Supreme has unlimited names such as
                Rama, Buddha, Vishnu, Jehovah, Allah, etc. The ultimate goal of
                Gaudiya Vaisnavism is to develop a loving relationship with the
                Supreme Godhead. To understand knowledge of self-realisation one
                must approach a genuine spiritual master. The Vedas also tell us
                that the understanding of the self, as being non-material or
                spiritual by nature, is the preliminary stage of realisation of
                the absolute truth. To understand knowledge of self-realisation
                one must approach a genuine spiritual master, just as one learns
                the essence of any subject from a perfected practitioner. The
                congregational chanting of the maha-mantra,
              </h5>
              {/* <h5>
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
