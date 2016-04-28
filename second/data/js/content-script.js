// ~/dev/firefox/second/data/js/content-script.js

var contentScriptObject = {"villeChoisie" : "Choisir Ville"};

unsafeWindow.clonedContentScriptObject = cloneInto(contentScriptObject, unsafeWindow);
unsafeWindow.assignedContentScriptObject = contentScriptObject;

var salutation = "hello, ";
function greetme(user) {
  return salutation + user ;
}

exportFunction(greetme,unsafeWindow, {defineAs :"greetme"})

function greetme2(user) {
   return salutation +  "tooooo" + user ;	
}

var foo = createObjectIn(unsafeWindow, {defineAs: "foo"});
exportFunction(greetme2,foo,{defineAs:"ogreet"});

window.postMessage("Message from content script","*");
window.addEventListener('message',function(event) {
	console.log(event.data);
	console.log(event.origin);
},false);

//========  with Custom Event ===========================
var messenger = document.getElementById("message");
messenger.addEventListener("click",sendCustomEvent,false);
function sendCustomEvent() {
	var greeting = {"greeting":"hello world"};
	var cloned = cloneInto(greeting, document.defaultView);
	var event = new CustomEvent("addon-message",
		{bubbles: true, detail:cloned});
	document.documentElement.dispatchEvent(event);
}
//==========================================================