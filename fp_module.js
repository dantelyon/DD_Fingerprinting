
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

const pageLoadTime = () => window.performance.timing.loadEventEnd - window.performance.timing.navigationStart // in ms
// PerformanceTiming is deprecated. Replace with PerformanceNavigationTiming if necessary.
const requestResponseTime = () => window.performance.timing.responseEnd - window.performance.timing.requestStart // in ms

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

function domRect(){
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
	document.body.appendChild(elem);
	let rect = document.getElementById('target').getClientRects()[0];
	elem.remove();
	return rect
}

function webGL() {
	let canvas = document.createElement('canvas')
	let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
	let vertexPosBuffer = gl.createBuffer()
	let vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0])
	let program = gl.createProgram()
	let vshader = gl.createShader(gl.VERTEX_SHADER)
	let fshader = gl.createShader(gl.FRAGMENT_SHADER)
	gl.clearColor(0.0, 0.0, 0.0, 1.0)
	gl.enable(gl.DEPTH_TEST)
	gl.depthFunc(gl.LEQUAL)
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
	gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
	vertexPosBuffer.itemSize = 3
	vertexPosBuffer.numItems = 3
	gl.shaderSource(vshader, 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}')
	gl.compileShader(vshader)
	gl.shaderSource(fshader, 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}')
	gl.compileShader(fshader)
	gl.attachShader(program, vshader)
	gl.attachShader(program, fshader)
	gl.linkProgram(program)
	gl.useProgram(program)
	program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
	program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
	gl.enableVertexAttribArray(program.vertexPosArray)
	gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
	gl.uniform2f(program.offsetUniform, 1, 1)
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
	return gl.canvas.toDataURL()
}

function canvas(){
	let canvas = document.createElement("canvas")
	let context = canvas.getContext("2d")
	canvas.width = 320
	canvas.height = 200
	context.font = "14px 'Arial'"
	context.fillStyle = "#f60"
	context.fillRect(20, 1, 62, 100)
	context.fillStyle = "#069"
	context.fillText("MNOP_dahlberg~1!2@", 2, 15);
	context.fillStyle = "rgba(102, 204, 0, 0.7)"
	context.fillText("MNOP_dahlberg~1!2@", 4, 45)
	context.fillStyle = "rgb(255,0,255)"
	context.fillRect(200, 1, 62, 100)
	let data = canvas.toDataURL();
	let hash = 0;
	for (let i = 0; i < data.length; i++) {
		hash = (((hash<<5) - hash) + data.charCodeAt(i));
	}
	return (hash&0xFFFFFFFF).toString(16);
}

function accounts() {
    const platforms = {
        "VK": "https://vk.com/login?u=2&to=ZmF2aWNvbi5pY28-",
        "Indeed": "https://secure.indeed.com/account/login?continue=%2ffavicon.ico",
        "BitBucket": "https://bitbucket.org/account/signin/?next=/favicon.ico",
        "Meetup": "https://secure.meetup.com/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif",
        "Khan Academy": "https://www.khanacademy.org/login?continue=https%3A//www.khanacademy.org/favicon.ico",
        "Twitch": "www.twitch.tv/login?redirect_on_login=/favicon.ico",
        "Disqus": "https://disqus.com/profile/login/?next=https%3A%2F%2Fdisqus.com%2Ffavicon.ico",
        "Airbnb": "https://www.airbnb.com/login?redirect_params[action]=favicon.ico&redirect_params[controller]=home",
        "Paypal": "https://www.paypal.com/signin?returnUri=https://t.paypal.com/ts?v=1.0.0",
        "Slack": "https://slack.com/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23",
        "Edx": "https://courses.edx.org/login?next=/favicon.ico",
        "Hackernews": "https://news.ycombinator.com/login?goto=y18.gif%23",
        "Medium": "https://medium.com/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default",
        "Github": "https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1",
        "Steam": "https://store.steampowered.com/login/?redir=favicon.ico",
        "Battle.net": "https://eu.battle.net/login/de/index?ref=http://eu.battle.net/favicon.ico",
        "Pinterest": "https://www.pinterest.com/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
        "Amazon": "https://www.amazon.com/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
        "Dropbox": "https://www.dropbox.com/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg",
        "Expedia": "https://www.expedia.de/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
        "Tumblr": "https://www.tumblr.com/login?redirect_to=%2Ffavicon.ico",
        "Reddit": "https://www.reddit.com/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
        "Spotify": "https://www.spotify.com/en/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
        "Skype": "https://login.skype.com/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
        "Youtube": "https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube",
        "Gmail": "https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
        "Facebook": "https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
        "Twitter": "https://twitter.com/login?redirect_after_login=%2f..%2ffavicon.ico"
    }
    let loggedInto = []
    for (let property in platforms){
        let img = document.createElement("img");
        img.referrerPolicy = "no-referrer";
        img.src = platforms[property];
        img.onload = () => loggedInto.push(property);
    }
    return loggedInto
};

