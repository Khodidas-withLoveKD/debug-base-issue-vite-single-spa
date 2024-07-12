import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from 'vite-plugin-single-spa'
import externalize from 'vite-plugin-externalize-dependencies'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		vitePluginSingleSpa({
			type: 'mife',
			serverPort: 9001,
			spaEntryPoints: 'src/spa.jsx',
		}),
		externalize({
			externals: ['@kd/utility'],
		}),
	],
})
