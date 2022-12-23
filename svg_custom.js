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
let colorOne = randomColorRgba();
let colorTwo= randomColorRgba();
let colorThree=randomColorRgba();
let colorFour=randomColorRgba();
function colourSelectionOne(){
	colorOne=document.getElementById('colourSelectOne').value;	
	viewValues();
}
function colourSelectionTwo(){
	colorTwo=document.getElementById('colourSelectTwo').value;
	viewValues();
}
function colourSelectionThree(){
	colorThree=document.getElementById('colourSelectThree').value;
	viewValues();
}
function colourSelectionFour(){
	colorFour=document.getElementById('colourSelectFour').value;
	viewValues();
}
function setAllColorsRandom(){
	colorOne=randomColorRgba()
	colorTwo=randomColorRgba()
	colorThree=randomColorRgba()
	colorFour=randomColorRgba()
	viewValues();
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
	viewValues();
}
var image_width = 500
var image_height = 500
function widthSizer(){
	image_width=document.getElementById("widthSize").value;
	console.log("IMAGEWIDTH:	",image_width)
	viewValues();
}
function heightSizer(){
	image_height=document.getElementById("imageHeight").value;
	console.log("IMAGE HEIGHT:	",image_height)
	viewValues();
}
var top_index_random = 35 
function indexSizer(){
	top_index_random=document.getElementById("topIndex").value;
	console.log("TOP INDEX:	",top_index_random)
	viewValues();
}
let randomSwitch;
function setRandom(){
	if(document.getElementById("addEll").value=="off"){
		document.getElementById("addEll").value="on";
		randomSwitch=1;
		console.log('Random Switch:		',randomSwitch);
		
	}
	else if (document.getElementById("addEll").value=="on"){
		document.getElementById("addEll").value="off";
		randomSwitch=0;
		console.log('Random Switch:		',randomSwitch);
	}
	viewValues();
}
console.log(grid_size,image_width, image_width, top_index_random)
let elements=[]
/***
//let wigl_elem;
//let line_elem;
let triangle_elem;
let rect_elem;
//let elips_elem;
let star_elem;
let diam_elem;
//let factor_x;
//let factor_y;
let circle_radius = Math.floor(Math.random() * 60);
let ellipse_radius = Math.floor(Math.random() * 60);
let random_fill_color = colorOne//randomColorRgba()
let random_stroke_width = Math.floor(Math.random() * 10);
let random_stroke_color = colorTwo//randomColorRgba();
let random_fill_opacity = (Math.random() * 0.99).toString()
let random_stroke_opacity = (Math.random() * 0.99).toString()
let degree_of_roation =0// Math.floor(Math.random() * 360).toString() // Can Set to Zero
let random_x;// = Math.floor(Math.random() * (image_width - index_x))
let random_y;// = Math.floor(Math.random() * (image_height - index_y))
let translate_x = 0//random_x  // Can Set to Zero
let translate_y = 0//random_y // Can Set to Zero 
let translate = `translate(${translate_x},${translate_y})`
let rotoroute = `rotate(${degree_of_roation})`
let transformation = `transform="${translate} ${rotoroute}"`
let dx_feoffset = Math.floor(Math.random() * 20);
let dy_feoffset = Math.floor(Math.random() * 20);
let std_deviation = Math.floor(Math.random() * 20);
let star_translate = 5;//translates along a slope
let star_multiplier = grid_size
let star_point_two = (star_multiplier * 2) + (0 + star_translate)
let star_point_three = (star_multiplier * 3) + (0 + star_translate)
let star_point_four = (star_multiplier * 4) + (0 + star_translate)
let star_point_one = (star_multiplier * 1) + (0 + star_translate)
let star_point_zero = (star_multiplier * 0) + (0 + star_translate)
let wiggle_line_multiplier = Math.floor(Math.random() * 10);*/
function viewValues(){
	let elementorum=document.getElementById('varValues')
	elementorum.innerHTML=`Elements:\n ${elements}`
	
	document.getElementById('flView').innerHTML=`Fill Color: ${colorOne}`
	document.getElementById('strkView').innerHTML=`Stroke Color: ${colorTwo}`
	document.getElementById('cbackView').innerHTML=`Background Color: ${colorThree}`
	document.getElementById('clightView').innerHTML=`Lighting Color: ${colorFour}`
	//document.getElementById('randView').innerHTML=`Colors: \n Fill Color: ${colorOne}Stroke Color:  \n${colorTwo}\nBackground Color: ${colorThree}\nLighting Color: ${colorFour}`
	document.getElementById('wiggyView').innerHTML=`Wiggle Lines Set To:	${document.getElementById("wiggy").value}`
	document.getElementById('elpView').innerHTML=`Ellipses Set To:	${document.getElementById("elps").value}`
	document.getElementById('rectView').innerHTML=`Rectangles Set To:	${document.getElementById("rects").value}`
	document.getElementById('gridView').innerHTML=`Grid Size Set To:	${document.getElementById("gridSize").value}`
	document.getElementById('widthView').innerHTML=`Width Set To:	${document.getElementById("widthSize").value}`
	document.getElementById('heightView').innerHTML=`Height Set To:	${document.getElementById("imageHeight").value}`
	document.getElementById('topIndexView').innerHTML=`Top Index Set To:	${document.getElementById("topIndex").value}`
}
function add_element(element){
	elements.push(element);
	viewValues();
}
function remove_element(element){
	elements.pop(element);
	viewValues();
}
let wigSwitch;
let wiggley= "Wiggley Line";
function wiggle_line_creator(wiggleLineFactor, transformationProperty, strokeColor,strokeOpacity, strokeWidth){
	return `<path d="M ${wiggleLineFactor * 0} ${wiggleLineFactor * 4} Q ${wiggleLineFactor * 0} ${wiggleLineFactor * -5} ${wiggleLineFactor * 1} ${wiggleLineFactor * 3} T ${wiggleLineFactor * 2} ${wiggleLineFactor * 2} ${wiggleLineFactor * 3} ${wiggleLineFactor * 3} T ${wiggleLineFactor * 4} ${wiggleLineFactor * 4} ${wiggleLineFactor * 5} ${wiggleLineFactor * 5} T ${wiggleLineFactor * 6} ${wiggleLineFactor * 6} ${wiggleLineFactor * 7} ${wiggleLineFactor * 7} T ${wiggleLineFactor * 8} ${wiggleLineFactor * 8} ${wiggleLineFactor * 9} ${wiggleLineFactor * 9}" fill="transparent" stroke="${strokeColor}" stroke-opacity="${strokeOpacity}"  stroke-width="${strokeWidth}" stroke-linecap="round" ${transformationProperty}"/>`
}
function wigl_switch(){
	if(document.getElementById("wiggy").value=="off"){
		document.getElementById("wiggy").value="on";
		wigSwitch=1;
		console.log('Wiggle Switch:	',wigSwitch);
	}
	else if (document.getElementById("wiggy").value=="on"){
		document.getElementById("wiggy").value="off";
		wigSwitch=0;
		console.log('Wiggle Switch:	',wigSwitch);
	}
	if(wigSwitch==1){
		add_element(wiggley);
	}
	else if (wigSwitch==0){
		remove_element(wiggley);
	}
	console.log(elements)
	viewValues();
}
let elipSwitch;
var elipsis='Elipsis';
	
