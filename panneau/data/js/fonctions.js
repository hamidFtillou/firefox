//my-script.js/

document.getElementById("city-selector").addEventListener("change", 
function() {
		console.log("Changed!");
		self.port.emit("changed",
			"https://www.google.fr/?gws_rd=ssl#q="+
			document.getElementById("city-selector").value
		);

		document.getElementById("weather").innerHTML("<b>OK</b>");
	});

self.port.on("replacePage", function(message) {
	$("body").html("<h2>"+message+"</h2>");
	self.port.emit("completed","Message from ContentScript: OK");
});