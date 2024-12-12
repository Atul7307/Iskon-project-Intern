import React, { useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./NewsSlider.css";
import ArrowRight from "./ArrowRight.svg";
import ArrowLeft from "./ArrowLeft.svg";
import news3 from "./assets/images/news3.png";
import news5 from "./assets/images/news5.png";
import news6 from "./assets/images/news6.png";
import news8 from "./assets/images/news8.png";
import news9 from "./assets/images/news9.png";
import news10 from "./assets/images/news10.png";
import news11 from "./assets/images/news11.png";
import news13 from "./assets/images/news13.png";
import news15 from "./assets/images/news15.png";
import news16 from "./assets/images/news16.png";
import news17 from "./assets/images/news17.png";
import news18 from "./assets/images/news18.png";
import news19 from "./assets/images/news19.png";
import news20 from "./assets/images/news20.png";
import news21 from "./assets/images/news21.png";
import news22 from "./assets/images/news22.png";
import news23 from "./assets/images/news23.png";
import news24 from "./assets/images/news24.png";
import news25 from "./assets/images/news25.png";
import news26 from "./assets/images/news26.png";
import news27 from "./assets/images/news27.png";
import news28 from "./assets/images/news28.png";
import news29 from "./assets/images/news29.png";
import news30 from "./assets/images/news30.png";
import news31 from "./assets/images/news31.png";
import news32 from "./assets/images/news32.png";
import news33 from "./assets/images/news33.png";
import news34 from "./assets/images/news34.png";
import news35 from "./assets/images/news35.png";
import news36 from "./assets/images/news36.png";

const videos = [
  { image: news3 },
  { image: news5 },
  { image: news6 },
  { image: news8 },
  { image: news9 },
  { image: news10 },
  { image: news11 },
  { image: news13 },
  { image: news15 },
  { image: news16 },
  { image: news17 },
  { image: news18 },
  { image: news19 },
  { image: news20 },
  { image: news21 },
  { image: news22 },
  { image: news23 },
  { image: news24 },
  { image: news25 },
  { image: news26 },
  { image: news27 },
  { image: news28 },
  { image: news29 },
  { image: news30 },
  { image: news31 },
  { image: news32 },
  { image: news33 },
  { image: news34 },
  { image: news35 },
  { image: news36 },
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

const NewsSlider = () => {
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

export default NewsSlider;
