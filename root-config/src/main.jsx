import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { registerApplication, start } from 'single-spa'
import * as isActive from './active.ts'

const mifeA = '@kd/app-1'
const app2 = '@kd/app-2'

registerApplication({
	name: 'app-1',
	app: () => import(/* @vite-ignore */ mifeA),
	activeWhen: isActive.page1,
})

registerApplication({
	name: 'app-2',
	app: () => import(/* @vite-ignore */ app2),
	activeWhen: isActive.page2,
})

start()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
