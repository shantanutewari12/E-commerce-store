import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=1060&t=st=1686623492~exp=1686624092~hmac=d78cc34d323a682c417e030f2f8a7ab9ab4952be0afa437febc6d287484ef0dd",
    "https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg?w=1060&t=st=1686623597~exp=1686624197~hmac=e6e565ec8ee2ed8b99a5e8c072390994a3cd5c08b2d8b8d5872287eaa236087c",
    "https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=1060&t=st=1686623692~exp=1686624292~hmac=87e0121ae1a094b1a12d1de9eeba45247047b13797beaf53ca0e2ce322eaa010",
    "https://img.freepik.com/free-psd/shopping-concept-banner-template_23-2148729463.jpg?w=1060&t=st=1686623754~exp=1686624354~hmac=1b2f6db2fcea499a765b39adc2665a6db14e44d1bd179f0aa39058266f6ba170",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-full h-full object-cover"
            src={data[0]}
            alt="imgOne"
          />
          <img
            className="w-full h-full object-cover"
            src={data[1]}
            alt="imgTwo"
          />
          <img
            className="w-full h-full object-cover"
            src={data[2]}
            alt="imgThree"
            loading="priority"
          />
          <img
            className="w-full h-full object-cover"
            src={data[3]}
            alt="imgFour"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
