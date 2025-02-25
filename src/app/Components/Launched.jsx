"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import launchimg1 from "../../../public/assets/launchimg1.png";
import launchimg2 from "../../../public/assets/launchimg2.png";
import launchimg3 from "../../../public/assets/launchimg3.png";
import launchimg4 from "../../../public/assets/launchimg4.png";
import launchline from "../../../public/assets/Line 27.png";
import greendot from "../../../public/assets/greendot.png";
import Launchph from "./Launchph";

export default function Launched() {
  const { scrollYProgress } = useViewportScroll();
  const [scrollRange, setScrollRange] = useState([0, 1]);
  const lineRef = useRef(null);

  useEffect(() => {
    const calculateScrollRange = () => {
      if (lineRef.current) {
        const lineHeight = lineRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const totalScrollableHeight = lineHeight - viewportHeight;
        setScrollRange([0, totalScrollableHeight]);
      }
    };

    calculateScrollRange();
    window.addEventListener("resize", calculateScrollRange);
    return () => window.removeEventListener("resize", calculateScrollRange);
  }, []);

  const y = useTransform(scrollYProgress, [10, 6], scrollRange);

  return (
    <div>
      <div className="container">
        {/* Heading */}
        <div className="hidden md:flex container text-center flex-col items-center pb-5">
          <div className="flex flex-row gap-0 md:gap-3">
            <h2 className="md:leading-[60px] text-[#989898]">Get your website</h2>
            <h2 className="md:leading-[60px]">launched in</h2>
          </div>
          <h2 className="md:leading-[60px]">4 weeks</h2>
        </div>
        <div className="flex md:hidden container text-center flex-col items-center pb-5">
          <div className="flex flex-row gap-0 md:gap-3">
            <h2 className="md:leading-[60px] text-[#989898]">Get your website</h2>
          </div>
          <h2 className="md:leading-[60px]">launched in 4 weeks</h2>
        </div>
        {/* Process Section */}
        <div className="hidden md:block">
          <div className="flex">
            {/* left section */}
            <div className="relative p-[3%] w-[50%]">
              <div className="">
                <div className="p-[5%]" data-aos="fade-up" data-aos-duration="600">
                  <div className="flex justify-center">
                    <div className="w-[90%]">
                      <span className="text-[12px] text-[#96BF47] w-[15%]">1st Week</span>
                      <div className="w-[100%]">
                        <h3>Research & Propose</h3>
                        <p className="text-[14px] text-[#ddd]">
                          In Week 1, we’ll focus on understanding your goals and
                          challenges through targeted research. We’ll analyze
                          market trends, competitors, and key data to craft a
                          tailored strategy. By the end of the week, you’ll have
                          a clear, actionable plan aligned with your objectives.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={launchimg1}
                      alt=""
                      width={1000}
                      height={500}
                      className="w-[90%] p-[5%_0]"
                    />
                  </div>
                </div>
                <div className="p-[5%] pt-[25%]" data-aos="fade-up" data-aos-duration="600">
                  <div className="flex justify-center">
                    <div className="w-[90%]">
                      <span className="text-[12px] text-[#96BF47] w-[15%]">3rd Week</span>
                      <div className="w-[100%]">
                        <h3>Write & Revise</h3>
                        <p className="text-[14px] text-[#ddd]">
                          During Week 3, we’ll focus on crafting and refining
                          the content or deliverables based on the design and
                          strategy. Whether it's copy, technical documentation,
                          or marketing materials, we’ll ensure everything is
                          clear, engaging, and on brand. Through collaboration
                          and feedback, we'll make revisions to perfect the
                          final output, ensuring it meets your expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={launchimg2}
                      alt=""
                      width={1000}
                      height={500}
                      className="w-[90%] p-[5%_0]"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[5%] right-[-3%] flex justify-end h-[92%]" ref={lineRef}>
                <div className="relative">
                  <motion.div style={{ y }}>
                    <Image src={greendot} alt="" />
                  </motion.div>
                  <Image
                    src={launchline}
                    alt=""
                    width={1000}
                    height={500}
                    className="w-[auto]"
                  />
                </div>
              </div>
            </div>
            {/* right section */}
            <div className="p-[3%] w-[50%]">
              <div className="p-[5%] pt-[25%]" data-aos="fade-up" data-aos-duration="600">
                <div className="flex justify-center">
                  <div className="w-[90%]">
                    <span className="text-[12px] text-[#96BF47] w-[15%]">2nd Week</span>
                    <div className="w-[100%]">
                      <h3>Design & Build</h3>
                      <p className="text-[14px] text-[#ddd]">
                        In Week 2, we’ll take the strategy from Week 1 and start
                        turning it into reality. Our team will design creative
                        solutions and build the necessary frameworks, whether
                        it’s a website, campaign, or product. We’ll focus on
                        seamless execution, ensuring that everything is aligned
                        with your vision and objectives, setting the stage for
                        success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={launchimg3}
                    alt=""
                    width={1000}
                    height={500}
                    className="w-[90%] p-[5%_0]"
                  />
                </div>
              </div>
              <div className="p-[5%] pt-[25%]" data-aos="fade-up" data-aos-duration="600">
                <div className="flex justify-center">
                  <div className="w-[90%]">
                    <span className="text-[12px] text-[#96BF47] w-[15%]">4th Week</span>
                    <div className="w-[100%]">
                      <h3>Testing & Launch</h3>
                      <p className="text-[14px] text-[#ddd]">
                        In the final week, we’ll thoroughly test all elements to
                        ensure everything functions perfectly. This includes
                        quality checks, troubleshooting, and refining based on
                        feedback. Once everything is optimized, we’ll launch the
                        project, making it live and ready for your audience. Our
                        goal is to ensure a smooth, successful launch with no
                        issues.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={launchimg4}
                    alt=""
                    width={1000}
                    height={500}
                    className="w-[90%] p-[5%_0]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <Launchph />
        </div>
      </div>
    </div>
  );
}