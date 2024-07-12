import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SomeComponent } from '@kd/utility'
import { useSharedStateHook } from './shared/useShareStateHook'
import { sharedState, setSharedState } from './shared/sharedStateViaRxjs'

function App() {
	const [count, setCount] = useState(0)
	console.log('kd useSharedStateHook:', useSharedStateHook)
	const { test, setTest } = useSharedStateHook()
	// console.log('kd setTest:', setTest)
	// console.log('kd test:', test)
	useEffect(() => {
		sharedState.subscribe((data) => console.log('kd APP 1 data =', data))

		// return () => sharedSubject.unsubscribe()
	}, [])

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<SomeComponent />
			<h1>Vite + React CHILD APP THIS IS</h1>
			<h2>Value of Test: {test}</h2>
			<div className="card">
				<button
					onClick={() => {
						setCount((count) => count + 1)
						setTest((test) => test + 1)
					}}
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
