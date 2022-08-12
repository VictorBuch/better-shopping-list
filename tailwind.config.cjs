/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem'
			}
		},
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#e7b7f4',
					secondary: '#1880f7',
					accent: '#4576b2',
					neutral: '#211924',
					'base-100': '#474A4D',
					info: '#8CB4E8',
					success: '#2CC378',
					warning: '#A66703',
					error: '#E43A5C'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
