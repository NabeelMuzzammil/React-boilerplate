module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Poppins', 'system-ui', 'sans-serif'],
    }, 
    lineHeight: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
    },
    
    extend: {
      spacing: {
        'btnHeight': '60px',
      },
      borderRadius: {
        'btnRadius': '10px'
      },
      colors: {
        'primary': '#10111B',
      },
    },
  },
  plugins: [],
}
