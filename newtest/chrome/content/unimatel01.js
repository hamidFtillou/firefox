(function() {
    jQuery.noConflict();
    $ = function(selector,context) { 
        return new jQuery.fn.init(selector,context||unimatel01.doc); 
    };
    $.fn = $.prototype = jQuery.fn;

    unimatel01 = new function(){};
    unimatel01.log = function() { 
        Firebug.Console.logFormatted(arguments,null,"log"); 
    };
    unimatel01.showAbout= function() {

        alert("unimatel01, created by Hamid Ftillou");

    };

    unimatel01.goHome= function() {
        var win = window.top.getBrowser().selectedBrowser.contentWindow;
        win.open("http://www.unimatel.com");
    };

    unimatel01.doIt= function(doc,aEvent) {
       // Setup
        this.win = aEvent.target.defaultView.wrappedJSObject;
        this.doc = doc;

        // Hello World
        this.main = main = $('<div>').appendTo(doc.body).html('<b>unimatel01 second proof!</b>');
        
        $(doc+' #go').attr("label","Dol Goooooo");
    
	    alert("do it now !");	
	
    };
    unimatel01.run = function(doc,aEvent) {
       
        if (doc.getElementById("plugin-unimatel01")) return;

        // Setup
        this.win = aEvent.target.defaultView.wrappedJSObject;
        this.doc = doc;

        // Hello 
        this.main = main = $('<div class="rectangle" id="plugin-unimatel01">')
        .appendTo(doc.body).html('unimatel01 Loaded! - jQuery <b>' + $.fn.jquery + '</b>');
      
         $('#go').attr("label","Dol Goooooo");
    };

    // Bind Plugin
    var delay = function(aEvent) { 
        var doc = aEvent.originalTarget; setTimeout(function() { 
            unimatel01.run(doc,aEvent); 
        }, 1); 
     };
    var load = function() { 
        gBrowser.addEventListener("DOMContentLoaded", delay, true); 
    };
    window.addEventListener("pageshow", load, false);
    
})();
 