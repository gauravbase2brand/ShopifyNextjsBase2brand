import { Poppins } from "next/font/google";
import b2bpngimg from "../../public/assets/whiteb2blogo.png"
import "./StyleCss/globals.css";
import Image from "next/image";
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
    
    <body className={`${poppins.variable} antialiased`}>
        {children}

        <div style={{display:"none"}} className="png_banner">
          <Image src={b2bpngimg} alt="" width={1000} heigh={500}  />
        </div>
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
