// city-info.js
var citySelector = window.document.getElementById("city-selector");
citySelector.addEventListener("change", cityChanged);

function cityChanged() {
	console.log('from cityChanged '+citySelector.value)
    window.parent.postMessage(citySelector.value, "*");
}
