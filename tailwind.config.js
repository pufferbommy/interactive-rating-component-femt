module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FC7613',
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-light-grey': '#666D77',
        'neutral-medium-grey': '#262F38',
        'neutral-dark-blue': '#171E28',
        'neutral-very-dark-blue': '#141519',
      },
    },
    screens: {
      sm: '375px',
      lg: '1440px',
    },
  },
  plugins: [],
}
