"use client";
import React from "react";
import Image from "next/image";
import sliderbanner from "../../../public/assets/sliderbanner.webp"; // Image import


// List of images for the slider (Use multiple images for variation)
const images = [
    { src: sliderbanner, alt: "Slider Image 1" },
    { src: sliderbanner, alt: "Slider Image 2" },
    { src: sliderbanner, alt: "Slider Image 3" },
    { src: sliderbanner, alt: "Slider Image 4" },
    { src: sliderbanner, alt: "Slider Image 5" },
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
                    background: "rgb(153,212,39)",
background: "radial-gradient(circle, rgba(153,212,39,0.8498206899947479) 0%, rgba(0,0,0,0.8890363762692577) 100%)"
                }}
            >



                <div className="marquee">
                    <div className="marquee-content">
                        {/* Duplication ensures seamless loop */}
                        {[...images, ...images, ...images].map((item, index) => (
                            <div key={index} className="marquee-item">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={1000}
                                    height={1000}
                                    className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 md:h-[500px] h-[380px] object-cover"
                                    priority
                                />
                            </div>
                        ))}
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
          }

          .marquee-content {
            display: flex;
            width: max-content;
            animation: marqueeScroll 15s linear infinite;
          }

.marquee-item {
    min-width: 259px;
    margin-right: 34px;
    transition: transform 0.3s ease-in-out;
    transform: rotate(-11deg);
    margin-top: -27px;
    margin-bottom: -27px;
}

        
        `}
            </style>
        </div>
    );
}
