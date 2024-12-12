import React, { useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./FoodSlider.css";
import ArrowRight from "./ArrowRight.svg";
import ArrowLeft from "./ArrowLeft.svg";

import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import image4 from "./assets/images/image4.jpg";
import image5 from "./assets/images/image5.jpg";
import image6 from "./assets/images/image6.jpg";
import image7 from "./assets/images/image7.jpg";
import image8 from "./assets/images/image8.jpg";
import image9 from "./assets/images/image9.jpg";

const videos = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
  { image: image7 },
  { image: image8 },
  { image: image9 },
];

const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className="btn newsBtn"
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        right: "-4%",
        marginTop: "20px",
      }}
      onClick={onClick}
    >
      <img src={ArrowRight} alt="Next" style={{ width: "25px" }} />
    </button>
  );
};

const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className="btn newsBtn"
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        left: "-4%",
        marginTop: "20px",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="Previous" style={{ width: "25px" }} />
    </button>
  );
};

const FoodSlider = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImage, setLargeImage] = useState("");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleCardClick = (index) => {
    setLargeImage(videos[index].image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLargeImage("");
  };

  return (
    <div className="news-slider-container pb-4">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="news-slide">
            <div className="newsCard" onClick={() => handleCardClick(index)}>
              <img src={video.image} alt="News Image" className="news-img" />
            </div>
          </div>
        ))}
      </Slider>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={largeImage} alt="Large News" className="large-image" />
            <button className="close-button" onClick={closeModal}>
              <FontAwesomeIcon
                icon={faXmark}
                style={{ border: "2px solid white", padding: "5px" }}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodSlider;
