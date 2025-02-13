// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Optionally, add custom font families here:
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
          "primary": "#A855F7", // Purple
          "primary-focus": "#9333EA",
          "primary-content": "#ffffff",
          "secondary": "#6B7280",
          "secondary-focus": "#4B5563",
          "secondary-content": "#ffffff",
          "accent": "#D946EF", // A vibrant accent purple
          "accent-focus": "#C026D3",
          "accent-content": "#ffffff",
          "neutral": "#111827", // Dark neutral
          "neutral-focus": "#1F2937",
          "neutral-content": "#ffffff",
          "base-100": "#000000", // Black background
          "base-200": "#111827",
          "base-300": "#1F2937",
          "base-content": "#ffffff",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      // You can include other themes if needed
      "dark",
      "light",
    ],
  },
};
