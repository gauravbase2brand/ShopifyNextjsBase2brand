"use client"; // Ensure it's client-side rendering

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
// Import Swiper styles

const HorizontalTicker = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    new Swiper(swiperRef.current, {
      loop: true, // Enable looping for continuous scroll
      slidesPerView: "auto", // Allows responsive width of slides
      spaceBetween: 20, // Space between slides
      autoplay: {
        delay: 0, // No delay for continuous autoplay
        disableOnInteraction: false, // Continue autoplay on interaction
      },
      speed: 8000, // Scroll speed
      allowTouchMove: false, // Disable touch interactions
    });
  }, []);

  return (
    <section className="base-template">
      <div className="wrapper base-template__wrapper max-w-screen-xl mx-auto px-4 pb-12">
        <h1 className="base-template__title text-4xl font-semibold text-center mb-4">
          A World of Trusted Brands
        </h1>
        <div className="base-template__text text-center mb-8">
          A seamless continuous ticker of trusted brand logos, showcasing <br /> the power of partnership with smooth scrolling and hover effects
        </div>

        <div className="base-template__content">
          <div
            ref={swiperRef}  // Reference Swiper here
            className="swiper horizontal-ticker__slider"
          >
            <div className="swiper-wrapper">
              {/* Slide 1 */}
              <div className="swiper-slide inline-block mx-8">
                <img
                  src="https://bato-web-agency.github.io/bato-shared/img/ticker-1/image-1-0.svg"
                  alt="Tochiba"
                  className="w-[150px] md:w-[200px] object-cover"
                />
              </div>
              <div className="swiper-slide inline-block mx-8">
                <img
                  src="https://bato-web-agency.github.io/bato-shared/img/ticker-1/image-1-0.svg"
                  alt="Tochiba"
                  className="w-[150px] md:w-[200px] object-cover"
                />
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide inline-block mx-8">
                <img
                  src="https://bato-web-agency.github.io/bato-shared/img/ticker-1/image-2-0.svg"
                  alt="Fujitsu"
                  className="w-[150px] md:w-[200px] object-cover"
                />
              </div>
              <div className="swiper-slide inline-block mx-8">
                <img
                  src="https://bato-web-agency.github.io/bato-shared/img/ticker-1/image-2-0.svg"
                  alt="Fujitsu"
                  className="w-[150px] md:w-[200px] object-cover"
                />
              </div>

              {/* Add more slides as necessary */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalTicker;
