import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#005CEE",
        "secondary-blue": "#717E95",
        "primary-gray": "#334154",
        "secondary-gray": "#707070",
        "tertiary-gray": "#616E7C",
        "placeholder-gray": "#AAAAAA",
        "primary-violet": "#B946FF",
        "primary-green": "#74CC9B",
        "primary-yelow": "#EF9C55",
        "primary-pink": "#F9B7B7"
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
