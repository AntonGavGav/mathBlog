/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens:{
			// keep in mind that if you want to change the sizes go to showBlurBg in SearchWidget.astro and change the media there as well
			'xl': {'max': '1130px'},
			'lg': {'max': '740px'},
			'md': {'max': '470px'}
		},
		fontFamily:{
			'sans': ['Videotype', 'sans-serif'],
			'inter': ['Inter'],
			'daydream': ['Daydream'],
			'november' : ['November'],
		},
		extend: {
			borderWidth: {
				'def-width': "var(--def-width)",
			},
			colors: {
				'bg-color': "var(--bg-color)",
				'text-primary-color': "var(--text-primary-color)",
				'text-secondary-color': "var(--text-secondary-color)",
				'dark-accent': 'var(--dark-accent)',
				'light-accent': 'var(--light-accent)',
			}
		},
	},
	corePlugins: {
		container: false,
	},
	plugins: [],
}