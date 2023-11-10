import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#3294F8',
        basetitle: '#E7EDF4',
        basesubtitle: '#C4D4E3',
        basetext: '#AFC2D4',
        basespan: '#7B96B2',
        baselabel: '#3A536B',
        baseborder: '#1C2F41',
        basepost: '#112131',
        baseprofile: '#0B1B2B',
        basebackground: '#071422',
        baseinput: '#040F1A',
      },
    },
  },
  plugins: [],
}
export default config
