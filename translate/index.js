
//https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/context-menu
//https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/context-menu
//export.main = function() {    
var contextMenu = require('sdk/context-menu');
var request     = require('sdk/request');
var selection   = require('sdk/selection');

var menuItem = contextMenu.Item({
	label: "Traduire la selection",
	context: contextMenu.SelectionContext(),
	contentScriptFile:["./js/jquery.js",
  					 "./js/translate.js"
  					 ],
    onMessage: function(text) {
    	if (text.length === 0) {
    		throw("Le texte ne doit pas etre vide");
    	}
    	//selection.text = "<u>"+selection.text.toUpperCase()+"</u>";
        //if(!selection.isContiguous) {
            for( var subselection in selection) {
                  subselection.html = "<u>"+subselection.html+"</u>";  
            }
        //} else {
        //    selection.html = "<u>"+selection.html+"</u>";
        //}
    }
});

//=======================================================

var cm = require("sdk/context-menu");
cm.Item({
  label: "body context",
  context: cm.SelectorContext("body"),
  contentScript: 'self.on("context", function (node,data) {' +
                 '  console.log(node.nodeName);' +
                 '  return true;' +
                 '});'+
                 'self.on("click", function (node, data) {' +
                 '  console.log("Item clicked!");' +
                 '});'
});

//=======================================================
var cm1 = require("sdk/context-menu");
cm1.Menu({
  label: "My Menu",
  contentScript: 'self.on("click", function (node, data) {' +
                 '  console.log("You clicked " + data);' +
                 '});',
  items: [
    cm.Item({ label: "Item 1", data: "item1" }),
    cm.Item({ label: "Item 2", data: "item2" }),
    cm.Item({ label: "Item 3", data: "item3" })
  ]
});
//=======================================================
var cm2 = require("sdk/context-menu");
cm2.Item({
  label: "Edit Image",
  context: cm.SelectorContext("img"),
  contentScript: 'self.on("click", function (node, data) {' +
                 '  self.postMessage(node.src);' +
                 '});',
  onMessage: function (imgSrc) {
    openImageEditor(imgSrc);
  }
});
//=======================================================


require("sdk/context-menu").Item({
  label: "Edit Page Source",
  contentScript: 'self.on("click", function (node, data) {' +
                 '  self.postMessage(document.URL);' +
                 '});',
  onMessage: function (pageURL) {
    console.log(pageURL);
    //view-source(pageURL);
  }
});


//=======================================================
function traduire(texte) {
var req = request.Request({
    		url:"http://ajax.googleapis.com/ajax/services/language/translate",
    		content: {
    			v: "1.0", q: text, langpair: "|en"
    		},
    		onComplete: function(response) {
    			traduction = response.json.responseData.translatedText;
    			selection.text = traduction;
    		},
    	});
    	req.get();

}

//};
