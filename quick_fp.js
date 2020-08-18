
function userAgent() {return navigator.userAgent} // Chrome Phasing out Support for User Agent by September, and will instead offer a new API called Client Hints.

function storage() {
	return [!!window.sessionStorage && "sessionStorage", !!window.localStorage && "localStorage", !!window.indexedDB && "indexedDB"].filter(i => i).join(", ")
}

function fullscreen_available() {return document.fullscreenEnabled}

function deviceMemory() {return navigator.deviceMemory || "Unavailable for your browser."} // limited availability

function hardwareConcurrency() {return navigator.hardwareConcurrency}

function doNotTrack() {return navigator.doNotTrack == "1" || window.doNotTrack == "1" || navigator.doNotTrack == "yes" || navigator.msDoNotTrack == "1"}

function sessionHistory() {return window.history.length}

function cookieEnabled() {return navigator.cookieEnabled}

function webdriver() {return navigator.webdriver == null ? "not available" : navigator.webdriver}

function timezone() {return Intl.DateTimeFormat().resolvedOptions().timeZone || (new Date).getTimezoneOffset()}

function referrer() {return document.referrer || "None"} // unreliable

function colorDepth() {return window.screen.colorDepth}

function pageLoadTime() {return window.performance.timing.loadEventEnd - window.performance.timing.navigationStart} // in ms
// PerformanceTiming is deprecated. Replace with PerformanceNavigationTiming if necessary.
function requestResponseTime() {return window.performance.timing.responseEnd - window.performance.timing.requestStart} // in ms

function screenResolution() {
	let pixelRatio = window.devicePixelRatio || 1;
	let normalized = [Math.round(screen.width * pixelRatio), Math.round(screen.height * pixelRatio)]
	return normalized.join("x")
}

function language() {
	let lang = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "not available"
	return navigator.languages.includes(lang) ? navigator.languages.join(", ") : lang
}

function cssMediaFeatures() {
	const mediaFeatures = ["display-mode: browser", "min-color: 6", "any-hover: none", "any-pointer: none", "color-gamut: srgb", "monochrome: 0", "prefers-color-scheme: no-preference", "prefers-reduced-motion: no-preference"].filter(feature => window.matchMedia("("+feature+")").matches)
	return `${mediaFeatures.length} out of 8.`
	//return mediaFeatures.map(feature => window.matchMedia("("+feature+")").matches ? 1 : 0).join("")
} // color-gamut and min-color (color-index) are unsupported in Firefox.

function timeOfVisit() {
	let date = new Date()
	let day = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date)
	return [date.getMonth(), date.getDate(), day, date.toLocaleTimeString()]
}

function networkInfo() { // limited availability
	if (navigator.connection) {
		return {
			rtt: navigator.connection.rtt,
			downlink: navigator.connection.downlink,
			effectiveType: navigator.connection.effectiveType,
			saveData: navigator.connection.saveData,
		}
	} else {return "unsupported"}
}

function aspectRatio() {
	const gcd = (a,b) => !b ? a : gcd(b,a%b) // greatest common divisor
	let divisor = gcd(screen.width, screen.height)
	return screen.width / divisor + ":" + screen.height / divisor
}