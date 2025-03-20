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
import faqbg from "../../../public/assets/faq-bg2.png"
const Faqs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
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
      question: "Q: How can your Shopify expert services help increase my store’s conversions?",
      answer:
        "We optimize store design, improve user experience, and implement data-driven strategies to enhance customer engagement, boost conversions, and reduce cart abandonment, leading to higher sales and revenue.",
      img: launchimg1
    },
    {
      id: 2,
      no: "02",
      question: "Q: Do you offer custom Shopify store development?",
      answer:
        "Yes, we build fully customized Shopify stores tailored to your brand’s needs, ensuring seamless navigation, mobile responsiveness, and an optimized checkout process for a superior shopping experience.",
      img: launchimg2
    },
    {
      id: 3,
      no: "03",
      question: "Q: Can you help migrate my store to Shopify?",
      answer:
        "Absolutely! We provide hassle-free migration services, ensuring all products, customer data, and orders are transferred securely while improving site functionality and performance.",
      img: launchimg3
    },
    {
      id: 4,
      no: "04",
      question: "Q: Do you provide ongoing Shopify maintenance and support?",
      answer:
        "Yes, we offer continuous support, updates, and troubleshooting to keep your Shopify store running smoothly, ensuring peak performance and a seamless shopping experience for customers.",
      img: launchimg4
    }
  ];
  const faqItems2 = [
    {
      id: 5,
      no: "05",
      question: "Q: How do you reduce cart abandonment on Shopify stores?",
      answer:
        "We implement strategies like optimized checkout processes, abandoned cart recovery emails, and performance improvements to encourage customers to complete their purchases, increasing overall sales.",
      img: launchimg1
    },
    {
      id: 6,
      no: "06",
      question: "Q: How can your services improve my Shopify store's SEO?",
      answer:
        "We conduct thorough SEO audits, optimize product pages, and implement on-page SEO strategies to help your Shopify store rank higher on search engines, driving organic traffic and increasing visibility.",
      img: launchimg2
    },
    {
      id: 7,
      no: "07",
      question: "Q: Can you help with Shopify app integrations? ",
      answer:
        "Yes, we assist in integrating third-party apps and tools to enhance your store’s functionality, whether it’s for marketing, inventory management, or customer engagement, ensuring a fully optimized store.",
      img: launchimg3
    },
    {
      id: 8,
      no: "08",
      question: "Q: How do you ensure my Shopify store’s security?",
      answer:
        "We implement best practices for Shopify store security, including SSL certification, secure payment gateways, and regular backups, ensuring your store and customer data are safe from any vulnerabilities.",
      img: launchimg4
    }
  ];

  return (
    <div className="pt-4 pb-4 relative">
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
              <div className="flex flex-col items-start   border-[1px] border-[#414141]  rounded-[15px]" 
              style={{
                backgroundImage: `url(${faqbg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              >
                <div className="flex relative w-[100%] justify-start">
                  <div className="flex items-start h-[100%] rounded-tl-[15px]">
                    <span
                      className={`text-[14px] p-[7px_12px] h-[100%] border-r-[1px] rounded-br-[15px] border-b-[1px]  font-semibold rounded-tl-[15px] ${activeIndex ===
                      index
                        ? "bg-[#96BF47] text-[#fff] border-[#96BF47] shadow-[inset_0_0_29px_#d8f999,0_0_34px_#b4ff23]"
                        : "bg-[#00000000] text-[#96BF47] border-[#414141]"}`}
                    >
                      {item.no}
                    </span>
                  </div>
                  <button className="md:w-[80%] font-poppins text-left text-[15px] md:text-[16px] p-[15px] bg-black-100 rounded-lg focus:outline-none transition duration-200 ease-in-out">
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
                  <div className="md:p-[0_11%_4%] font-poppins text-[#bab7b7]  p-[0%_2%_4%_4%] pt-0 bg-transparent  text-[12px] md:text-[14px] leading-[20px] md:leading-[23px] bg-black rounded-b-lg">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="custom_gradient_right w-[300px] h-[300px] left-[0%] top-[50%]"></div>
      <div className="md:pt-4 md:w-[50%] flex flex-col">
        {faqItems2.map((item, index) =>
          <div className="md:p-[0px_2%]" key={item.id}>
            <div
              className="md:mb-2 custoum_border p-[10px_0]"
              onClick={() => toggleFAQ2(index)}
            >
              <div className="flex flex-col items-start   border-[1px] border-[#414141]  rounded-[20px]" 
            style={{
              backgroundImage: `url(${faqbg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
              >
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
                  <button className=" md:w-[80%] font-poppins text-left text-[15px] md:text-[16px] p-[15px] bg-black-100 rounded-lg focus:outline-none transition duration-200 ease-in-out">
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
                  <div className="md:p-[0_11%_4%] font-poppins p-[0%_2%_4%_4%] pt-0 md:text-[14px] text-[12px] bg-transparent leading-[20px] md:leading-[23px] bg-black text-[#bab7b7] rounded-b-lg">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="custom_gradient_right w-[600px] h-[500px] right-[0%] top-[-10%]"></div>
    </div>
    </div>
  );
};

export default Faqs;
