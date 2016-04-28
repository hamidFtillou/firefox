// Test des objets en Javascript
//https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Contributor_s_Guide/Content_Processes
function Point(x,y) {
	if(!this)
	  return new Point(x, y);
	this.x = x;
	this.y = y;
}
Point.prototype.show = function() {
	console.log("x:"+this.x+ " y:"+ this.y);
}

function Cercle(x,y,rayon) {
	if (!this) 
		return new Cercle(x, y, rayon);

	this.centre = new Point(x,y);
	//Point.call(this,x,y); //Inheritance
	this.rayon = rayon;
}

Cercle.prototype.show = function() {
	console.log("Centre:");
	this.centre.show();
	console.log(" rayon:"+this.rayon);
}
pt1 =new Point(2,4);
pt1.show();

cer1= new Cercle(1,2,5);
Cercle.prototype = Object.create(Point.prototype);
cer1.show();