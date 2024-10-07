import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          className="flex transition-transform duration-700 ease-in-out"
        >
          {data.map((src, index) => (
            <div key={index} className="min-w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={src}
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gray-800 text-white flex items-center justify-center rounded-full hover:bg-gray-700 transition"
          >
            <HiArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gray-800 text-white flex items-center justify-center rounded-full hover:bg-gray-700 transition"
          >
            <HiArrowRight size={24} />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {data.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
