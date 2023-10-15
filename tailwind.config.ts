import { colors } from './src/config/tailwindcss/primer-colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,mdx,tsx}'],
  darkMode: ['class', '[data-mantine-color-scheme="dark"]'],
  theme: {
    colors: { ...colors },
  },
  plugins: [],
};

