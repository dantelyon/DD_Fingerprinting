
const static_techniques = [
    
    { // Chrome Phasing out Support for User Agent by September, and will instead offer a new API called Client Hints.
        name: "User Agent",
        value: function() {return navigator.userAgent}
    },
        
    {
        name: "Storage", 
        value: function() {return [!!window.sessionStorage && "sessionStorage", !!window.localStorage && "localStorage", !!window.indexedDB && "indexedDB"].filter(i => i).join(", ")}
    },
    
    {name: "Fullscreen available", value: function() {return document.fullscreenEnabled}},
    
    {name: "Device memory", value: function() {return navigator.deviceMemory || "Unavailable for your browser."}}, // limited availability
    
    {name: "Hardware concurrency", value: function() {return navigator.hardwareConcurrency}},
    
    {name: "Do Not Track", value: function() {return navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.doNotTrack === "yes" || navigator.msDoNotTrack === "1"}},
    
    {name: "Session history", value: function() {return window.history.length}},

    {name: "Cookies enabled", value: function() {return navigator.cookieEnabled}},

    {name: "Webdriver", value: function() {return navigator.webdriver == null ? "not available" : navigator.webdriver}},

    {name: "Timezone", value: function() {return Intl.DateTimeFormat().resolvedOptions().timeZone || (new Date()).getTimezoneOffset()}},

    {name: "Referer", value: function() {return document.referrer || "None"}}, // unreliable

    {name: "Color depth", value: function() {return window.screen.colorDepth}},

    {name: "Page load time", value: function() {return (window.performance.timing.loadEventEnd - window.performance.timing.navigationStart) + "ms"}},
        // PerformanceTiming is deprecated. Replace with PerformanceNavigationTiming if necessary.
    {name: "Request response time", value: function() {return (window.performance.timing.responseEnd - window.performance.timing.requestStart) + "ms"}},

    {name: "Screen resolution", value: function() {let pixelRatio = window.devicePixelRatio || 1;
        let normalized = [Math.round(window.screen.width * pixelRatio), Math.round(window.screen.height * pixelRatio)]
        return normalized.join("x")}},

    {name: "Language", value: function() {	let lang = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "not available"
	return navigator.languages.includes(lang) ? navigator.languages.join(", ") : lang}},

    {name: "CSS Media features", value: function() {	const mediaFeatures = ["display-mode: browser", "min-color: 6", "any-hover: none", "any-pointer: none", "color-gamut: srgb", "monochrome: 0", "prefers-color-scheme: no-preference", "prefers-reduced-motion: no-preference"].filter(feature => window.matchMedia("("+feature+")").matches)
    return `${mediaFeatures.length} out of 8.`}},
    //return mediaFeatures.map(feature => window.matchMedia("("+feature+")").matches ? 1 : 0).join("")
    // color-gamut and min-color (color-index) are unsupported in Firefox.

    {name: "Time of visit", value: function() {let date = new Date()
	let day = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date)
	return [date.getMonth(), date.getDate(), day, date.toLocaleTimeString()]}},

    {name: "Network info", value: function() {	if (navigator.connection) { // limited availability
		return {
			rtt: navigator.connection.rtt,
			downlink: navigator.connection.downlink,
			effectiveType: navigator.connection.effectiveType,
			saveData: navigator.connection.saveData,
		}
	} else {return "unsupported"}}},

    {name: "Aspect ratio", value: function() {	const gcd = (a,b) => !b ? a : gcd(b,a%b) // greatest common divisor
        let divisor = gcd(window.screen.width, window.screen.height)
        return window.screen.width / divisor + ":" + window.screen.height / divisor}},

]


export default static_techniques
