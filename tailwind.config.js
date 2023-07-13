const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
  screens: {
    sm: '570px',
    md: '900px',
    lg: '1800px',
  },  
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: {
        DEFAULT: '#292A4A',
        darker: '#445504',
        hover: '#383956',
      },
      
      accent: {
        DEFAULT: '#292A4A',
        hover: '#0f314d',
      },
      
      fot: '#161616',
      gray: '#766F66',
      white: '#ffffff',
      clear: '#64f2a7',
    },
  },
  plugins: [],
});
