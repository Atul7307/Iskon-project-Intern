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
        <div className="content">
          <div className="text">
            <div className={`text-box ban ${showMore1 ? "expanded" : ""}`}>
              <h5>
                Our temple is a harmonious blend of spirituality and
                architectural elegance. The main hall reverently houses their
                Lordships and Srila Prabhupada, alongside a swing-mounted
                Narasimhadeva. The temple hall extends to a prasadam hall with a
                kitchen and washing area for the inmates. A Matchless Gift shop
                offers a variety of devotional items. The first floor features
                rooms for the residents, and plans for the second floor include
                guest rooms, a lobby, and classrooms for training programs.
              </h5>
              <br />
              <h5 className={`${showMore1 ? "show" : "hide"}`}>
                In May 2018, the temple administration was entrusted to the
                capable hands of the new management council led by HG Mukund
                Madhava Das and HG Chakradhari Das. Comprising eight full-time
                monks, including alumni from prestigious institutions like IITs
                and NITs, this team has focused on expanding outreach and
                preaching activities, as well as nurturing the devotee community
                connected to the temple.
              </h5>
              <br className={`${showMore1 ? "show" : "hide"}`} />
              <h5 className={`${showMore1 ? "show" : "hide"}`}>
                HG Chakradhari Das one of the Presidents of ISKCON Vijayawada is
                a beacon of astute management and organizational skills.
                Renowned for his deep understanding of scriptures, he has
                pioneered initiatives such as GITA4U, an 18-day crash course on
                learning Bhagavad-Gita, receiving global acclaim. Under his
                leadership, a new and vibrant ISKCON Vijayawada Sri Jagannath
                Mandir emerged in the heart of Vijayawada city.
              </h5>
              <br className={`${showMore1 ? "show" : "hide"}`} />
              <h5 className={`${showMore1 ? "show" : "hide"}`}>
                A team of four dedicated monks, all IIT graduates, led by HG
                Chakradhari Das, spearheads preaching and outreach activities.
                Their commitment to spiritual growth and community service has
                elevated ISKCON Vijayawada Sri Sri Radha Shyamsundar Mandir and
                Sri Jagannath Mandir to new heights.
              </h5>
              <br className={`${showMore1 ? "show" : "hide"}`} />
              <h5>
                <a className={`readMore showRead`} onClick={toggleShowMore1}>
                  {showMore1 ? "SHOW LESS <<" : "READ MORE >>"}
                </a>
              </h5>
            </div>
          </div>
        </div>
        <img src={rightBg} alt="Right bg" className="right-bg1" />
      </div>
    </>
  );
};

export default Banner;
