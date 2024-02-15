/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      fontFamily: {
         sans: ['Raleway', 'sans-serif'],
      },
      extend: {
         colors: {
            dark: {
               DEFAULT: '#242a30',
               100: '#2b353e',
            },
            primary: {
               DEFAULT: '#82c6ef',
               100: '#6da9b9'
            }
         },
      },
   },
   plugins: [],
};
