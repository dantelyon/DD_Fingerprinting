
const static_techniques = [
    {name: "User Agent", value: function() {return navigator.userAgent}}, // Chrome is phasing out support for User Agent, and will instead offer a new API called Client Hints.

    {name: "Storage", value: function() {return [!!window.sessionStorage && "sessionStorage", !!window.localStorage && "localStorage", !!window.indexedDB && "indexedDB"].filter(i => i).join(", ")}},

    {name: "Fullscreen available", value: function() {return document.fullscreenEnabled}},

    {name: "Device memory", value: function() {return navigator.deviceMemory || "Unavailable for your browser."}}, // limited availability

    {name: "Hardware concurrency", value: function() {return navigator.hardwareConcurrency}},

    {name: "Do Not Track", value: function() {return navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.doNotTrack === "yes" || navigator.msDoNotTrack === "1"}},

    {name: "Session history", value: function() {return window.history.length}},

    {name: "Cookies enabled", value: function() {return navigator.cookieEnabled}},

    {name: "Heap memory limit", value: function() {return window.performance.memory ? window.performance.memory.jsHeapSizeLimit : "none"}},

    {name: "Webdriver", value: function() {return navigator.webdriver == null ? "not available" : navigator.webdriver}},

    {name: "Timezone", value: function() {return Intl.DateTimeFormat().resolvedOptions().timeZone || (new Date()).getTimezoneOffset()}},

    {name: "Referrer", value: function() {return document.referrer || "None"}}, // unreliable

    {name: "Color depth", value: function() {return window.screen.colorDepth}},

    {name: "Page load time", value: function() {return (window.performance.timing.loadEventEnd - window.performance.timing.navigationStart) + "ms"}},
        
    {name: "Request response time", value: function() {return (window.performance.timing.responseEnd - window.performance.timing.requestStart) + "ms"}},
    // PerformanceTiming is deprecated. If necessary, replace with PerformanceNavigationTiming or chrome.csi().
    // let perf = performance.getEntriesByType("navigation")[0]; perf.duration; perf.requestStart - perf.responseStart;

    {name: "Screen resolution", value: function() {let pixelRatio = window.devicePixelRatio || 1; let normalized = [Math.round(window.screen.width * pixelRatio), Math.round(window.screen.height * pixelRatio)]; return normalized.join("x")}},

    {name: "Language", value: function() {let lang = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "not available"; return navigator.languages.includes(lang) ? navigator.languages.join(", ") : lang}},

    {name: "CSS Media features", value: function() {const mediaFeatures = ["display-mode: browser", "min-color: 6", "any-hover: none", "any-pointer: none", "color-gamut: srgb", "monochrome: 0", "prefers-color-scheme: no-preference", "prefers-reduced-motion: no-preference"].filter(feature => window.matchMedia("("+feature+")").matches); return `${mediaFeatures.length} out of 8.`}},
    //return mediaFeatures.map(feature => window.matchMedia("("+feature+")").matches ? 1 : 0).join("")
    // color-gamut and min-color (color-index) are unsupported in Firefox.

    {name: "Time of visit", value: function() {let date = new Date(); let day = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date); return `${day}, ${date.toLocaleTimeString()}, ${date.getDate()}/${date.getMonth()+1}`}},

    {name: "Network info", value: function() {if (navigator.connection) {return ["rtt: "+navigator.connection.rtt, "downlink: "+navigator.connection.downlink, "effectiveType: "+navigator.connection.effectiveType, "saveData: "+ navigator.connection.saveData]} else {return "unsupported"}}},

    {name: "Aspect ratio", value: function() {const gcd = (a,b) => !b ? a : gcd(b,a%b); let divisor = gcd(window.screen.width, window.screen.height); return window.screen.width / divisor + ":" + window.screen.height / divisor}}, // gcd = greatest common divisor

    {name: "Adblocker", value: function() {return document.getElementById('hICiSWQkKVuN') ? "No" : "Yes"}},

    {name: "Page reloaded", value: function() {return (performance.getEntriesByType("navigation")[0].type) === "reload" ? "Yes" : "No"}},

    {name: "Last known visit", value: function() {let date = new Date(); const currentDate = `${date.getDate()}/${date.getMonth()+1}`; const lastVisit = window.localStorage.lastvisit; if (lastVisit) {window.localStorage.lastvisit = currentDate;return lastVisit;} else {window.localStorage.lastvisit = currentDate;return currentDate;}}},

    {name: "Screen orientation", value: function() {return window.screen.orientation.type}}, //window.matchMedia("(orientation: landscape/portrait)").matches;

    {name: "Touch device", value: function() {let isTouchDevice = ("ontouchstart" in window || window.navigator.maxTouchPoints || window.navigator.msMaxTouchPoints); return isTouchDevice ? "Yes" : "No";}}
]


export default static_techniques
