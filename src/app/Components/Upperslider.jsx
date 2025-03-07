"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import imageio from "../../../public/assets/upperslider1.png";
import imageio2 from "../../../public/assets/upperslider2.jpg";
import Image from "next/image";
import shexp from "../../../public/assets/shopifyexperts.png";
import shepartners from "../../../public/assets/shopifypartners.png";
import sheplus from "../../../public/assets/shopifyplus.png";
import lineimg1 from "../../../public/assets/talkimg2.png";
import lineimg2 from "../../../public/assets/talkimg1.png";
export default function Upperslider() {
  const [slideitem, setSlideItem] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 660) {
        setSlideItem(1);
      } else if (window.innerWidth < 1025) {
        setSlideItem(2);
      } else if (window.innerWidth < 1400) {
        setSlideItem(2);
      } else {
        setSlideItem(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className="flex items-center pt-[4%] pb-[1%]">
        <div className="md:w-[15%] hidden md:block">
          <Image
            src={lineimg1}
            alt=""
            width={1000}
            height={500}
            className="w-[100%]"
          />
        </div>
        <div className="md:w-[70%] w-[100%] flex flex-wrap justify-center gap-[20px] mg:gap-[0] md:justify-between">
          <Image
            src={sheplus}
            alt=""
            width={1000}
            height={500}
            className="w-[46%] md:w-[30%]"
          />
          <Image
            src={shepartners}
            alt=""
            width={1000}
            height={500}
            className="w-[46%] md:w-[30%]"
          />
          <Image
            src={shexp}
            alt=""
            width={1000}
            height={500}
            className="w-[46%] md:w-[30%]"
          />
        </div>
        <div className="w-[15%] hidden md:block">
          <Image
            src={lineimg2}
            alt=""
            width={1000}
            height={500}
            className="w-[100%]"
          />
        </div>
      </div>
      <div className="pt-[5%] pb-[5%]">
        <Swiper
          loop={true}
        //   autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false
        //   }}
          // pagination={{
          //   clickable: true
          // }}
          speed={1000}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={slideitem}
          className="upper_slider"
        >
          <SwiperSlide>
            <div className="upper_slider_con">
              <Image src={imageio} alt=" " width={1000} height={500} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="upper_slider_con">
              <Image src={imageio2} alt=" " width={1000} height={500} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="upper_slider_con">
              <Image src={imageio} alt=" " width={1000} height={500} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="upper_slider_con">
              <Image src={imageio} alt=" " width={1000} height={500} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
