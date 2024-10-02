/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // width, height 관련은 나중에 수정 필요
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      backgroundImage: {
        auth: "url('./assets/images/auth-page-bg.png')",
      },
      width: {
        web_basic: "360px",
      },
      height: {
        web_basic: "640px",
      },
      minWidth: {
        min_width: "360px",
      },
      minHeight: {
        min_height: "640px",
      },
      maxWidth: {
        max_width: "360px",
      },
      maxHeight: {
        max_height: "640px",
      },
      colors: {
        navy: {
          100: "#D6E5F4",
          200: "#ADCCE9",
          300: "#85B2DD",
          500: "#337FC7",
          700: "#1F4C77",
          800: "#143350",
        },
        sky_blue: {
          primary: {
            100: "#DFF3FB",
            300: "#9FDCF3",
            500: "#60C5EB",
            600: "#4D9DBC",
            800: "#264F5E",
          },
        },
        point_color: {
          emerald: "#00B5AE",
          yellow: "#FFD602",
        },
        error_color: "#FF5602",
      },
    },
    backgroundImage: {
      "gradient-custom": "linear-gradient(to right,#4D9DBC,#60C4EB, #9FDCF3)",
    },
  },

  plugins: [],
};
