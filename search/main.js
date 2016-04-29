//main.js
var cm = require('sdk/context-menu');
var googleItem = cm.Item({
	label: "Google",
	data: "https://www.google.com/search?q=",
});
var wikiItem = cm.Item({
	label:"Wikipedia",
	data: "https://fr.wikipedia.org/wiki/",
});
var searchMenu = cm.Menu({
	label: "Recherches",
	context:cm.SelectionContext(), //SelectorContext("a[href]"),
	contentScriptFile: "./js/content-scripts.js",
	items: [googleItem,wikiItem],
});

var tabs = require('sdk/tabs');
tabs.on('activate',function(tab) {
	var worker = tab.attach({
		contentScriptFile: "./js/fonctions.js",
	});

	worker.port.on("openURL", function(url) {
		console.log("opening :"+url);
		tabs.open(url);
	});

});
  //worker.port.emit("openURLdone", "Opening done");
//}

