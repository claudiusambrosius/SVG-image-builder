function getRandomItem(list) {
	var random_index = Math.floor(Math.random() * list.length);
	return list[random_index]
}

function generateSvg() {
	var svg = '';
	var grid_size = 40;

	
	var width_choices =  [11, 12, 13, 14, 16, 17, 18, 19, 20, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
	var fill_choices = ['cadetblue', 'midnightblue', 'purple', 'maroon','pink','goldenrod','lightblue','linen','aqua','lavender','cornflowerblue','thistle','brickred', 'green', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent']
	var stroke_choices = [1, 2, 5]


	for (var index_x = 0; index_x < 17; index_x++) {
		for (var index_y = 0; index_y < 17; index_y++) {
			var circle_radius 			= 	getRandomItem(width_choices);
			var ellipse_radius 			= 	getRandomItem(width_choices);
			var random_fill_color 	= 	getRandomItem(fill_choices);
			var random_stroke_width = 	getRandomItem(stroke_choices);
			var random_stroke_color	= 	getRandomItem(fill_choices)

			
			

			svg += '<ellipse cx="' + index_x * grid_size +
				'" cy="' + index_y * grid_size + '" rx="' + circle_radius + '"ry="'+ ellipse_radius +
				'" stroke="'+random_stroke_color+'" fill="' +
				random_fill_color + '" stroke-width="' + random_stroke_width + '"/>';


		}

	}
	return '<svg width="2500" height="2000">' + svg + '</svg>'
}


let sivg = generateSvg();
let svGen = document.getElementById('svg-wrapper');
//var backgroud_svg=document.querySelector('#svg-gen')
//var g= document.getElementsByTagName('body')[0];
svGen.innerHTML = generateSvg();