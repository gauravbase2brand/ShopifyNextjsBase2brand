import React from "react";
import Image from "next/image";
import Homebannerline from "../../../public/assets/icons/Homebannerline.svg";
import homefirsrtbanner from "../../../public/assets/homefirsrtbanner.webp";
import homesecondbanner from "../../../public/assets/homesecondbanner.webp";

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh] bg-[url('/assets/bannersvg.svg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white text-center overflow-hidden">
      
      {/* Left Floating Image - FIXED POSITIONING */}
      <div className="absolute left-[-100px] md:left-[-50px] top-1/2 transform -translate-y-1/2">
        <Image
          className="w-[200px] md:w-[300px] h-auto object-scale-down animate-fly"
          src={homefirsrtbanner}
          alt="homefirsrtbanner"
        />
      </div>

      {/* Right Floating Image - FIXED POSITIONING */}
      <div className="absolute right-[-100px] md:right-[-50px] top-1/2 transform -translate-y-1/2">
        <Image
          className="w-[200px] md:w-[300px] h-auto object-scale-down animate-fly"
          src={homesecondbanner}
          alt="homesecondbanner"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <h1 className="md:text-[100px] xl:text-[130px] text-[80px]   font-bold leading-tight ">
          We are <br />
          <span className="relative inline-block px-4 py-2 bg-primary text-black text-[80px] xl:text-[170px] md:text-[150px] leading-[90px] md:leading-[150px] -rotate-2">
            SHOPIFY
          </span>
          <br />
          Experts!
        </h1>
      </div>

      {/* Floating Animated Line */}
      <Image
        className="absolute top-[250px] md:top-[300px] animate-fly"
        src={Homebannerline}
        alt="Homebannerline"
      />

      {/* Floating Animation Keyframes */}
      {/* <style>
        {`
          @keyframes fly {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-10px) translateX(5px); }
            100% { transform: translateY(0) translateX(0); }
          }
          .animate-fly {
            animation: fly 3s infinite ease-in-out;
          }
        `}
      </style> */}
    </div>
  );
};

export default Banner;
