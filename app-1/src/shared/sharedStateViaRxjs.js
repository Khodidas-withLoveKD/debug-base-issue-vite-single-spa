import { BehaviorSubject } from 'rxjs'

// const sharedStateViaRxjs = () => {

//   // const setSharedState =

// }

// TODO: to externalise a state from a jsx component

const sharedSubject = new BehaviorSubject(100)
const sharedState = sharedSubject.asObservable()
const setSharedState = (data) => {
	sharedSubject.next(data)
}

export { sharedState, setSharedState }
