import { easeInOut } from "framer-motion";

export const theme = {
  color: {
    primary: "#0F1624",
    secondary: "#161D2A",
    accent: "pink",

    projectBorder: "#A39D9D",

    gradientFon:
      "linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)",
    gradientFon2:
      "linear-gradient(270deg, rgba(19,173,199, 0.7) 0%, rgba(105,120,209, 0.7) 66.67%, rgba(148,93,214, 0.7) 100%)",

    gradientBorder: "linear-gradient(143.09deg, #8643DC 0%, #00C0FD 100%)",

    font: "#fff",
    hoverFont: "#800000",
    text: "#BCBCBC",

    devBorder: "#DDA0DD",
  },

  media: {
    tablet: "screen and (max-width: 768px)",
    mobile: "screen and (max-width: 576px)",
    desktop: "screen and (min-width: 1140px)",
  },

  transition: "0.2s ease-in-out",
};
