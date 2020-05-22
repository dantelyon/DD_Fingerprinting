


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

const timezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone || (new Date).getTimezoneOffset()

const referrer = () => document.referrer // unreliable

const colorDepth = () => window.screen.colorDepth

const browserWindowSize = () => `${window.outerWidth}x${window.outerHeight} and ${window.innerWidth}x${window.innerHeight}.` // full browser window size, and browser layout size. A bit unreliable because of browsers' zoom feature. 

function screenResolution() {
	let pixelRatio = window.devicePixelRatio || 1;
	let normalized = [Math.round(screen.width * pixelRatio), Math.round(screen.height * pixelRatio)]
	return normalized.join("x")
}

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

function renderer() {
	if (1 == !!window.WebGLRenderingContext || 1 == !!window.WebGL2RenderingContext) {
		let canvas = document.createElement("canvas");
		let webgl = canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl2") || canvas.getContext("experimental-webgl");
		return webgl.getParameter(webgl.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL)
	}
}

function DOMRect(){
        let elem = document.createElement('div');
        let s = elem.style;
        s.position = 'absolute';
        s.left = '3.1px';
        s.top = '2.1px';
        s.zIndex = '-100';
        s.visibility = 'hidden';
        s.fontSize = '19.123px';
        s.transformOrigin = '0.1px 0.2px 0.3px';
        s.webkitTransformOrigin = '0.1px 0.2px 0.3px';
        s.webkitTransform = 'scale(1.01123) matrix3d(0.251106, 0.0131141, 0, -0.000109893, -0.0380797, 0.349552, 0, 7.97469e-06, 0, 0, 1, 0, 575, 88, 0, 1)';
        s.transform = 'scale(1.01123) matrix3d(0.251106, 0.0131141, 0, -0.000109893, -0.0380797, 0.349552, 0, 7.97469e-06, 0, 0, 1, 0, 575, 88, 0, 1)';
        elem.innerHTML = '<h1>Sed ut perspiciatis unde</h1>dahlberg<b>dahl<i id="target">dahl</i></b>';
        document.body.appendChild(elem);
        let rect = document.getElementById('target').getClientRects()[0];
        elem.remove();
        return rect
}






