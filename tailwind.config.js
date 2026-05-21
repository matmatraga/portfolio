/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#14b8a6",
          foreground: "#042f2e",
          muted: "#0d9488",
        },
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          elevated: "rgb(var(--surface-elevated) / <alpha-value>)",
          border: "rgb(var(--border) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgb(0 0 0 / 0.08), 0 8px 24px rgb(0 0 0 / 0.06)",
        "card-dark":
          "0 1px 3px rgb(0 0 0 / 0.3), 0 8px 24px rgb(0 0 0 / 0.25)",
      },
    },
  },
  plugins: [],
};
