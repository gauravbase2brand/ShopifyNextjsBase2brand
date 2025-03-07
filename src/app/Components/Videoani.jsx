"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import video1 from "../../../public/assets/animation3.gif";
import imageio from "../../../public/assets/gsapaio.png";
import shexp from "../../../public/assets/shopifyexperts.png";
import shepartners from "../../../public/assets/shopifypartners.png";
import sheplus from "../../../public/assets/shopifyplus.png";
import lineimg1 from "../../../public/assets/talkimg2.png";
import lineimg2 from "../../../public/assets/talkimg1.png";
import imageio2 from "../../../public/assets/upperslider2.png";
// Ensure GSAP works only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const imageRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Animate Image Scaling on Scroll
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 4.5, // Scale image 3 times
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
          markers: false
        }
      });
    }

    // Animate GIF/Video Scaling on Scroll
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        scale: 1.5, // Scale video 2.5 times
        ease: "power1.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
          markers: false
        }
      });
    }
  }, []);

  return (
    <div className="relative">
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
        {/* for desktop */}
      <div className="md:block hidden container relative  h-[30vh] md:h-[80vh] overflow-hidden pt-[5%] pb-[5%]">
        <div className="flex justify-center sticky top-[0] items-center  h-[100%] md:h-[53vh] ">
          <div className="w-[37%] mr-[10%]">
            <Image src={imageio} alt=""  />
          </div>

          <div className="absolute w-[45%] bg-gray-100 ">
            <main className="flex flex-col items-center">
              {/* Image and Video Section */}
              <div className=" w-full flex flex-col gap-10 items-center transform scale-[1.1]">
                <div ref={imageRef} className="w--[100%]">
                  <Image
                    src={video1}
                    alt="GSAP Image"
                    className="w-full object-cover rounded-[20px]"
                  />
                  {/* <video className="w-full  rounded-[20px]" autoPlay>
                    <source src="../../../public/assets/video/website video compressed.mp4" type="mp.4"/>
                  </video> */}
                  {/* <source src="../../../public/video/website video compressed.mp4" type="video/mp4" /> */}

                </div>
              </div>
            </main>
          </div>
          <div className="w-[37%] ml-[10%]">
            <Image src={imageio2} alt="" />
          </div>
        </div>
      </div>
       {/* for moblie */}
       <div className="block md:hidden pt-[4%]">
         <div>
         <Image
            src={video1}
            alt="GSAP Image"
            className="w-full object-cover"
          />
         </div>
       </div>
       <div className="custom_gradient_right w-[90vw] h-[500px] left-[2%] top-[-45%]" />
    </div>
  );
}
