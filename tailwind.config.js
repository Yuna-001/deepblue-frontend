/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      navy: {
        100: "#D6E5F4",
        200: "#ADCCE9",
        300: "#85B2DD",
        500: "#337FC7",
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
      "gradient-custom": "linear-gradient(to right, #264F5E, #A5D8E7)",
    },
    extend: {
      backgroundImage: {
        "gradient-custom": "linear-gradient(to right,#4D9DBC,#60C4EB, #9FDCF3)",
      },
    },
  },
  plugins: [],
};
