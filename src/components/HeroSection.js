import React from "react";
import VideO from "./images/Sequence.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 object-cover w-full h-full opacity-40"
        src={VideO}
        autoPlay
        loop
        muted
      />

      {/* Content Overlay */}
      <div className="relative flex flex-col items-start justify-center w-full h-full px-4 bg-black bg-opacity-0 sm:px-8 md:px-16 lg:w-2/5">
        <div className="w-full h-auto text-white">
          <h1 className="text-xl font-bold text-left sm:text-2xl md:text-3xl lg:text-4xl">
            Transforming Ideas into Innovative Solutions
          </h1>
          <p className="mt-2 text-sm text-left sm:text-base md:text-lg">
            Empowering industries with cutting-edge plastic technologies that
            drive sustainability and efficiency. Discover our range of
            customized solutions tailored to meet your needs.
          </p>
          <div className="flex flex-col items-center justify-start mt-4 space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4">
            <button className="h-10 text-sm font-bold rounded-lg w-28 sm:text-base sm:w-32 sm:h-12 md:text-lg md:w-36 md:h-14 bg-custom-orange">
              <span className="text-white">Explore More</span>
            </button>
            <button className="h-10 text-sm font-bold rounded-lg w-28 sm:text-base sm:w-32 sm:h-12 md:text-lg md:w-36 md:h-14 bg-custom-orange">
              <span className="text-white">Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
