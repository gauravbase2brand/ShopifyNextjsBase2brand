"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Detect active page
import base2brand from "../../../../public/assets/base2brand-logo 2.png";
import callicon from "../../../../public/assets/icons/Group 1707480214.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const navbarData = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Projects", url: "/projects" },
    { name: "Resume", url: "/resume" },
  ];

  return (
    <>
      <div className="left-0 right-0 fixed w-full h-[100px] bg-gradient-to-b from-black via-[#121212] to-transparent z-[1000] ">
        <div className="container mx-aut0 w-full ">
          <header className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="cursor-pointer">
              <div className="flex items-center">
                <Image
                  src={base2brand}
                  alt="BASE2BRAND"
                  width={140}
                  height={40}
                  className="transition-all duration-500 transform scale-95 hover:scale-100"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-3 bg-[#ffffff57] backdrop-blur-md px-4 py-2 rounded-full shadow-md">
              {navbarData.map((item) => (
                <Link key={item.name} href={item.url}>
                  <div
                    className={`px-[16px] py-[5px] rounded-full text-white text-sm font-medium transition-all duration-300 ${
                      pathname === item.url
                        ? "bg-primary text-black"
                        : "hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    <span className="text-lg">{item.name}</span>
                  </div>
                </Link>
              ))}
            </nav>

            {/* Contact Section */}
            <div className="hidden lg:flex gap-6 mr-3">
              <button className="bg-white xl:p-[10px_30px] p-[5px_10px] rounded-[25px] text-Dark shadow-md md:text-lg text-sm">
                Contact us
              </button>
              <div className="flex items-center space-x-4">
                <span className="text-lg text-white">Let’s Talk</span>
                <Link href="tel:584584758">
                  <Image
                    src={callicon}
                    alt="Call Icon"
                    width={35}
                    height={35}
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
                  className="h-8 w-8 text-white hover:text-gray-300 transition-all duration-300"
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
                <li key={item.name} className="w-full">
                  <Link href={item.url} onClick={() => setIsOpen(false)}>
                    <div
                      className={`block text-white text-xl font-medium py-3 px-8 w-[90%] mx-auto border border-gray-500 rounded-lg transition-all duration-300 ${
                        pathname === item.url
                          ? "bg-primary text-black shadow-md"
                          : "hover:bg-white hover:text-black"
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Call Button in Mobile Menu */}
            <div className="mt-6">
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
