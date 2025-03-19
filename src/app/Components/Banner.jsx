import React from "react";
import Image from "next/image";
import Homebannerline from "../../../public/assets/icons/Homebannerline.svg";
import homefirsrtbanner from "../../../public/assets/homerightimg.png";
import homesecondbanner from "../../../public/assets/bannerleftimg.png";
import Button from "./UIUX/Button";

const Banner = () => {
  return (
    <div className="relative w-full h-[100vh] md:h-[100vh] flex flex-col justify-center items-center text-white text-center overflow-hidden">
      <div className="relative pt-[90px] w-full h-auto md:h-[95vh]">
        {/* Left Floating Image - FIXED POSITIONING */}
        <div className="absolute top-[-9%] left-[-20%] md:left-[-10%] md:top-[38%] transform -translate-y-1/2">
          <Image
            className="w-[53%] md:w-[55%] h-auto object-scale-down animate-fly"
            src={homefirsrtbanner}
            alt="homefirsrtbanner"
            width={1000}
            height={500}
          />
        </div>

        {/* Right Floating Image - FIXED POSITIONING */}
        <div className="absolute top-[120%] flex justify-end right-[-20%] md:right-[-10%] md:top-[65%] transform -translate-y-1/2">
          <Image
            className="w-[53%] md:w-[55%] h-auto object-scale-down animate-fly"
            src={homesecondbanner}
            alt="homesecondbanner"
            width={1000}
            height={500}
          />
        </div>

        {/* Main Content */}
        <div className="relative gap-[30px] md:gap-[5%] z-10 h-[100%] flex flex-col items-center justify-center">
          <h1 className="md:text-[80px] xl:text-[110px] text-[80px]   font-bold leading-tight ">
            We are <br />
            <span className="relative inline-block pt-[20px] px-4 py-2 bg-primary p-[0_5%] text-black text-[70px] xl:text-[140px] md:text-[120px] leading-[80px] md:leading-[110px] -rotate-3">
              SHOPIFY
            </span>
            <br />
            Experts!
          </h1>
          <div className="pt-4">
            <Button GButton={"Business With Us"} Glink={"https://wa.me/90417-00209"} />
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
