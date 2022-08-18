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
	var image_width = 1800
	var image_height = 900
	var grid_size = 10								//Math.floor(Math.random()*((40-20 + 1) + 20));
	var top_index_random = 60 			//Math.floor(Math.random()*((100-50+1)+50))

	//const newColour= "#" +Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');

	for (var index_x = 0; index_x < top_index_random; index_x++) {
		for (var index_y = 0; index_y < top_index_random; index_y++) {
			var circle_radius = Math.floor(Math.random() * 60);
			var ellipse_radius = Math.floor(Math.random() * 60);
			var random_fill_color = randomColorRgba()
			var random_stroke_width = Math.floor(Math.random() * 10);
			var random_stroke_color = randomColorRgba();
			var random_fill_opacity = (Math.random() * 0.99).toString()
			var random_stroke_opacity = (Math.random() * 0.99).toString()
			var degree_of_roation = Math.floor(Math.random() * 360).toString()
			var factor_x = index_x * grid_size
			var factor_y = index_y * grid_size
			var random_x = Math.floor(Math.random() * (image_width - index_x))
			var random_y = Math.floor(Math.random() * (image_height - index_y))
			var translate = `translate(${random_x},${random_y})`
			var rotoroute = `rotate(${degree_of_roation})`
			var transformation = `transform="${translate} ${rotoroute}"`

			var star_translate = 5;//translates along a slope

			var star_multiplier = grid_size
			var star_point_two = (star_multiplier * 2) + (0 + star_translate)
			var star_point_three = (star_multiplier * 3) + (0 + star_translate)
			var star_point_four = (star_multiplier * 4) + (0 + star_translate)
			var star_point_one = (star_multiplier * 1) + (0 + star_translate)
			var star_point_zero = (star_multiplier * 0) + (0 + star_translate)

			var wiggle_line_multiplier = Math.floor(Math.random() * 10);

			var star_elem = `<path d="M ${star_point_two} ${star_point_zero} C ${star_point_two} ${star_point_one} ${star_point_one} ${star_point_two} ${star_point_zero} ${star_point_two} C ${star_point_one} ${star_point_two} ${star_point_two} ${star_point_three} ${star_point_two} ${star_point_four} C ${star_point_two} ${star_point_three} ${star_point_three} ${star_point_two} ${star_point_four} ${star_point_two} C ${star_point_three} ${star_point_two} ${star_point_two} ${star_point_one} ${star_point_two} ${star_point_zero} Z" fill="${random_fill_color}" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}" fill-opacity= "${random_fill_opacity}" stroke-width="${random_stroke_width}" stroke-linejoin="round"  ${transformation} />`
			var line_elem = `<path d="M ${star_point_two} ${star_point_zero} L  ${star_point_zero * grid_size} ${star_point_two * grid_size} " fill="${random_fill_color}" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}" fill-opacity= "${random_fill_opacity}" stroke-width="${random_stroke_width}" stroke-linecap="round" ${transformation} />`
			var diam_elem = `<path d="M ${star_point_two} ${star_point_zero} L  ${star_point_zero * 2.5} ${star_point_two} L ${star_point_two} ${star_point_four} L ${star_point_four * 0.8} ${star_point_two} L ${star_point_two} ${star_point_zero} Z" fill="${random_fill_color}" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}" fill-opacity= "${random_fill_opacity}" stroke-width="${random_stroke_width}" stroke-linejoin="round" ${transformation}/>`
			var wigl_elem = `<path d="M ${wiggle_line_multiplier*0} ${wiggle_line_multiplier*4} Q ${wiggle_line_multiplier*0} ${wiggle_line_multiplier*-5} ${wiggle_line_multiplier*1} ${wiggle_line_multiplier*3} T ${wiggle_line_multiplier*2} ${wiggle_line_multiplier*2} ${wiggle_line_multiplier*3} ${wiggle_line_multiplier*3} T ${wiggle_line_multiplier*4} ${wiggle_line_multiplier*4} ${wiggle_line_multiplier*5} ${wiggle_line_multiplier*5} T ${wiggle_line_multiplier*6} ${wiggle_line_multiplier*6} ${wiggle_line_multiplier*7} ${wiggle_line_multiplier*7} T ${wiggle_line_multiplier*8} ${wiggle_line_multiplier*8} ${wiggle_line_multiplier*9} ${wiggle_line_multiplier*9}" fill="transparent" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}"  stroke-width="${random_stroke_width}" stroke-linecap="round" ${transformation}"/>`


			var triangle_elem = `<path d="M ${factor_x} ${factor_y} L ${factor_x} ${factor_y + circle_radius} L ${factor_x + ellipse_radius} ${factor_y + circle_radius} Z" fill=" ${random_fill_color}" stroke="${random_stroke_color}" stroke-width="${random_stroke_width}" ${transformation} />`
			//var circle_elem =` `;
			var rect_elem = `<rect x="${factor_x}" y="${factor_y}" width="${circle_radius}" height="${ellipse_radius}" stroke="${random_stroke_color}" fill="${random_fill_color}" stroke-width="${random_stroke_width} stroke-opacity="${random_stroke_opacity}" fill-opacity="${random_fill_opacity}" ${transformation}  />`;
			var elips_elem = `<ellipse cx="${factor_x} "cy="${factor_y}" rx="${circle_radius}" ry="${ellipse_radius}" stroke="${random_stroke_color}" fill=" ${random_fill_color} " stroke-width="${random_stroke_width}" stroke-opacity="${random_stroke_opacity}" fill-opacity="${random_fill_opacity}"  ${transformation} />`;
			//var path_elem = `<path d="M ${factor_x} ${factor_y} L ${factor_x} ${factor_y + circle_radius} L ${factor_x + ellipse_radius} ${factor_y + circle_radius} Z" fill=" ${random_fill_color}" stroke="${random_stroke_color}" stroke-width="${random_stroke_width}" ${transformation} />`
			//	var star_elem = `<path d="M ${200} 0 C ${200} ${100} ${100} ${200} 0 ${200} C ${100} ${200} ${200} ${300} ${400} ${factor_y*400} C ${200} ${300} ${300} ${200} ${400} ${200} C ${300} ${200} ${200} ${100} ${200} 0 Z" fill="${random_fill_opacity}" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}" fill-opacity= "${random_fill_opacity}" stroke-width="${random_stroke_width}" stroke-linejoin="round" ${transformation}"/>`
			var elements = [
				wigl_elem,
					line_elem,
					triangle_elem,
					rect_elem,
					elips_elem,
				star_elem,
				diam_elem
			]
			var random_elem = getRandomItem(elements)

			//<path d="M 200 0 C 200 100 100 200 0 200 C 100 200 200 300 200 400 C 200 300 300 200 400 200 C 300 200 200 100 200 0 Z" fill="red" stroke="green" stroke-opacity="0.5" fill-opacity= "0.5" stroke-width="10" stroke-linejoin="round" transform="translate(0,0) rotate(0)"/>


			svg += random_elem

			// `<ellipse cx="  ${index_x * grid_size} " cy="${ index_y * grid_size }" rx="${ circle_radius }" ry="${ ellipse_radius}" stroke="'+random_stroke_color+'" fill=" ${random_fill_color} " stroke-width="${random_stroke_width}" stroke-opacity="${random_stroke_opacity}" fill-opacity="${random_fill_opacity }"/>`;


		}

	}
	return `<svg width="${image_width}" height="${image_height}" xmlns="http://www.w3.org/2000/svg" style="background-color:${random_fill_color}">  ${svg}  </svg>`
}
//requestAnimationFrame(generateSvg);

let sivg = generateSvg();
let svGen = document.getElementById('something-completely-different');
//var backgroud_svg=document.querySelector('#svg-gen')
//var g= document.getElementsByTagName('body')[0];
svGen.innerHTML = generateSvg();