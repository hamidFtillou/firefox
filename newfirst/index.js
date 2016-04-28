var self = require("sdk/self");

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "unimatel-link",
  label: "Visiter Unimatel",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://www.unimatel.com/");
}
var numClicks = 0;
var myItem = require("sdk/context-menu").Item({
  label: "Click Me: " + numClicks,
  contentScript: 'self.on("click", self.postMessage);',
  onMessage: function () {
    numClicks++;
    this.label = "Clickez moi : " + numClicks;
    // Setting myItem.label is equivalent.
  }
});
require("sdk/widget").Widget({
  id:"widg-1",label:"Test Widget",content:"Hello!",width:50
});
