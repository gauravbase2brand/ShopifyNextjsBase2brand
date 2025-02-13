"use client"
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Heading = ({ Heading1, Heading2, Paragraph, paragraphWidth }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    return (
        
        <>
        <div className="xl:py-10 lg:py-6 py-4">
        <div className="container">
            {/* Heading with dynamic width using Tailwind CSS breakpoints */}
            <h2 className={`text-center w-full mx-auto`} data-aos="zoom-in">
                {Heading1}&nbsp;
                <span className="text-[#989898]">{Heading2}</span>
            </h2>

            {/* Paragraph with dynamic width using Tailwind CSS breakpoints */}
            <p className={`text-center text-secondary ${paragraphWidth || 'w-full sm:w-1/2  lg:w-[50%] md:w-9/12 '} mx-auto`} data-aos="zoom-in">
                {Paragraph}
            </p>
        </div>
        </div>
        </>
    );
}

export default Heading;
