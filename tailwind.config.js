
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure it scans these files
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bluecustom: '#523596', // Custom gray color
         bluecustomhover: '#503d7d', // Custom gray color
          Blue: '#2563eb',
         HoverColor: '#1d4ed8'
      },
    },
  },
  plugins: [],
};

