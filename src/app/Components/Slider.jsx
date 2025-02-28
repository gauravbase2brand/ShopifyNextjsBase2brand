"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";
import Heading from "./UIUX/Heading";
import upperlimg1 from "../../../public/assets/slider-images/upper-left-img1.webp";
import upperrimg1 from "../../../public/assets/slider-images/upper-right-img1.webp";
import ratingimg from "../../../public/assets/slider-images/rating-slider.webp";
import titleimg1 from "../../../public/assets/slider-images/slidertitle1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const sliderdata = [
  {
    id: 1,
    leftimg: upperlimg1,
    rightimg: upperrimg1,
    titleimg1: titleimg1,
    rating_img: ratingimg
  },
  {
    id: 12,
    leftimg: upperlimg1,
    rightimg: upperrimg1,
    titleimg1: titleimg1,
    rating_img: ratingimg
  },
  {
    id: 3,
    leftimg: upperlimg1,
    rightimg: upperrimg1,
    titleimg1: titleimg1,
    rating_img: ratingimg
  },
  {
    id: 4,
    leftimg: upperlimg1,
    rightimg: upperrimg1,
    titleimg1: titleimg1,
    rating_img: ratingimg
  },
  {
    id: 5,
    leftimg: upperlimg1,
    rightimg: upperrimg1,
    titleimg1: titleimg1,
    rating_img: ratingimg
  }
];
export default function Slider() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [slideitem, setSlideItem] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 660) {
        setSlideItem(1);
      } else if (window.innerWidth < 1025) {
        setSlideItem(2);
      } else if (window.innerWidth < 1400) {
        setSlideItem(2);
      } else {
        setSlideItem(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative">
      <div className="container">
        {/* Slider Header */}
        <div>
          <Heading
            Heading2={"Real Only Us"}
            Heading1={"World Class Brand"}
            Paragraph={
              "Our AI solutions are crafted to meet the unique challenges of   your industry, ensuring you stay ahead in a rapidly evolving digital landscape."
            }
          />
        </div>
        {/* Slider Body*/}
      </div>
      <div className="w-[100%] flex flex-col items-center md:w-[100%]  pb-[5%]">
        <div className="w-[90%] md:w-[100%]">
          <Swiper
            loop={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false
            // }}
            // pagination={{
            //   clickable: true
            // }}
            pagination={false}
            speed={1000}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={slideitem}
          >
            {sliderdata.map((item, index) =>
              <SwiperSlide key={index}>
                <div className="p-[5%] md:p-0"  data-aos="zoom-in">
                <div className="flex flex-col p-[25px] border-2 border-[#779442] rounded-[20px]">
                  <div className="w-[100%]">
                    <div className="flex justify-around p-[20px] pb-0 rounded-[15px] bg-[#5C772A]">
                      <Image
                        src={item.leftimg}
                        alt="Image"
                        width={1000}
                        height={1000}
                        className="w-[65%]"
                      />
                      <Image
                        src={item.rightimg}
                        alt="Image"
                        width={1000}
                        height={1000}
                        className="w-[25%]"
                      />
                    </div>
                  </div>
                  <div className="w-[100%]">
                    <div className="flex py-[15px] gap-[10px]">
                      <Image
                        src={item.titleimg1}
                        alt=""
                        width={1000}
                        height={500}
                        className="w-[40%] object-contain"
                      />
                      <Image
                        src={item.rating_img}
                        alt=""
                        width={1000}
                        height={500}
                        className="w-[30%] object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[21px] font-light">
                        We launched The Good Bug’s first Shopify store, driving
                        brand growth. The results were remarkable.
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <div className="flex justify-start">
                          <span className="bg-white p-[10px] px-2.5 py-1.5 text-xs text-black rounded-full ">
                            CRO
                          </span>
                        </div>
                        <h3 className="text-[23px] py-3.5 pb-0 font-medium">
                          +100%
                        </h3>
                        <span className="text-[12px] text-[#fff]">
                          Conversion Rate
                        </span>
                      </div>
                      <div>
                        <div className="flex justify-start">
                          <span className="bg-white p-[10px] px-2.5 py-1.5 text-xs text-black rounded-full ">
                            AOV
                          </span>
                        </div>
                        <h3 className="text-[23px] py-3.5 pb-0 font-medium">
                          +130%
                        </h3>
                        <span className="text-[12px] text-[#fff]">
                          Avg. Order Value
                        </span>
                      </div>
                      <div>
                        <div className="flex justify-start">
                          <span className="bg-white p-[10px] px-2.5 py-1.5 text-xs text-black rounded-full ">
                            REV
                          </span>
                        </div>
                        <h3 className="text-[23px] py-3.5 pb-0 font-medium">
                          +230%
                        </h3>
                        <span className="text-[12px] text-[#fff]">Revenue</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                {/* </div> */}
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
      <div className="md:flex hidden absolute bottom-[-7px] left-0 w-full lg:h-[170px] h-[80px] bg-gradient-to-b from-black/0 via-[#000000] to-[#000000] z-[10]" />
    </div>
  );
}
