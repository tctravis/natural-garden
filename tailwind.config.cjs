/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'content-section': {
					odd: 'var(--content-section-bg-odd)',
					even: 'var(--content-section-bg-even)',
				},
				header: {
					bg: 'var(--header-bg-color)',
					text: 'var(--header-text-color)',
				},
				headers: 'var(--headers-color)',
			},
			fontFamily: {
				'cormorant': ['Cormorant', 'serif'],
				'proza-libre': ['Proza Libre', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
