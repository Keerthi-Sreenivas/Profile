
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Playfair Display', 'serif']
      },
      colors: {
        background: {
          DEFAULT: '#0A0A0F',
          dark: '#060613'
        },
        primary: {
          light: '#4A90E2',
          DEFAULT: '#2C6FD1',
          dark: '#1E4B8C'
        },
        accent: {
          light: '#8C52FF',
          DEFAULT: '#6A3AFF',
          dark: '#4D27B3'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top left, rgba(74, 144, 226, 0.1), transparent 50%)',
        'gradient-dark': 'linear-gradient(to bottom right, rgba(106, 58, 255, 0.1), rgba(44, 111, 209, 0.1))'
      },
      boxShadow: {
        'neon': '0 0 15px rgba(74, 144, 226, 0.3)',
        'glow': '0 0 20px rgba(106, 58, 255, 0.2)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
