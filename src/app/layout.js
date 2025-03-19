import { Poppins } from "next/font/google";
import "./StyleCss/globals.css";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
const Mont = {
  variable: "--font-mont-heavy",
  className: "font-heading",
};
export const metadata = {
  title: "Shopify Development Company | Expert Shopify Development Services",
  description: "Base2Brand, a trusted Shopify development company, offers end-to-end Shopify development services to create scalable, user-friendly online stores that drive growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="canonical" href="https://base2brand.com/hire-shopify-developer-india" />
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" /> */}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}


// "use client"
// import { Poppins } from "next/font/google";
// import "./StyleCss/globals.css";
// import { useEffect } from "react";
// import LocomotiveScroll from 'locomotive-scroll';

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["300", "400", "600", "700"],
// });
// const Mont = {
//   variable: "--font-mont-heavy",
//   className: "font-heading",
// };



// export default function RootLayout({ children }) {
//   useEffect(() => {
//     // Ensure the code only runs on the client-side
//     if (typeof document !== 'undefined') {
//       const scroll = new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]'),
//         smooth: true, // Enable smooth scrolling
//       });

//       const target = document.querySelector('#js-target');
//       if (target) {
//         scroll.scrollTo(target);
//       }

//       // Cleanup function to disable LocomotiveScroll when the component is unmounted
//       return () => {
//         scroll.destroy();
//       };
//     }
//   }, []);

//   return (
//     <html lang="en">
//       <body className="antialiased" id="js-target" data-scroll-container>
//         {children}
//       </body>
//     </html>
//   );
// }
