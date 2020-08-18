
function zoom_changes() {
	window.addEventListener('resize', event => {
		document.getElementById(this.value.name).innerText = (window.devicePixelRatio * 100).toFixed(0)+"%"
	});
	return (window.devicePixelRatio * 100).toFixed(0)+"%"
}

function key_press() {
	let keydownEvents = [];
	document.addEventListener('keydown', event => {
		keydownEvents.push(event)
		document.getElementById(this.value.name).innerText = keydownEvents.length + `x, with latest key press being: ${event.code} (${event.keyCode}) at ${event.timeStamp/1000} seconds after document creation.`
	});
	return "None so far"
}

function mouse_clicks() {
	let mousedownEvents = []
	document.addEventListener("mousedown", event => {
		mousedownEvents.push(event)
		document.getElementById(this.value.name).innerText = mousedownEvents.length + `x, with latest click being: X:${event.clientX} Y:${event.clientY} at ${event.timeStamp/1000} seconds after document creation.`
	});
	return "None so far."
}

function mouse_movement() {
	document.addEventListener('mousemove', event => {
		document.getElementById(this.value.name).innerText = `Screen X/Y: ${event.screenX}, ${event.screenY}
		Client X/Y: ${event.clientX}, ${event.clientY}`;
	});
}

// full browser window size, and browser layout size. A bit unreliable because of browsers' zoom feature. 
function browser_window_size() {
	window.addEventListener('resize', event => {
		document.getElementById(this.value.name).innerText = `${window.outerWidth}x${window.outerHeight} and ${window.innerWidth}x${window.innerHeight}.`
	});
	return `${window.outerWidth}x${window.outerHeight} and ${window.innerWidth}x${window.innerHeight}.`
}

function session_duration() {
	window.addEventListener("load", e => {
		setInterval(() => document.getElementById(this.value.name).textContent = (performance.now()/1000).toFixed(0.1), 100)
	})
}

function tab_changes() {
	let tabchanges = []
	window.addEventListener('visibilitychange', event => {
		if (document.hidden) tabchanges.push(event.timeStamp);
		document.getElementById(this.value.name).innerText = tabchanges.length
	});
	return "None yet"
}