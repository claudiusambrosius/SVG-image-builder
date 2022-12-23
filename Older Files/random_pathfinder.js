function getRandomItem(list) {
	var random_index = Math.floor(Math.random() * list.length);
	return list[random_index]
}

function randomColorRgba() {
	let r = Math.floor(Math.random() * 255)
	let g = Math.floor(Math.random() * 255)
	let b = Math.floor(Math.random() * 255)
	let a = Math.random() * 0.99
	return `rgba(${r},${g},${b},${a})`
}

//randomColorHex() {
//	return "#" +Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');

//}

function generateSvg() {
	var svg = '';
	var image_width = 600
	var image_height = 600
	var grid_size = 20								//Math.floor(Math.random()*((40-20 + 1) + 20));
	var top_index_random = 500 			//Math.floor(Math.random()*((100-50+1)+50))

	//const newColour= "#" +Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');

	for (var index_x = 0; index_x < top_index_random; index_x++) {
		for (var index_y = 0; index_y < top_index_random; index_y++) {
			//var circle_radius = Math.floor(Math.random() * 60);
			//var ellipse_radius = Math.floor(Math.random() * 60);
			var random_fill_color = randomColorRgba()
			var random_stroke_width = Math.floor(Math.random() * 3);
			var random_stroke_color = randomColorRgba();
			//var random_fill_opacity = (Math.random() * 0.99).toString()
			//var random_stroke_opacity = (Math.random() * 0.99).toString()
			var degree_of_roation = Math.floor(Math.random() * 360).toString()
			var factor_x = index_x * grid_size
			var factor_y = index_y * grid_size
			var random_x = Math.floor(Math.random() *(image_width - index_x))
			var random_y = Math.floor(Math.random() *(image_height - index_y))
			var translate = `translate(${random_x},${random_y})`
			var rotoroute = `rotate(${degree_of_roation})`;
			var transformation= `transform="${translate} ${rotoroute}"`;
			var middle_x= Math.floor(image_width / 2);
			var middle_y=Math.floor(image_height/2);
			var reference_x =	index_x + middle_x;
			var reference_y =	index_y + middle_y;

			var func_x= reference_x
			var func_y=reference_x		//Math.floor(index_y/index_x)


			var path_elem = ` Q ${reference_x } ${reference_y} ${func_x } ${func_y} `
		

			svg += path_elem



		}

	}
	return `<svg width="${image_width}" height="${image_height}" xmlns="http://www.w3.org/2000/svg" style="background-color:${random_fill_color}">  <path d="M ${middle_x} ${middle_y} ${svg} "stroke="${random_stroke_color}" fill=" ${random_fill_color}  stroke-width="${random_stroke_width}"  /> </svg>`
}


let sivg = generateSvg();
let svGen = document.getElementById('something-completely-different');

svGen.innerHTML = generateSvg();