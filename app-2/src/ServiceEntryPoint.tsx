import React from 'react'
import ReactDOMClient from 'react-dom/client'
import singleSpaReact from 'single-spa-react'
import App from './App'

const lifeCycles = singleSpaReact({
	React,
	ReactDOMClient,
	rootComponent: App,
	errorBoundary(err: Error, _info: React.ErrorInfo, _props: string) {
		console.log('kd _props:', _props)
		console.log('kd _info:', _info)
		console.log('kd err:', err)
		return <div>Error: {}</div>
	},
})

export const { bootstrap, mount, unmount } = lifeCycles

ReactDOMClient.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
