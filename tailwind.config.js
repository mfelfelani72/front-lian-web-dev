const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    // flowbite.content(),
  ],
  safelist: [
    // flowbit
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-gray-200",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
    "explode",
    "ltr:moveIconLeftRight",
    "rtl:moveIconRightLeft",
    "shiftRight",
    "animate-shift-right",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      yekanBakh: ["yekanBakh"],
      spaceGrotesk: ["spaceGrotesk"],
    },
    fontWeight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    screens: {
      xxxs: "300px",
      // => @media (min-width: 300px) { ... }
      xxs: "380px",
      // => @media (min-width: 380px) { ... }
      xs: "530px",
      // => @media (min-width: 530px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 769px) { ... }

      bi: "912px",
      // => @media (min-width: 912px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }

      yys_max: { raw: "(max-height:610px)" },
      yss: { raw: "(min-height:590px)" },
      ys: { raw: "(min-height:670px)" },
      ym: { raw: "(min-height:750px)" },
      ym_1: { raw: "(min-height:730px)" },
      yd: { raw: "(min-height:850px)" },
    },
    pdirection: "ltr",

    extend: {
      colors: {
        white: "#fff",
        "custom-gray": "#e4e4e7",

        // theme

        "Tertiary/600": "#5391D0",
        "Tertiary/500": "#5391D0",
        "Tertiary/400": "#75A7D9",
        "Tertiary/300": "#98BDE3",
        "Tertiary/200": "#BAD3EC",
        "Tertiary/100": "#DDE9F6",
        "Tertiary/50": "#EDF4FA",

        "primary/600": "",
        "primary/500": "#CC6E3C",
        "primary/400": "#E57C43",
        "primary/300": "#EA9669",
        "primary/200": "#EFB08E",
        "primary/100": "#F5CBB4",
        "primary/50": "#FAE5D9",

        "Neutral/600": "#0A0A0F",
        "Neutral/500": "#1F1E2E",
        "Neutral/400": "#4C4B58",
        "Neutral/300": "#797882",
        "Neutral/200": "#A5A5AB",
        "Neutral/100": "#D2D2D5",
        "Neutral/50": "#F2F2F3",

        "secondary/600": "",
        "secondary/500": "#9176EA",
        "secondary/400": "#B4A2F1",
        "secondary/300": "#C3B5F4",
        "secondary/200": "#E1DAF9",
        "secondary/100": "#F0ECFC",
        "secondary/50": "#F7F6FE",

        "Error/600": "",
        "Error/500": "#D71E1E",
        "Error/400": "#E54343",
        "Error/300": "#EA6969",
        "Error/200": "#EF8E8E",
        "Error/100": "#F5B4B4",
        "Error/50": "#FAD9D9",

        "Success/600": "",
        "Success/500": "#2DD71E",
        "Success/400": "#50E543",
        "Success/300": "#73EA69",
        "Success/200": "#96EF8E",
        "Success/100": "#B9F5B4",
        "Success/50": "#DCFAD9",

        "Warning/600": "",
        "Warning/500": "#D7BB1E",
        "Warning/400": "#E5CD43",
        "Warning/300": "#EAD769",
        "Warning/200": "#EFE18E",
        "Warning/100": "#F5EBB4",
        "Warning/50": "#F5EBB4",
      },
      spacing: {
        // flowbite
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      opacity: {
        // flowbite
        0: "0",
        20: "0.2",
        40: "0.4",
        60: "0.6",
        80: "0.8",
        100: "1",
      },
      borderRadius: {
        // flowbite
        "4xl": "2rem",
      },
      transform: ["hover", "focus"],
      transacrion: ["hover", "focus"],
      backgroundImage: {
        skeleton:
          "linear-gradient(105deg, transparent 0%, transparent 40%, #d0d0d1, transparent 60%, transparent 100%)",
      },
      keyframes: {
        spinY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        spinX: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(360deg)" },
        },
        // for click icon
        moveRightLeft: {
          "0%": { transform: "rotate(180deg) translateX(0)" },
          "25%": { transform: "rotate(180deg) translateX(10px)" },
          "100%": { transform: "rotate(180deg) translateX(0px)" },
        },
        moveLeftRight: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0px)" },
        },
        // for explode box
        moveShrinkRoundFadeScatter: {
          "0%": {
            transform: "translate(0,0) scale(1)",
          },
          "100%": {
            transform:
              "translate(calc(400px * var(--random-x)), calc(400px * var(--random-y))) scale(0)",
          },
        },
        // for delete all boxes
        shiftRight: {
          "100%": {
            transform: "translateX(calc(var(--shift-x)+450px))",
          },
        },
        // for skeleton
        pulse: { "0%, 100%": { opacity: 1 }, "50%": { opacity: 0.5 } },
      },
      animation: {
        "spin-y": "spinY 1s ease-in",
        "spin-x": "spinX 1s ease-in",
        "move-right-left": "moveRightLeft 0.15s ease-in-out",
        "move-left-right": "moveLeftRight 0.15s ease-in-out",
        "move-shrink-round-fade-scatter":
          "moveShrinkRoundFadeScatter 4.5s cubic-bezier(0.68, 0.55, 0.27, 1.55) forwards",
        "shift-right": "shiftRight 500ms linear",
        skeleton: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
    plugins: [],
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
      forms: true,
      tooltips: true,
    }),
  ],
};
