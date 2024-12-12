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
          ISKCON's Accomplishments Over Past 50 Years
        </h2>
        <div className="d-flex justify-content-center">
          <div className="li-section">
            <ul>
              <li>
                750 - the number of ISKCON centres, temples, and schools
                worldwide.
              </li>
              <li>
                550 million - the number of books published and distributed by
                ISKCON worldwide.
              </li>
              <li>
                3 billion - the number of free plates of sanctified vegetarian
                meals distributed worldwide since 1966.
              </li>

              <div className={`hideList ${showList ? "show" : "hide"}`}>
                <li>
                  15 million - the number of people who worship in ISKCON
                  temples around the world every year.
                </li>
                <li>
                  1.3 million - the number of meals distributed every day to
                  needy school children in India by ISKCON Food Relief
                  Foundation, also known as 'Annamrita', as part of the
                  Government's mid-day meal program.
                </li>
                <li>
                  340,000 - the number of patients treated by ISKCON hospitals,
                  mobile clinics, and eye camps.
                </li>
                <li>
                  260,000 - the number of devotees who walked 260,000 km
                  visiting 52,000 towns and villages in 170 countries as part of
                  the worldwide padayatra to bring the holy name to every town
                  and village around the world.
                </li>
                <li>
                  100,000 - the number of initiated disciples. In Bengal alone,
                  more than 1 crore chant.
                </li>
                <li>
                  6,000 - the number of Hare Krishna festivals held every year
                  around the world.
                </li>
                <li>
                  350 - the number of Rath Yatra events across the globe per
                  year.
                </li>
                <li>
                  110 - the number of Hare Krishna restaurants around the world.
                </li>
                <li>
                  65 - the number of eco-friendly farms run by ISKCON to
                  practice 'simple living and high thinking.'
                </li>
              </div>
              <h5>
                <a className="readMore showRead" onClick={toggleShowList}>
                  {showList ? "SHOW LESS <<" : "READ MORE >>"}
                </a>
              </h5>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
