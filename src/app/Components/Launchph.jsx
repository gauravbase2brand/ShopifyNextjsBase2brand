"use client";
import React, { useState,useEffect } from "react";
import AOS from "aos";
import { FaChevronDown } from 'react-icons/fa';
import "aos/dist/aos.css";
import launchimg1 from "../../../public/assets/launched4.png";
import launchimg2 from "../../../public/assets/launchimg2.png";
import launchimg3 from "../../../public/assets/launchimg3.png";
import launchimg4 from "../../../public/assets/luncged1.png";
import Image from "next/image";
const Launchph = () => {
        useEffect(() => {
          AOS.init({ duration: 1000 });
        }, []);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      no: "1st Week",
      question: "Research & Propose",
      answer:
        "In Week 1, we’ll focus on understanding your goals and challenges through targeted research. We’ll analyze market trends, competitors, and key data to craft a tailored strategy. By the end of the week, you’ll have a clear, actionable plan aligned with your objectives.",
      img:launchimg4
    },
    {
      no: "2nd Week",
      question: "Design & Build",
      answer: "In Week 2, we’ll take the strategy from Week 1 and start turning it into reality. Our team will design creative solutions and build the necessary frameworks, whether it’s a website, campaign, or product. We’ll focus on seamless execution, ensuring that everything is aligned with your vision and objectives, setting the stage for success.",
      img:launchimg3
    },
    {
      no: "3rd Week",
      question: "Write & Revise",
      answer: "During Week 3, we’ll focus on crafting and refining the content or deliverables based on the design and strategy. Whether it's copy, technical documentation, or marketing materials, we’ll ensure everything is clear, engaging, and on brand. Through collaboration and feedback, we'll make revisions to perfect the final output, ensuring it meets your expectations.",
      img:launchimg2
    },
    {
      no: "4th Week",
      question: "Testing & Launch",
      answer:
        "In the final week, we’ll thoroughly test all elements to ensure everything functions perfectly. This includes quality checks, troubleshooting, and refining based on feedback. Once everything is optimized, we’ll launch the project, making it live and ready for your audience. Our goal is to ensure a smooth, successful launch with no issues.",
        img:launchimg1
    }
  ];

  return (
    <div className="pt-4">
      {faqItems.map((item, index) =>
      < div key={index} className="pb-5">
        <div className="mb-2 custoum_border p-[10px_0]"   onClick={() => toggleFAQ(index)}                          >
          <div className="flex items-center relative  border-[2px] border-[#414141] border-b-0 rounded-tr-[20px] rounded-tl-[20px]">
            <span className={`text-[14px] p-[15px] h-[100%]  text-black font-semibold rounded-tl-[20px] ${
                activeIndex === index ? 'bg-[#96BF47] shadow-[inset_0_0_29px_#d8f999,0_0_34px_#b4ff23]' : 'bg-[#96BF47]'}`}>
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
            className={`overflow-hidden transition-max-height duration-200 ease-in-out border-[2px] border-t-0 border-[#414141] ${activeIndex ===
            index
              ? "max-h-60 rounded-br-[20px] rounded-bl-[20px]"
              : "max-h-0"}`}
          >
            <div className="p-[10px] text-[14px] leading-[24xp] bg-black rounded-b-lg">
              {item.answer}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <Image src={item.img} alt="" width={1000} height={500} className="w-[90%]" />
        </div>
        </div>
      )}
    </div>
  );
};

export default Launchph;
