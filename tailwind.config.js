module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      clipPath: {
        'top-right-cut': 'polygon(0 0, 100% 0, 100% calc(100% - 20px), 0 100%)',
        'bottom-left-cut': 'polygon(0 20px, 100% 0, 100% 100%, 0 100%)',
        'diagonal-cut': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      },
      colors: {
        primary: '#0078D4', // Unique color theme
        secondary: '#F4F4F4',
        'custom-orange': '#e75536',
      },
      spacing: {
        128: '32rem', // Example for larger spacing
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: 'slide 10s linear infinite', // Continuous sliding animation
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
};
