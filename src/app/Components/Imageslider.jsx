// components/ImageSlider.js
"use client"; // Ensure this is a Client Component
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../StyleCss/imageslider.css"; // Ensure this path is correct
import imageio2 from "../../../public/assets/upperslider2.png";
import imageio from "../../../public/assets/gsapaio.png";
import shexp from "../../../public/assets/shopifyexperts.png";
import shepartners from "../../../public/assets/shopifypartners.png";
import sheplus from "../../../public/assets/shopifyplus.png";
import lineimg1 from "../../../public/assets/talkimg2.png";
import lineimg2 from "../../../public/assets/talkimg1.png";
import Image from "next/image";
const ImageSlider = () => {
  return (
    <div className="container md:m-0 md:p-0" 
     style={{maxWidth:"unset"}}
    >
        <div className="flex items-center pt-[4%] pb-[1%]">
              <div className="md:w-[15%] hidden md:block">
                  <Image src={lineimg1} alt="" width={1000} height={500} className="w-[100%]" />
              </div>
              <div className="md:w-[70%] w-[100%] flex flex-wrap justify-center gap-[20px] mg:gap-[0] md:justify-between">
                 <Image src={sheplus} alt="" width={1000} height={500} className="w-[46%] md:w-[30%]" />
                 <Image src={shepartners} alt="" width={1000} height={500} className="w-[46%] md:w-[30%]" />
                 <Image src={shexp} alt="" width={1000} height={500} className="w-[46%] md:w-[30%]" />

              </div>
              <div className="w-[15%] hidden md:block">
                  <Image src={lineimg2} alt="" width={1000} height={500} className="w-[100%]" />
              </div>
        </div>
       <section className="Am-img-slider-container mr-0 md:!mr-[13%] pt-5 md:pt-0">

      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        loop={true}
        slidesPerView={1}
        speed={500}
        effect="coverflow"
        coverflowEffect={{
          slideShadows: false,
        }}
        autoplay={{
          delay: 1000,
        }}
      
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: true,
          },
          1200: {
            slidesPerView: 3,
            centeredSlides: true,
          },
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="blog-slider__imgs">
            <Image
              className="back-image"
              alt=""
              src={imageio}
            />
          </div>
         
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="blog-slider__imgs">
            <Image
              className="back-image"
              alt=""
              src={imageio2}
            />
          </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-slider__imgs">
            <Image
              className="back-image"
              alt=""
              src={imageio}
            />
          </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-slider__imgs">
            <Image
              className="back-image"
              alt=""
              src={imageio2}
            />
          </div>
         
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
      </section>
    </div>
  );
};

export default ImageSlider;