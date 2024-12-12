import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "./assets/images/MainBanner.jpg";
import FoodSlider from "./Components/FoodSlider/FoodSlider";
import "./FoodForLife.css";

const FoodForLife = () => {
  return (
    <>
      <Header />
      <img
        src={Banner}
        alt="Banner for Food for Life"
        className="food-life-banner"
      />
      <div className="food-life-page">
        <div className="content-section">
          <h1 className="food-life-head">HELP CREATE A HUNGER-FREE WORLD</h1>
          <h5 className="food-life-text">
            At ISKCON Vijayawada, our Food for Life program began as a heartfelt
            mission during the COVID-19 pandemic, aimed at nourishing not just
            the bodies, but the spirits of those facing hunger and hardship. As
            lockdowns left many in desperate need, we stepped in to serve
            hundreds of warm, freshly prepared vegetarian meals daily, offering
            more than just food — we offered hope, dignity, and love. In 2020
            alone, we distributed over 50,000 meals to families affected by the
            pandemic.
          </h5>
          <h5 className="food-life-text">
            When the devastating floods struck Vijayawada, our commitment
            deepened. We mobilized quickly, providing essential relief to those
            impacted, serving over 20,000 meals to families who lost their homes
            and livelihoods. Each meal, lovingly prepared as prasadam, carries
            the blessings of Lord Krishna, reminding those we serve that they
            are not forgotten, that someone cares.
          </h5>
          <h5 className="food-life-text">
            This simple act of sharing food has become a powerful message of
            compassion, restoring faith and lighting up lives touched by
            struggle. At Food for Life, we believe that no one should face
            hunger alone, and together, we can create a community bound by
            kindness and care.
          </h5>

          <FoodSlider />

          <h5 className="food-life-text pt-4">
            All it takes is ₹30 to free someone of hunger. That’s the cost of
            one meal where the highest quality ingredients are sourced and
            cooked to the highest standards and distributed as prasad. Just
            thirty rupees from you can provide a wholesome meal to someone in
            need of sustenance.
          </h5>
          <h5 className="food-life-text">
            Srila Prabhupada encouraged free prasad distribution right from 1966
            when he founded the Hare Krishna Movement. He would often say that
            by generous prasad and sankirtan distribution the whole world can
            attain peace and prosperity.
          </h5>
          <h5 className="food-life-text">
            Everything you offer on the altar becomes Prasad, in that it becomes
            spiritualised. The Lord enters into the offerings and the prasad is
            no different from Him. Lord Chaitanya Mahaprabhu said that remnants
            of food that Krishna has eaten surpass heavenly nectar and only
            persons who have the full mercy of Krishna can receive such
            remnants. Hare Krishna!
          </h5>
        </div>
        <div className="contribute-section">
          <div className="d-flex justify-content-center">
            <div className="food-life-span">
              <span>It takes only ₹30 to free someone of hunger</span>
            </div>
          </div>
          <div className="secHead">
            <span className="food-life-span">Contribute Now</span>
          </div>

          <div className="contribution">
            <div className="item first">
              <h3>Feed 5000 People</h3>
              <button>Donate ₹150000</button>
            </div>
            <div className="item second">
              <h3>Feed 500 People</h3>
              <button>Donate ₹15000</button>
            </div>
            <div className="item third">
              <h3>Feed 2000 People</h3>
              <button>Donate ₹60000</button>
            </div>
            <div className="item fourth">
              <h3>Feed 250 People</h3>
              <button>Donate ₹7500</button>
            </div>
            <div className="item fifth">
              <h3>Feed 1000 People</h3>
              <button>Donate ₹30000</button>
            </div>
            <div className="item sixth">
              <h3>Feed 100 People</h3>
              <button>Donate ₹3000</button>
            </div>
            <div className="item seventh">
              <h3>Donate as your wish</h3>
              <button>Donate</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FoodForLife;
