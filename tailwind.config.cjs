/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				body: "var(--color-bg)",
				textcolor: "var(--color-tx)",
				primary: "#01579b",
			},
			keyframes: {
        scroll: {
          '0%': { transform : 'translate(0)' },
          '100%': { transform: 'translate(-100%)' },
        }
      },
			animation: {
        scroll: 'scroll 20s linear infinite',
      }
		},
	},
	plugins: [],
}
