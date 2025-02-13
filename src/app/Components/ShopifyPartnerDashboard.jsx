"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import dashboardImage from "../../../public/assets/dashbordimage.webp";
import Directory from "../../../public/assets/icons/Directory.svg";
import Partner from "../../../public/assets/icons/Partner.svg";
import ShopifyCertifiedPartner from "../../../public/assets/Shopify-Certified-Partner.png";

import Directorymobile from "../../../public/assets/icons/Directorymobile.svg";
import Partnermobile from "../../../public/assets/icons/Partnermobile.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopifyPartnerDashboard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="gradient xl:py-10 lg:py-6 py-4">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[2fr_5fr] grid-cols-1 gap-4 items-center relative">
            <div className="hidden lg:block">
              <div className="flex  ">
                <Image
                  src={Partner}
                  alt="Shopify Partner Dashboard Illustration"
                  className="xl:h-[700px] lg:h-[455px] h-auto"
                  data-aos="fade-up"
                />
                <Image
                  src={Directory}
                  alt="Shopify Partner Dashboard Illustration"
                  className="xl:h-[700px] lg:h-[455px] h-auto"
                  data-aos="fade-up"
                />
              </div>
            </div>

            <div className="lg:hidden block">
              <div className="flex flex-col  ">
                <Image
                  src={Directorymobile}
                  alt="Shopify Partner Dashboard Illustration"
                  className=""
                  data-aos="fade-up"
                />
                <Image
                  src={Partnermobile}
                  alt="Shopify Partner Dashboard Illustration"
                  className=""
                  data-aos="fade-up"
                />
              </div>
            </div>
            <div className="absolute lg:left-[24%] left-[27%] md:top-[30%] top-[30px] z-50">
              <Image
                src={ShopifyCertifiedPartner}
                alt="Shopify Partner Dashboard Illustration"
                className="md:w-full w-[10rem] m-auto"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              />
            </div>
            <div data-aos="fade-up">
              <Image
                src={dashboardImage}
                alt="Shopify Partner Dashboard Illustration"
                className="w-full  xl:h-[700px] lg:h-[455px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gradient {
          background-image: linear-gradient(
            90deg,
            hsl(0deg 0% 0%) 0%,
            hsl(87deg 100% 7%) 11%,
            hsl(88deg 100% 11%) 22%,
            hsl(81deg 97% 16%) 33%,
            hsl(81deg 57% 27%) 44%,
            hsl(81deg 47% 34%) 56%,
            hsl(81deg 47% 38%) 67%,
            hsl(81deg 46% 42%) 78%,
            hsl(81deg 46% 47%) 89%,
            hsl(81deg 48% 51%) 100%
          );
        }
      `}</style>
    </>
  );
};

export default ShopifyPartnerDashboard;
