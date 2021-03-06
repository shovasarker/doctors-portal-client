module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: '#37cdbe',
          neutral: '#3A4256',
          'base-100': '#ffffff',
        },
      },
    ],
  },
}
