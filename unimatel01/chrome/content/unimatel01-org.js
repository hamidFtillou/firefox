var unimatel01 = {

	loadjQuery: function(wnd){
		  var loader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
		   .getService(Components.interfaces.mozIJSSubScriptLoader);
		  loader.loadSubScript("chrome://unimatel01/content/jquery.js",wnd);
		  var jQuery = wnd.jQuery.noConflict(true);
		  //loader.loadSubScript("chrome://clhelper/content/jquery/jquery.hoverIntent.js", jQuery);
		  return jQuery;
	},
    // Within onLoad handler
    
    // In my case ziink refers to the single variable I declare in the global scope

    run: function() {

        var doc = window.top.getBrowser().selectedBrowser.contentWindow.document;
        alert(doc.title);
	/*	var dc = content.document;
		dc.getElementsByTagName("body" )[0].style.background-color = "orange";
	$( "body" ).css( "color", "orange" ) is equivalent to document.getElementByTagName( "body" ).style.color = "orange"
	*/

    },

    showAbout: function() {

        alert("unimatel01, created by Hamid Ftillou");

    },

    goHome: function() {

        var win = window.top.getBrowser().selectedBrowser.contentWindow;
        win.open("http://www.unimatel.net");

    },

    doIt: function() {
	
	
	alert("do it now !");	
	/*var dc = content.document;
	document.getElementsByTagName("body").style.background-color="red";
*/
    }

}
