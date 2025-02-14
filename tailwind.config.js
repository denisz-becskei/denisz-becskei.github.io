module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mydark: {
          "primary": "#A855F7",
          "primary-focus": "#9333EA",
          "primary-content": "#ffffff",
          "secondary": "#6B7280",
          "secondary-focus": "#4B5563",
          "secondary-content": "#ffffff",
          "accent": "#D946EF",
          "accent-focus": "#C026D3",
          "accent-content": "#ffffff",
          "neutral": "#111827",
          "neutral-focus": "#1F2937",
          "neutral-content": "#ffffff",
          "base-100": "#000000",
          "base-200": "#111827",
          "base-300": "#1F2937",
          "base-content": "#ffffff",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      "dark",
      "light",
    ],
  },
};
