"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import { FaChevronDown } from "react-icons/fa";
import "aos/dist/aos.css";
import launchimg1 from "../../../public/assets/launchimg1.png";
import launchimg2 from "../../../public/assets/launchimg2.png";
import launchimg3 from "../../../public/assets/launchimg3.png";
import launchimg4 from "../../../public/assets/launchimg4.png";
import Image from "next/image";
const Faqs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
  const faqItems = [
    {
      id: 1,
      no: "01",
      question: "Q: What is a POS (point of sale)?",
      answer:
        "A POS (Point of Sale) system processes in-person sales and integrates with your Shopify store. It helps manage transactions, inventory, and customer data across both online and offline channels, offering a unified sales experience.",
      img: launchimg1
    },
    {
      id: 2,
      no: "02",
      question: "Q: What are the benefits of using a POS system?",
      answer:
        "A POS (Point of Sale) system processes in-person sales and integrates with your Shopify store. It helps manage transactions, inventory, and customer data across both online and offline channels, offering a unified sales experience.",
      img: launchimg2
    },
    {
      id: 3,
      no: "03",
      question: "Q: What features does this B2B ecommerce solution have?",
      answer:
        "A POS (Point of Sale) system processes in-person sales and integrates with your Shopify store. It helps manage transactions, inventory, and customer data across both online and offline channels, offering a unified sales experience.",
      img: launchimg3
    },
    {
      id: 4,
      no: "04",
      question: "Q: Can I integrate my ERP with Shopify?",
      answer:
        "A POS (Point of Sale) system processes in-person sales and integrates with your Shopify store. It helps manage transactions, inventory, and customer data across both online and offline channels, offering a unified sales experience.",
      img: launchimg4
    }
  ];
  const faqItems2 = [
    {
      id: 5,
      no: "05",
      question: "Q: Which industries use Shopify's B2B ecommerce platform?",
      answer:
        "A POS (Point of Sale) system processes in-person sales and integrates with your Shopify store. It helps manage transactions, inventory, and customer data across both online and offline channels, offering a unified sales experience.",
      img: launchimg1
    },
    {
      id: 6,
      no: "06",
      question: "Q: Is B2B on Shopify included in my plan?",
      answer:
        "A POS (Point of Sale) system processes in-person sales and integrates with your Shopify store. It helps manage transactions, inventory, and customer data across both online and offline channels, offering a unified sales experience.",
      img: launchimg2
    },
    {
      id: 7,
      no: "07",
      question: "Q: What other features are coming?",
      answer:
        "A POS (Point of Sale) system processes in-person sales and integrates with your Shopify store. It helps manage transactions, inventory, and customer data across both online and offline channels, offering a unified sales experience.",
      img: launchimg3
    },
    {
      id: 8,
      no: "08",
      question: "Q: How does it work?",
      answer:
        "A POS (Point of Sale) system processes in-person sales and integrates with your Shopify store. It helps manage transactions, inventory, and customer data across both online and offline channels, offering a unified sales experience.",
      img: launchimg4
    }
  ];

  return (
    <div className="pt-4 pb-4">
    <div className=" container text-center flex flex-col items-center md:pb-3">
          <div className="flex md:flex-row flex-col gap-0 md:gap-3">
            <h2 className="md:leading-[60px] ">
              Frequently Asked
            </h2>
            <h2 className=" md:leading-[60px] text-[#989898]"> Questions!</h2>
          </div>
        </div>
    <div className="flex container md:flex-row flex-col">
      <div className="pt-4 md:w-[50%] flex flex-col">
        {faqItems.map((item, index) =>
          <div className="md:p-[0px_2%]" key={item.id}>
            <div
              className="md:mb-2 custoum_border p-[10px_0]"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex flex-col items-start   border-[1px] border-[#414141]  rounded-[15px]">
                <div className="flex relative w-[100%] justify-start">
                  <div className="flex items-start h-[100%] rounded-tl-[15px]">
                    <span
                      className={`text-[14px] p-[7px_12px] h-[100%] border-r-[1px] rounded-br-[15px] border-b-[1px]  font-semibold rounded-tl-[15px] ${activeIndex ===
                      index
                        ? "bg-[#96BF47] text-[#fff] border-[#96BF47] shadow-[inset_0_0_29px_#d8f999,0_0_34px_#b4ff23]"
                        : "bg-[#000000] text-[#96BF47] border-[#414141]"}`}
                    >
                      {item.no}
                    </span>
                  </div>
                  <button className="md:w-[80%] text-left text-[16px] md:text-[16px] p-[15px] bg-black-100 rounded-lg focus:outline-none transition duration-200 ease-in-out">
                    {item.question}
                  </button>
                  <div
                    className={`w-[12%] hidden absolute right-[0] h-[100%] rounded-tr-[15px] top-0 md:flex items-center justify-center border-l-[1px]  ${activeIndex ===
                    index
                      ? "border-b-[1px] bg-[#96BF47] border-[#96BF47] rounded-bl-[15px] shadow-[inset_0_0_29px_#d8f999,0_0_34px_#b4ff23]"
                      : "border-b-0 bg-none border-[#414141] rounded-br-[0]"}`}
                  >
                    <FaChevronDown
                      className={`transform transition-transform duration-200 ${activeIndex ===
                      index
                        ? "rotate-180"
                        : "rotate-0"}`}
                    />
                  </div>
                </div>
                {/* ehth */}
                <div
                  className={`overflow-hidden transition-max-height duration-200 ease-in-out ${activeIndex ===
                  index
                    ? "max-h-60 rounded-br-[20px] rounded-bl-[20px]"
                    : "max-h-0"}`}
                >
                  <div className="p-[0_11%_4%] pt-0  text-[14px] md:text-[13px] leading-[23px] bg-black rounded-b-lg">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="md:pt-4 md:w-[50%] flex flex-col">
        {faqItems2.map((item, index) =>
          <div className="md:p-[0px_2%]" key={item.id}>
            <div
              className="md:mb-2 custoum_border p-[10px_0]"
              onClick={() => toggleFAQ2(index)}
            >
              <div className="flex flex-col items-start   border-[1px] border-[#414141]  rounded-[20px]">
                <div className="flex relative w-[100%] justify-start">
                  <div className="flex items-start h-[100%] rounded-tl-[20px]">
                    <span
                      className={`text-[14px] p-[7px_12px] h-[100%] border-r-[1px] rounded-br-[15px] border-b-[1px]  font-semibold rounded-tl-[20px] ${activeIndex2 ===
                      index
                        ? "bg-[#96BF47] text-[#fff] border-[#96BF47] shadow-[inset_0_0_29px_#d8f999,0_0_34px_#b4ff23]"
                        : "bg-[#000000] text-[#96BF47] border-[#414141]"}`}
                    >
                      {item.no}
                    </span>
                  </div>
                  <button className=" md:w-[80%] text-left text-[16px] md:text-[16px] p-[15px] bg-black-100 rounded-lg focus:outline-none transition duration-200 ease-in-out">
                    {item.question}
                  </button>
                  <div
                    className={`min-w-[60px] hidden  absolute right-[0] h-[100%] rounded-tr-[20px] top-0 md:flex items-center justify-center border-l-[1px]  ${activeIndex2 ===
                    index
                      ? "border-b-[1px] bg-[#96BF47] border-[#96BF47] rounded-bl-[20px] shadow-[inset_0_0_29px_#d8f999,0_0_34px_#b4ff23]"
                      : "border-b-0 bg-none border-[#414141] rounded-br-[0]"}`}
                  >
                    <FaChevronDown
                      className={`transform transition-transform duration-200 ${activeIndex2 ===
                      index
                        ? "rotate-180"
                        : "rotate-0"}`}
                    />
                  </div>
                </div>
                {/* ehth */}
                <div
                  className={`overflow-hidden transition-max-height duration-200 ease-in-out ${activeIndex2 ===
                  index
                    ? "max-h-60 rounded-br-[20px] rounded-bl-[20px]"
                    : "max-h-0"}`}
                >
                  <div className="p-[0_11%_4%] pt-0 text-[13px] leading-[23px] bg-black rounded-b-lg">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Faqs;
