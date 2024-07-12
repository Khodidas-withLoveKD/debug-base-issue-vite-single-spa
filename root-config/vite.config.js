import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from 'vite-plugin-single-spa'
import externalize from 'vite-plugin-externalize-dependencies'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		vitePluginSingleSpa({
			type: 'root',
			imo: '3.1.1',
			importMaps: {
				dev: ['src/importMap.dev.json', 'src/importMap.shared.json'],
				build: [],
			},
		}),
		externalize({
			externals: ['@kd/utility', '@kd/app-1'],
		}),
	],
	resolve: {
		alias: {
			utility: '',
		},
	},
	base: '/admin',
	server: {
		origin: 'http://localhost:9010',
		port: 9000,
		open: true,
		proxy: {
			'/admin@kd/utility': {
				target: 'http://localhost:9003/src/utility.jsx',
				changeOrigin: true,
				rewrite: (route) => {
					console.log('kd route:', route.replace('/admin', '/'))
					return route.replace('/admin', '/')
				},
			},
		},
	},
})
