"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import manpreetsir from "../../../public/assets/manpreetsir.png";
import arshsir from "../../../public/assets/arshsir.png";
import surajsir from "../../../public/assets/surajsir.png";
import Image from "next/image";
const teamdata = [
  {
    img: manpreetsir,
    membername: "Manpreet Singh",
    memberposition: "Project Manager"
  },
  {
    img: arshsir,
    membername: "Arshpreet Singh",
    memberposition: "Sr. Project Coordinator"
  },
  {
    img: surajsir,
    membername: "Suraj Parkash",
    memberposition: "Quality Assurance"
  },
  {
    img: manpreetsir,
    membername: "Manpreet Singh",
    memberposition: "Project Manager"
  },
  {
    img: arshsir,
    membername: "Arshpreet Singh",
    memberposition: "Sr. Project Coordinator"
  },
  {
    img: surajsir,
    membername: "Suraj Parkash",
    memberposition: "Quality Assurance"
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
    <div className="flex md:flex-row flex-col pb-[1%]">
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
            clickable: true
          }}
          speed={1000}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={slideitem}
        >
            {
                teamdata.map((data,index)=>(
                  <SwiperSlide key={index}>
                   <div className="p-[5%] md:p-0" >
                     <div>
                        <Image src={data.img} alt={data.membername} width={1000} height={500} className="" />
                     </div>
                     <div className="p-[10px_0]">
                       <h5 className="md:text-[21px] text-[25px] leading-[35px] md:leading-[30px] font-light">{data.membername}</h5>      
                       <p className="md:text-[13px] text-[17px] leading-[27px] md:leading-[24px] font-light m-0 text-[#A8A8A8]">{data.memberposition}</p>
                     </div>
                   </div>
                  </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
    </div>
  );
}
