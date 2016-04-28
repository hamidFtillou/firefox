var self = require("sdk/self");
var tabs = require("sdk/tabs");
var buttons = require("sdk/ui/button/action");
var { ToggleButton } = require('sdk/ui/button/toggle');
var panels =require("sdk/panel");

var panel = panels.Panel({
  contentURL: "./html/panel.html", //self.data.url("panel.html"),
  onHide: handleHide
});

/*
buttons.ActionButton({
  id: "attach-script",
  label: "Attach the script",
  icon: "./icon/pause16.png",
  //onClick: attachScript,
  onChange: attachScript //
});
*/
var button = ToggleButton({
  id: "btn-play",
  label: "Panneau",
  icon: {
    "16": "./icon/forward16.png",
    "32": "./icon/forward32.png",
    "64": "./icon/forward64.png"
  },
  onChange: attachScript//handleChange
});


function attachScript(state) {
  var worker = tabs.activeTab.attach({
    contentScriptFile: self.data.url("js/fonctions.js")
  });
  worker.port.on("my-script-response", function(response) {
    console.log(response);
    tabs.open("https://www.google.com/?gws_rd=ssl#q="+response);
  });
  handleChange(state);
  worker.port.emit("my-addon-message", "Message from the add-on");
}

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}
//===================================================================