/*<svg width="1000" height="1000">

				<path d="M 200 0 C 200 100 100 200 0 200 C 100 200 200 300 200 400 C 200 300 300 200 400 200 C 300 200 200 100 200 0 Z" fill="red" stroke="green" stroke-opacity="0.5" fill-opacity= "0.5" stroke-width="10" stroke-linejoin="round" transform="translate(0,0) rotate(0)"/>
			`<ellipse cx="${factor_x} "cy="${factor_y}" rx="${circle_radius}" ry="${ellipse_radius}" stroke="${random_stroke_color}" fill=" ${random_fill_color} " stroke-width="${random_stroke_width}" stroke-opacity="${random_stroke_opacity}" fill-opacity="${random_fill_opacity}"  ${transformation} />`
		</svg>*/



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



function generateSvg() {
	var svg = '';
	var image_width = 2000
	var image_height = 1000
	//	var grid_size = 10								//Math.floor(Math.random()*((40-20 + 1) + 20));
	//	var top_index_random = 60 			//Math.floor(Math.random()*((100-50+1)+50))
	//	var circle_radius = Math.floor(Math.random() * 60);
	//	var ellipse_radius = Math.floor(Math.random() * 60);
		
	//	var factor_x = index_x * grid_size
	//	var factor_y = index_y * grid_size
	//var random_x = Math.floor(Math.random() * (image_width - index_x))
	// var random_y = Math.floor(Math.random() * (image_height - index_y))
	// var translate = `translate(${random_x},${random_y})`
	//var rotoroute = `rotate(${degree_of_roation})`
	// var transformation= `transform="${translate} ${rotoroute}"`
	
	var random_fill_color = randomColorRgba()
	var random_back_color = randomColorRgba()
	var random_stroke_width = Math.floor(Math.random() * 10);
	var random_stroke_color = randomColorRgba();
	var random_fill_opacity = (Math.random() * 0.99).toString()
	var random_stroke_opacity = (Math.random() * 0.99).toString()
	var degree_of_roation = Math.floor(Math.random() * 360).toString()


	///////////
	var star_translate= 5  ;//translates along a slope

	var star_multiplier = 10
	var star_point_two = (star_multiplier *2) + (0 + star_translate)
	var star_point_three = (star_multiplier *3) + (0 + star_translate)
	var star_point_four = (star_multiplier *4) + (0+ star_translate)
	var star_point_one = (star_multiplier *1) + (0+ star_translate)
	var star_point_zero = (star_multiplier *0) + (0+ star_translate)


var star_elem = `<path d="M ${star_point_two} ${star_point_zero} C ${star_point_two} ${star_point_one} ${star_point_one} ${star_point_two} ${star_point_zero} ${star_point_two} C ${star_point_one} ${star_point_two} ${star_point_two} ${star_point_three} ${star_point_two} ${star_point_four} C ${star_point_two} ${star_point_three} ${star_point_three} ${star_point_two} ${star_point_four} ${star_point_two} C ${star_point_three} ${star_point_two} ${star_point_two} ${star_point_one} ${star_point_two} ${star_point_zero} Z" fill="${random_fill_color}" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}" fill-opacity= "${random_fill_opacity}" stroke-width="${random_stroke_width}" stroke-linejoin="round"/>`
var elip_elem = `<ellipse cx="${star_translate*5} "cy="${star_translate*5}" rx="${star_multiplier*2}" ry="${star_multiplier*2}" stroke="${random_stroke_color}" fill=" ${random_fill_color} " stroke-width="${random_stroke_width}" stroke-opacity="${random_stroke_opacity}" fill-opacity="${random_fill_opacity}" />`

return `  <svg width="${image_width}" height="${image_height}" xmlns="http://www.w3.org/2000/svg" style="background-color:${random_back_color}">  
		<defs>		
	 	<pattern id="star" x="0" y="0" width=".025" height=".05">
		${elip_elem} ${star_elem}  
 		</pattern>
	 </defs>
		<rect fill="url(#star)" width="${image_width}" height="${image_height}" stroke="black"/>
 		</svg>`
}
let svGen = document.getElementById('svg-star');
svGen.innerHTML = generateSvg();