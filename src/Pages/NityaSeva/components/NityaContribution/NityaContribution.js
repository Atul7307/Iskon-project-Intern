import React from "react";
import "./NityaContribution.css";
import img1 from "../../assets/images/nitya1.png";
import img2 from "../../assets/images/nitya2.png";
import img3 from "../../assets/images/nitya3.png";
import img4 from "../../assets/images/nitya4.png";
import img5 from "../../assets/images/nitya5.png";

const NityaContribution = () => {
  return (
    <div className="nitya-contribution">
      <div className="d-flex justify-content-center">
        <div className="text-center head ">
          <h1>How Nitya Seva Contribution Seva is used?</h1>
          <h3>
            Monthly contribution by you will be used in below mentioned five
            important sevas thus you will get benefit of five sevas through one
            Nitya Seva
          </h3>
        </div>
      </div>
      <div className="img-section col-12 pt-4">
        <img src={img1} alt="nitya-1" className="nitya-contribution-img1" />
        <img src={img2} alt="nitya-2" className="nitya-contribution-img2" />
        <img src={img3} alt="nitya-3" className="nitya-contribution-img3" />
        <img src={img4} alt="nitya-4" className="nitya-contribution-img4" />
        <img src={img5} alt="nitya-5" className="nitya-contribution-img5" />
      </div>
    </div>
  );
};

export default NityaContribution;
