"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Button from "./UIUX/Button";
const ServicesWeProvide = ({
  TitleERP,
  Cardpara1,
  CardPara2,
  CardButton,
  CardLink,
  CardImage,
  Cardbg,
  phase,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false)); // Simulate loading delay
  }, []);

  return (
    <ERPSection
      isLoading={loading}
      TitleERP={TitleERP}
      Cardpara1={Cardpara1}
      CardPara2={CardPara2}
      CardButton={CardButton}
      CardLink={CardLink}
      CardImage={CardImage}
      Cardbg={Cardbg}
      phase={phase}
    />
  );
};
const ERPSection = ({
  isLoading,
  TitleERP,
  Cardpara1,
  CardPara2,
  CardButton,
  CardLink,
  CardImage,
  Cardbg,
  phase
}) => {
  return (
    <>
      <div className="container">
        <section className="grid md:min-h-[400px] grid-cols-1 md:grid-cols-2 items-stretch text-white my-4  bg-[black] rounded-[20px]">
          {/* Left Content */}
          <div className="space-y-7  flex items-center rounded-tl-[20px] md:rounded-tr-[0px]  rounded-tr-[20px] md:rounded-bl-[20px] p-4 border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-[#96BF47] md:border-r-0 bg-Dark"
           style={{
            background: "radial-gradient(circle, #000000 3%, #96bf473d 100%)"
          }}>
            {isLoading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-gray-700 rounded w-24"></div>
                <div className="h-10 bg-gray-600 rounded w-40"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                <div className="h-10 bg-green-600 rounded w-32"></div>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-[15px] p-[10%_0] md:p-[0_7%] h-[100%] justify-start" >
                <div className="px-6 py-2 w-fit bg-black border border-white rounded-full text-sm inline-block">
                {phase}
                </div>
                <h3 className="leading-normal font-medium">{TitleERP}</h3>
                <p className="text-gray-300 font-light  m-0">{Cardpara1}</p>
                <p className="text-gray-300 font-light  m-0">{CardPara2}</p>
                 <Button GButton={CardButton} Glink={CardLink} btn_target="_blank"/>
                </div>
              </>
            )}
          </div>

          {/* Right Image Section */}
          <div
            className="flex slider_card_slider justify-center items-center h-full  md:rounded-tr-[20px] rounded-br-[20px] md:rounded-br-[20px] rounded-bl-[20px] md:rounded-bl-[0px] p-4"
            style={{ backgroundColor: Cardbg || "white" }}
          >
            {isLoading ? (
              <div className="animate-pulse w-full h-48 bg-gray-700 rounded-lg"></div>
            ) : (
              <Image
                src={CardImage}
                alt="ERP Image"
                className=" w-[100%] object-contain md:h-[320px]"
              />
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesWeProvide;
