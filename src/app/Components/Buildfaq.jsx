"use client";
import React, { useState,useEffect } from "react";
import AOS from "aos";
import { FaChevronDown } from 'react-icons/fa';
import "aos/dist/aos.css";
const Buildfaq = () => {
        useEffect(() => {
          AOS.init({ duration: 1000 });
        }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      no: "OPT /01",
      question: "Go Liquid",
      answer:
        "Get the best of both worlds. Build your own one-of-a-kind store in no time with Liquid, then leave the rest to us."
    },
    {
      no: "OPT /02",
      question: "Go headless",
      answer: "This option allows you to go headless with your store setup."
    },
    {
      no: "OPT /03",
      question: "Custom builds",
      answer: "We offer custom builds tailored to your specific needs."
    },
    {
      no: "OPT /04",
      question: "Custom Integration",
      answer:
        "Our custom integration services ensure seamless connectivity with your existing systems."
    }
  ];

  return (
    <div className="pt-4">
      {faqItems.map((item, index) =>
        <div key={index} className="mb-2 custoum_border border-b-[1px] border-[#3d3d3d]">
          <div className="flex items-center relative"  onClick={() => toggleFAQ(index)}>
            <span className={`text-[14px] p-[0px_15px]  ${
                activeIndex === index ? 'bg-[#96BF47] shadow-[inset_0_0_29px_#d8f999,0_0_34px_#b4ff23]' : 'bg-[#96BF47]'
              }`} >
              {item.no}
            </span>
            <button
              className=" text-left text-[18px] p-2 bg-black-100 rounded-lg focus:outline-none transition duration-200 ease-in-out"
            >
              {item.question}
            </button>
            <FaChevronDown
              className={`transform transition-transform duration-200 absolute right-[2%] ${
                activeIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-200 ease-in-out ${activeIndex ===
            index
              ? "max-h-40"
              : "max-h-0"}`}
          >
            <div className="p-2 text-[14px] leading-[24px] bg-black rounded-b-lg">
              {item.answer}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buildfaq;
