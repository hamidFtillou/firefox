var { Frame } = require("sdk/ui/frame");
var { Toolbar } = require("sdk/ui/toolbar");
//==========================================
var meteo = {
  "Oujda" : "Pluvieux",
  "Casablanca": "Ensoleillé",
  "Ifrane": "Neigeux",
  "Agadir" : "Brumeux"
}

var frame = new Frame({
  url: "./html/city-info.html",
  onMessage: function(e)  {
     updateMeteo(e.data);
     console.log("New city: " + e.data);
  }
});

var toolbar = Toolbar({
  name: "city-info",
  title: ip.response.text,
  items: [frame]
});


function updateMeteo(ville) {
  
  console.log(ville);
  var label = window.document.getElementById("weather");
  label.textContent = meteo[ville];
  //frame.postMessage(meteo[ville],frame.url);
}

window.addEventListener("message", updateMeteo, false);
