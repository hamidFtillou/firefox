//https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts
var tabs = require('sdk/tabs');
var pageMod = require('sdk/page-mod');
var self = require('sdk/self');

var pageUrl = './html/page.html';
//useTab();
usePageMod()
function usePageMod() {
	var contentScriptValue = 'alert(window.foo);';
	pageMod.PageMod({
	  include: pageUrl,
	  contentScript: contentScriptValue,
	  contentScriptWhen: "ready", //start, ready, end
	});
	tabs.open(pageUrl);
}
function usePageMod0() {
	var contentScriptValue = 'document.body.innerHTML = ' +
	                         ' "<h1>Page matches ruleset</h1>";';
	pageMod.PageMod({
	  include:  "*.com",
	  contentScript: contentScriptValue,
	  contentScriptWhen: "ready", //start, ready, end
	});
}
//====================================================================
function useTab() {
	var contentScriptString ='document.body.innerHTML="<h2> Cette page a ete remplacée </h2>"';
	tabs.on('ready', function(tab) {
		tab.attach({
	   		contentScript: [
	   		'document.body.style.border = "5px solid red";', 
	   		'window.alert("hi");'
	   		],
	   		contentScriptOptions:{"message":"Hello"}
		});
	});
	
}
//=========================================================
require("sdk/ui/button/action").ActionButton({
  id: "list-tabs",
  label: "List Tabs",
  icon: "./icon/play16.png",
  onClick: function() {
  		listTabs();
  		var worker = tabs.activeTab.attach({
  				contentScriptFile:"./js/my-script.js",

  		});
  		worker.port.emit("drawBorder","red");
  	}
  });

function listTabs() {
  for (let tab of tabs)
    console.log(tab.url);
}

/*
require("sdk/tabs").on("ready", runScript);
 
function runScript(tab) {
  tab.attach({
    contentScript: "if (document.body) document.body.style.border = '5px solid red';"
  });
}
*/
var clipboard = require("sdk/clipboard");
clipboard.set("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYA" +
              "AABzenr0AAAASUlEQVRYhe3O0QkAIAwD0eyqe3Q993AQ3cBSUKpygfsNTy" +
              "N5ugbQpK0BAADgP0BRDWXWlwEAAAAAgPsA3rzDaAAAAHgPcGrpgAnzQ2FG" +
              "bWRR9AAAAABJRU5ErkJggg%3D%3D");

if (clipboard.currentFlavors.indexOf("image") != -1)
  require("sdk/tabs").open(clipboard.get());

clipboard.set("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYA" +
              "AABzenr0AAAASUlEQVRYhe3O0QkAIAwD0eyqe3Q993AQ3cBSUKpygfsNTy" +
              "N5ugbQpK0BAADgP0BRDWXWlwEAAAAAgPsA3rzDaAAAAHgPcGrpgAnzQ2FG" +
              "bWRR9AAAAABJRU5ErkJggg%3D%3D", "text");

if (clipboard.currentFlavors.indexOf("image") != -1)
  require("sdk/tabs").open(clipboard.get());
