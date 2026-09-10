/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FBFBFB',
        canvasPure: '#FFFFFF',
        canvasSubtle: '#F5F7FA',
        canvasBorder: 'rgba(42, 46, 51, 0.08)',
        
        ink: '#2A2E33',
        inkMuted: '#48535C',
        inkDim: '#6B747C',
        
        aurionTeal: {
          DEFAULT: '#1B8A9E',
          vibrant: '#1B8A9E',
          glow: '#4FB2C4',
          dark: '#126673',
          deep: '#0C4A54',
          light: '#EAF4F6',
          subtle: 'rgba(27, 138, 158, 0.06)'
        },
        aurionGold: {
          DEFAULT: '#C9A24B',
          light: '#DDC486'
        },
        aurionSilver: {
          light: '#DDDEE2',
          dark: '#ADB0B5'
        },
        
        noir: '#1C2024',
        obsidian: '#22262B'
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        italiana: ['Italiana', 'serif'],
        cinzel: ['Cinzel', 'Trajan Pro', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace']
      },
      letterSpacing: {
        'executive': '0.22em',
        'widest-luxury': '0.36em'
      },
      boxShadow: {
        'executive': '0 4px 20px -2px rgba(42, 46, 51, 0.04), 0 2px 6px -1px rgba(42, 46, 51, 0.02)',
        'executive-hover': '0 25px 45px -12px rgba(42, 46, 51, 0.09), 0 4px 16px -2px rgba(42, 46, 51, 0.03)',
        'glow-teal': '0 0 35px -5px rgba(27, 138, 158, 0.28)'
      }
    }
  },
  plugins: [],
};
