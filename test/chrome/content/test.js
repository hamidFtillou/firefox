var test = function() {
	var prefManager = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
	return{
	  init: function() {
		  gBrowser.addEventListner("load",function() {
			var autoRun = prefManager.getBoolPref("extensions.test.autorun");
		    if (autorun) {
			    test.run();
		    }
		  }, false);
		},
	  run: function() {
		var head = content.document.getElementsByTagName("head")[0],
		    style = content.document.getElementById("test-style"),
		    h1 = content.document.getElementsByTagName("h1"),
 		    h2 =  content.document.getElementsByTagName("h2"),
		    h3 = content.document.getElementsByTagName("h3"),
		    h4 = content.document.getElementsByTagName("h4");
		if(!style) {
		  style=content.document.createElement("link");
		  style.id="test-style";
		  style.type="text/css";
		  style.rel="stylesheet";
		  style.href="chrome://test/content/test.css";
		  head.appendChild(style);
		}
		for(var i=0,il=h1.length;i<il;i++) {
	   	    h1[i].textContent =" Unimatel 1";
		}
		for(var i=0,il=h2.length;i<il;i++) {
	   	    h2[i].textContent =" Unimatel 2";
		}

		for(var i=0,il=h3.length;i<il;i++) {
	   	    h3[i].textContent =" Unimatel 3";
		}

		for(var i=0,il=h4.length;i<il;i++) {
	   	    h4[i].textContent =" Unimatel 4";
		}

      } // run
    };

}();
window.addEventListener("DOMContent.Loaded",test.init,false);
