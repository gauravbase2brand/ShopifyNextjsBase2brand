import Link from "next/link";
import React from "react";

const Button = ({ GButton , Glink }) => {
  return (
    <>
      <div className="mt-30">
        <Link
          href={Glink}
          className="px-5 py-[10px] text-white font-semibold rounded-full  text-lg capitalize
            ,0_0_40px_rgba(180,255,35,0.6)] 
               transition-shadow duration-400 ease-in-out 
               hover:shadow-[inset_0_0_29px_#d8f999,0_0_34px_#b4ff23] hover:duration-400 
               bg-[#96bf47]"
        >
          {GButton}
        </Link>
      </div>
    </>
  );
};

export default Button;
