


const userAgent = () => navigator.userAgent
// Chrome Phasing out Support for User Agent by September, and will instead offer a new API called Client Hints.

const storage = () => [!!window.localStorage, !!window.sessionStorage, !!window.indexedDB, localStorage.length, localStorage.key(0)]

const fullscreen = () => document.fullscreenEnabled

const deviceMemory = () => navigator.deviceMemory // limited availability

const hardwareConcurrency = () => navigator.hardwareConcurrency

const doNotTrack = () => navigator.doNotTrack == "1" || window.doNotTrack == "1" || navigator.doNotTrack == "yes" || navigator.msDoNotTrack == "1"

const sessionHistory = () => window.history.length

const cookieEnabled = () => navigator.cookieEnabled

const webdriver = () => navigator.webdriver == null ? "not available" : navigator.webdriver

const colorDepth = () => window.screen.colorDepth

function language() {
	let lang = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "not available"
	return navigator.languages.includes(lang) ? navigator.languages : lang
}

function cssMediaFeatures() {
	const mediaFeatures = ["display-mode: browser", "min-color: 6", "any-hover: none", "any-pointer: none", "color-gamut: srgb", "monochrome: 0", "prefers-color-scheme: no-preference", "prefers-reduced-motion: no-preference"];
	return mediaFeatures.map(feature => window.matchMedia("("+feature+")").matches ? 1 : 0).join("")
} // color-gamut and min-color (color-index) are unsupported in Firefox.

function timeOfVisit() {
	let date = new Date()
	let day = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date)
	return [date.getMonth(), date.getDate(), day, date.toLocaleTimeString()]
}

function networkInfo() { // limited availability
	return {
		rtt: navigator.connection.rtt,
		downlink: navigator.connection.downlink,
		effectiveType: navigator.connection.effectiveType,
		saveData: navigator.connection.saveData,
	}
}

function aspectRatio() {
	const gcd = (a,b) => !b ? a : gcd(b,a%b) // greatest common divisor
	let divisor = gcd(screen.width, screen.height)
	return screen.width / divisor + ":" + screen.height / divisor
}

function adblocking() {
	let ads = document.createElement("div")
	ads.innerHTML = '&nbsp;'
	ads.className = 'adsbox'
	document.body.appendChild(ads)
	let result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0;
	document.body.removeChild(ads)
	return result
}

function screenResolution() { // why like this? because firefox.
	let pixelRatio = window.devicePixelRatio || 1;
	let normalized = [Math.round(screen.width * pixelRatio), Math.round(screen.height * pixelRatio)]
	return normalized.join("x")
}





