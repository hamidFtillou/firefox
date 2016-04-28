var ss = require("sdk/simple-storage");
var Request = require("sdk/request").Request;

var ipRequest = Request({
  url: "http://www.unimatel.com/getWanIP.php",
  overrideMimeType: "text/plain; charset=latin1",
  onComplete: function (response) {
    for (var headerName in response.headers) {
      console.log(headerName + " : " + response.headers[headerName]);
    }
    ss.storage.ip = response.text;
   // ip=response.text;
    console.log("IP => "+ss.storage.ip);
  }
});

ipRequest.get();

//====================================================================
// Import the page-mod API
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var page=pageMod.PageMod({
  include: "*.org",
  contentStyleFile: "./css/global-style.css",
  contentScriptFile:["./js/jquery.js", "./js/fonctions.js"],
  onAttach: function(worker) {
  	 worker.port.emit("replacePage",ss.storage.ip);
     worker.port.on("completed",function(message) {
        console.log(message);
      });
  }
});

