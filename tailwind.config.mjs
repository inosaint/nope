/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
				serif: ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
				sans: ['Anek Latin', 'sans-serif'],
			},
			letterSpacing: {
				tight: '-0.025em',
			},
		},
	},
	plugins: [],
}
