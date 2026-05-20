/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#f5f4f0',
        surface: '#ffffff',
        s2:      '#f0ede8',
        s3:      '#e8e4de',
        accent:  '#1a1a2e',
        a2:      '#2d5be3',
        gold:    '#c8860a',
        muted:   '#6b6b7b',
        m2:      '#4a4a5a',
        neon: {
          green:  '#16a34a',
          cyan:   '#0891b2',
          teal:   '#0d9488',
          lime:   '#65a30d',
          yellow: '#ca8a04',
          orange: '#ea580c',
          pink:   '#db2777',
          red:    '#dc2626',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      }
    }
  },
  plugins: []
}
