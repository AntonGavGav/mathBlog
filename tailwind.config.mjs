/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			'sans': ['Videotype', 'sans-serif'],
			'daydream': ['Daydream'],
			'november' : ['November'],
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
