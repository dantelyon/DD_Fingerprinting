

function newTableRow(technique) {
	let table_row = document.createElement("tr")
	let td_name = document.createElement("td")
	let td_value = document.createElement("td")
	td_value.id = technique.value.name
	td_name.innerHTML = technique.name
	td_value.innerHTML = typeof technique.value === "function" ? technique.value() : technique.value;
	table_row.appendChild(td_name)
	table_row.appendChild(td_value)
	return table_row
}

const quick_techniques = [
	{name: "User agent", value: userAgent},
	{name: "Browser storage availability", value: storage},
	{name: "Fullscreen available", value: fullscreen_available},
	{name: "Device Memory", value: deviceMemory},
	{name: "Hardware Concurrency", value: hardwareConcurrency},
	{name: "Do Not Track", value: doNotTrack},
	{name: "Cookies enabled", value: cookieEnabled},
	{name: "Webdriver", value: webdriver},
	{name: "Timezone", value: timezone},
	{name: "Referrer", value: referrer},
	{name: "Color depth", value: colorDepth},
	{name: "Page load time", value: pageLoadTime},
	{name: "Request response time", value: requestResponseTime},
	{name: "Screen resolution", value: screenResolution},
	{name: "Language", value: language},
	{name: "CSS media features", value: cssMediaFeatures},
	{name: "Time of visit", value: timeOfVisit},
	{name: "Network Info", value: networkInfo},
	{name: "Aspect Ratio", value: aspectRatio},
]

const dynamic_techniques = [
	{name: "Zoom level", value: zoom_changes},
	{name: "Key presses", value: key_press},
	{name: "Mouse clicks", value: mouse_clicks},
	{name: "Mouse movements", value: mouse_movement},
	{name: "Browser window size", value: browser_window_size},
	{name: "Session duration", value: session_duration},
	{name: "Tab changes", value: tab_changes},
]

async function slow_techniques(){
	theTable.append(...[
		{name: "something", value: await webGL()},
	].map(newTableRow))
}

const theTable = document.getElementById("table")
theTable.append(...quick_techniques.map(newTableRow))
theTable.append(...dynamic_techniques.map(newTableRow))
slow_techniques()






