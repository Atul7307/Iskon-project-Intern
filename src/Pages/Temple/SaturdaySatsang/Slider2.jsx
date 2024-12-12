import img1 from "./assets/mobile/slide1.png";
import img2 from "./assets/mobile/slide2.png";
import img3 from "./assets/mobile/slide3.png";
import left from "./assets/mobile/left.png";
import right from "./assets/mobile/right.png";
import bg from "./assets/mobile/bg.png";
import { useEffect, useState } from "react";

const Slider2 = () => {
  const slides = [
    {
      images: img1,
      text: "Bhagavatam Class: Join us for an enlightening session on the Srimad Bhagavatam, where we explore the teachings and stories of Lord Krishna. Our knowledgeable speakers will share insights that inspire and guide us on our spiritual journey.",
    },
    {
      images: img2,
      text: " Annadaan: Experience the joy of giving as we participate in Annadaan, the distribution of food to all attendees. Sharing prasadam is a beautiful way to practice compassion and serve the community.",
    },
    {
      images: img3,
      text: "Kirtans: Immerse yourself in the joyful sounds of kirtan, where we sing the glories of Lord Krishna. This collective chanting is a powerful way to elevate your consciousness and experience divine joy.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    
    const interval = setInterval(nextSlide, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [nextSlide, slides.length]);

  return (
    <div
      className="slider-container bg-red-900 text-white lg:p-8 text-center flex flex-col items-center justify-center relative sm:hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="w-full mb-6 justify-center ">
          {
        
              <img
                src={slides[currentSlide].images}
                alt={`Slide ${currentSlide + 1}`}
                className="object-cover h-[231px] w-[450px]  "
                
              />
            }
        </div>
        <h2
        className="text-[#F3B01B] mb-3 text-4xl lg:text-6xl font-semibold  font-['Source Serif Pro'] mt-0, 'serif'] leading-8"
      >
        What To Expect
      </h2>

        <ul
            className="text-container flex items-center justify-center bg-opacity-75 rounded-lg list-disc pr-2"
            style={{
              marginTop: "20px",
              width: "100%",
              height: "100px",
              maxWidth: "2600px",
            }}
          >
            <li
              className="lg:text-center text-base text-start lg:text-2xl font-bold font-['Open Sans', sans-serif] text-[#ffdebd] marker:text-[#F3B01B]"
              
            >
              <span style={{ color: "#F3B01B" }}>
                {slides[currentSlide].text.split(":")[0]}
              </span>
              :{slides[currentSlide].text.split(":")[1]}
            </li>
          </ul>
      <button
        onClick={prevSlide}
        className=" absolute left-0 top-[50%]  "
      >
        <img src={left} alt="" />
      </button>

      <button
        onClick={nextSlide}
        className=" absolute right-[0%]  top-[50%]   "
      >
        <img src={right} alt="" />
      </button>

      <div className="flex justify-center my-4 ">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1  ${
              index === currentSlide ? "bg-yellow-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider2;
