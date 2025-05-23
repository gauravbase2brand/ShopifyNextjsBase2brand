"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import Heading from "./UIUX/Heading";
//1
import upperlimg1 from "../../../public/assets/slider-images/upper-left-img1.webp";
import upperrimg1 from "../../../public/assets/slider-images/upper-right-img1.webp";
import ratingimg from "../../../public/assets/slider-images/rating-slider.webp";
import titleimg1 from "../../../public/assets/slider-images/slidertitle1.webp";
//2
import upperlimg2 from "../../../public/assets/slider-images/upper-left-img2.webp";
import upperrimg2 from "../../../public/assets/slider-images/upper-right-img2.webp";
import titleimg2 from "../../../public/assets/slider-images/slidertitle2.webp";
//3
import upperlimg3 from "../../../public/assets/slider-images/upper-left-img3.webp";
import upperrimg3 from "../../../public/assets/slider-images/upper-right-img3.webp";
import titleimg3 from "../../../public/assets/slider-images/slidertitle3.webp";
//4
import upperlimg4 from "../../../public/assets/slider-images/upper-left-img4.webp";
import upperrimg4 from "../../../public/assets/slider-images/upper-right-img4.webp";
import titleimg4 from "../../../public/assets/slider-images/slidertitle4.webp";
//5
import upperlimg5 from "../../../public/assets/slider-images/upperleft-img5.png";
import upperrimg5 from "../../../public/assets/slider-images/upperright-img5.png";
import titleimg5 from "../../../public/assets/icons/rowthird4.svg";
import upperlimg6 from "../../../public/assets/slider-images/upperleft-img6.png";
import upperrimg6 from "../../../public/assets/slider-images/upperright-img6.png";
import titleimg6 from "../../../public/assets/icons/row14.svg";
//4
import upperlimg7 from "../../../public/assets/slider-images/upperleft-img7.png";
import upperrimg7 from "../../../public/assets/slider-images/upperright-img7.png";
import titleimg7 from "../../../public/assets/icons/rowthird1.svg";
//4
import upperlimg8 from "../../../public/assets/slider-images/upperleft-img8.png";
import upperrimg8 from "../../../public/assets/slider-images/upperright-img8.png";
import titleimg8 from "../../../public/assets/icons/brandlogo1.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const sliderdata = [
  {
    id: 1,
    leftimg: upperlimg1,
    rightimg: upperrimg1,
    titleimg1: titleimg1,
    rating_img: ratingimg,
    sliderdis:
      "We developed a high-performing Shopify store for Siena Home, optimizing design and functionality to enhance user experience, increase conversions, boost sales, and reduce cart abandonment for a seamless shopping journey.",
    crovalue: "+100%",
    aovvalue: "+130%",
    revvalue: "+230%"
  },
  {
    id: 2,
    leftimg: upperlimg2,
    rightimg: upperrimg2,
    titleimg1: titleimg2,
    rating_img: ratingimg,
    sliderdis:
      "We transformed Susana Monaco’s Shopify store with optimized design and seamless navigation, resulting in increased conversions, higher revenue, and a significant reduction in cart abandonment for better customer retention.",
    crovalue: "+45%",
    aovvalue: "+160%",
    revvalue: "+280%"
  },
  {
    id: 3,
    leftimg: upperlimg3,
    rightimg: upperrimg3,
    titleimg1: titleimg3,
    rating_img: ratingimg,
    sliderdis:
      "Our expert Shopify solutions helped Dog For Dog improve store performance, leading to higher sales, better customer engagement, and reduced cart abandonment, ensuring a smooth and rewarding shopping experience for pet lovers.",
    crovalue: "+200%",
    aovvalue: "+160%",
    revvalue: "+280%"
  },
  {
    id: 4,
    leftimg: upperlimg4,
    rightimg: upperrimg4,
    titleimg1: titleimg4,
    rating_img: ratingimg,
    sliderdis:
      "The Shopify improvements made a world of difference! Our store now runs flawlessly with a user-friendly design. Sales have increased, and cart abandonment is down. Customers are enjoying a hassle-free shopping experience !",
    crovalue: "+100%",
    aovvalue: "+130%",
    revvalue: "+230%"
  },
  {
    id: 5,
    leftimg: upperlimg5,
    rightimg: upperrimg5,
    titleimg1: titleimg5,
    rating_img: ratingimg,
    sliderdis:
      "We built a high-performing Shopify store for OzPro Building Supplies, optimizing design and functionality to improve user experience, drive conversions, and boost sales. Our solutions ensured a seamless purchasing process.",
    crovalue: "+90%",
    aovvalue: "+120%",
    revvalue: "+180%"
  },
  {
    id: 6,
    leftimg: upperlimg6,
    rightimg: upperrimg6,
    titleimg1: titleimg6,
    rating_img: ratingimg,
    sliderdis:
      "Our Shopify solutions boosted Dog is Human’s store performance, increasing sales, enhancing customer engagement, and reducing cart abandonment while improving conversions for a smoother shopping experience for pet owners.",
    crovalue: "+80%",
    aovvalue: "+110%",
    revvalue: "+150%"
  },
  {
    id: 7,
    leftimg: upperlimg7,
    rightimg: upperrimg7,
    titleimg1: titleimg7,
    rating_img: ratingimg,
    sliderdis:
      "We enhanced Plant Club’s Shopify store with a user-friendly design and seamless navigation, boosting conversions, improving customer retention, and reducing cart abandonment for a better shopping experience.",
    crovalue: "+70%",
    aovvalue: "+130%",
    revvalue: "+170%"
  },
  {
    id: 8,
    leftimg: upperlimg8,
    rightimg: upperrimg8,
    titleimg1: titleimg8,
    rating_img: ratingimg,
    sliderdis:
      "We optimized Cotton Print Club’s Shopify store with a user-friendly design and improved functionality, boosting customer engagement, increasing sales, and reducing cart abandonment for a seamless experience.",
    crovalue: "+60%",
    aovvalue: "+90%",
    revvalue: "+140%"
  },
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
        <div className="w-[90%] md:w-[100%]" data-aos="fade-up ">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            // pagination={{
            //   clickable: true
            // }}
            speed={1000}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={slideitem}
          >
            {sliderdata.map((item, index) =>
              <SwiperSlide key={index}>
                <div
                  className="p-[2%] md:p-0 rounded-[20px]"
                  data-aos-duration={`${index + 9}00`}
                >
                  <div
                    className="flex flex-col p-[25px] md:pb-[35px] border-2 border-[#779442] rounded-[20px]"
                    style={{
                      background:
                        "radial-gradient(circle, #000000fa 3%, #2b3617a3 100%)"
                    }}
                  >
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
                      <div className="flex py-[15px] gap-[10px] ">
                        <div className="w-[40%]">
                          <Image
                            src={item.titleimg1}
                            alt=""
                            width={1000}
                            height={500}
                            className=" object-contain h-[30px] w-fit"
                          />
                        </div>
                        <Image
                          src={item.rating_img}
                          alt=""
                          width={1000}
                          height={500}
                          className="w-[30%] object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-[14px] leading-[20px] font-light">
                          {item.sliderdis}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-[5px]">
                          <div className="flex justify-start">
                            <span className="bg-white p-[10px] px-2.5 py-1.5 text-xs text-black rounded-full ">
                              CRO
                            </span>
                          </div>
                          <p className="text-[23px] pb-0 font-medium m-0">
                            {item.crovalue}
                          </p>
                          <span className="text-[10px] md:text-[12px] text-[#fff]">
                            Conversion Rate
                          </span>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                          <div className="flex justify-start">
                            <span className="bg-white p-[10px] px-2.5 py-1.5 text-xs text-black rounded-full ">
                              AOV
                            </span>
                          </div>
                          <p className="text-[23px] pb-0 font-medium m-0">
                            {item.aovvalue}
                          </p>
                          <span className="text-[10px] md:text-[12px] text-[#fff]">
                            Avg. Order Value
                          </span>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                          <div className="flex justify-start">
                            <span className="bg-white p-[10px] px-2.5 py-1.5 text-xs text-black rounded-full ">
                              REV
                            </span>
                          </div>
                          <p className="text-[23px] pb-0 font-medium m-0">
                            {item.revvalue}
                          </p>
                          <span className="text-[10px] md:text-[12px] text-[#fff]">
                            Revenue
                          </span>
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
      <div className="md:flex hidden absolute bottom-[-7px] 2xl:bottom-[40px] left-0 w-full lg:h-[170px] h-[80px] bg-gradient-to-b from-black/0 via-[#000000] to-[#000000] z-[10]" />
    </div>
  );
}
