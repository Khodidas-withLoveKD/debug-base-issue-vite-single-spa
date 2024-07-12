declare module '@kd/app-1' {
	export function useSharedStateHook(): {
		test: number
		setTest: Function
	}

	export const sharedState = {
		subscribe: number,
	}

	export function setSharedState(data: number): void
}
