var btn = require('sdk/ui/button/action').ActionButton({
  id: "Get_IP",
  label: "IP:",
  icon: "./icon/myip16.png",
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
        console.log("Status  => "+response.status);
        btn.label = ( response.status === 200) ?
          "IP:"+response.text : "IP: ????? ( prière de recommencer)";
        btn.icon  = "./icon/myip16.png";
      }
    });
    req.get();
}
getIP();
//====================================================================