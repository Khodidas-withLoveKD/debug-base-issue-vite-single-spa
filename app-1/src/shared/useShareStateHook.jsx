import { useState } from 'react'

const useSharedStateHook = () => {
	const [test, setTest] = useState(1)
	// const test = 10
	// const setTest = () => `This is setTEst`

	return { test, setTest }
}

export { useSharedStateHook }
