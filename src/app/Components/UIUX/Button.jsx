import Link from "next/link";
import React from "react";

const Button = ({ GButton , Glink,btn_target }) => {
  return (
    <>
      <div className="mt-30">
        <a
          href={Glink}
          target={btn_target}
          className="px-5 font-poppins  shadow-[inset_3px_3px_14px_0px_#ffffff8c] py-[10px] text-black font-semibold rounded-full  text-lg capitalize
            ,0_0_40px_rgba(180,255,35,0.6)] 
               transition-shadow duration-400 ease-in-out 
               hover:shadow-[inset_0_0_29px_#d8f999,0_0_34px_#b4ff23] hover:duration-400 
               bg-[#96bf47]"
        >
          {GButton}
        </a>
      </div>
    </>
  );
};

export default Button;