function elipse_creator(xPlace, yPlace, circleRadius, elipsRadius, strokeColour, fillColour, strokeWidth, strokeOpacity, fillOpacity/*, transformProperty*/){
	return `<ellipse cx="${xPlace} "cy="${yPlace}" rx="${circleRadius}" ry="${elipsRadius}" stroke="${strokeColour}" fill=" ${fillColour} " stroke-width="${strokeWidth}" stroke-opacity="${strokeOpacity}" fill-opacity="${fillOpacity}"  ${/*transformProperty*/' '} />`;
}
function elips_switch(){
	if(document.getElementById("elps").value=="off"){
		document.getElementById("elps").value="on";
		elipSwitch=1;
		console.log('Elipses Switch:	',elipSwitch);
	}
	else if (document.getElementById("elps").value=="on"){
		document.getElementById("elps").value="off";
		elipSwitch=0;
		console.log('Elipses Switch:	',elipSwitch);
	}
	if(elipSwitch==1){
		add_element(elipsis);
	}
	else if (elipSwitch==0){
		remove_element(elipsis);
	}
	console.log(elements)
	viewValues();
}
let rectSwitch;
let rectangle="Rectangle";
function rectangle_creator(xPlace, yPlace, circleRadius, elipsRadius, strokeColour, fillColour, strokeWidth, strokeOpacity, fillOpacity/*, transformProperty*/){
	//return `<ellipse cx="${xPlace} "cy="${yPlace}" rx="${circleRadius}" ry="${elipsRadius}" stroke="${strokeColour}" fill=" ${fillColour} " stroke-width="${strokeWidth}" stroke-opacity="${strokeOpacity}" fill-opacity="${fillOpacity}"  ${/*transformProperty*/' '} />`;
	//rect_elem = 
	return `<rect x="${xPlace}" y="${yPlace}" width="${circleRadius}" height="${elipsRadius}" stroke="${strokeColour}" fill="${fillColour}" stroke-width="${strokeWidth}" stroke-opacity="${strokeOpacity}" fill-opacity="${fillOpacity}" ${/*transformation*/' '}  />`;

}
function rectangle_switch(){
	if(document.getElementById("rects").value=="off"){
		document.getElementById("rects").value="on";
		rectSwitch=1;
		console.log('Rectangle Switch:	',rectSwitch);
	}
	else if (document.getElementById("rects").value=="on"){
		document.getElementById("rects").value="off";
		rectSwitch=0;
		console.log('Rectangle Switch:	',rectSwitch);
	}
	if(rectSwitch==1){
		add_element(rectangle);
	}
	else if (rectSwitch==0){
		remove_element(rectangle);
	}
	console.log(elements)
	viewValues();
}
let filterSwitch;
function filtering_switch(){
	if(document.getElementById("filts").value=="off"){
		document.getElementById("filts").value="on";
		filterSwitch=1;
		console.log('Filter Switch:	',filterSwitch);
	}
	else if (document.getElementById("filts").value=="on"){
		document.getElementById("filts").value="off";
		filterSwitch=0;
		console.log('Filter Switch:	',filterSwitch);
	}
	viewValues();
}

