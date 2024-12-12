import React, { useState, useEffect } from "react";

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";
import image6 from "./assets/image6.jpg"; 
import bg from "./assets/bg.jpg";

const Slider1 = () => {
  const slides = [
    {
      images: [image1, image2],
      text: "Delicious Prasadam: Enjoy A Sumptuous Feast Prepared With Love And Devotion Our Prasadam (Offered Food) Is Not Only Delicious But Also Spiritually Uplifting. As It Is Sanctified Through The Process Of Devotional Cooking.",
    },
    {
      images: [image3, image4],
      text: "Spiritual Atmosphere: Experience A Serene And Welcoming Environment Filled  With Devotional Music, Chanting, And The Company Of Like-Minded Individuals.",
    },
    {
      images: [image5, image6],
      text: "Meditative Spaces: The Sunday Feast Includes A Special Program Featuring Kirtans (Devotional Singing), Spiritual Discourses, And Opportunities For Prayer And Meditation.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Detect mobile screen

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust screen size threshold as needed
    };
    window.addEventListener("resize", handleResize);

    const interval = setInterval(nextSlide, 2000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="slider-container bg-red-900 text-white p-8 text-center sm:flex flex-col items-center justify-center relative hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <h2
        className="text-[#F3B01B] mb-5 text-5xl lg:text-6xl font-semibold  font-['Source Serif Pro', 'serif']"
      >
        What To Expect
      </h2>

      <div className="relative flex items-center justify-center w-full max-w-4xl">
        <div
          className="main-slide flex flex-col items-center p-6 rounded-lg backdrop-blur-md"
          style={{
            width: "100%",
          }}
        >
          <div className="flex gap-[150px] mb-6 justify-center">
            {/* Show only the first image on mobile */}
            {slides[currentSlide].images.slice(0, isMobile ? 1 : 2).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${currentSlide + 1} Image ${index + 1}`}
                className="object-cover rounded-lg shadow-lg"
                style={{
                  width: "450px",
                  height: "300px",
                  objectFit: "cover",
                  borderTop: "5px solid white",
                  borderBottom: "5px solid white",
                  borderLeft: "10px solid white",
                  borderRight: "10px solid white",
                }}
              />
            ))}
          </div>

          <div
            className="text-container flex items-center justify-center bg-opacity-75 rounded-lg"
            style={{
              marginTop: "20px",
              width: "100%",
              height: "100px",
              maxWidth: "2600px",
            }}
          >
            <p
              className="lg:text-center text-base text-start lg:text-2xl font-bold font-['Open Sans', sans-serif] text-[#ffdebd]"
              style={{
                fontSize: "24px",
                fontWeight: "700",
                fontFamily: "'Open Sans', sans-serif",
                color: "#ffdebd"
              }}
            >
              <span style={{ color: "#F3B01B" }}>
                {slides[currentSlide].text.split(":")[0]}
              </span>
              :{slides[currentSlide].text.split(":")[1]}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="text-white rounded-full z-10 absolute left-0 transform -translate-y-1/3 flex items-center justify-center text-[50px] w-[150px] h-[150px] right-[100px]"
        
      >
        &#8249;
      </button>

      <button
        onClick={nextSlide}
        className="text-white rounded-full z-10 absolute right-0 transform -translate-y-1/3 flex items-center justify-center"
        style={{
          width: "150px",
          height: "150px",
          fontSize: "50px",
        }}
      >
        &#8250;
      </button>

      <div className="flex justify-center mt-4 ">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentSlide ? "bg-yellow-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider1;