"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css";
import clinetimg1 from "../../../public/assets/clientreviews1.jpg";
import clientcom1 from "../../../public/assets/clinetcom1.png";
import clinetimg2 from "../../../public/assets/clientreviews2.png";
import clinetimg3 from "../../../public/assets/clientreviews3.png";
import clinetimg4 from "../../../public/assets/clientreviews4.png";
import clientcom2 from "../../../public/assets/slider-images/slidertitle1.webp";
import clientcom3 from "../../../public/assets/slider-images/slidertitle2.webp";


import clinetimg5 from "../../../public/assets/slider-images/cotton-print-club.png";
import clinetimg6 from "../../../public/assets/slider-images/pant.png";
import clinetimg7 from "../../../public/assets/slider-images/dog_.png";
import clinetimg8 from "../../../public/assets/slider-images/oz__.png";


import clientcom5 from "../../../public/assets/icons/brandlogo1.svg";
import clientcom6 from "../../../public/assets/icons/rowthird1.svg";
import clientcom7 from "../../../public/assets/icons/row14.svg";
import clientcom8 from "../../../public/assets/icons/rowthird4.svg";
// import clientcom3 from "../../../public/assets/slider-images/slidertitle3.webp";
import clientcom4 from "../../../public/assets/slider-images/slidertitle4.webp";

import cotes from "../../../public/assets/reviewscotes.png";

import CountUp, { useCountUp } from "react-countup";
import line1 from "../../../public/assets/expline1.png";
import line2 from "../../../public/assets/expline2.png";
import rating4 from "../../../public/assets/fourstar.png";
import rating from "../../../public/assets/slider-images/rating-slider.webp";
const reviewsdata = [
  {
    id: 1,
    clientimg: clinetimg1,
    clientcompany: clientcom1,
    clientname: "– Tamoor",
    clientcom:
      "We saw a huge improvement in our Shopify store's performance thanks to Base2Brand. Their tailored solutions helped us boost sales, engage more customers, and optimize the overall shopping journey. The results speak for themselves!",
      ratingstar:rating
  },
  {
    id: 2,
    clientimg: clinetimg2,
    clientcompany: clientcom2,
    clientname: "– Shuan.",
    clientcom:
      "Base2Brand’s redesign of our Shopify store has been a game-changer. Their work improved both functionality and user experience, driving more conversions and helping us reduce cart abandonment. We couldn't be happier with the results!",
      ratingstar:rating4
  },
  {
    id: 3,
    clientimg: clinetimg3,
    clientcompany: clientcom3,
    clientname: "– Lily",
    clientcom:
      "Base2Brand revamped our Shopify store, making it more user-friendly and efficient. The enhanced design led to more conversions, and we’ve noticed a significant decrease in cart abandonment. Their work was instrumental in increasing our revenue.",
      ratingstar:rating
  },
  {
    id: 4,
    clientimg: clinetimg4,
    clientcompany: clientcom4,
    clientname: "– Scott",
    clientcom:
      "Base2Brand’s expertise made a real difference for our Shopify store. Their focus on design and functionality gave us a smoother user experience, increasing conversions and significantly improving customer engagement. We’ve seen great results!",
      ratingstar:rating4
  },
  {
    id: 5,
    clientimg: clinetimg5,
    clientcompany: clientcom5,
    clientname: "– Palak",
    clientcom:
      "Base2Brand’s work on our Shopify store was exceptional. They optimized the design and functionality, which led to better customer engagement and increased sales. Our cart abandonment rate is much lower, and the overall shopping experience has greatly improved.",
      ratingstar:rating4
  },
  {
    id: 6,
    clientimg: clinetimg6,
    clientcompany: clientcom6,
    clientname: "– Ayesha",
    clientcom:
      "Base2Brand truly transformed our Shopify store with a user-centric design. Their improvements led to higher conversion rates, and cart abandonment dropped. The shopping experience is now smoother, making it easier for our customers to shop.",
      ratingstar:rating
  },
  {
    id: 7,
    clientimg: clinetimg7,
    clientcompany: clientcom7,
    clientname: "– Tim",
    clientcom:
      "Working with Base2Brand was fantastic. They optimized our Shopify store, improving both design and functionality. As a result, sales increased, and we saw much better customer engagement. Cart abandonment rates also dropped significantly!",
      ratingstar:rating
  },
  {
    id: 8,
    clientimg: clinetimg8,
    clientcompany: clientcom8,
    clientname: "– Fadi",
    clientcom:
      "Thanks to Base2Brand, our Shopify store now offers a seamless shopping experience. Their optimizations have led to improved customer satisfaction, higher sales, and reduced cart abandonment. We’re extremely pleased with the outcome!",
      ratingstar:rating4
  },
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
       <div className="relative">
         <div className="container mx-auto px-4">
        <div className="m-[0]">
          <div className="pb-[5%] ">
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
                    <div className="w-[100%] md:w-[40%] hidden md:flex justify-center ">
                      <Image
                        src={data.clientimg}
                        alt="img"
                        width={1000}
                        height={500}
                        className="w-[85%] md:w-[70%] rounded-[25px] z-20"
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
                        <p className=" p-[20px_0_0] md:w-[80%]">
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
                            src={data.ratingstar}
                            alt=""
                            width={1000}
                            height={500}
                            className="w-[30%] md:w-[12%]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="custom_gradient_right"></div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
          </div>
          <div className="custom_gradient_right w-[600px] h-[500px] right-[0%] top-[-5%]" />
       </div>
      {/* Shopify service */}
       <div className="relative">
       <div className="overflow-hidden">
        {/*  Shopify service Heading*/}
        <div className=" container text-center flex flex-col items-center"  data-aos="fade-up">
          <div className="flex md:flex-row flex-col gap-0 md:gap-3">
            <h2 className="">Boost Your Brand </h2>
            <h2 className="text-[#989898] ">With Expert</h2>
          </div>
          <h2 className="text-[#989898]">Shopify Services</h2>
          <p className="text-center  pb-3 text-secondary w-full sm:w-1/2 lg:w-[70%] md:w-9/12 mx-auto">
            Ready to create or elevate your Shopify store? Our experienced team
            specializes in custom themes, performance optimization, and
            enhancing user experience to help your business thrive.
          </p>
        </div>
        {/* Services Exp. etc */}
        <div className="flex justify-center flex-col items-center pb-[5%]"  data-aos="fade-up">
          <div className="flex min-h-[110px] w-[90%] md:w-[50%] border-[#17360f] border-t-[1px] border-b-[1px] relative">
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
          <div className="flex min-h-[110px] w-[70%] md:w-[40%] border-[#17360f] border-b-[1px] relative">
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
        <div className="custom_gradient_right w-[600px] h-[500px] left-[30%] top-[0%]" />
      </div>
       </div>
    </div>
  );
}
