/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme-cyan': 'var(--theme-cyan)',
        'theme-orange': 'var(--theme-orange)',
        'theme-purple': 'var(--theme-purple)',
        'theme-black': 'var(--theme-black)',
        'theme-magenta': 'var(--theme-magenta)',
        'theme-green': 'var(--theme-green)',
        'theme-white': 'var(--theme-white)',

        'background-faded-cyan': 'var(--background-faded-cyan)',
        'background-faded-orange': 'var(--background-faded-orange)',

        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
}