//let star_elem = `<path d="M ${star_point_two} ${star_point_zero} C ${star_point_two} ${star_point_one} ${star_point_one} ${star_point_two} ${star_point_zero} ${star_point_two} C ${star_point_one} ${star_point_two} ${star_point_two} ${star_point_three} ${star_point_two} ${star_point_four} C ${star_point_two} ${star_point_three} ${star_point_three} ${star_point_two} ${star_point_four} ${star_point_two} C ${star_point_three} ${star_point_two} ${star_point_two} ${star_point_one} ${star_point_two} ${star_point_zero} Z" fill="${random_fill_color}" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}" fill-opacity= "${random_fill_opacity}" stroke-width="${random_stroke_width}" stroke-linejoin="round"  ${transformation} />`
//let line_elem = `<path d="M ${star_point_two} ${star_point_zero} L  ${star_point_zero * grid_size} ${star_point_two * grid_size} " fill="${random_fill_color}" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}" fill-opacity= "${random_fill_opacity}" stroke-width="${random_stroke_width}" stroke-linecap="round" ${transformation} />`
//let diam_elem = `<path d="M ${star_point_two} ${star_point_zero} L  ${star_point_zero * 2.5} ${star_point_two} L ${star_point_two} ${star_point_four} L ${star_point_four * 0.9} ${star_point_two} L ${star_point_two} ${star_point_zero} Z" fill="${random_fill_color}" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}" fill-opacity= "${random_fill_opacity}" stroke-width="${random_stroke_width}" stroke-linejoin="round" ${transformation}/>`
			//wigl_elem = `<path d="M ${wiggle_line_multiplier * 0} ${wiggle_line_multiplier * 4} Q ${wiggle_line_multiplier * 0} ${wiggle_line_multiplier * -5} ${wiggle_line_multiplier * 1} ${wiggle_line_multiplier * 3} T ${wiggle_line_multiplier * 2} ${wiggle_line_multiplier * 2} ${wiggle_line_multiplier * 3} ${wiggle_line_multiplier * 3} T ${wiggle_line_multiplier * 4} ${wiggle_line_multiplier * 4} ${wiggle_line_multiplier * 5} ${wiggle_line_multiplier * 5} T ${wiggle_line_multiplier * 6} ${wiggle_line_multiplier * 6} ${wiggle_line_multiplier * 7} ${wiggle_line_multiplier * 7} T ${wiggle_line_multiplier * 8} ${wiggle_line_multiplier * 8} ${wiggle_line_multiplier * 9} ${wiggle_line_multiplier * 9}" fill="transparent" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}"  stroke-width="${random_stroke_width}" stroke-linecap="round" ${transformation}"/>`


