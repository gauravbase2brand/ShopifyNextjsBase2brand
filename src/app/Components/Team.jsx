"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css";
import manpreetsir from "../../../public/assets/manpreetsir.png";
import arshsir from "../../../public/assets/arshsir.png";
import deepaksir from "../../../public/assets/deepaksir.png";
import rahulsir from "../../../public/assets/rahulsir.png";
import omsir from "../../../public/assets/omsir.png";
import mdsir from "../../../public/assets/mdsir.png";
import rishavsir from "../../../public/assets/rishavsir.png";
import saddamsir from "../../../public/assets/saddamsir.png";
import sanjeevsir from "../../../public/assets/sanjeevsirimg.png";
import lakhwindersir from "../../../public/assets/lakhwindersir.png"
import Image from "next/image";
const teamdata = [
  {
    img: manpreetsir,
    membername: "Manpreet Singh",
    memberposition: "Technical Shopify Project Manager and CRO expert"
  },
  {
    img: arshsir,
    membername: "Arshpreet Singh",
    memberposition: "Shopify Theme Project Manager"
  },
  {
    img: deepaksir,
    membername: "Deepak Chauhan",
    memberposition: "Shopify App expert & MERN Stack developer"
  },
  {
    img: mdsir,
    membername: "Md. Sahjad Ansari",
    memberposition: "Shopify App expert & MERN Stack developer"
  },
  {
    img: rahulsir,
    membername: "Rahul Raj",
    memberposition: "Shopify Theme Developer"
  },


  {
    img: rishavsir,
    membername: "Rishav Karn",
    memberposition: "Shopify Theme developer"
  },
  {
    img: omsir,
    membername: "Om Parkash",
    memberposition: "Shopify Theme Expert & Next Js Developer "
  },
  {
    img: saddamsir,
    membername: "Saddam Hussain",
    memberposition: "Shopify Theme/App Expert"
  },
  {
    img:sanjeevsir,
     membername: "Sanjeev",
    memberposition: "Shopify Theme expert"
  },
  {
    img:lakhwindersir,
     membername: "Lakhwinder",
    memberposition: "Shopify Theme expert"
  }
];
export default function Team() {
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
    <div>
      {/* team section for mobile */}
      <div className="flex md:hidden  md:flex-row flex-col pb-[1%]">
        <div className="md:w-[40%] md:p-0 p-[7%_5%_1%] flex items-center">
          <div className="flex container text-start flex-col items-start pb-5">
            <div className="flex flex-row md:flex-col gap-2 md:gap-0">
              <h2 className="md:leading-[60px] text-[#989898]">Team</h2>
              <h2 className=" md:leading-[60px] ">Members</h2>
            </div>
            <p className="text-start m-0 text-secondary w-full  ">
              The people who make it happen
            </p>
          </div>
        </div>
        <div className="md:w-[60%] p-[0px_4%] md:p-0">
          <Swiper
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
              type:"bullets"
            }}
            speed={1000}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={slideitem}
          >
            {teamdata.map((data, index) =>
              <SwiperSlide key={index}>
                <div className="p-[5%] md:p-0">
                  <div>
                    <Image
                      src={data.img}
                      alt={data.membername}
                      width={1000}
                      height={500}
                      className=""
                    />
                  </div>
                  <div className="p-[10px_0]">
                    <h5 className="md:text-[21px] text-[25px] leading-[35px] md:leading-[30px] font-light">
                      {data.membername}
                    </h5>
                    <p className="md:text-[13px] text-[17px] leading-[27px] md:leading-[20px] font-medium m-0 !text-[#96bf47] ">
                      {data.memberposition}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
      {/* Team section for desktop */}
      <div className="container hidden md:block">
      <div className="flex  text-start flex-col items-start pb-5 w-[100%]">
          <div className="h-[150px] w-[100%] flex place-items-center">
                <svg viewBox="0 0 1320 300" className="text_show">
                    <text x="50%" y="50%" dy=".35em" textAnchor="middle">SHOPIFY EXPERTS</text>
                </svg>
          </div>
            <p className="text-center text-[28px] mb-5 text-secondary w-full  ">
              The people who make it happen
            </p>
          </div>
          <div className="flex pb-[4%]">
         
          <div className="flex justify-center w-[100%]">
             <div className="w-[65%] flex">
             {teamdata.slice(0, 2).map((data, index) =>
              <div className="p-[5%] md:p-0 w-[50%] flex justify-center" key={index} data-aos="fade-up" data-aos-duration={`${index +10}00`}>
                <div className="w-[80%]">
                  <div>
                    <Image
                      src={data.img}
                      alt={data.membername}
                      width={1000}
                      height={500}
                      className="hover_cus_scale"
                    />
                  </div>
                  <div className="p-[10px_0] text-center">
                    <h5 className="md:text-[18px] text-[25px] leading-[35px] md:leading-[25px] font-light">
                    {data.memberposition}
                    </h5>
                    <p className="!text-[#96bf47] md:text-[16px] text-[17px] leading-[27px] md:leading-[20px] font-medium ">
                      {data.membername}
                    </p>
                  </div>
                </div>
              </div>
            )}
             </div>
          </div>
         </div>
        <div>
        <div className="flex flex-wrap justify-center w-[100%]">
            {teamdata.slice(2, teamdata.length).map((data, index) =>
              <div className="p-[5%] md:p-0 w-[33%] flex justify-center mb-[4%]" key={index} data-aos="fade-up" data-aos-duration={`${index + 9}00`}>
                <div className="w-[80%]">
                  <div>
                    <Image
                      src={data.img}
                      alt={data.membername}
                      width={1000}
                      height={500}
                      className="hover_cus_scale"
                    />
                  </div>
                  <div className="p-[10px_0] text-center">
                    <h5 className="md:text-[18px] text-[25px] leading-[35px] md:leading-[25px] font-light">
                    {data.memberposition}
                    </h5>
                    <p className="md:text-[16px] text-[17px] leading-[27px] md:leading-[20px]  m-0 font-medium !text-[#96bf47]">
                      {data.membername}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
