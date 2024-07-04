/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			'sans': ['DMSans', 'sans-serif'],
			'daydream': ['Daydream'],
		},
		extend: {
			colors: {
				'bg-color': "#141313",
				'text-primary-color': "#f1f1f1",
				'text-secondary-color': "#cfcfcf",
				'dark-accent': '#000000',
				'light-accent': '#ffffff',
			}
		},
	},
	plugins: [],
}
