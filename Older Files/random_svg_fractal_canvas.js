/// original tutorial from https://lautarolobo.xyz/blog/use-javascript-and-html5-to-code-a-fractal-tree/
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




/// from https://www.josvromans.com/blog/2019/4/generate-random-art-with-svg-javascript/




/*function getRandomItem(list) {
	var random_index = Math.floor(Math.random() * list.length);
	return list[random_index]


}

function generateSvg() {
	var svg = '';
	var grid_size = 50;

	var width = 50;
	var height = 50;


	//	var width_choices = [width -10, width, width + 10];
	var width_choices = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
	var fill_choices = ['gray', 'blue', 'purple', 'maroon', 'green', 'transparent', 'transparent']
	var stroke_choices = [1, 2, 5]


	for (var index_x = 0; index_x < 15; index_x++) {
		for (var index_y = 0; index_y < 15; index_y++) {
			var rectangle_width = getRandomItem(width_choices);
			var rectangle_height = getRandomItem(width_choices);
			var random_fill_color = getRandomItem(fill_choices);
			var random_stroke_width = getRandomItem(stroke_choices)

			//var count_y = document_height/grid_sizae +1;
			//var count_x = document_width/grid_sizae +1;

			svg += '<rect x="' + index_x * grid_size +
				'" y="' + index_y * grid_size + '" width="' + rectangle_width +
				'" height="' + rectangle_height + '" stroke="black" fill="' +
				random_fill_color + '" stroke-width="' + random_stroke_width + '"/>';


		}

	}
	return '<svg width="800" height="800">' + svg + '</svg>'
}

/*document.addEventListener("DOMContentLoaded", function(event){
			let svGen= document.getElementById('svg-gen');	
			var backgroud_svg=document.querySelector('#svg-gen')
			var g= document.getElementsByTagName('body')[0];
			svGen.innerHTML= generateSvg(g.clientWidth, g.clientHeight);			
	
	
});
*/
//let sivg=generateSvg();
//console.log('Generate SVG Function Result:\n' + sivg)

//console.log(svGen)

////svGen.appendChild(sivg)

//let sivg = generateSvg();
//let svGen = document.getElementById('svg-gen');
//var backgroud_svg=document.querySelector('#svg-gen')
//var g= document.getElementsByTagName('body')[0];//
//svGen.innerHTML = generateSvg();

//console.log(svGen)

//svGen.appendChild(sivg)