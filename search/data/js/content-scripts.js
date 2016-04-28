//fonctions content-scripts
self.on("click",function(node,data){
				  var searchURL = data+node.textContent;
				  console.log("Recherche de:"+searchURL);
				  window.location.href=searchURL;
				  });