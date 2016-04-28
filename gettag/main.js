//~/dev/firefox/gettag/main.js

var tag = "a";
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptFile:["./js/jquery.js",
  					 "./js/element-getter.js"
  					 ],
  onAttach: function(worker) {
    worker.port.emit("getElements", tag);
    worker.port.on("gotElement", function(elementContent) {
      console.log(elementContent);
    });
  }
});
