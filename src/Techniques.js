
function color() {return window.screen.colorDepth}
function referrer() {return document.referrer || "None"}

const techniques = [
    {name: "Referrer", value: referrer()},
    {name: "Color", value: color()},
]

export default techniques