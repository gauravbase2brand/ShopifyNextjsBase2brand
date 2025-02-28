"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import launchimg1 from "../../../public/assets/launchimg1.png";
import launchimg2 from "../../../public/assets/launchimg2.png";
import launchimg3 from "../../../public/assets/launchimg3.png";
import launchimg4 from "../../../public/assets/launchimg4.png";
import launchline from "../../../public/assets/Line 27.png";
import greendot from "../../../public/assets/greendot.png";
import Launchph from "./Launchph";
import weekpopup from "../../../public/assets/week_popup.png";
import weekpopup2 from "../../../public/assets/week_popup2.png";
import Team from "./Team";
import banner from "../../../public/assets/buildbanner.png";
import arrow from "../../../public/assets/arrowfaq.png";
import Buildfaq from "./Buildfaq";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Launched() {
  const [yscroll, setyscroll] = useState(0);
  const [currentweek, setcurrentweek] = useState("");
  const [card1Scroll, setCard1Scroll] = useState(null);
  const [card2Scroll, setCard2Scroll] = useState(null);
  const [card3Scroll, setCard3Scroll] = useState(null);
  const [card4Scroll, setCard4Scroll] = useState(null);
  const [lastdiv, setlastdiv] = useState(0);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const lastdivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setyscroll(scrollY);
  
      if (card1Ref.current) {
        const rect1 = card1Ref.current.getBoundingClientRect();
        setCard1Scroll(scrollY + rect1.top);
      }
      if (card2Ref.current) {
        const rect2 = card2Ref.current.getBoundingClientRect();
        setCard2Scroll(scrollY + rect2.top);
      }
      if (card3Ref.current) {
        const rect3 = card3Ref.current.getBoundingClientRect();
        setCard3Scroll(scrollY + rect3.top);
      }
      if (card4Ref.current) {
        const rect4 = card4Ref.current.getBoundingClientRect();
        setCard4Scroll(scrollY + rect4.top);
      }
      if (lastdivRef.current) {
        const rect5 = lastdivRef.current.getBoundingClientRect();
        setlastdiv(scrollY + rect5.top);
      }
      if (yscroll >= card1Scroll && yscroll < card2Scroll) {
        setcurrentweek("1st Week");
      } else if (yscroll >= card2Scroll && yscroll < card3Scroll) {
        setcurrentweek("2nd Week");
      } else if (yscroll >= card3Scroll && yscroll < card4Scroll) {
        setcurrentweek("3rd Week");
      } else if (yscroll >= card4Scroll && yscroll < lastdiv) {
        setcurrentweek("4th Week");
      } else {
        setcurrentweek("1st Week"); 
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [yscroll, card1Scroll, card2Scroll, card3Scroll, card4Scroll, lastdiv]);
  return (
    <div>
      {/* Bulid container */}
      <div className="container pb-[5%]">
        {/* Heading  */}
        <div className=" container text-center flex flex-col items-center pb-5">
          <div className=" gap-0 md:gap-3">
            <h2 className="md:leading-[60px] text-[#989898]">
              If You Can Imagine It,
            </h2>
            
            <h2 className=" md:leading-[60px] ">You Can Build It</h2>
          </div>
        </div>
        {/* Build*/}
        <div className="border-[1px] border-[#3d3d3d] rounded-[20px]">
          <div data-aos="fade-up">
            <Image
              src={banner}
              width={1000}
              height={500}
              alt=""
              className="w-[100%] md:h-[auto] rounded-[10px] h-[200px] md:object-contain object-cover"
            />
          </div>          
          <div className="hidden flex-col child_custom md:flex">
            <div className="flex border-b-[1px] border-[#3d3d3d] justify-center gap-[5%] p-[20px_0] items-center" data-aos="fade-up" data-aos-duration="600">
              <div>
              
               <span className="text-[14px]">OPT /01</span>
              </div>
              <div className="w-[15%]">
                <h4 className="text-[23px]">Go Liquid</h4>
              </div>
              
                
                <div className="w-[60%] leading-[24px]">
                <span className="text-[14px]">
                  Get the best of both worlds. Build your own one-of-a-kind
                  store in no time with Liquid, then leave the rest to us.
                </span>
              </div>
              <div>
                <Image src={arrow} alt="" width={1000} height={500} className="w-[100%]" />
                
              </div>
            </div>
            <div className="flex border-b-[1px] border-[#3d3d3d] justify-center gap-[5%] p-[20px_0] items-center" data-aos="fade-up" data-aos-duration="700">
              <div>
                <span className="text-[14px]">OPT /02</span>
              </div>
              <div className="w-[15%]">
                <h4 className="text-[23px]">Go headless</h4>
              </div>
              <div className="w-[60%] leading-[24px]">
                <span className="text-[14px]">
                Get full control. Tap into Shopify's APIs and developer tools to build
                your own bespoke store, integrated with your preferred stack.
                </span>
              </div>
              <div>
                <Image src={arrow} alt="" width={1000} height={500} className="w-[100%]" />
              </div>
            </div>
            <div className="flex border-b-[1px] border-[#3d3d3d] justify-center gap-[5%] p-[20px_0] items-center" data-aos="fade-up" data-aos-duration="800">
              <div>
                <span className="text-[14px]">OPT /03</span>
              </div>
              <div className="w-[15%]">
                <h4 className="text-[23px]">Custom builds</h4>
              </div>
              <div className="w-[60%] leading-[24px]">
                <span className="text-[14px]">
                Get custom builds as per requirements 
                </span>
              </div>
              <div>
                <Image src={arrow} alt="" width={1000} height={500} className="w-[100%]" />
              </div>
            </div>
            <div  ref={card1Ref} className="flex justify-center gap-[5%] p-[20px_0] items-center" data-aos="fade-up" data-aos-duration="900">
              <div>
                <span className="text-[14px]">OPT /04</span>
              </div>
              <div className="w-[15%]">
                <h4 className="text-[23px]">Custom Integration</h4>
              </div>
              <div className="w-[60%] leading-[24px]">
                <span className="text-[14px]">
                Integrate with your Backoffice managements or any other platform
                </span>
              </div>
              <div>
                <Image src={arrow} alt="" width={1000} height={500} className="w-[100%]" />
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <Buildfaq/>
          </div>
        </div>
      </div>
      {/* Lunched 4 week*/}
      <div className="container">
        {/* Heading */}
        <div className="hidden md:flex container text-center flex-col items-center pb-5">
          <div className="flex flex-row gap-0 md:gap-3">
            <h2 className="md:leading-[60px] text-[#989898]">
              Get your website
            </h2>
            <h2 className="md:leading-[60px]">launched in</h2>
          </div>
          <h2 className="md:leading-[60px]">4 weeks</h2>
        </div>
        <div className="flex md:hidden container text-center flex-col items-center pb-5">
          <div className="flex flex-row gap-0 md:gap-3">
            <h2 className="md:leading-[60px] text-[#989898]">
              Get your website
            </h2>
          </div>
          <h2 className="md:leading-[60px]">launched in 4 weeks</h2>
        </div>
        {/* Process Section */}
        <div className="hidden md:block">
          <div className="flex relative">
            {/* Left Section */}
            <div className="p-[3%] w-[50%]">
              <div>
                {/* Card 1 */}
                <div
                  className="p-[5%]"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <div className="flex justify-center" ref={card2Ref}>
                    <div className="w-[90%]">
                      <div className="w-[100%] text-[#96BF47]">
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
                {/* Card 3 */}
                <div
                  className="p-[5%] pt-[25%]"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <div className="flex justify-center">
                    <div className="w-[90%]">
                      <div className="w-[100%] text-[#96BF47]">
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
            </div>
            {/* Line Section */}
            <div className="absolute top-[5%] right-[47.5%] w-[56px] flex justify-center h-[92%] z-10">
              <div className="absolute w-[100%] h-[100%] flex flex-col items-center">
                <div
                  className={
                    yscroll > card1Scroll && yscroll <= lastdiv
                      ? "sticky top-[50%] transition duration-[1900ms] z-10 "
                      : "absolute flex transition duration-[1900ms] z-10 "
                  }
                >
                  <Image src={greendot} alt="" className="w-[30px]" />
                  <div
                    className={
                      (yscroll >= card2Scroll && yscroll <= card3Scroll) ||
                      (yscroll >= card4Scroll && yscroll <= lastdiv)
                        ? "top-[-25px] z-[100] w-[80px] h-[20px] text-[12px] absolute right-[-84px] transition-all duration-[900ms]"
                        : "top-[-25px] z-[100] w-[80px] h-[20px]  text-[12px] absolute left-[-84px] transition-all duration-[900ms]"
                    }
                  >
                    {(yscroll >= card2Scroll && yscroll <= card3Scroll) ||
                    (yscroll >= card4Scroll && yscroll <= lastdiv)
                      ? <div className="flex justify-center">
                          <Image src={weekpopup2} alt="" />
                          <span className="absolute text-black ">
                            {currentweek}
                          </span>
                        </div>
                      : <div className="flex justify-center">
                          <Image src={weekpopup} alt="" />
                          <span className="absolute text-black ">
                            {currentweek}{" "}
                          </span>
                        </div>}
                  </div>
                </div>
              </div>
              <div className="relative w-[100%] flex justify-center">
                <Image
                  src={launchline}
                  alt=""
                  width={1000}
                  height={500}
                  className="w-[auto]"
                />
              </div>
            </div>
            {/* Right Section */}
            <div className="p-[3%] w-[50%]">
              {/* Card 2 */}
              <div
                className="p-[5%] pt-[25%]"
                data-aos="fade-up"
                data-aos-duration="600"
             
              >
                <div className="flex justify-center">
                  <div className="w-[90%]">
                    <div className="w-[100%] text-[#96BF47] text-right">
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
                <div className="flex justify-center" ref={card3Ref}>
                  <Image
                    src={launchimg3}
                    alt=""
                    width={1000}
                    height={500}
                    className="w-[90%] p-[5%_0]"
                  />
                </div>
              </div>
              {/* Card 4 */}
              <div
                className="p-[5%] pt-[25%]"
                data-aos="fade-up"
                data-aos-duration="600"
                ref={card4Ref}
              >
                <div className="flex justify-center">
                  <div className="w-[90%]">
                    <div className="w-[100%] text-right ">
                      <h3 className=" text-[#96BF47]">Testing & Launch</h3>
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
      <div ref={lastdivRef}>
        <Team />
      </div>
    </div>
  );
}
