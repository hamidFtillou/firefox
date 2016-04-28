//my-script.js/
self.port.on("replacePage", function(message) {
	$("body").html("<h2>"+message+"</h2>");
	self.port.emit("completed","Message from ContentScript: OK");
});