function getRandomItem(list) {
	var random_index = Math.floor(Math.random() * list.length);
	return list[random_index]
}

function randomColorRgba(){
		let r = Math.floor(Math.random()*255)
		let g = Math.floor(Math.random()*255)
		let b = Math.floor(Math.random()*255)
		let a = Math.random()*0.99
		return `rgba(${r},${g},${b},${a})`
}

//randomColorHex() {
//	return "#" +Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
	
//}

function generateSvg() {
	var svg = '';
	var grid_size =10//Math.floor(Math.random()*((40-20 + 1) + 20));

	
	//var width_choices =  [11, 12, 13, 14, 16, 17, 18, 19, 20, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
	//var fill_choices = ['cadetblue', 'midnightblue', 'purple', 'maroon','pink','goldenrod','lightblue','linen','aqua','lavender','cornflowerblue','thistle','firebrick', 'green', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent']
	//var stroke_choices = [1, 2, 5]
	var top_index_random = 200 //Math.floor(Math.random()*((100-50+1)+50))
	
	//var opacity_choices= [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]
	//const newColour= "#" +Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');


	for (var index_x = 0; index_x <top_index_random; index_x++) {
		for (var index_y = 0; index_y < top_index_random; index_y++) {
			var circle_radius 			= 	Math.floor(Math.random()*60);
			var ellipse_radius 			= 	Math.floor(Math.random()*60);
			var random_fill_color 	= 	randomColorRgba()
			var random_stroke_width = 	Math.floor(Math.random()*10);
			var random_stroke_color	= 	randomColorRgba();
			var random_fill_opacity =		(Math.random()*0.99).toString()
			var random_stroke_opacity =		(Math.random()*0.99).toString()

			
			

			svg += '<ellipse cx="' + index_x * grid_size +
				'" cy="' + index_y * grid_size + '" rx="' + circle_radius + '"ry="'+ ellipse_radius +
				'" stroke="'+random_stroke_color+'" fill="' +
				random_fill_color + '" stroke-width="' + random_stroke_width +
				'" stroke-opacity="' + random_stroke_opacity +
				'" fill-opacity="' + random_fill_opacity +'"/>';


		}

	}
	return '<svg width="2000" height="1000" xmlns="http://www.w3.org/2000/svg" style="background-color:'+random_fill_color+'">' + svg + '  </svg>'
}


let sivg = generateSvg();
let svGen = document.getElementById('svg-wrapper');
//var backgroud_svg=document.querySelector('#svg-gen')
//var g= document.getElementsByTagName('body')[0];
svGen.innerHTML = generateSvg();