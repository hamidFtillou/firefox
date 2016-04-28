// ~/firefox/dev/second/main.js
//https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/Interacting_with_page_scripts
var tabs = require('sdk/tabs');
var self = require('sdk/self');

tabs.open({ 
			url:"./html/page.html", 
			onReady: attachScript
		});
function attachScript(tab) {
	tab.attach({
		contentScriptFile: "./js/content-script.js",
	});

}


