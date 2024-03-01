/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          custom: {
            'main-color': '#F4FEFF',
            'second-color': '#45BDBF'
          }
        },
        screens: {
          'tablet': {'max': '1024px'},
          'tablet-sm': {'max': '768px'},
          'android': {'max': '576px'},
          'android-sm': {'max': '415px'},
          'iphone': {'max': '355px'}
        }
      },
    },
  plugins: [],
}

