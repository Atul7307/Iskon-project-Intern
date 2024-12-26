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
          <h2 className="headline mt-4 mb-4">
            History of the Hare Krishna Movement
          </h2>
          <div className="text">
            <div className={`text-box ${showMore1 ? "expanded" : ""}`}>
              <h5>
                In 1965, at the age of 69,
                <strong>A. C. Bhaktivedanta Swami Prabhupada</strong>
                boarded the steamship ‘Jaladuta’ from  on his way to
                United States. At an age when most people think of retiring
                Srila Prabhupada undertook this arduous journey to fulfill the
                mission of Lord Caitanya and follow the instruction of his
                spiritual master Bhaktisiddhanta Saraswati Thakur to carry the
                message of Bhagavad-gita and Srimad Bhagavatam to Western world.
              </h5>
              <br className={`${showMore1 ? "show" : "hide"}`} />
              <h5 className={`${showMore1 ? "show" : "hide"}`}>
                After arriving in New York City in September 1965, Srila
                Prabhupada struggled alone for the first year to establish his
                Krishna conscious movement. He lived simply, lectured whenever
                and wherever he got the opportunity and gradually began to
                attract some small interest in his teaching. In July of 1966,
                while still working from an obscure storefront on New York
                City’s Lower East Side, Srila Prabhupada nonetheless founded a
                spiritual society intended for worldwide participation. He
                called it International Society for Krishna Consciousness or
                ISKCON for short and thus began the Hare Krishna movement in
                America.
              </h5>
              <br className={`${showMore1 ? "show" : "hide"}`} />
              <h5 className={`${showMore1 ? "show" : "hide"}`}>
                At the time of incorporation, Srila Prabhupada had not attracted
                even one committed follower. Undeterred, he enlisted volunteers
                from among the small group of regular attendees at his evening
                lectures to act as ISKCON’s first trustees. That was then.
                Today, ISKCON comprises of more than 400 temples worldwide, 40
                rural communities and over 100 vegetarian restaurants. It also
                conducts special projects throughout the world, such as “Food
                for Life”, the only free vegetarian relief program in the world.
              </h5>
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
