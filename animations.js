var artDisplay = document.getElementById("art");


var cxtAlt = artDisplay.getContext("2d");


cxtAlt.lineWidth = 6;
cxtAlt.strokeStyle = '#333';
cxtAlt.fillStyle = '#ccc';


cxtAlt.beginPath();
cxtAlt.moveTo(0,0);
cxtAlt.lineTo(150,150);
cxtAlt.lineTo(0,300);
cxtAlt.stroke();


var canvas = document.getElementById("mycanvas");
if (canvas.getContext) {

	// start animation
	var cxt = canvas.getContext("2d");
	cxt.fillStyle = "rgba(255,255,255,0.5)";
	
	setInterval(function() {
		var	x = Math.round(Math.random()*canvas.width), 
			y = Math.round(Math.random()*canvas.height),
			e = 20 + Math.round(Math.random()*30),
			s = 0;
		
		(function() {
			s++;
			if (s <= e) {
				setTimeout(arguments.callee,s);
				var c = 255-(e-s)*3;
				cxt.strokeStyle = "rgb("+c+","+c+","+c+")";
                //cxt.strokeStyle = "rgb(255,20,1)";
                //cxt.strokeStyle = '#333';
                //console.log(c,e,s)
				cxt.beginPath();
				cxt.arc(x,y,s,0,Math.PI*2,true);
				cxt.fill();
				cxt.stroke();
			}
		})();
	},100);

}
