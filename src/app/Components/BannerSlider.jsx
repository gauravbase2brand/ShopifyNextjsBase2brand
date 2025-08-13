"use client";
import React, { useState } from "react";
import Image from "next/image";
import sliderbanner1 from "../../../public/assets/bsliderimg1.png"; 
import sliderbanner2 from "../../../public/assets/bsliderimg2.png"; 
import sliderbanner3 from "../../../public/assets/bsliderimg3.png"; 
import sliderbanner4 from "../../../public/assets/bsliderimg4.png"; 
import sliderbanner5 from "../../../public/assets/bsliderimg5.png"; 
import sliderbanner6 from "../../../public/assets/bsliderimg6.png"; 
import sliderbanner7 from "../../../public/assets/bsliderimg7.png"; 


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
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div>
      <div
        className="relative w-full overflow-hidden"
        style={{
          background: "transparent"
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="marquee">
          <div className={`marquee-content ${isPaused ? 'paused' : ''}`}>
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

      <style>
        {`
          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }

          .marquee {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            position: relative;
            height: 500px;
            align-items: center;
          }

          .marquee-content {
            display: flex;
            width: max-content;
            animation: marqueeScroll 15s linear infinite;
          }

          .marquee-content.paused {
            animation-play-state: paused;
          }

          .marquee-item {
            min-width: 235px;
            margin-right: 10px;
            transition: transform 0.3s ease-in-out;
            margin-top: -27px;
            margin-bottom: -27px;
          }
            @media screen and (max-width:500px)
            {
              .marquee-item
              {
              min-width:180px;
              }
            }
        `}
      </style>
    </div>
  );
}
