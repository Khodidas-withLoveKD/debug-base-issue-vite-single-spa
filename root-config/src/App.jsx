import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { nameLogger } from '@kd/utility'
import Test from './Test'

function App() {
	const [count, setCount] = useState(0)
	// console.log('kd nameLogger:', nameLogger('KD'))
	console.log('kd import.meta.env.BASE_URL:', import.meta.env.BASE_URL)

	return (
		<>
			<div>
				<Test />
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				{/* <h2>{nameLogger('KD')}</h2> */}
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
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
