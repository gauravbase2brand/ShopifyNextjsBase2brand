"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Heading from "./UIUX/Heading";
import brandlogo1 from "../../../public/assets/icons/brandlogo1.svg";
import Lowerbanner from "../../../public/assets/leading-lower-banner.webp"
import row1 from "../../../public/assets/icons/row1.svg";
import row12 from "../../../public/assets/icons/row12.svg";
import row13 from "../../../public/assets/icons/row13.svg";
import row14 from "../../../public/assets/icons/row14.svg";
import row15 from "../../../public/assets/icons/row15.svg";
import row16 from "../../../public/assets/icons/row16.svg";

import rowsecond1 from "../../../public/assets/icons/rowsecond1.svg";
import rowsecond2 from "../../../public/assets/icons/rowsecond2.svg";
import rowsecond3 from "../../../public/assets/icons/rowsecond3.svg";
import rowsecond4 from "../../../public/assets/icons/rowsecond4.svg";
import rowsecond5 from "../../../public/assets/icons/rowsecond5.png";
import rowsecond6 from "../../../public/assets/icons/rowsecond6.svg";

import rowthird1 from "../../../public/assets/icons/rowthird1.svg";
import rowthird2 from "../../../public/assets/icons/rowthird2.svg";
import rowthird3 from "../../../public/assets/icons/rowthird3.svg";
import rowthird4 from "../../../public/assets/icons/rowthird4.svg";
import rowthird5 from "../../../public/assets/icons/rowthird5.svg";
import rowthird6 from "../../../public/assets/icons/rowthird6.svg";
import rowthird7 from "../../../public/assets/icons/rowthird7.svg";

import rowfour1 from "../../../public/assets/icons/rowfour1.svg";
import rowfour2 from "../../../public/assets/icons/rowfour2.svg";
import rowfour3 from "../../../public/assets/icons/rowfour3.svg";
import rowfour4 from "../../../public/assets/icons/rowfour4.svg";
import rowfour5 from "../../../public/assets/icons/rowfour5.svg";
import rowfour6 from "../../../public/assets/icons/rowfour6.svg";

import rowfive1 from "../../../public/assets/icons/rowfive1.svg";
import rowfive2 from "../../../public/assets/icons/rowfive2.svg";
import rowfive3 from "../../../public/assets/icons/rowfive3.svg";
import rowfive4 from "../../../public/assets/icons/rowfive4.svg";
import rowfive5 from "../../../public/assets/icons/rowfive5.svg";
import rowfive6 from "../../../public/assets/icons/rowfive6.svg";
import rowfive7 from "../../../public/assets/icons/rowfive7.svg";

import startitle from "../../../public/assets/icons/star-title.svg";
import shopifylogo from "../../../public/assets/shopifylogo.webp";
const firstRowBrands = [brandlogo1, row1, row12, row13, row14, row15, row16];
const secondRowBrands = [rowsecond1, rowsecond2, rowsecond3, rowsecond4, rowsecond5, rowsecond6, row15];
const thirdRowBrands = [rowthird1, rowthird2, rowthird3, rowthird4, rowthird5, rowthird6, rowthird7];
const fourthRowBrands = [rowfour1, rowfour2, rowfour3, rowfour4, rowfour5, rowthird6, rowfour6];
const fifthRowBrands = [rowfive1, rowfive2, rowfive3, rowfive4 ,rowfive5 , rowfive6,rowfive7];

const lbannerfirstband = ["WE ARE SHOPIFY EXPERT","WE ARE SHOPIFY EXPERT","WE ARE SHOPIFY EXPERT","WE ARE SHOPIFY EXPERT","WE ARE SHOPIFY EXPERT","WE ARE SHOPIFY EXPERT"]

