export function prefix(location: Location, ...prefixes: Array<string>) {
	return prefixes.some(
		(prefix) => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
	)
}

export function nav() {
	// The nav is always active
	return true
}

export function page1(location: Location) {
	return prefix(location, 'page1')
}

export function page2(location: Location) {
	return prefix(location, 'page2')
}
