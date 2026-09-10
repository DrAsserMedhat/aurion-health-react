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
        canvasBorder: 'rgba(15, 23, 42, 0.08)',
        
        ink: '#090F19',
        inkMuted: '#475569',
        inkDim: '#64748B',
        
        aurionTeal: {
          DEFAULT: '#008C94',
          vibrant: '#00A8B5',
          glow: '#00D8E6',
          dark: '#004A50',
          deep: '#002E33',
          light: '#EBF7F8',
          subtle: 'rgba(0, 140, 148, 0.06)'
        },
        
        noir: '#05070A',
        obsidian: '#090D14'
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
        'executive': '0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)',
        'executive-hover': '0 25px 45px -12px rgba(15, 23, 42, 0.09), 0 4px 16px -2px rgba(15, 23, 42, 0.03)',
        'glow-teal': '0 0 35px -5px rgba(0, 168, 181, 0.28)'
      }
    }
  },
  plugins: [],
};
