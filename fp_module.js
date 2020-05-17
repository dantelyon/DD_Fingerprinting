


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

function language() {
	let lang = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "not available"
	return navigator.languages.includes(lang) ? navigator.languages : lang
}







