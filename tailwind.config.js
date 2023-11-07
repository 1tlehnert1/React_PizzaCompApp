/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // overrides the default fontFamily used in the tailwind code, specifying something in here will remove all other types in the category
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    // provides additional things without overriding tailwind defaults
    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
