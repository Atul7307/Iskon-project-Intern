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
                When he first arrived by freighter in New York City, Srila
                Prabhupada was practically penniless. Only after almost a year
                of great difficulty did he establish the International Society
                for Kṛṣṇa Consciousness, in July of 1966. Before he passed away
                on November 14, 1977, he had guided the Society and seen it grow
                to a worldwide confederation of more than one hundred asramas,
                schools, temples, institutes, and farm communities.
              </h5>
              <br />
              <h5 className={`${showMore1 ? "show" : "hide"}`}>
                In 1972 His Divine Grace introduced the Vedic system of primary
                and secondary education In the West by founding the gurukula
                school in Dallas, Texas. Since then his disciples have
                established similar schools throughout the United States and the
                rest of the world.
              </h5>

              {showMore1 && (
                <>
                  <br />
                  <h5>
                    Srila Prabhupada also inspired the construction of several
                    large international cultural centers in India. The center at
                    Sridhama Mayapur is the site for a planned spiritual city,
                    an ambitious project for which construction will extend over
                    many years to come. In Vṛndavana are the magnificent
                    Kṛṣṇa-Balarama Temple and International Guesthouse, gurukula
                    school, and Srila Prabhupada Memorial and Museum. There is
                    also a major cultural and educational center in Mumbai.
                    There are beautiful temples in Delhi, Bangalore, Ahmedabad,
                    Baroda and many other cities throughout India.
                  </h5>
                  <br />
                  <h5>
                    Srila Prabhupada's most significant contribution, however,
                    is his books. Highly respected by scholars for their
                    authority, depth, and clarity, they are used as textbooks in
                    numerous college courses. His writings have been translated
                    into over fifty languages. The Bhaktivedanta Book Trust,
                    established in 1972 to publish the works of His Divine
                    Grace, has thus become the world's largest publisher of
                    books in the field of Indian religion and philosophy.
                  </h5>
                  <br />
                  <h5>
                    In just twelve years, despite his advanced age, Srila
                    Prabhupada circled the globe fourteen times on lecture tours
                    that took him to six continents. Yet this vigorous schedule
                    did not slow his prolific literary output. His writings
                    constitute a veritable library of Vedic philosophy,
                    religion, literature, and culture.
                  </h5>
                </>
              )}
              <h5>
                <a className={`readMore`} onClick={toggleShowMore1}>
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
