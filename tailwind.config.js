/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx,css}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx,css}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"yellow-dandelion": "#FED964",
				"yellow-cream-can": "#F2C764",
				"black-mine-shaft": "#202020",
				"gray-cape-cod": "#494B4A",
				"gray-spun-pearl": "#A8A6B3",
			},
			width: {
				"closed-book-desktop": "420px",
			},
		},
	},
	plugins: [],
};
