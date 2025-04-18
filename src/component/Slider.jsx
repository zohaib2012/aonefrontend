// import React from 'react';
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="w-full py-12 bg-gray-black border-red-600 ">
      <div className=" px-4 w-full">
        {/* <h2 className="text-3xl font-bold text-center mb-8">
          Explore Trading Opportunities
        </h2> */}
        <div className="relative">
          <Carousel
            // Essential props for rendering
            swipeable={true}
            draggable={true}
            // showDots={true}
            responsive={responsive}
            // Rendering and performance
            ssr={false} // Change to false for client-side rendering
            // Navigation and interaction
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            // Transition and styling
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            // Custom classes for styling
            containerClass="w-full"
            itemClass="px-2"
            // Arrow and dot configuration
            arrows={true}
            dotListClass="custom-dot-list-style"
            renderDotsOutside={true}
          >
            <div className="flex items-center justify-center space-x-1 w-64 rounded-3xl bg-gray-900 h-12">
              <div className=" mx-2 w-6 h-6 rounded-full bg-red-700 flex items-center justify-center">
                <ArrowBigDown />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm text-center">
                  Gold
                </span>
                <span className="text-white text-xs">1.268758/1.268858</span>
              </div>
              <button
                className="
      bg-blue-700 mx-2 text-white 
      px-3 py-1  h-7 rounded-xl
      text-xs font-semibold
      hover:bg-blue-500 
      transition-colors 
      duration-300
    "
              >
                Trade
              </button>
            </div>

            {/* WTI Instrument */}
            <div className="flex items-center justify-center space-x-1 w-64 rounded-3xl bg-gray-900 h-12">
              <div className=" mx-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <ArrowBigUp />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm text-center">
                  Gold
                </span>
                <span className="text-white text-xs">1.268758/1.268858</span>
              </div>
              <button
                className="
      bg-blue-700 mx-2 text-white 
      px-3 py-1  h-7 rounded-xl
      text-xs font-semibold
      hover:bg-blue-500 
      transition-colors 
      duration-300
    "
              >
                Trade
              </button>
            </div>

            {/* ETHUSD Instrument */}
            <div className="flex items-center justify-center space-x-1 w-64 rounded-3xl bg-gray-900 h-12">
              <div className=" mx-2 w-6 h-6 rounded-full bg-red-700 flex items-center justify-center">
                <ArrowBigDown />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm text-center">
                  Gold
                </span>
                <span className="text-white text-xs">1.268758/1.268858</span>
              </div>
              <button
                className="
      bg-blue-700 mx-2 text-white 
      px-3 py-1  h-7 rounded-xl
      text-xs font-semibold
      hover:bg-blue-500 
      transition-colors 
      duration-300
    "
              >
                Trade
              </button>
            </div>
            {/* ETHUSD Instrument */}
            <div className="flex items-center justify-center space-x-1 w-64 rounded-3xl bg-gray-900 h-12">
              <div className=" mx-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <ArrowBigUp />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm text-center">
                  Gold
                </span>
                <span className="text-white text-xs">1.268758/1.268858</span>
              </div>
              <button
                className="
      bg-blue-700 mx-2 text-white 
      px-3 py-1  h-7 rounded-xl
      text-xs font-semibold
      hover:bg-blue-500 
      transition-colors 
      duration-300
    "
              >
                Trade
              </button>
            </div>
            {/* ETHUSD Instrument */}
            <div className="flex items-center justify-center space-x-1 w-64 rounded-3xl bg-gray-900 h-12">
              <div className=" mx-2 w-6 h-6 rounded-full bg-red-700 flex items-center justify-center">
                <ArrowBigDown />
              </div>
              <div className="flex flex-col">
                <span className="text-white  font-bold text-sm text-center">
                  Gold
                </span>
                <span className="text-white text-xs">1.268758/1.268858</span>
              </div>
              <button
                className="
      bg-blue-700 mx-2 text-white 
      px-3 py-1  h-7 rounded-xl
      text-xs font-semibold
      hover:bg-blue-500 
      transition-colors 
      duration-300
    "
              >
                Trade
              </button>
            </div>

            <div className="flex items-center justify-center space-x-1 w-64 rounded-3xl bg-gray-900 h-12">
              <div className=" mx-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <ArrowBigUp />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm text-center">
                  Gold
                </span>
                <span className="text-white text-xs">1.268758/1.268858</span>
              </div>
              <button
                className="
      bg-blue-700 mx-2 text-white 
      px-3 py-1  h-7 rounded-xl
      text-xs font-semibold
      hover:bg-blue-500 
      transition-colors 
      duration-300
    "
              >
                Trade
              </button>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
