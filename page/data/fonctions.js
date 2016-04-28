//my-script.js/
self.port.on("replacePage", function(message) {
	$("body").html("<h2>"+message+"</h2>");
});