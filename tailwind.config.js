/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './FrontPage.js', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(17, 24, 39, 0.08)',
        glow: '0 0 0 1px rgba(161, 18, 23, 0.12), 0 24px 80px rgba(161, 18, 23, 0.16)',
      },
      colors: {
        umred: '#A11217',
        ink: '#222222',
        paper: '#F5F5F7',
        smoke: '#EAEAEA',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(161, 18, 23, 0.96), rgba(161, 18, 23, 0.72) 52%, rgba(34, 34, 34, 0.9))',
        'soft-radial': 'radial-gradient(circle at top left, rgba(161, 18, 23, 0.16), transparent 35%), radial-gradient(circle at top right, rgba(255, 255, 255, 0.55), transparent 34%), linear-gradient(180deg, #fff 0%, #fafafa 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(18px, -14px, 0) scale(1.03)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
        marquee: 'marquee 24s linear infinite',
      },
    },
  },
  plugins: [],
};
