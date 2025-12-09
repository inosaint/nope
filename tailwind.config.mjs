/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				serif: ['Momo Trust Display', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
				sans: ['Anek Latin', 'sans-serif'],
			},
			letterSpacing: {
				tight: '-0.025em',
			},
		},
	},
	plugins: [],
}
