import React, { useState } from "react";
import "./List.css";

const List = () => {
  const [showList, setShowList] = useState(false);

  const toggleShowList = () => {
    setShowList((prevList) => !prevList);
  };

  return (
    <>
      <div className="list-section text-center pt-4 ">
        <h2 className="headline mt-4 mb-4 pb-2">
          THE SEVEN PURPOSES OF ISKCON
        </h2>
        <div className="d-flex justify-content-center">
          <div className="li-section">
            <ol>
              <li>
                To systematically propagate spiritual knowledge to society at
                large and to educate all people in the techniques of spiritual
                life in order to check the imbalance of values of life and to
                achieve real unity and peace in the world.
              </li>
              <li>
                To propagate a consciousness of Krishna (God), as it is revealed
                in the great scriptures of India, Bhagavad-gita and Srimad
                Bhagavatam.
              </li>
              <li>
                To bring the members of the Society together with each other and
                nearer to Krishna, the prime entity, thus developing the idea
                within the members, and humanity at large, that each soul is
                part and parcel of the quality of Godhead (Krishna).
              </li>

              <div className={`hideList ${showList ? "show" : "hide"}`}>
                <li>
                  To teach and encourage the Sankirtana movement, congregational
                  chanting of the holy names of God, as revealed in the
                  teachings of Lord Shri Chaitanya Mahaprabhu.
                </li>
                <li>
                  To erect for the members and for society at large a holy place
                  of transcendental pastimes dedicated to the personality of
                  Krishna.
                </li>
                <li>
                  To bring the members closer together for the purpose of
                  teaching a simpler, more natural way of life.
                </li>
                <li>
                  With a view towards achieving the aforementioned purposes, to
                  publish and distribute periodicals, magazines, books and other
                  writings.
                </li>
              </div>
              <h5>
                <a className="readMore showRead" onClick={toggleShowList}>
                  {showList ? "SHOW LESS <<" : "READ MORE >>"}
                </a>
              </h5>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
