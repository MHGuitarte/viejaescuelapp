import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		files: {
			template: 'src/index.html',
		},
		target: '#svelte',
		ssr: false,
	},
	preprocess: preprocess(),

};

export default config;
