const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto']
			}
		},
		colors: {
			gray: colors.gray,
			black: colors.black,
			white: colors.white,
			zinc: colors.zinc,
			neutral: colors.neutral,
			primary: {
				DEFAULT: '#7CFFB1',
				50: '#FFFFFF',
				100: '#FFFFFF',
				200: '#F6FFFA',
				300: '#CEFFE2',
				400: '#A5FFC9',
				500: '#7CFFB1',
				600: '#44FF90',
				700: '#0CFF6E',
				800: '#00D355',
				900: '#009B3F'
			},
			secondary: {
				DEFAULT: '#79FFFB',
				50: '#DFFFFE',
				100: '#CBFFFD',
				200: '#A2FFFC',
				300: '#79FFFB',
				400: '#41FFF9',
				500: '#09FFF8',
				600: '#00D0CA',
				700: '#009893',
				800: '#00605D',
				900: '#002726'
			}
		}
	},

	plugins: []
};

module.exports = config;
