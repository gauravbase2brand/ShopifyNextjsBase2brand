"use client";
import React from "react";
import Image from "next/image";
import sliderbanner1 from "../../../public/assets/bsliderimg1.png"; // Image import
import sliderbanner2 from "../../../public/assets/bsliderimg2.png"; // Image import
import sliderbanner3 from "../../../public/assets/bsliderimg3.png"; // Image import
import sliderbanner4 from "../../../public/assets/bsliderimg4.png"; // Image import
import sliderbanner5 from "../../../public/assets/bsliderimg5.png"; // Image import
import sliderbanner6 from "../../../public/assets/bsliderimg6.png"; // Image import
import sliderbanner7 from "../../../public/assets/bsliderimg7.png"; // Image import

// List of images for the slider (Use multiple images for variation)
const images = [
  { src: sliderbanner1, alt: "Slider Image 1" },
  { src: sliderbanner2, alt: "Slider Image 2" },
  { src: sliderbanner3, alt: "Slider Image 3" },
  { src: sliderbanner4, alt: "Slider Image 4" },
  { src: sliderbanner5, alt: "Slider Image 5" },
  { src: sliderbanner6, alt: "Slider Image 6" },
  { src: sliderbanner7, alt: "Slider Image 7" }
];

export default function BannerSlider() {
  return (
    <div
    //   className="relative w-full overflow-hidden  bg-bottom bg-[url('/assets/icons/radialbanner.svg')] bg-cover  bg-no-repeat"
    >
      <div
        className="relative w-full   overflow-hidden"
        style={{
          // background:" linear-gradient(90deg, rgba(0,0,0,1) 21%, rgba(150,191,71,0.8974397376137955) 52%, rgba(0,0,0,1) 81%)"
          // background: "radial-gradient(circle, #59890063, #000000)", // Correct radial gradient syntax
        //   background:" rgb(0,0,0)",
        //   background:"linear-gradient(176deg, rgba(0,0,0,0.407243659182423) 0%, rgba(34,48,8,1) 100%)"
          // background: "linear-gradient(176deg, rgba(0, 0, 0, 0.9) 0%, rgba(34, 48, 8, 1) 100%)"
          background:"transparent"
        }}
      >
        <div className="marquee">
          <div className="marquee-content">
            {/* Duplication ensures seamless loop */}
            {[...images, ...images, ...images].map((item, index) =>
              <div key={index} className="marquee-item">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1000}
                  height={1000}
                  className="rounded-lg shadow-lg transition-transform duration-300 cursor-pointer md:h-[500px] h-auto object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CSS for Infinite Marquee */}
      <style>
        {`
          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); } /* Moves only by one full set */
          }

          .marquee {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            position: relative;
            height:500px;
            align-items:center;
          }

          .marquee-content {
            display: flex;
            width: max-content;
            animation: marqueeScroll 15s linear infinite;
          }

.marquee-item {
    min-width: 259px;
    margin-right: 10px;
    transition: transform 0.3s ease-in-out;
    margin-top: -27px;
    margin-bottom: -27px;
}

        
        `}
      </style>
    </div>
  );
}
