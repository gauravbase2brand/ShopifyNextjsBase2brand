import React from 'react'
import Heading from './UIUX/Heading'
import Image from 'next/image'
import parimage1 from "../../../public/assets/partner-logo1.webp";
import parimage2 from "../../../public/assets/partner-logo2.webp";
import parimage3 from "../../../public/assets/partner-logo3.webp";
import parimage4 from "../../../public/assets/partner-logo4.png";
import litebg from "../../../public/assets/lite-bg.png"
import Link from 'next/link';
export default function BestPartners() {
    return (
        <div className='pt-5 pb-5 relative'>
            <div className='container pt-5 pb-5 flex flex-col md:flex-row'  data-aos="fade-up">
                <div className="w-[100%] md:w-[50%] md:px-[4%] md:border-r-2 md:border-[#9c9999]">
                    {/* <Heading Heading2={"We Work With the"} Heading1={""} /> */}
                    <h2 className='text-center md:text-right text-[#989898] md:leading-[55px]'>We Work With the</h2>
                    <h2 className='text-center md:text-right md:leading-[55px]'>Best Partners</h2>
                    <p className='text-gray-300 text-center md:text-right py-3 md:py-0'>
                        While we are at the forefront of and specialize in design-build, we are very familiar with a number of delivery methods and are confident we can find the process
                        that will best help you meet your goals.
                    </p>
                </div>
                <div className="w-[100%] md:w-[50%] md:px-[4%] flex flex-col justify-center gap-[10%]">
                    <div className='flex w-[100%] h-[100px] md:h-auto mb-2'>
                        <div className="i w-[50%] flex justify-center">
                            {/* <a href="https://www.theindiecollab.com/" className='w-[100%] flex justify-center' target='_blank'> */}
                            <Image src={parimage1} width={1000} height={500} alt="" className='w-[70%] object-contain' />
                            {/* </a> */}
                        </div>
                        <div className="i w-[50%] flex justify-center">
                        {/* <a href="https://www.saasintegrator.com/" className='w-[100%] flex justify-center' target='_blank'> */}
                        <Image src={parimage2} width={1000} height={500} alt="" className='w-[70%] object-contain' />
                        {/* </a> */}
                        </div>
                    </div>
                    <div className='flex w-[100%] h-[100px] md:h-auto'>
                        <div className="i w-[50%] flex justify-center">
                          {/* <a href="https://imsdigitalai.com/" className='w-[100%] flex justify-center' target='_blank'> */}
                            <Image src={parimage3} width={1000} height={500} alt="" className='w-[70%] object-contain' />
                         {/* </a> */}
                        </div>
                       
                        <div className="i w-[50%] flex justify-center">
                        {/* <a href</div>="" className='w-[100%] flex justify-center items-center'> */}
                          <Image src={parimage4} width={1000} height={500} alt="" className='w-[70%] object-contain' />
                        {/* </a> */}
                        </div>
                    </div>
                </div>
            </div>
          <div className="custom_gradient_right w-[600px] h-[500px] right-[10%] top-[-40%]" />
        </div>
    )
}
