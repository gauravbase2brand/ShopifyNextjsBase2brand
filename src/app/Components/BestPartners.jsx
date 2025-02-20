import React from 'react'
import Heading from './UIUX/Heading'
import Image from 'next/image'
import parimage1 from "../../../public/assets/partner-logo1.webp";
import parimage2 from "../../../public/assets/partner-logo2.webp";
import parimage3 from "../../../public/assets/partner-logo3.webp";
import parimage4 from "../../../public/assets/partner-logo4.webp";
import litebg from "../../../public/assets/lite-bg.png"
export default function BestPartners() {
    return (
        <div className='pt-5 pb-5'>
            <div className='container pt-5 pb-5 flex flex-col md:flex-row'>
                <div className="w-[100%] md:w-[50%] md:px-[4%] md:border-r-2 md:border-[#9c9999]">
                    {/* <Heading Heading2={"We Work With the"} Heading1={""} /> */}
                    <h2 className='md:text-[50px] text-center md:text-right text-[#989898] md:leading-[65px]'>We Work With the</h2>
                    <h2 className='md:text-[50px] text-center md:text-right md:leading-[65px]'>Best Partners</h2>
                    <p className='text-gray-300 text-center md:text-right py-3 md:py-0'>
                        While we are at the forefront of and specialize in design-build, we are very familiar with a number of delivery methods and are confident we can find the process
                        that will best help you meet your goals.
                    </p>
                </div>
                <div className="w-[100%] md:w-[50%] md:px-[4%] flex flex-col justify-center gap-[10%]"
                style={{
                    background:"radial-gradient(circle, rgba(150,191,71,0.561305283832283) 0%, rgba(0,0,0,1) 46%)"
                }}
                >
                    <div className='flex w-[100%] h-[100px] md:h-auto'>
                        <div className="i w-[50%] flex justify-center">
                            <Image src={parimage1} width={1000} height={500} alt="" className='w-[80%] object-contain' />
                        </div>
                        <div className="i w-[50%] flex justify-center">
                        <Image src={parimage2} width={1000} height={500} alt="" className='w-[80%] object-contain' />
                        </div>
                    </div>
                    <div className='flex w-[100%] h-[100px] md:h-auto'>
                        <div className="i w-[50%] flex justify-center">
                            <Image src={parimage3} width={1000} height={500} alt="" className='w-[80%] object-contain' />
                        </div>
                        <div className="i w-[50%] flex justify-center">
                        <Image src={parimage4} width={1000} height={500} alt="" className='w-[80%] object-contain' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
