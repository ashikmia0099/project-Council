


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeBannerimg: `url(${new URL('./src/assets/home_page_banner.png', import.meta.url)})`,
      },
      fontFamily: {
        Bokor: [ "Bokor", "system-ui"] 
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};


