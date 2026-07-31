/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './FrontPage.js', './FrontPage.jsx', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"KaiTi"', '"STKaiti"', '"DFKai-SB"', 'serif'],
        display: ['"KaiTi"', '"STKaiti"', '"DFKai-SB"', 'serif'],
        latin: ['"Inter"', '"SF Pro Display"', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(17, 24, 39, 0.08)',
        glow: '0 0 0 1px rgba(161, 18, 23, 0.12), 0 24px 80px rgba(161, 18, 23, 0.18)',
        'card-hover': '0 32px 80px rgba(17, 24, 39, 0.12)',
        'nav': '0 10px 40px rgba(17, 24, 39, 0.09)',
      },
      colors: {
        umred: '#A11217',
        ink: '#222222',
        paper: '#F5F5F7',
        smoke: '#EAEAEA',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(161, 18, 23, 0.97), rgba(161, 18, 23, 0.75) 52%, rgba(34, 34, 34, 0.92))',
        'soft-radial': 'radial-gradient(circle at top left, rgba(161, 18, 23, 0.14), transparent 38%), radial-gradient(circle at top right, rgba(255, 255, 255, 0.55), transparent 34%), linear-gradient(180deg, #fff 0%, #fafafa 100%)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      letterSpacing: {
        widest2: '0.24em',
        widest3: '0.32em',
      },
      lineHeight: {
        relaxed2: '1.75',
        comfortable: '1.8',
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
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
