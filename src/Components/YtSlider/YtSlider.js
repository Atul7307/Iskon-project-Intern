import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./YtSlider.css";
import ArrowRight from "./ArrowRight.svg";
import ArrowLeft from "./ArrowLeft.svg";

const ytIdeas = [
  "ayBApn0SnS0",
  "zLro71sgg6s",
  "R2kfRjYaHfw",
  "SeDxW8CLlC4",
  "8v2HBz-amRA",
];

const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className="btn ytBtn"
      style={{
        ...style,
        position: "absolute",
        top: "35%",
        right: "-05%",
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
      className="btn ytBtn"
      style={{
        ...style,
        position: "absolute",
        top: "35%",
        left: "-05%",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="Previous" style={{ width: "25px" }} />
    </button>
  );
};

const YouTubeSlider = () => {
  const [ytvideos, setYtVideos] = useState([]);

  useEffect(() => {
    const getAllVideoDetails = async (id) => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${id}&key=AIzaSyAz3vrGRPyoWif1pgGxBdUuWItE1CVwLEU`
      );
      const data = await res.json();
      return data?.items[0].snippet;
    };

    const fetchAllData = async () => {
      let datas = [];
      for (const x of ytIdeas) {
        const r = await getAllVideoDetails(x);
        datas.push({
          id: x,
          title: r.title,
          publishedAt: r.publishedAt,
          thumbnail: r.thumbnails?.maxres,
        });
      }
      setYtVideos(datas);
    };

    fetchAllData();
  }, []);

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

  return (
    <div className="youtube-slider-container pb-4">
      <Slider {...settings}>
        {ytvideos.map((video, index) => (
          <div key={index} className="video-slide">
            <div className="ytCard">
              <a
                href={`https://www.youtube.com/watch?v=${video?.id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={video?.thumbnail.url}
                  alt={video?.title}
                  className="video-thumbnail"
                />
                <div className="bottomCard">
                  <h3 className="video-title">{video?.title}</h3>
                  {/* <p className="video-meta"></p> */}
                </div>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default YouTubeSlider;
