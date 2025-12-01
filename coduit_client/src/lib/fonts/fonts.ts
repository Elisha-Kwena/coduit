import localFont from 'next/font/local';
// Impact Font – your main bold/impact font
export const impactFont = localFont({
  src: '../../../public/fonts/Impact.woff2',
  display: 'swap',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  variable: '--font-impact', // ← optional: for CSS variables
});