"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css";
import clinetimg1 from "../../../public/assets/clientreviews.png";
import clientcom1 from "../../../public/assets/clinetcom1.png";
import cotes from "../../../public/assets/reviewscotes.png";
import rating from "../../../public/assets/slider-images/rating-slider.webp";
import CountUp, { useCountUp } from "react-countup";
import line1 from "../../../public/assets/expline1.png";
import line2 from "../../../public/assets/expline2.png";
const reviewsdata = [
  {
    id: 1,
    clientimg: clinetimg1,
    clientcompany: clientcom1,
    clientname: "– Jessica M.",
    clientcom:
      "Working with this team has been an incredible experience! From the moment we started, they took the time to understand our needs and goals, and the results speak for themselves. The creativity, attention to detail, and commitment to delivering high-quality work exceeded our expectations. I highly recommend them to anyone looking for top-tier service and results!"
  },
  {
    id: 2,
    clientimg: clinetimg1,
    clientcompany: clientcom1,
    clientname: "– Jessica M.",
    clientcom:
      "Working with this team has been an incredible experience! From the moment we started, they took the time to understand our needs and goals, and the results speak for themselves. The creativity, attention to detail, and commitment to delivering high-quality work exceeded our expectations. I highly recommend them to anyone looking for top-tier service and results!"
  },
  {
    id: 3,
    clientimg: clinetimg1,
    clientcompany: clientcom1,
    clientname: "– Jessica M.",
    clientcom:
      "Working with this team has been an incredible experience! From the moment we started, they took the time to understand our needs and goals, and the results speak for themselves. The creativity, attention to detail, and commitment to delivering high-quality work exceeded our expectations. I highly recommend them to anyone looking for top-tier service and results!"
  },
  {
    id: 4,
    clientimg: clinetimg1,
    clientcompany: clientcom1,
    clientname: "– Jessica M.",
    clientcom:
      "Working with this team has been an incredible experience! From the moment we started, they took the time to understand our needs and goals, and the results speak for themselves. The creativity, attention to detail, and commitment to delivering high-quality work exceeded our expectations. I highly recommend them to anyone looking for top-tier service and results!"
  },
  {
    id: 5,
    clientimg: clinetimg1,
    clientcompany: clientcom1,
    clientname: "– Jessica M.",
    clientcom:
      "Working with this team has been an incredible experience! From the moment we started, they took the time to understand our needs and goals, and the results speak for themselves. The creativity, attention to detail, and commitment to delivering high-quality work exceeded our expectations. I highly recommend them to anyone looking for top-tier service and results!"
  }
];
export default function Reviews() {
  const [slideitem, setSlideItem] = useState(1);
  // useCountUp({
  //   ref: "counter",
  //   enableScrollSpy: true,
  //   scrollSpyDelay: 2000,
  //   end: 0
  // });
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="m-[0]">
          <div className="pb-[5%]">
            <Swiper
              loop={true}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false
              // }}
              pagination={{
                clickable: true,
                type:"bullets"
              }}
              speed={1000}
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={slideitem}
              spaceBetween={30}
              centeredSlides={true}
              navigation={true}
            >
              {reviewsdata.map((data, index) =>
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-center md:flex-row">
                    <div className="w-[100%] md:w-[40%] flex justify-center">
                      <Image
                        src={data.clientimg}
                        alt="img"
                        width={1000}
                        height={500}
                        className="w-[85%] md:w-[70%]"
                      />
                    </div>
                    <div className="w-[100%] md:w-[60%] p-[10%_0] md:p-0">
                      <div className="flex flex-col gap-[20px]">
                        <div className="flex justify-end md:justify-start">
                          <Image
                            src={cotes}
                            width={1000}
                            height={500}
                            alt=""
                            className="w-[22%] md:w-[15%] rotate-180"
                          />
                        </div>
                        <div>
                          <Image
                            src={data.clientcompany}
                            width={1000}
                            alt=""
                            height={500}
                            className=" w-[40%] md:w-[20%]"
                          />
                        </div>
                      </div>
                      <div className="md:pe-[10%]">
                        <p className="text-[14px] p-[20px_0_0] md:w-[80%]">
                          {data.clientcom}
                        </p>
                      </div>
                      <div>
                        <div>
                          <h3 className="font-[900] text-[26px] md:text-auto">
                            {data.clientname}
                          </h3>
                        </div>
                        <div>
                          <Image
                            src={rating}
                            alt=""
                            width={1000}
                            height={500}
                            className="w-[30%] md:w-[12%]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </div>
      {/* Shopify service */}
      <div className="overflow-hidden">
        {/*  Shopify service Heading*/}
        <div className=" container text-center flex flex-col items-center">
          <div className="flex md:flex-row flex-col gap-0 md:gap-3">
            <h2 className="md:leading-[60px]">Boost Your Brand </h2>
            <h2 className="text-[#989898] md:leading-[60px] ">With Expert</h2>
          </div>
          <h2 className="text-[#989898] md:leading-[60px]">Shopify Services</h2>
          <p className="text-center pt-3 pb-3 text-secondary w-full sm:w-1/2 lg:w-[70%] md:w-9/12 mx-auto">
            Ready to create or elevate your Shopify store? Our experienced team
            specializes in custom themes, performance optimization, and
            enhancing user experience to help your business thrive.
          </p>
        </div>
        {/* Services Exp. etc */}
        <div className="flex justify-center flex-col items-center pb-[5%]">
          <div className="flex min-h-[110px] w-[90%] md:w-auto border-[#17360f] border-t-[1px] border-b-[1px] relative">
            <div className="flex flex-col md:p-0 p-[0_10px] w-[33%] md:min-w-[200px] md:ps-[20px]">
              <div className="text-[#96BF47] md:text-[40px] text-[26px] leading-[35px] font-black md:leading-[50px]">
                <CountUp end={20} enableScrollSpy />+
              </div>
              <span className="text-[12px] text-[#b6b2b2]">Shopify Developer</span>
            </div>
            <div className="flex flex-col md:p-0 p-[0_10px] w-[33%] md:min-w-[200px] pb-[10px] md:pb-2 justify-end md:ps-[20px] border-r-[1px] border-l-[1px] border-[#17360f]">
              <div className="text-[#96BF47] md:text-[40px] text-[26px] leading-[35px] font-black md:leading-[50px]">
                <CountUp end={7} enableScrollSpy />+
              </div>
              <span className="text-[12px] text-[#b6b2b2]">Years Experience</span>
            </div>
            <div className="flex flex-col md:p-0 p-[0_10px] w-[33%] md:min-w-[200px]  md:ps-[20px]">
              <div className="text-[#96BF47] md:text-[40px] text-[26px] leading-[35px] font-black md:leading-[50px]">
                <CountUp end={250} enableScrollSpy />+
              </div>
              <span className="text-[12px] text-[#b6b2b2]">Projects Completed</span>
            </div>
            <Image src={line2} alt="hy" width={1000} height={500} className="absolute w-[90px] right-[-8%] md:right-[-11%] top-[-14%]"/>
          </div>
          <div className="flex min-h-[110px] w-[70%] md:w-auto border-[#17360f] border-b-[1px] relative">
            <div className="flex flex-col md:p-0 p-[0_10px] w-[50%] justify-end md:pb-2 md:min-w-[200px] md:ms-[60px] md:ps-[20px] border-[#17360f] md:border-s-[1px] border-e-[1px]">
              <div className="text-[#96BF47] md:text-[40px] text-[26px] leading-[35px] font-black md:leading-[50px]">
                <CountUp end={100} enableScrollSpy />+
              </div>
              <span className="text-[12px] text-[#b6b2b2]">Satisfied Clients</span>
            </div>
            <div className="flex flex-col md:p-0 p-[0_10px] w-[50%] justify-end md:pb-2 md:min-w-[200px] md:me-[60px] md:pe-[20px] items-end  border-[#17360f] md:border-e-[1px] ">
              <div className="text-[#96BF47] md:text-[40px] text-[26px] leading-[35px] font-black md:leading-[50px]">
                <CountUp end={150} enableScrollSpy />+
              </div>
              <span className="text-[12px] text-[#b6b2b2] text-end">Shopify Development</span>
            </div>
            <Image src={line1} alt="hy" width={1000} height={500} className="absolute w-[90px] left-[-25%] md:left-[-25%] bottom-[3%]"/>
          </div>
        </div>
      </div>
    </div>
  );
}
