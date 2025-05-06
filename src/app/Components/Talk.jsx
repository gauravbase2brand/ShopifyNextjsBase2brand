import Image from "next/image";
import React from "react";
import lineimg1 from "../../../public/assets/talkimg2.png";
import lineimg2 from "../../../public/assets/talkimg1.png";
import banner from "../../../public/assets/talkbanner.png"
import Button from "./UIUX/Button";
export default function Talk() {
  return (
    <div className="pt-4 pb-4 relative">
      <div className="flex items-center">
        <div className="md:w-[15%] hidden md:block">
            <Image src={lineimg1} alt="" width={1000} height={500} className="w-[100%]" />
        </div>
        <div className="md:w-[70%] w-[100%] flex justify-center">
           <Image src={banner} alt="" width={1000} height={500} className="w-[80%]" />
        </div>
        <div className="w-[15%] hidden md:block">
            <Image src={lineimg2} alt="" width={1000} height={500} className="w-[100%]" />
        </div>
      </div>
       <div className="custom_gradient_right w-[600px] h-[500px] right-[0%] top-[-10%]"></div>
      <div className="pt-[4%] relative h-[100px] flex flex-col justify-center">
        <hr className="border-[#95b950c4] " />
        <div className="absolute w-[100%] flex justify-center items-center">
          <a href="https://wa.me/9872487850"target="_blank" >
           <Button GButton={"Get Started Now"} />
         </a>
        </div>
      </div>
      <div className="custom_gradient_right w-[600px] h-[500px] left-[30%] top-[-10%]"></div>

      <div className="custom_gradient_right w-[600px] h-[500px] left-[0%] top-[-10%]"></div>
      {/* <div className="custom_gradient_right w-[600px] h-[500px] left-[0%] top-[45%]" /> */}
    </div>
  );
}
