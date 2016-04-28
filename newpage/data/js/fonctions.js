//fonctions.js/
self.port.on("my-addon-message", function(message) {
	//$("body").html("<h2>"+message+"</h2>");
	console.log("Message from :"+message);
	//self.port.emit("my-script-response","Oujda");
});
