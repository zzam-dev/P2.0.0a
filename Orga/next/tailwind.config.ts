module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}', // adjust based on your structure
	],
	theme: {
		extend: {},
	},
	plugins: [],
	extend: {
		transitionProperty: {
			opacity: 'opacity',
			transform: 'transform',
		},
		transitionDuration: {
			'300': '300ms',
			'700': '700ms',
		},
	},
};
