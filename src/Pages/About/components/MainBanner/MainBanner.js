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
          <span>ABOUT ISKCON</span>
          <h2 className="headline mt-4 mb-4">
            The International Society for Krishna Consciousness
          </h2>
          <div className="text">
            <div className={`text-box ${showMore ? "expanded" : ""}`}>
              <h5>
                International Society for Krishna Consciousness, also popularly
                known as the Hare Krishna movement is a spiritual society
                founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
                in July 1966 in New York. ISKCON belongs to the
                Gaudiya-Vaishnava sampradaya, a monotheistic tradition within
                Vedic culture. Today ISKCON comprises of more than 400 temples,
                40 rural communities and over 100 vegetarian restaurants. It
                also conducts special projects throughout the world, such as
                “Food for Life”, the only free vegetarian relief program in the
                world.
              </h5>

              <br />
              <h5 className={`${showMore ? "show" : "hide"}`}>
                The aim of ISKCON is to acquaint all people of world with
                universal principles of self-realization and God consciousness
                so that they may derive the highest benefit of spiritual
                understanding, unity and peace. The Vedic literature recommend
                that in the present age of Kali-yuga the most effective means of
                achieving self-realization is always hear about, glorify, and
                remember the all-attractive Supreme Lord Sri Krishna. Therefore,
                it recommends the chanting of the Holy Names: Hare Krishna Hare
                Krishna Krishna Krishna Hare Hare / Hare Rama Hare Rama Rama
                Rama Hare Hare. This sublime chanting puts the chanter directly
                in touch with the Supreme Lord through the sound vibration of
                His Holy Name.
              </h5>

              {showMore && (
                <>
                  <br />
                  <h5>
                    ISKCON follows the teachings of the Vedas and Vedic
                    scriptures, including the Bhagavad-gita and Srimad
                    Bhagavatam which teach Vaishnavism or devotion to God
                    (Krishna) in His Supreme Personal aspect of Sri Sri Radha
                    Krishna.
                  </h5>
                  <br />
                  <h5>
                    These teachings are received through the preceptorial line
                    known as the Brahma-Madhav-Gaudiya Vaishnava sampradaya.
                    ISKCON is part of the disciplic succession which started
                    with Lord Krishna Himself and continued with Srila
                    Vyasadeva, Srila Madhavacharya, Sri Caitanya Mahaprabhu and
                    in the present day His Divine Grace A. C. Bhaktivedanta
                    Swami Prabhupada and his followers.
                  </h5>
                  <br />
                  <h5>
                    ISKCON’s teachings are non-sectarian, following the
                    principle of sanatana dharma or eternal religion, which
                    denotes the eternal activity of all living beings – loving
                    devotional service (bhakti-yoga) to Supreme Personality of
                    Godhead.
                  </h5>
                </>
              )}
<h5>
              <a className="readMore" onClick={toggleShowMore}>
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
