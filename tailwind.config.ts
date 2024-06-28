import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        main: "#F60C01",
        footertext: "#C6C6C6",
        icons: "3D3D3D",
      },
      backgroundImage: {
        gmy1: "url(/images/gym1.jpg)",
        gym2: "url(/images/gym2.jpg)",
        gym3: "url(/images/gym3.jpg)",
        gym4: "url(/images/gym4.jpg)",
        gym5: "url(/images/gym5.jpg)",
        hero: "url(/images/hero.webp)",
        "my-hero": "url(/images/my-hero.jpg)",
        nel: "url(/images/nel.png)",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
  plugins: [],
};
export default config;