//			var triangle_elem = `<path d="M ${factor_x} ${factor_y} L ${factor_x} ${factor_y + circle_radius} L ${factor_x + ellipse_radius} ${factor_y + circle_radius} Z" fill=" ${random_fill_color}" stroke="${random_stroke_color}" stroke-width="${random_stroke_width}" ${transformation} />`
//var rect_elem = `<rect x="${factor_x}" y="${factor_y}" width="${circle_radius}" height="${ellipse_radius}" stroke="${random_stroke_color}" fill="${random_fill_color}" stroke-width="${random_stroke_width}" stroke-opacity="${random_stroke_opacity}" fill-opacity="${random_fill_opacity}" ${transformation}  />`;

function generateSvg() {
	var svg = '';
	
	for (var index_x = 0; index_x < top_index_random; index_x++) {
		for (var index_y = 0; index_y < top_index_random; index_y++) {
			if(randomSwitch==0){
			setAllColorsRandom()
			}/*
			if(elements.includes(elipsis)){
				console.log(elipsis,'	in	',elements)
			}*/
			let elms=[
		
	]
			var circle_radius = Math.floor(Math.random() * 60);
			var ellipse_radius = Math.floor(Math.random() * 60);
			var random_fill_color = colorOne//randomColorRgba()
			var random_stroke_width = Math.floor(Math.random() * 10);
			var random_stroke_color = colorTwo//randomColorRgba();
			var random_fill_opacity = (Math.random() * 0.99).toString()
			var random_stroke_opacity = (Math.random() * 0.99).toString()
			var degree_of_roation = Math.floor(Math.random() * 360).toString() // Can Set to Zero
			factor_x = index_x * grid_size
			factor_y = index_y * grid_size
		  var random_x = Math.floor(Math.random() * (image_width - index_x))
			var random_y = Math.floor(Math.random() * (image_height - index_y))
			var translate_x = random_x  // Can Set to Zero
			var translate_y = random_y // Can Set to Zero 
			var translate = `translate(${translate_x},${translate_y})`
			var rotoroute = `rotate(${degree_of_roation})`
			var transformation = `transform="${translate} ${rotoroute}"`

			var dx_feoffset = Math.floor(Math.random() * 20);
			var dy_feoffset = Math.floor(Math.random() * 20);
			var std_deviation = Math.floor(Math.random() * 20);
			let wiggle_line_multiplier = Math.floor(Math.random() * 10);
			if(elements.includes(elipsis)){
			let elips_elem=elipse_creator(factor_x, factor_y, circle_radius, ellipse_radius,random_stroke_color,random_fill_color, random_stroke_width, random_stroke_opacity, random_fill_opacity, /*transformation*/)
				elms.push(elips_elem)
				console.log(elms)
		}
			if(elements.includes(rectangle)){
			let rect_elem=rectangle_creator(factor_x, factor_y, circle_radius, ellipse_radius,random_stroke_color,random_fill_color, random_stroke_width, random_stroke_opacity, random_fill_opacity, /*transformation*/)
				elms.push(rect_elem)
				console.log(elms)
		}
			if(elements.includes(wiggley)){
			let wigl_elem =wiggle_line_creator(wiggle_line_multiplier, transformation, random_stroke_color, random_stroke_opacity, random_stroke_width);
				elms.push(wigl_elem)
			}
	/*		let elms=[
				elips_elem,
			//	wigl_elem
			]
			/*if(elipsis in elements){
				elms.pop(elips_elem)
				console.log('IF LOGIC IN PLAY		',elms)
			}
			console.log(elms)


//			var star_translate = 5;//translates along a slope

//			var star_multiplier = grid_size
//			var star_point_two = (star_multiplier * 2) + (0 + star_translate)
//			var star_point_three = (star_multiplier * 3) + (0 + star_translate)
//			var star_point_four = (star_multiplier * 4) + (0 + star_translate)
//			var star_point_one = (star_multiplier * 1) + (0 + star_translate)
//			var star_point_zero = (star_multiplier * 0) + (0 + star_translate)

//			var wiggle_line_multiplier = Math.floor(Math.random() * 10);

//			var star_elem = `<path d="M ${star_point_two} ${star_point_zero} C ${star_point_two} ${star_point_one} ${star_point_one} ${star_point_two} ${star_point_zero} ${star_point_two} C ${star_point_one} ${star_point_two} ${star_point_two} ${star_point_three} ${star_point_two} ${star_point_four} C ${star_point_two} ${star_point_three} ${star_point_three} ${star_point_two} ${star_point_four} ${star_point_two} C ${star_point_three} ${star_point_two} ${star_point_two} ${star_point_one} ${star_point_two} ${star_point_zero} Z" fill="${random_fill_color}" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}" fill-opacity= "${random_fill_opacity}" stroke-width="${random_stroke_width}" stroke-linejoin="round"  ${transformation} />`
//			var line_elem = `<path d="M ${star_point_two} ${star_point_zero} L  ${star_point_zero * grid_size} ${star_point_two * grid_size} " fill="${random_fill_color}" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}" fill-opacity= "${random_fill_opacity}" stroke-width="${random_stroke_width}" stroke-linecap="round" ${transformation} />`
//			var diam_elem = `<path d="M ${star_point_two} ${star_point_zero} L  ${star_point_zero * 2.5} ${star_point_two} L ${star_point_two} ${star_point_four} L ${star_point_four * 0.9} ${star_point_two} L ${star_point_two} ${star_point_zero} Z" fill="${random_fill_color}" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}" fill-opacity= "${random_fill_opacity}" stroke-width="${random_stroke_width}" stroke-linejoin="round" ${transformation}/>`
			//wigl_elem = `<path d="M ${wiggle_line_multiplier * 0} ${wiggle_line_multiplier * 4} Q ${wiggle_line_multiplier * 0} ${wiggle_line_multiplier * -5} ${wiggle_line_multiplier * 1} ${wiggle_line_multiplier * 3} T ${wiggle_line_multiplier * 2} ${wiggle_line_multiplier * 2} ${wiggle_line_multiplier * 3} ${wiggle_line_multiplier * 3} T ${wiggle_line_multiplier * 4} ${wiggle_line_multiplier * 4} ${wiggle_line_multiplier * 5} ${wiggle_line_multiplier * 5} T ${wiggle_line_multiplier * 6} ${wiggle_line_multiplier * 6} ${wiggle_line_multiplier * 7} ${wiggle_line_multiplier * 7} T ${wiggle_line_multiplier * 8} ${wiggle_line_multiplier * 8} ${wiggle_line_multiplier * 9} ${wiggle_line_multiplier * 9}" fill="transparent" stroke="${random_stroke_color}" stroke-opacity="${random_stroke_opacity}"  stroke-width="${random_stroke_width}" stroke-linecap="round" ${transformation}"/>`


//			var triangle_elem = `<path d="M ${factor_x} ${factor_y} L ${factor_x} ${factor_y + circle_radius} L ${factor_x + ellipse_radius} ${factor_y + circle_radius} Z" fill=" ${random_fill_color}" stroke="${random_stroke_color}" stroke-width="${random_stroke_width}" ${transformation} />`
//			var rect_elem = `<rect x="${factor_x}" y="${factor_y}" width="${circle_radius}" height="${ellipse_radius}" stroke="${random_stroke_color}" fill="${random_fill_color}" stroke-width="${random_stroke_width}" stroke-opacity="${random_stroke_opacity}" fill-opacity="${random_fill_opacity}" ${transformation}  />`;
			//elips_elem = `<ellipse cx="${factor_x} "cy="${factor_y}" rx="${circle_radius}" ry="${ellipse_radius}" stroke="${random_stroke_color}" fill=" ${random_fill_color} " stroke-width="${random_stroke_width}" stroke-opacity="${random_stroke_opacity}" fill-opacity="${random_fill_opacity}"  ${transformation} />`;
			//var elements = [
				//wigl_elem,
				//line_elem,
				//triangle_elem,
				//rect_elem,
				//elips_elem,
				//star_elem,
				//diam_elem
			//]*/
			let element_added;
			var random_elem = getRandomItem(elms)
			var enclosed_elem = `<g filter="url(#fltr)"> ${random_elem} </g>`
			if(filterSwitch ==0){element_added=random_elem;}
			else if(filterSwitch==1){element_added=enclosed_elem;}
			svg += element_added //enclosed_elem


		

	}}
	return `<svg width="${image_width}" height="${image_height}" xmlns="http://www.w3.org/2000/svg" style="background-color:${colorThree}">
 <defs>
     <filter id="fltr" filterUnits="userSpaceOnUse"
            x="0" y="0"
            width="${image_width * 2}" height="${image_height * 2}">

      <!-- offsetBlur -->
      <feGaussianBlur in="SourceAlpha" stdDeviation="${std_deviation}" result="blur"/>
      <feOffset in="blur" dx="${dx_feoffset}" dy="${dy_feoffset}" result="offsetBlur"/>

      <!-- litPaint -->
      <feSpecularLighting in="blur" surfaceScale="${random_stroke_width}" specularConstant="${random_stroke_opacity}"
                          specularExponent="${circle_radius}" lighting-color="${colorFour}"
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