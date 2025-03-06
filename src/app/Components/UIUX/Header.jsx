"use client";
import { useState,useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Detect active page
import base2brand from "../../../../public/assets/newlogo1.svg";
import callicon from "../../../../public/assets/icons/Group 1707480214.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const section1 =useRef();  
  const section2 =useRef();
  const section3 =useRef();
  const section4 =useRef(); 
  const scrollhandler =(secref) =>{
    window.screenTop({top:secref.current.offsetTop,behavior:"smooth"})
  }

  return (
    <>
      <div className="left-0 right-0 fixed w-full h-[100px] bg-gradient-to-b from-black via-[#121212] to-transparent z-[1000] ">
        <div className="container mx-aut0 w-full p-0">
          <header className="flex justify-between items-center py-4 px-[15px] md:px-0">
            {/* Logo */}
            <Link href="/" className="cursor-pointer">
              <div className="flex items-center">
                <Image
                  src={base2brand}
                  alt="BASE2BRAND"
                  width={140}
                  height={40}
                  className="transition-all duration-500 transform scale-95 hover:scale-100 w-[220px]"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-3 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
              {/* {navbarData.map((item) => ( */}
                {/* // <Link key={item.name} href={item.url}> */}
                  <div
                    className={`px-[16px] py-[8px] rounded-full text-[#96BF47] cursor-pointer  text-sm font-medium bg-[#3b3b3b]  border-2 border-dashed border-[#96BF47]`}
                  >
                    <span className="text-[16px]">CRM</span>
                  </div>
                  <div
                    className={`px-[16px] py-[8px] rounded-full text-[#96BF47] cursor-pointer  text-sm font-medium `}
                    onClick={()=>{scrollhandler(section1)}}
                  >
                    <span className="text-[16px]">ERP</span>
                  </div>
                  <div
                    className={`px-[16px] py-[8px] rounded-full text-[#96BF47] cursor-pointer  text-sm font-medium `}
                    onClick={()=>{scrollhandler(section2)}}
                  >
                    <span className="text-[16px]">POS</span>
                  </div>
                  <div
                    className={`px-[16px] py-[8px] rounded-full text-[#96BF47] cursor-pointer  text-sm font-medium `}
                    onClick={()=>{scrollhandler(section3)}}
                  >
                    <span className="text-[16px]">CUSTOM INTEGRATION</span>
                  </div>
                  <div
                    className={`px-[16px] py-[8px] rounded-full text-[#96BF47] cursor-pointer  text-sm font-medium  `}
                    onClick={()=>{scrollhandler(section4)}}
                  >
                    <span className="text-[16px]">OUR PRODUCTS</span>
                  </div>
                {/* // </Link> */}
              {/* ))} */}
            </nav>
             

              {/* On hover contact us  */}
              <ul className="dropdown-menu dropdown-menu-right ph_align_drop">
                  <li className="mega-menu">
                    <Link href="">
                      <div className="menuInner b2b-blue-bg">
                        <div className="phoneMenuIcon">
                          
                        </div>
                        <h4 className="b2b-title-text text-white">
                          Let&apos;s Connect with Base2brand Team
                        </h4>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu">
                    <div className="menuInner border-bottom pt-3">
                      <div className="phoneMenuIcon" />
                      <h4 className="b2b-title-text text-white text-uppercase">
                        for sales inquiry
                      </h4>
                    </div>
                  </li>
                  <li className="mega-menu">
                    <Link href="tel:+919872487850">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          +91 (987) 248 7850
                        </h3>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu">
                    <Link href="mailto:hello@base2brand.com">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          hello@base2brand.com
                        </h3>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu">
                    <div className="menuInner border-bottom pt-3">
                      <div className="phoneMenuIcon" />
                      <h4 className="b2b-title-text text-white text-uppercase">
                        for quick connect :
                      </h4>
                    </div>
                  </li>
                  <li className="mega-menu">
                    <Link href="https://wa.me/919041700209">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          +91 (904) 1700209
                        </h3>
                      </div>
                    </Link>
                  </li>
                  {/* <li className='mega-menu'>
            
              <div className="menuInner border-bottom pt-3">
                <div className='phoneMenuIcon'></div>
                  <h3 className='b2b-title-text text-white text-uppercase'>others</h3>
              </div>
            
            </li> */}
                  <li className="mega-menu">
                    <Link href="tel:+17209035933">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          +1 (720) 9035933
                        </h3>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu">
                    <Link href="tel:+0047448435973">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          + (0044) 7448435973
                        </h3>
                      </div>
                    </Link>
                  </li>
                </ul>

            {/* Contact Section */}
            <div className="hidden lg:flex gap-6 mr-3">
              <button className="bg-white xl:p-[6px_12px] p-[5px_10px] rounded-[25px] text-Dark shadow-md md:text-lg text-sm">
                Contact us
              </button>
              <div className="flex items-center space-x-4">
                <span className="text-lg text-white">Let’s Talk</span>
                <Link href="tel:584584758">
                  <Image
                    src={callicon}
                    alt="Call Icon"
                    width={41}
                    height={41}
                  />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button (Toggle) */}
            <div
              className="lg:hidden cursor-pointer flex flex-col gap-[5px] transition-transform hover:scale-110"
              onClick={() => setIsOpen(!isOpen)} // Toggle menu
            >
              {/* Show hamburger icon when menu is closed */}
              {!isOpen ? (
                <>
                  <span className="w-8 h-[2px] bg-primary"></span>
                  <span className="w-8 h-[2px] bg-primary"></span>
                  <span className="w-8 h-[2px] bg-primary"></span>
                </>
              ) : (
                /* Show cross icon when menu is open */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#a2d148] hover:text-gray-300 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </header>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="fixed inset-0 bg-[#000000c4] backdrop-blur-md flex flex-col items-center justify-center z-50">
        

          {/* Mobile Menu Links */}
          <div className="absolute top-20 w-full flex flex-col items-center">
            <ul className="space-y-6 text-center w-full">
              {navbarData.map((item) => (
                <li key={item.name} className="w-full text-end mt-0">
                  <Link href={item.url} onClick={() => setIsOpen(false)}>
                    <div
                      className={`block bg-[#0000000] text-[#a2d148] text-xl font-medium py-3 px-1 w-[90%] mx-auto  transition-all duration-300 ${
                        pathname === item.url
                          ? " text-[#a2d148] shadow-md"
                          : ""
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Call Button in Mobile Menu */}
            <div className="mt-6 w-[88%] justify-end flex">
              <Link
                href="tel:584584758"
                className="flex items-center gap-3 border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-black transition-all duration-300"
              >
                <Image src={callicon} alt="Call Icon" width={30} height={30} />
                <span className="text-lg">Let’s Talk</span>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
