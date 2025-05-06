"use client";
import React, { useState } from "react";
import base2brand from "../../../../public/assets/base2brand-logo 2.png";
import Image from "next/image";
import facebook from "../../../../public/assets/facebookimg.png";
import instagram from "../../../../public/assets/instaimg.png";
import twiter from "../../../../public/assets/twiterimg.png";
import skype from "../../../../public/assets/skypeimg.png";
import youtube from "../../../../public/assets/youimg.png";
import linkedin from "../../../../public/assets/linkedinimg.png";
import gmail from "../../../../public/assets/gmail.png";
import whatsapp from "../../../../public/assets/whatsapp.png";
import india from "../../../../public/assets/india.png";
import usa from "../../../../public/assets/usa.png";
import uk from "../../../../public/assets/uk.png";
import { FaChevronDown } from "react-icons/fa";

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
    setActiveIndex2(null);
  };
  const toggleFAQ2 = index => {
    setActiveIndex2(activeIndex2 === index ? null : index);
    setActiveIndex(null);
  };

  return (
    <div>
      {/* Footer for desktop or tab */}
      <div className="container">
        <div className="hidden md:block">
          {/* Upper Section */}
          <div className="flex w-[100%] pb-[20px]">
            <div className="w-[50%]">
              <Image
                src={base2brand}
                alt="Base2Brand Logo"
                width={200}
                height={100}
                className="w-[55%]"
              />
            </div>
            <div className="flex w-[50%] justify-end">
              <div className="flex w-[70%] items-center justify-center gap-2">
                <a
                  href="https://www.facebook.com/TechBase2Brand/"
                  target="_blank"
                >
                  <Image
                    src={facebook}
                    alt="facebook"
                    width={45}
                    height={45}
                    className="h-[45px] w-[45px] cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.instagram.com/techbase2brand/?hl=en"
                  target="_blank"
                >
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={45}
                    height={45}
                    className="h-[45px] w-[45px] cursor-pointer"
                  />
                </a>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2FtechBase2Brand" target="_blank">
                  <Image
                    src={twiter}
                    alt="twiter"
                    width={45}
                    height={45}
                    className="h-[45px] w-[45px] cursor-pointer"
                  />
                </a>
                <a href="https://in.linkedin.com/company/techbase2brand" target="_blank">
                <Image
                  src={linkedin}
                  alt="linkedin"
                  width={45}
                  height={45}
                  className="h-[45px] w-[45px] cursor-pointer"
                />
                </a>
                {/* <Image
                  src={skype}
                  alt="skype"
                  width={45}
                  height={45}
                  className="h-[45px] w-[45px] cursor-pointer"
                /> */}
                <a href="https://www.youtube.com/channel/UCEHsjR1TFlEfsbcYQPlLW4Q" target="_blank">
                <Image
                  src={youtube}
                  alt="youtube"
                  width={45}
                  height={45}
                  className="h-[45px] w-[45px] cursor-pointer"
                />
                </a>
              </div>
            </div>
          </div>

          {/* Lower Section */}
          <div className="flex flex-col lg:flex-row lg:gap-0 gap-[20px]">
            <div className="lg:w-[65%] w-[100%]">
              <div className="pt-2 pb-3 ps-[2.5%]">
                <h3 className="text-[24px] font-normal leading-[34px]">
                  Have a project in mind?
                </h3>
                <h3 className="text-[24px] font-normal leading-[34px]">
                  let’s get to work.
                </h3>
              </div>
              <div className="flex flex-col gap-[15px] ps-[2.5%]">
                <a
                  target="_blank"
                  href="mailto:tech@base2brand.com"
                  className="text-[14px] font-thin flex items-center gap-[10px]"
                >
                  <Image
                    src={gmail}
                    alt="gmail"
                    width={35}
                    height={35}
                    className="w-[35px] h-[35px] object-contain"
                  />
                  tech@base2brand.com
                </a>
                <a
                  target="_blank"
                  href="tel:(+91)9872487850"
                  className="text-[14px] font-thin flex items-center gap-[10px]"
                >
                  <Image
                    src={whatsapp}
                    alt="whatsapp"
                    width={35}
                    height={35}
                    className="w-[35px] h-[35px] object-contain"
                  />
                  (+91) 98724-87850
                </a>
                <div className="flex gap-[15px]">
                  <a
                    target="_blank"
                    href="tel:(+91) 98724-87850"
                    className="text-[14px] font-thin flex items-center gap-[10px]"
                  >
                    <Image
                      src={india}
                      alt="india"
                      width={35}
                      height={35}
                      className="w-[35px] h-[35px] object-contain"
                    />
                    (+91) 98724-87850
                  </a>
                  <a
                    target="_blank"
                    href="tel:(+1) 72090-35933"
                    className="text-[14px] font-thin flex items-center gap-[10px]"
                  >
                    <Image
                      src={usa}
                      alt="usa"
                      width={35}
                      height={35}
                      className="w-[35px] h-[35px] object-contain"
                    />
                    (+1) 72090-35933
                  </a>
                  <a
                    target="_blank"
                    href="tel:(+44) 74484-35973"
                    className="text-[14px] font-thin flex items-center gap-[10px]"
                  >
                    <Image
                      src={uk}
                      alt="uk"
                      width={35}
                      height={35}
                      className="w-[35px] h-[35px] object-contain"
                    />
                    (+44) 74484-35973
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-start gap-[30%] lg:w-[35%] w-[100%] ps-[2.5%] lg:ps-0">
              <div>
                <span className="text-[18px] font-semibold">Services</span>
                <ul className="flex flex-col gap-[12px] mt-[15px]">
                  <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer">
                    CRM
                  </li>
                  <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer">
                    ERP
                  </li>
                  <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer">
                    POS
                  </li>
                  <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer">
                    Custom Integration
                  </li>
                  <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer">
                    Our Products
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-[18px] font-semibold">Other Links</span>
                <ul className="flex flex-col gap-[12px] mt-[15px]">
                  <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer">
                    About
                  </li>
                  <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer">
                    Our Team
                  </li>
                  <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer">
                    Blogs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer for mobile */}
      <div className="container pb-[5%]">
        <div className="flex flex-col md:hidden">
          <div className="w-[100%] flex justify-center">
            <Image
              src={base2brand}
              alt="Base2Brand Logo"
              width={200}
              height={100}
              className="w-[70%]"
            />
          </div>
          <div className="pt-3 pb-3 ps-[2.5%] text-center">
            <h3 className="text-[24px] font-light leading-[38px]">
              Have a project in mind?
            </h3>
            <h3 className="text-[24px] font-light leading-[38px]">
              let’s get to work.
            </h3>
          </div>

          {/* Dropdown List 1 */}
          <div
            className="mb-2 custoum_border p-[10px_0]"
            onClick={() => toggleFAQ(0)}
          >
            <div className="flex flex-col items-start border-[1px] border-[#414141] rounded-[15px] bg-[#2e8a2e45]">
              <div className="flex relative w-[100%] justify-start">
                <button className="md:w-[80%] text-left text-[16px] md:text-[16px] p-[15px] bg-black-100 rounded-lg focus:outline-none transition duration-200 ease-in-out">
                  Services
                </button>
                <div
                  className={`w-[12%] absolute right-[0] h-[100%] rounded-tr-[15px] top-0 flex items-center justify-center border-l-[1px] ${activeIndex ===
                  0
                    ? "border-b-[1px] bg-[#96BF47] border-[#96BF47] rounded-bl-[15px] shadow-[inset_0_0_29px_#d8f999,0_0_34px_#b4ff23]"
                    : "border-b-0 bg-none border-[#414141] rounded-br-[0]"}`}
                >
                  <FaChevronDown
                    className={`transform transition-transform duration-200 ${activeIndex ===
                    0
                      ? "rotate-180"
                      : "rotate-0"}`}
                  />
                </div>
              </div>
              <div
                className={`overflow-hidden w-[100%] transition-all duration-200 ease-in-out ${activeIndex ===
                0
                  ? "max-h-[500px] rounded-br-[20px] rounded-bl-[20px]"
                  : "max-h-0"}`}
              >
                <div className="p-[0_4%_4%]  w-[100%] pt-0 text-[13px] leading-[23px] bg-[#2e8a2e00] rounded-b-lg">
                  <div>
                    <ul className="flex flex-col gap-[12px] mt-[5px]">
                      <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer">
                        CRM
                      </li>
                      <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer">
                        ERP
                      </li>
                      <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer">
                        POS
                      </li>
                      <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer">
                        Custom Integration
                      </li>
                      <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer">
                        Our Products
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* dropdown list 2 */}
          <div
            className="mb-2 custoum_border p-[10px_0]"
            onClick={() => toggleFAQ2(0)}
          >
            <div className="flex flex-col items-start border-[1px] border-[#414141] rounded-[15px] bg-[#2e8a2e45]">
              <div className="flex relative w-[100%] justify-start">
                <button className="md:w-[80%] text-left text-[16px] md:text-[16px] p-[15px] bg-black-100 rounded-lg focus:outline-none transition duration-200 ease-in-out">
                  Other Links
                </button>
                <div
                  className={`w-[12%] absolute right-[0] h-[100%] rounded-tr-[15px] top-0 flex items-center justify-center border-l-[1px] ${activeIndex2 ===
                  0
                    ? "border-b-[1px] bg-[#96BF47] border-[#96BF47] rounded-bl-[15px] shadow-[inset_0_0_29px_#d8f999,0_0_34px_#b4ff23]"
                    : "border-b-0 bg-none border-[#414141] rounded-br-[0]"}`}
                >
                  <FaChevronDown
                    className={`transform transition-transform duration-200 ${activeIndex2 ===
                    0
                      ? "rotate-180"
                      : "rotate-0"}`}
                  />
                </div>
              </div>
              <div
                className={`overflow-hidden w-[100%] transition-all duration-200 ease-in-out ${activeIndex2 ===
                0
                  ? "max-h-[500px] rounded-br-[20px] rounded-bl-[20px]"
                  : "max-h-0"}`}
              >
                <div className="p-[0_4%_4%]  w-[100%] pt-0 text-[13px] leading-[23px] bg-[#2e8a2e00] rounded-b-lg">
                  <div>
                    <ul className="flex flex-col gap-[12px] mt-[5px]">
                      <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer">
                        About
                      </li>
                      <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer">
                        Our Team
                      </li>
                      <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer">
                        Blogs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* links */}
          <div className="flex w-[100%] justify-end pt-3 pb-3">
            <div className="flex w-[100%] flex-col items-center justify-around gap-4">
              <div className="flex w-[80%] justify-center gap-3">
              <a
                  href="https://www.facebook.com/TechBase2Brand/"
                  target="_blank"
                >
                  <Image
                    src={facebook}
                    alt="facebook"
                    width={45}
                    height={45}
                    className="h-[45px] w-[45px] cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.instagram.com/techbase2brand/?hl=en"
                  target="_blank"
                >
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={45}
                    height={45}
                    className="h-[45px] w-[45px] cursor-pointer"
                  />
                </a>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2FtechBase2Brand" target="_blank">
                  <Image
                    src={twiter}
                    alt="twiter"
                    width={45}
                    height={45}
                    className="h-[45px] w-[45px] cursor-pointer"
                  />
                </a>
                <a href="https://in.linkedin.com/company/techbase2brand" target="_blank">
                <Image
                  src={linkedin}
                  alt="linkedin"
                  width={45}
                  height={45}
                  className="h-[45px] w-[45px] cursor-pointer"
                />
                </a>
                {/* <Image
                  src={skype}
                  alt="skype"
                  width={45}
                  height={45}
                  className="h-[45px] w-[45px] cursor-pointer"
                /> */}
                <a href="https://www.youtube.com/channel/UCEHsjR1TFlEfsbcYQPlLW4Q" target="_blank">
                <Image
                  src={youtube}
                  alt="youtube"
                  width={45}
                  height={45}
                  className="h-[45px] w-[45px] cursor-pointer"
                />
                </a>
              </div>
            </div>
          </div>
          {/* mail links and phone numbers */}
          <div className="flex flex-col gap-[15px] ps-[2.5%]">
            <a
              target="_blank"
              href="mailto:tech@base2brand.com"
              className="text-[18px] text-[#BBBBBB] font-thin flex items-center gap-[15px]"
            >
              <Image
                src={gmail}
                alt="gmail"
                width={35}
                height={35}
                className="w-[40px] h-[40px] object-contain"
              />
              tech@base2brand.com
            </a>
            <a
              target="_blank"
              href="tel:(+91) 90417-00209"
              className="text-[18px] text-[#BBBBBB] font-thin flex items-center gap-[15px]"
            >
              <Image
                src={whatsapp}
                alt="whatsapp"
                width={35}
                height={35}
                className="w-[40px] h-[40px] object-contain"
              />
              (+91) 90417-00209
            </a>
            <a
              target="_blank"
              href="tel:(+91) 98724-87850"
              className="text-[18px] text-[#BBBBBB] font-thin flex items-center gap-[15px]"
            >
              <Image
                src={india}
                alt="india"
                width={35}
                height={35}
                className="w-[40px] h-[40px] object-contain"
              />
              (+91) 98724-87850
            </a>
            <a
              target="_blank"
              href="tel:(+1) 72090-35933"
              className="text-[18px] text-[#BBBBBB] font-thin flex items-center gap-[15px]"
            >
              <Image
                src={usa}
                alt="usa"
                width={35}
                height={35}
                className="w-[40px] h-[40px] object-contain"
              />
              (+1) 72090-35933
            </a>
            <a
              target="_blank"
              href="tel:(+44) 74484-35973"
              className="text-[18px] text-[#BBBBBB] font-thin flex items-center gap-[15px]"
            >
              <Image
                src={uk}
                alt="uk"
                width={35}
                height={35}
                className="w-[40px] h-[40px] object-contain"
              />
              (+44) 74484-35973
            </a>
          </div>
        </div>
      </div>
      {/* copy right  container */}
      <div className="flex flex-col md:flex-row items-center p-[20px_0] md:justify-center border-t-[1px] border-[#484848]">
        <div className="text-[16px] font-light text-[#BBBBBB] ">
          ©2025 All rights reserved |{" "}
          <a
            href="https://base2brand.com/"
            target="_blank"
            className="text-[#fff]"
          >
            Base2Brand
          </a>{" "}
          |
        </div>
        <div className="text-[16px] font-light text-[#BBBBBB] ">
          Disclaimer | Privacy Policy | Terms of Service
        </div>
      </div>
    </div>
  );
}
