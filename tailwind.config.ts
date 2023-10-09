import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth : {
        "fluid" : "calc(1280px + 2rem)",
      },
      minHeight : {
        "calc" : "calc(100vh - 60px - 90px)"
      },
      gridTemplateRows : {
        'layout' : '60px 1fr 90px'
      }
    },
  },
  plugins: [],
}
export default config
