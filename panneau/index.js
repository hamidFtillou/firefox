var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self   = require("sdk/self");
var tabs   = require("sdk/tabs");

var boutton = ToggleButton({
  id: "btn-play",
  label: "Panneau",
  icon: {
    "16": "./icon/forward16.png",
    "32": "./icon/forward32.png",
    "64": "./icon/forward64.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: "./html/panel.html", 
  onHide: handleHide
});

function startlistening(w) {
	w.port.on("changed", function(msg){ console.log("Changed!! "+msg);});
}

function handleChange(state) {
  if (state.checked) {
    panel.show({ position: boutton });
  }
}

function handleHide() {
  boutton.state('window', {checked: false});
}
//===================================================================