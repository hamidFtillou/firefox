const widgets = require("sdk/widget");
const data = require("sdk/self").data;

var player = widgets.Widget({
  id: "uniplayer",
  width: 72,
  label: "Unimatel Player",
  contentURL: data.url("buttons.html"),
  contentScriptFile: data.url("button-script.js")
});

player.port.on("play", function() {
  console.log("playing");
});

player.port.on("pause", function() {
  console.log("pausing");
});

player.port.on("stop", function() {
  console.log("stopping");
});
