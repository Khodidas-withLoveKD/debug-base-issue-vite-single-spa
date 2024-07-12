import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sharedState, setSharedState } from '@kd/app-1'

/*
The sharedState should be there in app-1 and app-2
the state should be changed in app-2, and should reflect in app-1 as well
*/
function App() {
	const [count, setCount] = useState(0)
	// const { test, setTest } = useSharedStateHook()
	useEffect(() => {
		console.log('kd sharedState:', sharedState)
		const subscription = sharedState.subscribe((data: number) =>
			console.log('kd APP 2 data = ', data)
		)

		setSharedState(5)

		// subscription.next(2)
		// subscription.next(3)
		// subscription.next(4)

		return () => subscription.unsubscribe()
	}, [])
	// console.log('kd setTest:', setTest)
	// console.log('kd test:', test)

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
			<h1>Vite + React APP #2 Value of Test:</h1>
			<div className="card">
				<button
					onClick={() => {
						setCount((count) => count + 1)
						// setTest((test: snumber) => test + 1)
					}}
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
