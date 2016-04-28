// ~/dev/firefox/gettag/data/js/element-getter.js

	self.port.on("getElements", function(tag) {
	  /*var elements = document.getElementsByTagName(tag);

	  for (var i = 0; i < elements.length; i++) {
	    self.port.emit("gotElement", elements[i].innerHTML);
	  }
	 */

	  $("a").each( function(index) {
	     console.log(index +":"+ $(this).attr('href'));
	  });
	});
