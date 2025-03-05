import React from "react";
import Image from "next/image";
import inteimg1 from "../../../public/assets/icons/inteicon1.svg";
import inteimg2 from "../../../public/assets/icons/inteicon2.svg";
import inteimg3 from "../../../public/assets/icons/inteicon3.svg";
import inteimg4 from "../../../public/assets/icons/inteicon4.svg";
import inteimg5 from "../../../public/assets/icons/inteicon5.svg";
import inteimg6 from "../../../public/assets/icons/inteicon6.svg";
import backgroundimg from "../../../public/assets/intebgback.png";
const intecardsdata = [
  {
    id: 1,
    inteimg: inteimg1,
    intetitle: "AR Integration",
    intedes:
      "Deliver immersive shopping experiences with AR-powered product previews. Let your customers visualize products in real-time, boosting buying confidence and reducing returns."
  },
  {
    id: 2,
    inteimg: inteimg2,
    intetitle: "VR Integration",
    intedes:
      "Supercharge your Shopify store with Hydrogen’s headless architecture, offering blazing-fast performance, dynamic personalization, and unparalleled scalability."
  },
  {
    id: 3,
    inteimg: inteimg3,
    intetitle: "Custom Discount Functions",
    intedes:
      "Custom discount functions enable personalized pricing, optimizing sales based on customer type, history, and promotions."
  },
  {
    id: 4,
    inteimg: inteimg4,
    intetitle: "Custom Delivery Functions",
    intedes:
      "Custom delivery functions allow businesses to tailor delivery options based on customer needs, location, and preferences, enhancing service flexibility."
  },
  {
    id: 5,
    inteimg: inteimg5,
    intetitle: "Payment Customizations",
    intedes:
      "Payment customizations allow businesses to adjust payment methods and terms, providing customers with a personalized and convenient checkout experience."
  },
  {
    id: 6,
    inteimg: inteimg6,
    intetitle: "Cart Transform API",
    intedes:
      "The Cart Transform API lets businesses customize shopping carts in real-time, improving user experience and checkout efficiency."
  }
];
export default function Integration() {
  return (
      <div className="">
        {/* Heading */}
        <div className=" container text-center flex flex-col items-center"  data-aos="fade-up">
          <div className="flex md:flex-row flex-col gap-0 md:gap-3">
            <h2 className="md:leading-[60px]">Shopify Integrations</h2>
            <h2 className="text-[#989898] md:leading-[60px] "> for a Seamless</h2>
          </div>
          <h2 className="text-[#989898] md:leading-[60px]">
            Shopping Experience
          </h2>
          <p className="text-center pt-3 pb-3 text-secondary w-full sm:w-1/2 lg:w-[70%] md:w-9/12 mx-auto">
            Upgrade your store's functionality with cutting-edge integrations
            designed to captivate shoppers and drive conversions.
          </p>
        </div>
        {/* Integration card */}
        <div
          className="flex flex-wrap justify-around gap-y-[20px] pb-[5%]"
          style={{
            backgroundImage: `url(${backgroundimg.src})`
          }}
        >
          <div className="container flex flex-wrap justify-around gap-y-[20px]">
            {intecardsdata.map((data, index) =>
              <div
                className="lg:w-[31.5%] md:w-[48%] w-[97%] p-[2%] hover_cus_scale cursor-pointer border-[2px] border-[#3f5a0978] rounded-[20px]"
                key={index}
                data-aos="fade-up"
                data-aos-duration={`${index+5}00`}
              >
                <div className="flex p-[10px_0] md:p-0 justify-center md:justify-start">
                  <Image
                    src={data.inteimg}
                    alt=""
                    width={1000}
                    height={500}
                    className="w-[60px]"
                  />
                </div>
                <div className="min-h-[75px] md:min-h-[94px] md:justify-start justify-center flex items-center pt-2 pb-2">
                  <h3 className="text-[28px] text-center md:text-start md:m-0 m-[0px_10px]  leading-[35px] font-black">
                    {data.intetitle}
                  </h3>
                </div>
                <div className="min-h-[120px] flex md:items-start items-center">
                  <p className="font-[#ddd] md:text-start text-center text-[13px] leading-[24px] m-0">
                    {data.intedes}
                  </p>
                </div>
                <div className="flex">
                  <span className="text-[#96BF47] w-[100%] text-[15px] cursor-pointer md:text-start text-center">
                    Read More
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
  );
}
