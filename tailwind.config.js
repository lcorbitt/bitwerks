const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "wave": "wave 10s -3s linear infinite",
        "wave-reverse": "wave 18s linear reverse infinite",
        "wave-slow": "wave 20s -1s reverse infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        accent: {
          DEFAULT: '#1fb890',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#1fb890',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        background: "hsl(var(--background))",
        border: "hsl(var(--border))",
        brand: {
          DEFAULT: '#F66135',
          50: '#fef7f3',
          100: '#fdeee6',
          200: '#fad9cc',
          300: '#f6b8a6',
          400: '#f08d70',
          500: '#F66135',
          600: '#e84d2a',
          700: '#c23a20',
          800: '#9b2f1f',
          900: '#7d291e',
          950: '#43120c',
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        foreground: "hsl(var(--foreground))",
        input: "hsl(var(--input))",
        light: "#F6F7F8",
        'muted-dark': '#c9c9c9',
        'muted-light': '#838383',
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: "#000000",
        ring: "hsl(var(--ring))",
        secondary: "#141414",
        tertiary: "#1a1a1a",
      },
      fontSize: {
        '5xl': '2.75rem'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "wave": {
        "2%": { transform: "translateX(1px)" },
        "25%": { transform: "translateX(-25%)" },
        "50%": { transform: "translateX(-50%)" },
        "75%": { transform: "translateX(-25%)" },
        "100%": { transform: "translateX(1px)" },
      },
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} 