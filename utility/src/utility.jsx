import { useState } from 'react'

export function nameLogger(name) {
	return `Name is ${name}`
}

export const SomeComponent = () => {
	return <h3>THis is that SomeComponent</h3>
}

const useSharedStateHook = () => {
	const [test, setTest] = useState(1)
	// const test = 10
	// const setTest = () => `This is setTEst`

	return { test, setTest }
}

export { useSharedStateHook }
