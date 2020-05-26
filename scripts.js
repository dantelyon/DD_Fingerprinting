

techniques.forEach(t => {
	let tr = document.createElement("tr")
	let td1 = document.createElement("td")
	let td2 = document.createElement("td")
	td1.innerHTML = t.name
	td2.innerHTML = t()
	tr.appendChild(td1)
	tr.appendChild(td2)
	document.getElementById("table").appendChild(tr)
})
audioFP()

window.addEventListener('resize', event => document.querySelector(".pixel-ratio").innerText = (window.devicePixelRatio * 100).toFixed(0)+"%"); //zoom level

let keydownEvents = []
document.addEventListener('keydown', event => {
	console.log(`${event.code} (${event.keyCode}) at ${event.timeStamp}ms (after document creation).`)
	keydownEvents.push(event.keyCode)
	console.log(keydownEvents.length)
});

let mousedownEvents = []
document.addEventListener("mousedown", event => {
	console.log(`X:${event.clientX} Y:${event.clientY} at ${event.timeStamp}ms (after document creation).`)
	mousedownEvents.push(event.keyCode)
	console.log(mousedownEvents.length)
})

document.addEventListener('mousemove', event => {
	document.getElementById("#screen-log").innerText = `
    Screen X/Y: ${event.screenX}, ${event.screenY}
    Client X/Y: ${event.clientX}, ${event.clientY}`;
});