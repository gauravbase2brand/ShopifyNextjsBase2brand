import React from "react";
import Banner from "./Components/Banner";
import BannerSlider from "./Components/BannerSlider";
import ServicesWeProvide from "./Components/ServicesWeProvide";
import ShopifyPartnerDashboard from "./Components/ShopifyPartnerDashboard";
import Heading from "./Components/UIUX/Heading";
import fiestsliderimage from "../../public/assets/fiestsliderimage.webp";
import TrustedLeadingBrands from "./Components/TrustedLeadingBrands";

import cardimage from "../../public/assets/cardimage.webp"
import cardimage3 from "../../public/assets/cardimage3.webp"
import cardimage4 from "../../public/assets/cardimage4.webp"
import cardimage5 from "../../public/assets/cardimage5.webp"
import cardimage6 from "../../public/assets/cardimage6.webp"
import BestPartners from "./Components/BestPartners";

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
            phase="  Phase | 01"
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
            phase="  Phase | 02"
            TitleERP="Shopify API Integration"
            Cardpara1="Shopify API integration is key for businesses looking to streamline e-commerce operations. It connects Shopify with external systems, enabling smooth data synchronization, efficient workflows, and personalized customer experiences. This powerful integration enhances operational efficiency and helps businesses improve their online presence across platforms."
            CardPara2=""
            CardButton="Explore"
            CardLink="/about"
            CardImage={cardimage}
            Cardbg="#5C772A"
          />
        </div>

        <div className=" sticky top-0   ">
          <ServicesWeProvide
            phase="  Phase | 03"
            TitleERP="Custom apps & Integrations"
            Cardpara1="Custom apps and integrations let you add unique features to your Shopify store. Built specifically for your store, they allow customization of your admin, access to store data via Shopify APIs, and integration with other platforms using the Storefront API."
            CardPara2=""
            CardButton="Get Started"
            CardLink="/about"
            CardImage={cardimage3}

          />
        </div>

        <div className=" sticky top-0  ">
          <ServicesWeProvide
            phase="  Phase | 04"
            TitleERP="CRM"
            Cardpara1="This phase helps you scale your solutions, uncover new
growth areas, and stay ahead in a competitive market."
            CardPara2=""
            CardButton="Get Started"
            CardLink="/about"
            CardImage={cardimage4}
            Cardbg="#5C772A"
          />
        </div>

        <div className=" sticky top-0 ">
          <ServicesWeProvide
            phase="  Phase | 05"
            TitleERP="POS"
            Cardpara1="This phase helps you scale your solutions, uncover new
growth areas, and stay ahead in a competitive market."
            CardPara2=""
            CardButton="Get Started"
            CardLink="/about"
            CardImage={cardimage5}
          />
        </div>
        <div className=" sticky top-0 ">
          <ServicesWeProvide
            phase="  Phase | 06"
            TitleERP="Our Products"
            Cardpara1="This phase helps you scale your solutions, uncover new
growth areas, and stay ahead in a competitive market."
            CardPara2=""
            CardButton="Get Started"
            CardLink="/about"
            CardImage={cardimage6}
            Cardbg="#5C772A"
          />
        </div>
      </div>
      <TrustedLeadingBrands />
      <BestPartners/>
    </>
  );
};

export default page;
