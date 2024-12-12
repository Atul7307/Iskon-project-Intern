import React from "react";
import Slider from "react-slick";
import "./ImageSlider.css";
import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import { NavLink } from "react-router-dom";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  const slides = [
    {
      img: image1,
      link: "https://www.iskconvjagita4you.org/",
    },
    {
      img: image2,
      link: "/srilanka-ramayana-yatra",
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index} className="slider-image-wrapper-1">
            <NavLink to={item.link} style={{ width: "80%" }}>
              <img
                src={item.img}
                alt={`Slide ${index}`}
                className={`slider-image-1`}
              />
            </NavLink>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
