import React from "react";
import Image from "next/image";
import Homebannerline from "../../../public/assets/icons/Homebannerline.svg";
import homefirsrtbanner from "../../../public/assets/homebanner2.png";
import homesecondbanner from "../../../public/assets/homebanner1.png";
import Button from "./UIUX/Button";

const Banner = () => {
  return (
    <div className="relative w-full h-[100vh] md:h-[100vh] flex flex-col justify-center items-center text-white text-center overflow-hidden">
      <div className="relative pt-[90px] w-full h-auto md:h-[95vh]">
        {/* Left Floating Image - FIXED POSITIONING */}
        <div className="absolute top-0 left-[-10px] md:left-[-50px] md:top-[30%] transform -translate-y-1/2">
          <Image
            className="w-[200px] md:w-[300px] h-auto object-scale-down animate-fly"
            src={homefirsrtbanner}
            alt="homefirsrtbanner"
            width={1000}
            height={500}
          />
        </div>

        {/* Right Floating Image - FIXED POSITIONING */}
        <div className="absolute top-[120%] right-[-10px] md:right-[-50px] md:top-[75%] transform -translate-y-1/2">
          <Image
            className="w-[200px] md:w-[300px] h-auto object-scale-down animate-fly"
            src={homesecondbanner}
            alt="homesecondbanner"
            width={1000}
            height={500}
          />
        </div>

        {/* Main Content */}
        <div className="relative pb-[6%] z-10 h-[100%] flex flex-col items-center justify-center">
          <h1 className="md:text-[100px] xl:text-[130px] text-[80px]   font-bold leading-tight ">
            We are <br />
            <span className="relative inline-block px-4 py-2 bg-primary text-black text-[70px] xl:text-[170px] md:text-[150px] leading-[80px] md:leading-[150px] -rotate-2">
              SHOPIFY
            </span>
            <br />
            Experts!
          </h1>
          <div className="pt-4">
            <Button GButton={"Business With Us"} Glink={""} />
          </div>
        </div>

        {/* Floating Animated Line */}
        <Image
          className="absolute z-[100] top-[250px] md:top-[300px] animate-fly"
          src={Homebannerline}
          alt="Homebannerline"
        />
      </div>
      {/* <BannerSlider/> */}
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
