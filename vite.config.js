import { sveltekit } from '@sveltejs/kit/vite';
import path from 'node:path';

const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			src: path.resolve('./src')
		}
	}
};

export default config;
