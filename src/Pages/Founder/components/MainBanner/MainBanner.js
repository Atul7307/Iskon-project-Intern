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
          <span>FOUNDER ARCHARYA</span>
          <div className="text">
            <div className={`text-box mt-2 pt-4 ${showMore ? "expanded" : ""}`}>
              <h5>
                His Divine Grace{" "}
                <strong style={{ color: "#AC191D" }}>
                  A. C. Bhaktivedanta Swami Prabhupada
                </strong>{" "}
                appeared in this world in 1896 in Calcutta, India. He first met
                his spiritual master, Srila Bhaktisiddhanta Sarasvati Gosvami,
                in Calcutta in 1922. Śrila Bhaktisiddhanta Sarasvati, a
                prominent religious scholar and the founder of sixty-four
                Gaudiya Mathas (Vedic institutes) in India, liked this educated
                young man and convinced him to dedicate his life to teaching
                Vedic knowledge. Srila Prabhupada became his student and, in
                1933, his formally initiated disciple.
              </h5>

              <br />
              <h5 className={`${showMore ? "show" : "hide"}`}>
                At their first meeting Srila Bhaktisiddhanta Sarasvati requested
                Srila Prabhupada to broadcast Vedic knowledge in English. In the
                years that followed, Srila Prabhupada wrote a commentary on the
                Bhagavad-gītā, assisted the Gaudiya Matha in its work, and in
                1944 started Back to Godhead, an English fortnightly magazine.
                Single-handedly, Śrila Prabhupada edited it, typed the
                manuscripts, checked the galley proofs, and even distributed the
                individual copies. The magazine is now being continued by his
                disciples in the West.
              </h5>

              {showMore && (
                <>
                  <br />
                  <h5>
                    In 1950 Srila Prabhupada retired from married life, adopting
                    the vanaprastha (retired) order to devote more time to his
                    studies and writing. He traveled to the holy city of
                    Vṛndavana, where he lived in humble circumstances in the
                    historic temple of Radha- Damodara. There he engaged for
                    several years in deep study and writing. He accepted the
                    renounced order of life (sannyasa) in 1959. At
                    Radha-Damodara, Srila Prabhupada began work on his life's
                    masterpiece: a multivolume commentated translation of the
                    eighteen-thousand-verse Srimad Bhagavatam (Bhagavata
                    Purana). He also wrote Easy Journey to Other Planets.
                  </h5>
                  <br />
                  <h5>
                    After publishing three volumes of the Bhagavatam, Srila
                    Prabhupada came to the United States in September 1965 to
                    fulfill the mission of his spiritual master. Subsequently,
                    His Divine Grace wrote more than fifty volumes of
                    authoritative commentated translations and summary studies
                    of the philosophical and religious classics of India.
                  </h5>
                  <br />
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