export default function Brand() {
  return (
    <>
    
      <div className="relative">
        <div className="container pb-3">
          <div className="logo_brand relative">
            <Heading Heading1="Trusted by" Heading2="leading brands" />
            <div
              className=" lg:p-10 p-4 border-white relative overflow-hidden"
              style={{
                background: "radial-gradient(circle, #4d8f2d54 3%, #96dd1963 100%)",
                borderRadius: "60px 60px 0px 0px",
                borderWidth: "1px 1px 0px 1px",
                borderStyle: "solid",
                borderColor: "white",
                boxShadow: "-20px 0 30px rgba(0, 0, 0, 0.8), 20px 0 30px rgba(0, 0, 0, 0.8)"
              }}
            >
              {/* First Row */}
              <Marquee speed={50} gradient={false} direction="left" className="flex gap-3">
                {firstRowBrands.map((logo, index) => (
                  <div key={index} className=" lg:p-[20px_45px] p-[20px_25px]">
                    <Image src={logo} alt={`first-row-${index}`} width={100} className="w-full h-[34px] object-scale-down" />
                  </div>
                ))}
              </Marquee>

              {/* Second Row (Opposite Direction) */}
              <Marquee speed={60} gradient={false} direction="right" className="flex gap-3 mt-3">
                {secondRowBrands.map((logo, index) => (
                  <div key={index} className="lg:p-[20px_45px] p-[20px_25px]">
                    <Image src={logo} alt={`second-row-${index}`} width={100} className="w-full h-[34px] object-scale-down" />
                  </div>
                ))}
              </Marquee>

              {/* Third Row */}
              <Marquee speed={55} gradient={false} direction="left" className="flex gap-3 mt-3">
                {thirdRowBrands.map((logo, index) => (
                  <div key={index} className="lg:p-[20px_45px] p-[20px_25px]">
                    <Image src={logo} alt={`third-row-${index}`} width={100} className="w-full h-[34px] object-scale-down" />
                  </div>
                ))}
              </Marquee>
              
                   {/* fourth Row */}
              <Marquee speed={60} gradient={false} direction="right" className="flex gap-3 mt-3">
                {fourthRowBrands.map((logo, index) => (
                  <div key={index} className="lg:p-[20px_45px] p-[20px_25px]">
                    <Image src={logo} alt={`second-row-${index}`} width={100} className="w-full h-[34px] object-scale-down" />
                  </div>
                ))}
              </Marquee>

              <Marquee speed={50} gradient={false} direction="left" className="flex gap-3">
                {fifthRowBrands.map((logo, index) => (
                  <div key={index} className=" lg:p-[20px_45px] p-[20px_25px]">
                    <Image src={logo} alt={`first-row-${index}`} width={100} className="w-full h-[34px] object-scale-down" />
                  </div>
                ))}
              </Marquee>
            
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full lg:h-[100px] h-[80px] bg-gradient-to-b from-black/0 via-[#121212] to-[#000000]"></div>
 
      </div>
      <div className="w-100 flex overflow-hidden flex-col justify-center gap-[10%] h-[200px] relative">
          <div className="bg-green" 
          style={{
            background:" linear-gradient(90deg, rgba(92,119,42,1) 24%, rgba(171,221,78,1) 51%)",
            padding:"15px 0px"
          }}
          >
            <Marquee speed={50} gradient={false} direction="right" className="flex gap-[20px]">
             {
              lbannerfirstband.map((title,index)=>(
                <div key={index} className="flex ps-4 pe-4 text-black items-center gap-2">
                 <Image src={startitle} width={500} height={200} alt="*" className="h-[15px] w-[15px] " />
                 {title}
                </div>
              ))
             }
            </Marquee> 
          </div>
          <div className="bg-white absolute rotate-[354deg] z-[1] py-[15px] px-0" 
          style={{
            padding:"15px 0px"
          }}
          >
            <Marquee speed={50} gradient={false} direction="left" className="flex gap-[20px]">
             {
              lbannerfirstband.map((title,index)=>(
                <div key={index} className="flex ps-4 pe-4 text-black items-center gap-2">
                 <Image src={startitle} width={500} height={200} alt="*" className="h-[15px] w-[15px] " />
                 {title}
                </div>
              ))
             }
            </Marquee> 
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-[1]">
           <Image src={shopifylogo} width={1000}
           height={500}
           alt=""
           className="w-[150px] h-[150px]"
           />
          </div>
        </div>

    </>
  );
}
