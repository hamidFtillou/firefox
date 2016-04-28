//scr.js


document.getElementById("city-selector").addEventListener("change", 
function() {
		console.log("Changed to "+document.getElementById("city-selector").value);
		self.port.emit("my-script-response",
			document.getElementById("city-selector").value
		);
});