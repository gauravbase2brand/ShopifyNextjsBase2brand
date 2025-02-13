import React from 'react'
import Banner from './Components/Banner'
import BannerSlider from './Components/BannerSlider'
import Heading from './Components/UIUX/Heading'
import ShopifyPartnerDashboard from './Components/ShopifyPartnerDashboard'

const page = () => {
  return (

    <>

      <Banner />
      <BannerSlider />
      <Heading
        Heading1="Trusted Shopify"
        Heading2="Partner Agency"
        Paragraph="We are an officially registered Shopify Partner, recognized by Shopify for our expertise in developing and optimizing Shopify stores. Our team specializes in creating seamless e-commerce experiences for businesses of all sizes."
        paragraphWidth="w-full  sm:w-1/2  lg:w-[50%] md:w-9/12 "  // Pass responsive classes for paragraph width
      />

      <ShopifyPartnerDashboard />
    </>
  )
}

export default page