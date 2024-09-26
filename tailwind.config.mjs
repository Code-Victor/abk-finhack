import defaultTheme from "tailwindcss/defaultTheme";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["'DM Sans Variable'", ...defaultTheme.fontFamily.sans],
        adoha: ["Adoha", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      animation: {
        disappear: "disappear 5s ease-in-out forwards",
        reveal: "reveal 1s ease-in-out forwards",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        reveal: {
          "100%": {
            opacity: 1,
          },
        },
        disappear: {
          "0%": {
            opacity: 1,
          },
          "90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
