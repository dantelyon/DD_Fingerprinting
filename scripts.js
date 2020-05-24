

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



