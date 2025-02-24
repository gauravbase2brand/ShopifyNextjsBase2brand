"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import video1 from "../../../public/assets/animation.gif";
import imageio from "../../../public/assets/gsapaio.png";

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
        scale: 3, // Scale image 3 times
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
        scale: 2.5, // Scale video 2.5 times
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
    <>
      <div className="container h-[30vh] md:h-[80vh] overflow-hidden pt-[5%] pb-[5%]">
        <div className="flex justify-center items-center relative h-[100%] md:h-[53vh] ">
          <div>
            <Image src={imageio} alt />
          </div>

          <div className="absluate bg-gray-100 ">
            <main className="flex flex-col items-center">
              {/* Image and Video Section */}
              <div className=" w-full flex flex-col gap-10 items-center transform scale-[1.5]">
                <div ref={imageRef} className="w--[100%]">
                  <Image
                    src={video1}
                    alt="GSAP Image"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </main>
          </div>
          <div>
            <Image src={imageio} alt />
          </div>
        </div>
      </div>
    </>
  );
}
