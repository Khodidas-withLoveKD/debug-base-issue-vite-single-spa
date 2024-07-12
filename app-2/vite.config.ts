import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from 'vite-plugin-single-spa'
import externalizeDependencies from 'vite-plugin-externalize-dependencies'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		vitePluginSingleSpa({
			type: 'mife',
			serverPort: 9002,
			spaEntryPoints: 'src/ServiceEntryPoint.tsx',
		}),
		externalizeDependencies({
			externals: ['@kd/app-1'],
		}),
	],
	build: {
		rollupOptions: {
			external: ['@kd/app-1'],
		},
	},
	server: {
		port: 9002,
	},
})
