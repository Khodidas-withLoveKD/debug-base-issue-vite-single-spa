import React from 'react'
import ReactDOMClient from 'react-dom/client'
import singleSpaReact from 'single-spa-react'
import App from './App'

export { useSharedStateHook } from './shared/useShareStateHook.jsx'
export { sharedState, setSharedState } from './shared/sharedStateViaRxjs.js'

const lifeCycles = singleSpaReact({
	React,
	ReactDOMClient,
	rootComponent: App,
	errorBoundary(err, _info, _props) {
		return <div>Error: {}</div>
	},
})

export const { bootstrap, mount, unmount } = lifeCycles

ReactDOMClient.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
