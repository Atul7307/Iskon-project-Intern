import React from "react";
import Slider from "react-slick";
import "./HomeSlider.css";
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false, 
  };

  const images = [image1];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slider-image-wrapper">
            <img
              src={img}
              alt={`Slide ${index}`}
              className={`slider-image`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
