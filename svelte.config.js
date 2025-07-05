import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// if your repo is username.github.io, leave fallback and base as default
			// if it's a project page, set base: '/repo-name'
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			base: ''
		}
	}
};

export default config;
