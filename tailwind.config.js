/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      width: {
        '96/100': '96%',
      },
      zIndex: {
        '100': '100',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      spacing: {
        '118': '26rem',
      }
    },
    colors: {
      'announcement': '#000',
      'mainBrandColor': '#FCD200',
      'lightMainBrandColor': '#FFDE59',
      'darkBackground': '#360089',
      'lightBackground': '#E2E0E5',
      'clt1': '#FE5E54',
      'clt2': '#00C9B8',
    },
    minWidth: {
      '1/4': '25%',
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin'),
    // require('@tailwindcss/aspect-ratio'),
  ],
});