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
	context:cm.SelectorContext("a[href]"),
	contentScriptFile: "./js/content-scripts.js",
	items: [googleItem,wikiItem],
});