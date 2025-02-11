/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        ternary: "var(--ternary)",
        "primary-dark": "var(--primary-dark)", // Correctly maps to the CSS variable

      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        // heading: ['Mont Heavy DEMO', 'sans-serif'],
        heading: ["var(--font-mont-heavy)", "sans-serif"], // Uses Custom Font
      },  
      container: {
        center: true,
        screens: {
          sm: "640px", // Small devices
          md: "768px", // Medium devices (tablets)
          lg: "1024px", // Large devices (desktops)
          xl: "1280px", // Extra large screens
          '2xl': "1536px", // 2X Large screens
        },
        padding: {
          DEFAULT: "1rem", // Default padding
          sm: "2rem", // Padding for small devices
          lg: "4rem", // Padding for large devices
          xl: "5rem", // Padding for extra large devices
          '2xl': "6rem", // Padding for larger screens
        },
      },
    },
  },
  plugins: [],
};
