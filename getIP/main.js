var btn = require('sdk/ui/button/action').ActionButton({
  id: "Get_IP",
  label: "IP:",
  icon: "./icon/play16.png",
  onClick: function() {
      getIP();
    }
  });

function getIP() {
    btn.icon = "./icon/wait.gif";
    var req = require('sdk/request').Request({
      url: "http://www.unimatel.com/getWanIP.php",
      overrideMimeType: "text/plain; charset=latin1",
      onComplete: function (response) {
        console.log("IP => "+response.text);
        btn.label = "IP:"+response.text;
        btn.icon  = "./icon/play16.png";
      }
    });
    req.get();
}
//====================================================================


