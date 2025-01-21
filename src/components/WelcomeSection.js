import React from "react";
import image6 from "./images/image6.jpg";
import image10 from "./images/image10.jpg";

const WelcomeSection = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-auto font-sans md:flex-row md:h-160 bg-slate-100">
      {/* Left Section */}
      <div className="flex items-center justify-center w-full h-full p-6 md:w-1/2">
        <div className="flex flex-col items-start max-w-lg gap-6">
          <h3 className="text-4xl font-extrabold text-custom-blue-dark">
            Welcome to NDA Plastech
          </h3>
          <h1 className="text-2xl font-medium text-custom-blue-light">
            Innovative products. Global needs.
          </h1>
          <p className="leading-relaxed text-gray-700">
            Established in 1994 by Mr. D. B. Asabe, NDA Plastech has soon become
            the name of trust for our well-reputed and dignified customers.
          </p>
          <button className="w-32 h-12 text-lg font-bold text-white transition-transform duration-300 transform rounded-lg shadow-md bg-custom-orange hover:bg-orange-700 hover:scale-105">
            Read More
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center w-full gap-6 p-6 md:w-1/2">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-custom-blue-dark">
            Tech Advantage FRP
          </h1>
          <p className="leading-relaxed text-gray-700">
            FRP offers advantages of superior quality. Engineers consistently
            work to improve technology for different applications.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row">
          {/* FRP Door */}
          <div className="flex flex-col items-center w-full p-4 bg-white rounded-lg shadow-lg md:items-start md:w-1/2">
            <img
              src={image10}
              alt="FRP Door"
              className="object-cover w-full h-48 rounded-lg"
            />
            <div className="mt-4 text-center md:text-left">
              <h2 className="text-2xl font-bold text-custom-blue-dark">
                FRP Door
              </h2>
              <p className="text-gray-700">
                Elegant and long-lasting FRP doors with superior strength.
              </p>
              <button className="w-32 h-10 mt-2 text-white transition-transform duration-300 transform rounded-lg shadow-md bg-custom-orange hover:bg-orange-700 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* FRP Boat & Jetty */}
          <div className="flex flex-col items-center w-full p-4 bg-white rounded-lg shadow-lg md:items-start md:w-1/2">
            <img
              src={image6}
              alt="FRP Boat & Jetty"
              className="object-cover w-full h-48 rounded-lg"
            />
            <div className="mt-4 text-center md:text-left">
              <h2 className="text-2xl font-bold text-custom-blue-dark">
                FRP Boat & Jetty
              </h2>
              <p className="text-gray-700">
                High-performance boats and jetties designed for durability and
                safety.
              </p>
              <button className="w-32 h-10 mt-2 text-white transition-transform duration-300 transform rounded-lg shadow-md bg-custom-orange hover:bg-orange-700 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
