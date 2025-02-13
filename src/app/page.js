import React from "react";
import Banner from "./Components/Banner";
import BannerSlider from "./Components/BannerSlider";
import ServicesWeProvide from "./Components/ServicesWeProvide";
import ShopifyPartnerDashboard from "./Components/ShopifyPartnerDashboard";
import Heading from "./Components/UIUX/Heading";
import fiestsliderimage from "../../public/assets/fiestsliderimage.webp";
import TrustedLeadingBrands from "./Components/TrustedLeadingBrands";

const page = () => {
  return (
    <>
      <Banner />
      <BannerSlider />
      <Heading
        Heading1="Trusted Shopify"
        Heading2="Partner Agency"
        Paragraph="We are an officially registered Shopify Partner, recognized by Shopify for our expertise in developing and optimizing Shopify stores. Our team specializes in creating seamless e-commerce experiences for businesses of all sizes."
        paragraphWidth="w-full  sm:w-1/2  lg:w-[50%] md:w-9/12 "
      />

      <ShopifyPartnerDashboard />
      <Heading
        Heading1="Services"
        Heading2="We Provide"
        Paragraph="Boost efficiency and innovation with easy-to-use AI solutions tailored to your needs."
        paragraphWidth="w-full sm:w-1/2 lg:w-[40%] md:w-9/12"
      />

      {/* Sticky Wrapper for Services */}
      <div className="relative w-full">
      <div className=" sticky top-0   ">
        <ServicesWeProvide
          TitleERP="ERP Software"
          Cardpara1="Enterprise resource planning refers to the software and
                systems that an enterprise uses to manage core business
                processes. It collects data across departments, such as supply
                chain, sales, human resources, procurement, accounting, and
                project management."
          CardPara2="ERP empowers an entire organization with greater visibility and real-time data, anytime, anywhere."
          CardButton="Learn More"
          CardLink="/about"
          CardImage={fiestsliderimage}
        />
      </div>

      <div className=" sticky top-0   ">
        <ServicesWeProvide
          TitleERP="ERP Solutions"
          Cardpara1="Enterprise resource planning refers to the software and
                systems that an enterprise uses to manage core business
                processes. It collects data across departments, such as supply
                chain, sales, human resources, procurement, accounting, and
                project management."
          CardPara2="ERP empowers an entire organization with greater visibility and real-time data, anytime, anywhere."
          CardButton="Explore"
          CardLink="/about"
          CardImage={fiestsliderimage}
          Cardbg="#5C772A"
        />
      </div>

      <div className=" sticky top-0   ">
        <ServicesWeProvide
          TitleERP="ERP System"
          Cardpara1="Enterprise resource planning refers to the software and
                systems that an enterprise uses to manage core business
                processes. It collects data across departments, such as supply
                chain, sales, human resources, procurement, accounting, and
                project management."
          CardPara2="ERP empowers an entire organization with greater visibility and real-time data, anytime, anywhere."
          CardButton="Get Started"
          CardLink="/about"
          CardImage={fiestsliderimage}
        
        />
      </div>

      <div className=" sticky top-0  ">
        <ServicesWeProvide
          TitleERP="ERP System"
          Cardpara1="Enterprise resource planning refers to the software and
                systems that an enterprise uses to manage core business
                processes. It collects data across departments, such as supply
                chain, sales, human resources, procurement, accounting, and
                project management."
          CardPara2="ERP empowers an entire organization with greater visibility and real-time data, anytime, anywhere."
          CardButton="Get Started"
          CardLink="/about"
          CardImage={fiestsliderimage}
             Cardbg="#5C772A"
        />
      </div>

      <div className=" sticky top-0 ">
        <ServicesWeProvide
          TitleERP="ERP System"
          Cardpara1="Enterprise resource planning refers to the software and
                systems that an enterprise uses to manage core business
                processes. It collects data across departments, such as supply
                chain, sales, human resources, procurement, accounting, and
                project management."
          CardPara2="ERP empowers an entire organization with greater visibility and real-time data, anytime, anywhere."
          CardButton="Get Started"
          CardLink="/about"
          CardImage={fiestsliderimage}
        />
      </div>
    </div>
    <TrustedLeadingBrands/>
    </>
  );
};

export default page;
