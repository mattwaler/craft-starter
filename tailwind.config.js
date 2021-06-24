module.exports = {
	mode: 'jit',
	purge: ['./templates/**/*', './assets/scripts/**/*'],
	darkMode: false,
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwindcss-debug-screens'),
	],
}
