import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from 'vite-plugin-single-spa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		vitePluginSingleSpa({
			serverPort: 9003,
			spaEntryPoints: 'src/utility.jsx',
		}),
	],
	server: {
		port: 9003,
	},
})
