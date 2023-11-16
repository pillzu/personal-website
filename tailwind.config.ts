import { join } from 'path'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		fontFamily: {
			'display': ['Bebas-neue', 'ui-sans-serif', 'system-ui']
		},
		extend: {},
	},
	plugins: [
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'crimson',
						enhancements: true,
					},
					{
						name: 'vintage',
						enhancements: true,
					},
				],
			},
		}),
	],
} satisfies Config;
