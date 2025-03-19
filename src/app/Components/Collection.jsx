
"use client";
import { useState,useRef,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import base2brand from "../../../public/assets/newlogo1.svg";
import callicon from "../../../public/assets/icons/Group 1707480214.webp";
import Banner from "./Banner";
import BannerSlider from "./BannerSlider";
import ServicesWeProvide from "./ServicesWeProvide";
import ShopifyPartnerDashboard from "./ShopifyPartnerDashboard";
import Heading from "./UIUX/Heading";
import fiestsliderimage from "../../../public/assets/fiestsliderimage.webp";
import TrustedLeadingBrands from "./TrustedLeadingBrands";
import cardimage from "../../../public/assets/slider-cardimg1.svg"
import cardimage3 from "../../../public/assets/cardimage3.webp"
import cardimage4 from "../../../public/assets/slider-cardimg3.svg"
import cardimage5 from "../../../public/assets/cardimage5.webp"
import cardimage6 from "../../../public/assets/cardimage6.png"
import BestPartners from "./BestPartners";
import Slider from "./Slider";
import Integration from "./Integration";
import Reviews from "./Reviews";
// import Bulid from "./Components/Bulid";
import Launched from "./Launched";
// import Team from "./Components/Team";
import Faqs from "./Faqs";
import Talk from "./Talk";
import ScrollVideo from "./Videoani";
// footer
import base2brand2 from "../../../public/assets/base2brand-logo 2.png";
import facebook from "../../../public/assets/facebookimg.png";
import instagram from "../../../public/assets/instaimg.png";
import twiter from "../../../public/assets/twiterimg.png";
import skype from "../../../public/assets/skypeimg.png";
import youtube from "../../../public/assets/youimg.png";
import linkedin from "../../../public/assets/linkedinimg.png";
import gmail from "../../../public/assets/gmail.png";
import whatsapp from "../../../public/assets/whatsapp.png";
import india from "../../../public/assets/india.png";
import usa from "../../../public/assets/usa.png";
import uk from "../../../public/assets/uk.png";
import { useRouter } from 'next/navigation';
import { FaChevronDown } from "react-icons/fa";
import whatsappfixed from "../../../public/assets/whatsappfixed1.jpg"
import Upperslider from "./Upperslider";
import ImageSlider from "./Imageslider";
const page = () => {
  const [scrolly, setScrollY] = useState(0);
  const [card1Scroll, setCard1Scroll] = useState(null);
  const [card2Scroll, setCard2Scroll] = useState(null);
  const [letstak,setletstalk] = useState('')
  const [activebg,setactivebg] =useState('')
  const [isOpen, setIsOpen] = useState(false);
 
  const section1 =useRef(null);  
  const section2 =useRef(null);
  const section3 =useRef(null);
  const section4 =useRef(null); 
  const section5 =useRef(null); 
  const section6 =useRef(null); 
    useEffect(() => {
      const handleScroll3 = () => {
        const scrollyy = window.scrollY;
        setScrollY(scrollyy);
      };
      if (section1.current) {
        const rect1 = section1.current.getBoundingClientRect();
        setCard1Scroll(scrollY + rect1.top);
      }
      if (section6.current) {
        const rect2 = section6.current.getBoundingClientRect();
        setCard2Scroll(scrollY + rect2.top);
      }
      window.addEventListener("scroll", handleScroll3);
  
      return () => {
        window.removeEventListener("scroll", handleScroll3);
      };

    }, [])

 
    const scrollhandler = (secRef) => {
        if (secRef?.current) {
            const elementPosition = secRef.current.getBoundingClientRect().top; 
            const offset = window.pageYOffset; 
            const finalPosition = elementPosition + offset ; 
            window.scrollTo({ top: finalPosition, behavior: "smooth" });
        }
    };
    const setbgnavbar = (currentnav)=>{
       setactivebg(currentnav)
    }
    
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
        const router = useRouter();
        const changeRoute = (path) => {
          router.push(path); 
          console.log("workign path",path)
        };
      
  return (
    <div>
        {/*::::::::::::::::::::::::::::::::::::::::::::::
           ::::::::::::::::::Header ::::::::::::::
           ::::::::::::::::::::::::::::::::::::::::::::*/}
          <div> 
            <div className="left-0 right-0 fixed w-[100vw] h-[100px] bg-gradient-to-b from-black via-[#050505e6] to-transparent z-[1000] ">
        <div className="ps-4 pe-4 m-0 w-[100vw] p-0">
          <header className="flex justify-between items-center relative py-4 md:px-4">
            {/* Logo */}
            {/* <a href="https://base2brand.com" className="cursor-pointer"> */}
              <div className="flex items-center" >
                <Image
                  src={base2brand}
                  alt="BASE2BRAND"
                  width={140}
                  height={40}
                  onClick={() => window.open("https://base2brand.com", "_blank")} 
                  className="transition-all w-[70%] duration-500 transform scale-95  lg:w-[299px]"
                />
              </div>
            {/* </a> */}

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-3  px-4 py-2 rounded-full">
              {/* {navbarData.map((item) => ( */}
                {/* // <Link key={item.name} href={item.url}> */}
                  <div
                    className={`px-[16px] py-[8px] rounded-full text-[#96BF47] cursor-pointer  text-sm font-medium ${
                      activebg === "nav1" && (scrolly >= card1Scroll && scrolly <=card2Scroll)?
                      "bg-[#3b3b3b]  border-2 border-dashed border-[#96BF47]":
                      ""
                    }`}
                    onClick={() => { setbgnavbar("nav1") ;scrollhandler(section1)}}
                  >
                    <span className="text-[16px]  text-poppins">ERP</span>
                  </div> 
                  {/* <div
                    className={`px-[16px] py-[8px] rounded-full text-[#96BF47]  cursor-pointer  text-sm font-medium 
                      ${activebg === "api"?
                        " bg-[#3b3b3b]  border-2 border-dashed border-[#96BF47]":
                        ""
                      }
                      `}
                      onClick={() => { setbgnavbar("api") ;scrollhandler(section2)}}
                  >
                    <span className="text-[16px]"> SAI</span>
                  </div> */}
                  <div
                    className={`px-[16px] py-[8px] rounded-full text-[#96BF47]  cursor-pointer  text-sm font-medium 
                      ${activebg === "nav2"?
                        " bg-[#3b3b3b]  border-2 border-dashed border-[#96BF47]":
                        ""
                      }
                      `}
                      onClick={() => { setbgnavbar("nav2") ;scrollhandler(section3)}}
                  >
                    <span className="text-[16px]">CUSTOM INTEGRATION </span>
                  </div>
                  <div
                    className={`px-[16px] py-[8px] rounded-full text-[#96BF47] cursor-pointer  text-sm font-medium ${activebg === "nav4"?
                        " bg-[#3b3b3b]  border-2 border-dashed border-[#96BF47]":
                        ""
                      } `}
                    onClick={()=>{scrollhandler(section4);setbgnavbar("nav4")}}
                  >
                    <span className="text-[16px]"> CRM</span>
                  </div>
                  <div
                    className={`px-[16px] py-[8px] rounded-full text-[#96BF47] cursor-pointer  text-sm font-medium 
                       ${activebg === "nav5"?
                        " bg-[#3b3b3b]  border-2 border-dashed border-[#96BF47]":
                        ""
                      }
                      `}
                    onClick={()=>{scrollhandler(section5);setbgnavbar("nav5")}}
                  >
                    <span className="text-[16px]">POS</span>
                  </div>
                  <div
                    className={`px-[16px] py-[8px] rounded-full text-[#96BF47] cursor-pointer  text-sm font-medium 
                       ${ activebg === "nav6" && scrolly < card2Scroll?
                        " bg-[#3b3b3b]  border-2 border-dashed border-[#96BF47]":
                        ""
                      }
                      `}
                    onClick={()=>{scrollhandler(section6);setbgnavbar("nav6")}}
                  >
                    <span className="text-[16px]">OUR PRODUCTS</span>
                  </div>
                {/* // </Link>  */}
              {/* ))} */}
            </nav>

            {/* Contact Section */}
            <div className="hidden lg:flex gap-6 mr-3 ">
              {/* <a href="https://base2brand.com/contact-us"> */}
              <button className="bg-white xl:p-[10px_20px] p-[5px_10px] rounded-[25px] text-black font-medium shadow-md md:text-[16px] text-sm hover:bg-[#96bf47]"  onClick={() => changeRoute('/contact-us')}>
                Contact us
              </button>
              {/* </a> */}
              <div className="flex hover_con_btn items-center space-x-4">
                {/* <span className="text-lg text-white">Let’s Talk</span> */}
                {/* <Link > */}
                  <Image
                    src={callicon}
                    alt="Call Icon"
                    width={41}
                    height={41}
                  />
                {/* </Link> */}
              </div>
              <div className="absolute hover_con_outer top-[60px] right-[0] p-[20px]">
               <ul className="bg-black  rounded-[5px] pb-[20px]">
                  <li className="mega-menu bg-[#96bf47] p-[10px_15px]">
                    <Link href="">
                      <div className="flex gap-[10px] items-center">
                        <div className="phoneMenuIcon">
                          {/* <Image src={customer} alt="" width={1000} height={500} className="w-[30px]" /> */}
                        </div>
                        <h4 className="text-[20px] leading-[30px]  text-[#000] font-semibold">
                          Let&apos;s Connect with Base2brand <br />  Team
                        </h4>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <div className="menuInner border-bottom pt-3">
                      <div className="phoneMenuIcon" > 
                      {/* <Image src={india} alt="" width={1000} height={500} /> */}
                      </div>
                      <h4 className="hover_card_h4 text-[17px] text-white text-uppercase">
                      FOR SALES INQUIRY
                      </h4>
                    </div>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <Link href="tel:+919872487850">
                      <div className="flex gap-[10px] items-center">
                        <div className="phoneMenuIcon">
                        <Image src={india} alt="" width={1000} height={500}  className="w-[30px]"/>
                        </div>
                        <p className="hover_card_p text-white m-0">
                          +91 (987) 248 7850
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <Link href="mailto:tech@base2brand.com">
                      <div className="flex gap-[10px] items-center">
                        <div className="phoneMenuIcon">
                        <Image src={gmail} alt="" width={1000} height={500}  className="w-[30px]"/>
                        </div>
                        <p className="hover_card_p text-white m-0">
                          tech@base2brand.com
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <div className="menuInner border-bottom pt-3">
                      <div className="phoneMenuIcon" />
                      <h4 className="hover_card_h4 text-[17px] text-white text-uppercase">
                      FOR QUICK CONNECT:
                      </h4>
                    </div>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <Link href="https://wa.me/919041700209">
                      <div className="flex gap-[10px] items-center">
                        <div className="phoneMenuIcon">
                        <Image src={whatsapp} alt="" width={1000} height={500}  className="w-[30px]"/>
                        </div>
                        <p className="hover_card_p text-white">
                          +91 (904) 1700209
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <Link href="tel:+17209035933">
                      <div className="flex gap-[10px] items-center">
                        <div className="phoneMenuIcon">
                        <Image src={usa} alt="" width={1000} height={500}  className="w-[30px]"/>
                        </div>
                        <p className="hover_card_p text-white">
                          +1 (720) 9035933
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <Link href="tel:+0047448435973">
                      <div className="flex gap-[10px] items-center">
                        <div className="phoneMenuIcon">
                        <Image src={uk} alt="" width={1000} height={500}  className="w-[30px]"/> 
                        </div>
                        <p className="hover_card_p text-white">
                          + (0044) 7448435973
                        </p>
                      </div>
                    </Link>
                  </li>
            </ul>
             </div>
            </div>
            {/* on hover contact detail */}
             
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
              {/* {navbarData.map((item) => ( */}
                <li  className="w-full text-end mt-0">
                  {/* <Link href={item.url} onClick={() => setIsOpen(false)}> */}
                  <div
                    className={`block bg-[#0000000] text-[#a2d148] text-xl font-medium py-3 px-1 w-[90%] mx-auto  transition-all duration-300  shadow-md`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-[16px]" onClick={()=>scrollhandler(section1)} > ERP</span>
                  </div>
                  {/* <div
                    className={`block bg-[#0000000] text-[#a2d148] text-xl font-medium py-3 px-1 w-[90%] mx-auto  transition-all duration-300  shadow-md`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-[16px]" onClick={()=>scrollhandler(section2)} >SAI</span>
                  </div> */}
                  <div
                    className={`block bg-[#0000000] text-[#a2d148] text-xl font-medium py-3 px-1 w-[90%] mx-auto  transition-all duration-300  shadow-md`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-[16px]" onClick={()=>scrollhandler(section3)}>CUSTOM INTEGRATION</span>
                  </div>
                  <div
                    className={`block bg-[#0000000] text-[#a2d148] text-xl font-medium py-3 px-1 w-[90%] mx-auto  transition-all duration-300  shadow-md `}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-[16px]" onClick={()=>scrollhandler(section4)}>CRM</span>
                  </div>
                  <div
                    className={`block bg-[#0000000] text-[#a2d148] text-xl font-medium py-3 px-1 w-[90%] mx-auto  transition-all duration-300  shadow-md `}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-[16px]" onClick={()=>scrollhandler(section5)} >POS</span>
                  </div>
                  <div
                    className={`block bg-[#0000000] text-[#a2d148] text-xl font-medium py-3 px-1 w-[90%] mx-auto  transition-all duration-300  shadow-md`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-[16px]" onClick={()=>{scrollhandler(section6)}}>OUR PRODUCTS</span>
                  </div>
                  {/* </Link> */}
                </li>
              {/* ))} */}
            </ul>

            {/* Call Button in Mobile Menu */}
          <div className="flex justify-end w-[90%]">
          <div className="mt-6 w-max-content justify-end flex items-center gap-3 border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-black transition-all duration-300" onClick={()=>setletstalk(!letstak)}>
                <Image src={callicon} alt="Call Icon" width={30} height={30} />
                <span className="text-lg">Let’s Talk</span>
            </div>
          </div>
          </div>
          <div className={`absolute top-[60px] p-[20px] transition-[0.7s] ${
            !letstak ?
            "left-[-100%] transition-[0.7s] " :
            "left-[0]"
          }`}>
               <ul className="bg-black  rounded-[5px] pb-[20px]">
                  <li className="mega-menu bg-[#96bf47] p-[10px_15px]">
                    <Link href="">
                      <div className="flex gap-[10px] items-center">
                        <div className="phoneMenuIcon">
                          {/* <Image src={customer} alt="" width={1000} height={500} className="w-[30px]" /> */}
                        </div>
                        <h4 className="text-[17px] leading-[24px]  text-[#000] font-semibold relative">
                          Let&apos;s Connect with Base2brand <br />  Team
                          <span className="absolute right-0 bottom-0" onClick={()=>setletstalk(!letstak)}>    
                               <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="h-8 w-8 text-[#000] hover:text-gray-300 transition-all duration-300"
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
                            </span>
                        </h4>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <div className="menuInner border-bottom pt-3">
                      <div className="phoneMenuIcon" > 
                      {/* <Image src={india} alt="" width={1000} height={500} /> */}
                      </div>
                      <h4 className="hover_card_h4 text-[17px] text-white text-uppercase">
                      FOR SALES INQUIRY
                      </h4>
                    </div>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <Link href="tel:+919872487850">
                      <div className="flex gap-[10px] items-center">
                        <div className="phoneMenuIcon">
                        <Image src={india} alt="" width={1000} height={500}  className="w-[30px]"/>
                        </div>
                        <p className="hover_card_p text-white m-0">
                          +91 (987) 248 7850
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <Link href="mailto:tech@base2brand.com">
                      <div className="flex gap-[10px] items-center">
                        <div className="phoneMenuIcon">
                        <Image src={gmail} alt="" width={1000} height={500}  className="w-[30px]"/>
                        </div>
                        <p className="hover_card_p text-white m-0">
                          tech@base2brand.com
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <div className="menuInner border-bottom pt-3">
                      <div className="phoneMenuIcon" />
                      <h4 className="hover_card_h4 text-[17px] text-white text-uppercase">
                      FOR QUICK CONNECT:
                      </h4>
                    </div>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <Link href="https://wa.me/919041700209">
                      <div className="flex gap-[10px] items-center">
                        <div className="phoneMenuIcon">
                        <Image src={whatsapp} alt="" width={1000} height={500}  className="w-[30px]"/>
                        </div>
                        <p className="hover_card_p text-white">
                          +91 (904) 1700209
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <Link href="tel:+17209035933">
                      <div className="flex gap-[10px] items-center">
                        <div className="phoneMenuIcon">
                        <Image src={usa} alt="" width={1000} height={500}  className="w-[30px]"/>
                        </div>
                        <p className="hover_card_p text-white">
                          +1 (720) 9035933
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu p-[5px_20px]">
                    <Link href="tel:+0047448435973">
                      <div className="flex gap-[10px] items-center">
                        <div className="phoneMenuIcon">
                        <Image src={uk} alt="" width={1000} height={500}  className="w-[30px]"/> 
                        </div>
                        <p className="hover_card_p text-white">
                          + (0044) 7448435973
                        </p>
                      </div>
                    </Link>
                  </li>
            </ul>
             </div>
           </nav>
            )}
          </div>
           {/* ::::::::::::::::::::::::::::::::::::::::::::::
               ::::::::::::::::::Mid Component ::::::::::::::::::
               :::::::::::::::::::::::::::::::::::::::::::: */}     
           <div>
        
            <div className="bg-[url('/assets/newmainbanner.png')] bg-cover bg-center bg-no-repeat ">
             <Banner />
             <BannerSlider />
            </div>
            {/* <ScrollVideo /> */}
            <ImageSlider/>
            <Heading 
              Heading1="Trusted Shopify"
              Heading2="Partner Agency"
              Paragraph="We are an officially registered Shopify Partner, recognized by Shopify for our expertise in developing and optimizing Shopify stores. Our team specializes in creating seamless e-commerce experiences for businesses of all sizes."
              paragraphWidth="w-full  sm:w-1/2  lg:w-[50%] md:w-9/12 "
             />
            <ShopifyPartnerDashboard />
        {/* ERP SECTION */}
            <div ref={section1}>
            <Heading     
              Heading1="Services"
              Heading2="We Provide"
              Paragraph="Boost efficiency and innovation with easy-to-use AI solutions tailored to your needs."
              paragraphWidth="w-full sm:w-1/2 lg:w-[40%] md:w-9/12"
            />
      {/* Sticky Wrapper for Services */}
            <div className="relative w-full ">
            <div className=" sticky top-[100px]   ">
            <ServicesWeProvide
              phase=" 01 "
              TitleERP="ERP Software"
              Cardpara1="Enterprise resource planning refers to the software and
              systems that an enterprise uses to manage core business
              processes. It collects data across departments, such as supply
              chain, sales, human resources, procurement, accounting, and
              project management."
              CardPara2="ERP empowers an entire organization with greater visibility and real-time data, anytime, anywhere."
              CardButton="Get Started"
              CardLink="https://wa.me/90417-00209"
              CardImage={fiestsliderimage}
            />
            </div>

            <div className=" sticky top-[100px]" ref={section2}>
            <ServicesWeProvide
            phase=" 02 "
            TitleERP="Shopify API Integration"
            Cardpara1="Shopify API integration is key for businesses looking to streamline e-commerce operations. It connects Shopify with external systems, enabling smooth data synchronization, efficient workflows, and personalized customer experiences. This powerful integration enhances operational efficiency and helps businesses improve their online presence across platforms."
            CardPara2=""
            CardButton="Get Started  "
            CardLink="https://wa.me/90417-00209"
            CardImage={cardimage}
            Cardbg="#5C772A"
            />
            </div>

            <div className=" sticky top-[100px]" ref={section3}>
            <ServicesWeProvide
            phase=" 03 "
            TitleERP="Custom apps & Integrations"
            Cardpara1="Custom apps and integrations let you add unique features to your Shopify store. Built specifically for your store, they allow customization of your admin, access to store data via Shopify APIs, and integration with other platforms using the Storefront API."
            CardPara2=""
            CardButton="Get Started"
            CardLink="https://wa.me/90417-00209"
            CardImage={cardimage3}
            />
            </div>

            <div className=" sticky top-[100px] " ref={section4}>
            <ServicesWeProvide
            phase=" 04 "
            TitleERP="CRM"
            Cardpara1="We provide advanced CRM solutions to help businesses manage customer data efficiently.
            Our CRM services enable personalized communication, automate marketing campaigns,
            and improve customer retention. With data-driven insights, we ensure a seamless and
            engaging customer experience for Shopify stores."
            CardPara2=""
            CardButton="Get Started"
            CardLink="https://wa.me/90417-00209"
            CardImage={cardimage4}
            Cardbg="#5C772A"
            />
            </div>

            <div className=" sticky top-[100px]" ref={section5}>
            <ServicesWeProvide
            phase=" 05 "
            TitleERP="POS"
            Cardpara1="Our Shopify POS service offers businesses an integrated system to manage sales,
             inventory, and customer interactions seamlessly. With features like real-time inventory
             updates and secure transactions, our POS service enhances operational efficiency and
             provides a unified experience across online and physical stores, boosting sales
             and customer satisfaction."
            CardPara2=""
            CardButton="Get Started"
            CardLink="https://wa.me/90417-00209"
            CardImage={cardimage5}
            />
            </div>
          

            <div className=" sticky top-[100px]"  ref={section6}>
            <ServicesWeProvide
            phase=" 06 "
            TitleERP="Our Products"
            Cardpara1="AppCartify, our Shopify product, enables businesses to create custom mobile apps for
seamless shopping experiences. Additionally, our Delivery App optimizes delivery
operations with route planning and real-time tracking, improving efficiency
and customer satisfaction."
            CardPara2=""
            CardButton="Get Started"
            CardLink="https://wa.me/90417-00209"
            CardImage={cardimage6}
            Cardbg="#5C772A"
            />
            </div>
            </div>
            </div>
            <TrustedLeadingBrands />
            <BestPartners />
            <Slider />
            <Integration />
            <Reviews />
        {/* <Bulid /> */}
            <Launched/> 
        {/* <Team /> */}
            <Faqs />
            <Talk />
       {/* /Mid Component End*/}
           </div>
        {/* :::::::::::::::::::::::::::::::::::::::::::::::
              ::::::::::::::::::Footer ::::::::::::::::::
            :::::::::::::::::::::::::::::::::::::::::::::::  */}
           <div className="relative">
         <div className="sticky top-0">
            {/* Footer for desktop or tab */}
            <div className="container">
              <div className="hidden md:block">
                {/* Upper Section */}
                <div className="flex w-[100%] pb-[20px]">
                  <div className="w-[50%]">
                    <Image
                      src={base2brand2}
                      alt="Base2Brand Logo"
                      width={200}
                      height={100}
                      className="w-[55%]"
                    />
                  </div>
                 
                </div>
      
                {/* Lower Section */}
                <div className="flex flex-col lg:flex-row lg:gap-0 gap-[20px]">
                  <div className="lg:w-[65%] w-[100%]">
                    <div className="pt-2 pb-3 ps-[2.5%]">
                      <h3 className="text-[24px] font-light leading-[34px]">
                        Have a project in mind?
                      </h3>
                      <h3 className="text-[24px] font-light leading-[34px]">
                        let’s get to work.
                      </h3>
                    </div>
                    <div className="flex flex-col gap-[15px] ps-[2.5%]">
                      
                      <div className="text-[14px] font-thin flex items-center gap-[10px] ">
                      <Image
                          src={gmail}
                          alt="gmail"
                          width={35}
                          height={35}
                          className="w-[35px] h-[35px] object-contain"
                        />
                        <a
                        target="_blank"
                        href="mailto:tech@base2brand.com"
                      >
                        tech@base2brand.com
                      </a>
                      </div>
                    
                        <div className="text-[14px] font-thin flex items-center gap-[10px] ">
                        <Image
                          src={whatsapp}
                          alt="whatsapp"
                          width={35}
                          height={35}
                          className="w-[35px] h-[35px] object-contain"
                        />
                          <a
                        target="_blank"
                        href="tel:(+91) 90417-00209"
                      >
                        (+91) 90417-00209
                      </a>
                      </div>
                      <div className="flex gap-[15px]">
                        <a
                          target="_blank"
                          href="tel:(+91) 98724-87850"
                          className="text-[14px] font-thin flex items-center gap-[10px]"
                        >
                          <Image
                            src={india}
                            alt="india"
                            width={35}
                            height={35}
                            className="w-[35px] h-[35px] object-contain"
                          />
                          (+91) 98724-87850
                        </a>
                        <a
                          target="_blank"
                          href="tel:(+1) 72090-35933"
                          className="text-[14px] font-thin flex items-center gap-[10px]"
                        >
                          <Image
                            src={usa}
                            alt="usa"
                            width={35}
                            height={35}
                            className="w-[35px] h-[35px] object-contain"
                          />
                          (+1) 72090-35933
                        </a>
                        <a
                          target="_blank"
                          href="tel:(+44) 74484-35973"
                          className="text-[14px] font-thin flex items-center gap-[10px]"
                        >
                          <Image
                            src={uk}
                            alt="uk"
                            width={35}
                            height={35}
                            className="w-[35px] h-[35px] object-contain"
                          />
                          (+44) 74484-35973
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start gap-[20%] lg:w-[35%] w-[100%] ps-[2.5%] lg:ps-0">
                    <div className="md:w-[50%]">
                      <span className="text-[18px] font-semibold">Services</span>
                      <ul className="flex flex-col gap-[12px] mt-[15px]">
                        <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer" onClick={()=>scrollhandler(section1)}>
                        ERP
                        </li>
                        {/* <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer" onClick={()=>scrollhandler(section1)}>
                          SAI
                        </li> */}
                        <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer" onClick={()=>scrollhandler(section1)}>
                        CUSTOM INTEGRATION
                        </li>
                        <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer" onClick={()=>scrollhandler(section1)}>
                        CRM
                        </li>
                        <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer" onClick={()=>scrollhandler(section1)}>
                        POS
                        </li>
                        <li className="font-light text-[14px] text-[#BBBBBB] cursor-pointer" onClick={()=>scrollhandler(section1)}>
                          Our Products
                        </li>
                      </ul>
                    </div>
                    <div>
                      <span className="text-[18px] font-semibold">Social Media Links</span>
                      <ul className="flex flex-wrap gap-y-[10px] mt-[15px]">
                      <a
                        href="https://www.facebook.com/TechBase2Brand/"
                        target="_blank" 
                        className="w-[50%]"


                      >
                        <Image
                          src={facebook}
                          alt="facebook"
                          width={45}
                          height={45}
                          className="h-[45px] w-[45px] cursor-pointer"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/techbase2brand/?hl=en"
                        target="_blank" 
                        className="w-[50%]"

                      >
                        <Image
                          src={instagram}
                          alt="instagram"
                          width={45}
                          height={45}
                          className="h-[45px] w-[45px] cursor-pointer"
                        />
                      </a>
                      <a href="https://x.com/i/flow/login?redirect_after_login=%2FtechBase2Brand" target="_blank" 
                                              className="w-[50%]"
                      >
                        <Image
                          src={twiter}
                          alt="twiter"
                          width={45}
                          height={45}
                          className="h-[45px] w-[45px] cursor-pointer"
                        />
                      </a>
                      <a href="https://in.linkedin.com/company/techbase2brand" target="_blank" 
                                              className="w-[50%]"
                      >
                      <Image
                        src={linkedin}
                        alt="linkedin"
                        width={45}
                        height={45}
                        className="h-[45px] w-[45px] cursor-pointer"
                      />
                      </a>
                      <a href="https://www.youtube.com/channel/UCEHsjR1TFlEfsbcYQPlLW4Q" target="_blank" 
                                              className="w-[50%]"
                      >
                      <Image
                        src={youtube}
                        alt="youtube"
                        width={45}
                        height={45}
                        className="h-[45px] w-[45px] cursor-pointer"
                      />
                      </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer for mobile */}
            <div className="container pb-[5%]">
              <div className="flex flex-col md:hidden">
                <div className="w-[100%] flex justify-center">
                  <Image
                    src={base2brand2}
                    alt="Base2Brand Logo"
                    width={200}
                    height={100}
                    className="w-[70%]"
                  />
                </div>
                <div className="pt-3 pb-3 ps-[2.5%] text-center">
                  <h3 className="text-[24px] font-light leading-[38px]">
                    Have a project in mind?
                  </h3>
                  <h3 className="text-[24px] font-light leading-[38px]">
                    let’s get to work.
                  </h3>
                </div>
      
                {/* Dropdown List 1 */}
                <div
                  className="mb-2 custoum_border p-[10px_0]"
                  onClick={() => toggleFAQ(0)}
                >
                  <div className="flex flex-col items-start border-[1px] border-[#414141] rounded-[15px] bg-[#2e8a2e45]">
                    <div className="flex relative w-[100%] justify-start">
                      <button className="md:w-[80%] text-left text-[16px] md:text-[16px] p-[15px] bg-black-100 rounded-lg focus:outline-none transition duration-200 ease-in-out">
                        Services
                      </button>
                      <div
                        className={`w-[12%] absolute right-[0] h-[100%] rounded-tr-[15px] top-0 flex items-center justify-center border-l-[1px] ${activeIndex ===
                        0
                          ? "border-b-[1px] bg-[#96BF47] border-[#96BF47] rounded-bl-[15px] shadow-[inset_0_0_29px_#d8f999,0_0_34px_#b4ff23]"
                          : "border-b-0 bg-none border-[#414141] rounded-br-[0]"}`}
                      >
                        <FaChevronDown
                          className={`transform transition-transform duration-200 ${activeIndex ===
                          0
                            ? "rotate-180"
                            : "rotate-0"}`}
                        />
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden w-[100%] transition-all duration-200 ease-in-out ${activeIndex ===
                      0
                        ? "max-h-[500px] rounded-br-[20px] rounded-bl-[20px]"
                        : "max-h-0"}`}
                    >
                      <div className="p-[0_4%_4%]  w-[100%] pt-0 text-[13px] leading-[23px] bg-[#2e8a2e00] rounded-b-lg">
                        <div>
                          <ul className="flex flex-col gap-[12px] mt-[5px]">
                            <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer" onClick={()=>scrollhandler(section1)}>
                             ERP
                            </li>
                            {/* <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer" onClick={()=>scrollhandler(section1)}>
                             SAI
                            </li> */}
                            <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer"  onClick={()=>scrollhandler(section1)}>
                            CUSTOM INTEGRATION
                            </li>
                            <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer" onClick={()=>scrollhandler(section1)}>
                            CRM
                            </li>
                            <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer" onClick={()=>scrollhandler(section1)}>
                            POS
                            </li>
                            <li className="font-light text-[16px] text-[#BBBBBB] cursor-pointer" onClick={()=>scrollhandler(section1)}>
                              Our Products
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* dropdown list 2 */}
               
                {/* links */}
                <div className="flex w-[100%] justify-end pt-3 pb-3">
                  <div className="flex w-[100%] flex-col items-center justify-around gap-4">
                    <div className="flex w-[80%] justify-center gap-3">
                    <a
                        href="https://www.facebook.com/TechBase2Brand/"
                        target="_blank"
                      >
                        <Image
                          src={facebook}
                          alt="facebook"
                          width={45}
                          height={45}
                          className="h-[45px] w-[45px] cursor-pointer"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/techbase2brand/?hl=en"
                        target="_blank"
                      >
                        <Image
                          src={instagram}
                          alt="instagram"
                          width={45}
                          height={45}
                          className="h-[45px] w-[45px] cursor-pointer"
                        />
                      </a>
                      <a href="https://x.com/i/flow/login?redirect_after_login=%2FtechBase2Brand" target="_blank">
                        <Image
                          src={twiter}
                          alt="twiter"
                          width={45}
                          height={45}
                          className="h-[45px] w-[45px] cursor-pointer"
                        />
                      </a>
                      <a href="https://in.linkedin.com/company/techbase2brand" target="_blank">
                      <Image
                        src={linkedin}
                        alt="linkedin"
                        width={45}
                        height={45}
                        className="h-[45px] w-[45px] cursor-pointer"
                      />
                      </a>
                      {/* <Image
                        src={skype}
                        alt="skype"
                        width={45}
                        height={45}
                        className="h-[45px] w-[45px] cursor-pointer"
                      /> */}
                      <a href="https://www.youtube.com/channel/UCEHsjR1TFlEfsbcYQPlLW4Q" target="_blank">
                      <Image
                        src={youtube}
                        alt="youtube"
                        width={45}
                        height={45}
                        className="h-[45px] w-[45px] cursor-pointer"
                      />
                      </a>
                    </div>
                  </div>
                </div>
                {/* mail links and phone numbers */}
                <div className="flex flex-col gap-[15px] ps-[2.5%]">
                  <a
                    target="_blank"
                    href="mailto:tech@base2brand.com"
                    className="text-[18px] text-[#BBBBBB] font-thin flex items-center gap-[15px]"
                  >
                    <Image
                      src={gmail}
                      alt="gmail"
                      width={35}
                      height={35}
                      className="w-[40px] h-[40px] object-contain"
                    />
                    tech@base2brand.com
                  </a>
                  <a
                    target="_blank"
                    href="tel:(+91) 90417-00209"
                    className="text-[18px] text-[#BBBBBB] font-thin flex items-center gap-[15px]"
                  >
                    <Image
                      src={whatsapp}
                      alt="whatsapp"
                      width={35}
                      height={35}
                      className="w-[40px] h-[40px] object-contain"
                    />
                    (+91) 90417-00209
                  </a>
                  <a
                    target="_blank"
                    href="tel:(+91) 98724-87850"
                    className="text-[18px] text-[#BBBBBB] font-thin flex items-center gap-[15px]"
                  >
                    <Image
                      src={india}
                      alt="india"
                      width={35}
                      height={35}
                      className="w-[40px] h-[40px] object-contain"
                    />
                    (+91) 98724-87850
                  </a>
                  <a
                    target="_blank"
                    href="tel:(+1) 72090-35933"
                    className="text-[18px] text-[#BBBBBB] font-thin flex items-center gap-[15px]"
                  >
                    <Image
                      src={usa}
                      alt="usa"
                      width={35}
                      height={35}
                      className="w-[40px] h-[40px] object-contain"
                    />
                    (+1) 72090-35933
                  </a>
                  <a
                    target="_blank"
                    href="tel:(+44) 74484-35973"
                    className="text-[18px] text-[#BBBBBB] font-thin flex items-center gap-[15px]"
                  >
                    <Image
                      src={uk}
                      alt="uk"
                      width={35}
                      height={35}
                      className="w-[40px] h-[40px] object-contain"
                    />
                    (+44) 74484-35973
                  </a>
                </div>
              </div>
            </div>
            {/* copy right  container */}
            <div className="flex flex-col md:flex-row items-center p-[20px_0] md:justify-center border-t-[1px] border-[#484848]">
              <div className="text-[16px] font-light text-[#BBBBBB] ">
                ©2025 All rights reserved |{" "}
                <a
                  href="https://base2brand.com/"
                  target="_blank"
                  className="text-[#fff]"
                >
                  Base2Brand
                </a>{" "}
                |
              </div>
              <div className="text-[16px] font-light text-[#BBBBBB] ">
              <Link href="https://base2brand.com/disclaimer">Disclaimer |</Link> <Link href="https://base2brand.com/privacy-policy">Privacy Policy | </Link> <Link href="https://base2brand.com/terms-of-service"> Terms of Service</Link>
              </div>
            </div>
          </div> 
           </div>
        {/*  :::::::::::::::::::::::::::::::::::::::::::::::
              ::::::::::::::::::WHtasApp Link ::::::::::::::::::
            ::::::::::::::::::::::::::::::::::::::::::::::: */}
        <div className="fixed z-[999] right-7 bottom-7">
            <Link href="https://wa.me/90417-00209">
              <Image src={whatsappfixed} width={1000} height={500} alt="" className="w-[50px] rounded-[50%]" />
            </Link>
        </div>
    </div>
  );
};


export default page;
