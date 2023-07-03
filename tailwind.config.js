module.exports = {
  important: true,
  darkMode: ['class'],
  experimental: {
    darkModeVariant: true,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#b126e0',
      },
      backgroundImage: {
        site: "url('./assets/images/site-bg.jpg')",
        about: "url('./assets/images/about.png')",
        services: "url('./assets/images/services.png')",
      },
    },
  },
  plugins: [],
}
