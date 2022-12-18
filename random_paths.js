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
let colorOne=''
let colorTwo=''
function colourSelection(colour,identity){
	colour=document.getElementById(`${identity}`).value;
	console.log(colour);
	document.getElementById('selectionForm').style.backgroundColor = colour
	
}
function filetodatename(){
	const currentDate= new Date();
	const currentYear=currentDate.getFullYear().toString()
	const currentMonth=currentDate.getMonth().toString()
	const currentDay=currentDate.getDay().toString()
	const currentHours=currentDate.getHours().toString()
	const currentMinutes=currentDate.getMinutes().toString()
	const currentSeconds=currentDate.getSeconds().toString()
	return`SVG_Generated__${currentDay}.${currentMonth}.${currentYear}_${currentHours}.${currentMinutes}.${currentSeconds}`
	
}
function downloadSVG() {
	const svg = document.getElementById('something-completely-different').innerHTML;
	const blob = new Blob([svg.toString()]);
	const element = document.createElement("a");
	const fileName= filetodatename()
	element.download = `${fileName}.svg`;
	element.href = window.URL.createObjectURL(blob);
	element.click();
	element.remove();
}

var grid_size = 35
console.log(grid_size)
function gridSizer(){
	grid_size=document.getElementById("gridSize").value;
	console.log("GRID SIZE:	",grid_size)
}
var image_width = 1000
var image_height = 800
function widthSizer(){
	image_width=document.getElementById("widthSize").value;
	console.log("IMAGEWIDTH:	",image_width)
}
function heightSizer(){
	image_height=document.getElementById("imageHeight").value;
	console.log("IMAGE HEIGHT:	",image_height)
}
var top_index_random = 35 
function indexSizer(){
	top_index_random=document.getElementById("topIndex").value;
	console.log("TOP INDEX:	",top_index_random)
}
//function addEllipses(){
//	console.log('WORKING');
//	console.log(document.getElementById("randomRotation").value)
//}
addECounter=0
function addEllipses(){
	if(document.getElementById("addEll").value=="off"){
		document.getElementById("addEll").value="on";
		addECounter+=1
	}
	else if (document.getElementById("addEll").value=="on"){
		document.getElementById("addEll").value="off";
		console.log('Danger Will Robinson DANGER!!!', (addECounter*100))
	}
	//document.getElementById("randomRotation").value="off"
	console.log(document.getElementById("addEll").value)
	console.log(addECounter)
}
console.log(grid_size,image_width, image_width, top_index_random)
function generateSvg() {
	var svg = '';
//	var image_width = 1500
//	var image_height = 800
						//Math.floor(Math.random()*((40-20 + 1) + 20));
	//var top_index_random = 50  			//Math.floor(Math.random()*((100-50+1)+50))
	//var grid_size = 30
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
			var degree_of_roation =0// Math.floor(Math.random() * 360).toString() // Can Set to Zero
			var factor_x = index_x * grid_size
			var factor_y = index_y * grid_size
			var random_x = Math.floor(Math.random() * (image_width - index_x))
			var random_y = Math.floor(Math.random() * (image_height - index_y))
			var translate_x = 0//random_x  // Can Set to Zero
			var translate_y = 0//random_y // Can Set to Zero 
			var translate = `translate(${translate_x},${translate_y})`
			var rotoroute = `rotate(${degree_of_roation})`
			var transformation = `transform="${translate} ${rotoroute}"`

			var dx_feoffset = Math.floor(Math.random() * 20);
			var dy_feoffset = Math.floor(Math.random() * 20);
			var std_deviation = Math.floor(Math.random() * 20);



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
			var diam_elem = `<path d="M ${star_point_two} ${star_point_zero} L  ${star_point_zero * 2.5} ${star_point_two} L ${star_point_two} ${star_point_four} L ${star_point_four * 0.9} ${star_point_two} L ${star_point_two} ${star_point_zero} Z" fill="${random_fill_color}" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}" fill-opacity= "${random_fill_opacity}" stroke-width="${random_stroke_width}" stroke-linejoin="round" ${transformation}/>`
			var wigl_elem = `<path d="M ${wiggle_line_multiplier * 0} ${wiggle_line_multiplier * 4} Q ${wiggle_line_multiplier * 0} ${wiggle_line_multiplier * -5} ${wiggle_line_multiplier * 1} ${wiggle_line_multiplier * 3} T ${wiggle_line_multiplier * 2} ${wiggle_line_multiplier * 2} ${wiggle_line_multiplier * 3} ${wiggle_line_multiplier * 3} T ${wiggle_line_multiplier * 4} ${wiggle_line_multiplier * 4} ${wiggle_line_multiplier * 5} ${wiggle_line_multiplier * 5} T ${wiggle_line_multiplier * 6} ${wiggle_line_multiplier * 6} ${wiggle_line_multiplier * 7} ${wiggle_line_multiplier * 7} T ${wiggle_line_multiplier * 8} ${wiggle_line_multiplier * 8} ${wiggle_line_multiplier * 9} ${wiggle_line_multiplier * 9}" fill="transparent" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}"  stroke-width="${random_stroke_width}" stroke-linecap="round" ${transformation}"/>`


			var triangle_elem = `<path d="M ${factor_x} ${factor_y} L ${factor_x} ${factor_y + circle_radius} L ${factor_x + ellipse_radius} ${factor_y + circle_radius} Z" fill=" ${random_fill_color}" stroke="${random_stroke_color}" stroke-width="${random_stroke_width}" ${transformation} />`
			//var circle_elem =` `;
			var rect_elem = `<rect x="${factor_x}" y="${factor_y}" width="${circle_radius}" height="${ellipse_radius}" stroke="${random_stroke_color}" fill="${random_fill_color}" stroke-width="${random_stroke_width}" stroke-opacity="${random_stroke_opacity}" fill-opacity="${random_fill_opacity}" ${transformation}  />`;
			var elips_elem = `<ellipse cx="${factor_x} "cy="${factor_y}" rx="${circle_radius}" ry="${ellipse_radius}" stroke="${random_stroke_color}" fill=" ${random_fill_color} " stroke-width="${random_stroke_width}" stroke-opacity="${random_stroke_opacity}" fill-opacity="${random_fill_opacity}"  ${transformation} />`;
			//var path_elem = `<path d="M ${factor_x} ${factor_y} L ${factor_x} ${factor_y + circle_radius} L ${factor_x + ellipse_radius} ${factor_y + circle_radius} Z" fill=" ${random_fill_color}" stroke="${random_stroke_color}" stroke-width="${random_stroke_width}" ${transformation} />`
			//	var star_elem = `<path d="M ${200} 0 C ${200} ${100} ${100} ${200} 0 ${200} C ${100} ${200} ${200} ${300} ${400} ${factor_y*400} C ${200} ${300} ${300} ${200} ${400} ${200} C ${300} ${200} ${200} ${100} ${200} 0 Z" fill="${random_fill_opacity}" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}" fill-opacity= "${random_fill_opacity}" stroke-width="${random_stroke_width}" stroke-linejoin="round" ${transformation}"/>`
			var elements = [
				//wigl_elem,
				//line_elem,
				//triangle_elem,
				//rect_elem,
				elips_elem,
				//star_elem,
				//diam_elem
			]
			var random_elem = getRandomItem(elements)
			var enclosed_elem = `<g filter="url(#fltr)"> ${random_elem} </g>`
			//<path d="M 200 0 C 200 100 100 200 0 200 C 100 200 200 300 200 400 C 200 300 300 200 400 200 C 300 200 200 100 200 0 Z" fill="red" stroke="green" stroke-opacity="0.5" fill-opacity= "0.5" stroke-width="10" stroke-linejoin="round" transform="translate(0,0) rotate(0)"/>


			svg += enclosed_elem

			// `<ellipse cx="  ${index_x * grid_size} " cy="${ index_y * grid_size }" rx="${ circle_radius }" ry="${ ellipse_radius}" stroke="'+random_stroke_color+'" fill=" ${random_fill_color} " stroke-width="${random_stroke_width}" stroke-opacity="${random_stroke_opacity}" fill-opacity="${random_fill_opacity }"/>`;


		}

	}
	return `<svg width="${image_width}" height="${image_height}" xmlns="http://www.w3.org/2000/svg" style="background-color:${random_fill_color}">
 <defs>
     <filter id="fltr" filterUnits="userSpaceOnUse"
            x="0" y="0"
            width="${image_width * 2}" height="${image_height * 2}">

      <!-- offsetBlur -->
      <feGaussianBlur in="SourceAlpha" stdDeviation="${std_deviation}" result="blur"/>
      <feOffset in="blur" dx="${dx_feoffset}" dy="${dy_feoffset}" result="offsetBlur"/>

      <!-- litPaint -->
      <feSpecularLighting in="blur" surfaceScale="${random_stroke_width}" specularConstant="${random_stroke_opacity}"
                          specularExponent="${circle_radius}" lighting-color="${random_fill_color}"
                          result="specOut">
        <fePointLight x="-${image_width * 5}" y="-${image_height * 10}" z="${image_height * 20}"/>
      </feSpecularLighting>
      <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
      <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic"
                   k1="0" k2="1" k3="1" k4="0" result="litPaint"/>

      <!-- merge offsetBlur + litPaint -->
      <feMerge>
        <feMergeNode in="offsetBlur"/>
        <feMergeNode in="litPaint"/>
      </feMerge>
    </filter>
  </filter>
		</defs>

		<!--<g filter="url(#fltr)">-->
 
 ${svg}  
 <!--</g>-->
 </svg>`
}
function svgEmbed(){
let sivg = generateSvg();
let svGen = document.getElementById('something-completely-different');
svGen.innerHTML = generateSvg();
}