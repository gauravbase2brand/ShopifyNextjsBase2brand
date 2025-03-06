"use client"
import React,{useEffect} from "react";
import banner from "../../../public/assets/buildbanner.png";
import Image from "next/image";
import arrow from "../../../public/assets/arrowfaq.png";
import Buildfaq from "./Buildfaq";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Bulid() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <div>
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
                <span className="text-[17px]">
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
                <span className="text-[17px]">
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
                <span className="text-[17px]">
                Get custom builds as per requirements 
                </span>
              </div>
              <div>
                <Image src={arrow} alt="" width={1000} height={500} className="w-[100%]" />
              </div>
            </div>
            <div className="flex justify-center gap-[5%] p-[20px_0] items-center" data-aos="fade-up" data-aos-duration="900">
              <div>
                <span className="text-[14px]">OPT /04</span>
              </div>
              <div className="w-[15%]">
                <h4 className="text-[23px]">Custom Integration</h4>
              </div>
              <div className="w-[60%] leading-[24px]">
                <span className="text-[17px]">
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
    </div>
  );
}
