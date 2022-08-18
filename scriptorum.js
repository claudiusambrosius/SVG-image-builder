function generateSvg(startX, startY, len, angle, branchWidth){
		
	
	var svg = '';
	var grid_size = 40;

	/*
	var width_choices =  [11, 12, 13, 14, 16, 17, 18, 19, 20, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
	var fill_choices = ['cadetblue', 'midnightblue', 'purple', 'maroon','pink','goldenrod','lightblue','linen','aqua','lavender','cornflowerblue','thistle','brickred', 'green', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent']
	var stroke_choices = [1, 2, 5]


	for (var index_x = 0; index_x < 17; index_x++) {
		for (var index_y = 0; index_y < 17; index_y++) {
			var circle_radius 			= 	getRandomItem(width_choices);
			var ellipse_radius 			= 	getRandomItem(width_choices);
			var random_fill_color 	= 	getRandomItem(fill_choices);
			var random_stroke_width = 	getRandomItem(stroke_choices);
			var random_stroke_color	= 	getRandomItem(fill_choices)*/
		function moveTo(x,y){
			return 'M '+x+' '+y;
		}
		function transLate(x,y){
			return 'translate('+x+','+y+')';
		}			
		function roTate(ang){
			return 'rotate('+(ang* Math.PI / 180)+')';
		}	
		
			svg += '<path d="' 
				+ moveTo(0,0) +
				'" y1="' + index_y * grid_size + '" x2="' + circle_radius + '"y2="'+ ellipse_radius +
				'" stroke="'+random_stroke_color+'" fill="' +
				random_fill_color + '" stroke-width="' + random_stroke_width +'"transform="'+transLate(startX, startY) +
				+'"transform="'+roTate(angle) +'"/>';


	//	}

//	}

	
	return '<svg width="2500" height="2000">' + svg + '</svg>'

}



let sivg = generateSvg();
let svGen = document.getElementById('svg-wrapper');

svGen.innerHTML = generateSvg();


var myCanvas = document.getElementById("my_fractal");
var ctx = myCanvas.getContext("2d");
function draw(startX, startY, len, angle, branchWidth) {
	ctx.lineWidth = branchWidth;

	ctx.beginPath();
	ctx.save();

	ctx.strokeStyle = "red";
	ctx.fillStyle - "green";


	ctx.translate(startX, startY);
	ctx.rotate(angle * Math.PI / 180);
	ctx.moveTo(0, 0);
	ctx.lineTo(0, -len);
	ctx.stroke();

	ctx.shadowBlur = 15;
	ctx.shadowColor = "rgba(0,0,0,0.8)";


	if (len < 10) {
		ctx.restore();
		return;
	}
	draw(0, -len, len * 0.8, angle - 15, branchWidth * 0.8);
	draw(0, -len, len * 0.8, angle + 15, branchWidth * 0.8);

	ctx.restore();
}
draw(400, 600, 120, 0, 10)