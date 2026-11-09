/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        milk: {
          pink: "#FFF1F5",
          light: "#FFF8FA",
          card: "rgba(255, 255, 255, 0.72)",
        },
        soft: {
          pink: "#FBCFE8",
          blush: "#FCE7F3",
        },
        lavender: {
          DEFAULT: "#E9D5FF",
          light: "#F3E8FF",
          dark: "#D8B4FE",
        },
        purple: {
          light: "#C4B5FD",
          deep: "#7C3AED",
          vibrant: "#8B5CF6",
          dark: "#6D28D9",
        },
        pastel: {
          blue: "#BFDBFE",
          sky: "#BAE6FD",
          mint: "#BBF7D0",
        },
        dark: {
          text: "#29243A",
          muted: "#5B5270",
          faint: "#8C83A2",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(233, 213, 255, 0.37)',
        'glass-hover': '0 14px 40px 0 rgba(196, 181, 253, 0.45)',
        'soft-glow': '0 0 25px rgba(251, 207, 232, 0.6)',
        'purple-glow': '0 0 30px rgba(124, 58, 237, 0.25)',
        'card-lift': '0 20px 40px -15px rgba(124, 58, 237, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(14px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.9, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

