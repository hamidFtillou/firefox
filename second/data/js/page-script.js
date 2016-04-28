var works = document.getElementById("works");
works.addEventListener("click", function() {
    alert(clonedContentScriptObject.villeChoisie);
 }, false);

var fails = document.getElementById("fails");
  fails.addEventListener("click", function() {
    alert(assignedContentScriptObject.villeChoisie);
 }, false);

 //==================================================
 var ville = document.getElementById("choixVille");
 ville.addEventListener("change",function() {
 	//alert(ville.value+ "Choisie");
 	console.log(ville.value+ " Choisie");
 	clonedContentScriptObject.villeChoisie=ville.value;
 	sendMessage(ville.value);
 },false);

 function sendMessage(newTown) {
	  	window.postMessage(newTown,"*");
	  }
function sendCusMessage() {
	var event = document.createEvent('CustomEvent');
	event.initCustomEvent("addon-message",true,true,{"hello":"world"});
	document.documentElement.dispatchEvent(event);
}
//======================================================
 var test = document.getElementById("test");
		 test.addEventListener("click", function() {
		alert(window.greetme(
			"page script page.html")+ "-->"+ window.foo.ogreet(" script scope"));
		}, false);

    window.addEventListener('message',function(event) {
	  	window.alert(event.data);
	  },false);

	window.addEventListener('addon-message',function(event) {
	  	window.alert(event.detail.greeting);
	  },false);


	  