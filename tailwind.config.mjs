/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			'sans': ['DMSans', 'sans-serif'],
			'daydream': ['Daydream'],
		},
		extend: {
			colors: {
				'bg-color': "var(--bg-color)",
				'text-primary-color': "var(--text-primary-color)",
				'text-secondary-color': "var(--text-secondary-color)",
				'dark-accent': 'var(--dark-accent)',
				'light-accent': 'var(--light-accent)',
			}
		},
	},
	plugins: [],
}
