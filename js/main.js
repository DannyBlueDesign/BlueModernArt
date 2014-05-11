"use strict";

/*
** Set stage height and width to the screen size
*/
var height = window.screen.availHeight, width = window.screen.availWidth;

/* Creat New Kinetic Stage */
var stage = new Kinetic.Stage({
	container: 'container',
	width: width,
	height: height
});

/*
** Get number of color pickers
*/
var colorSelectors = document.getElementsByClassName("color-select").length;

/* Default Colors array. Will be updated when color pickers change  */
var defaultColors = ["#006699", "#a60000", "#000000", "#613400", "#035900", "#e04b00", "#858585", "#528ef0"];

/*
** Options for the art canvas
*/
var artOptions = {
	stage: stage,
    colors: defaultColors
};

/* Create new art object */
var art = new Art(artOptions);
art.createArt();

/*
** Wrap Jquery color picker plugin in funtion to
** allow looping over all elements
*/
function colorPicker(id, canvas) {
	$("#colorSelector" + id).ColorPicker({
		color: defaultColors[id],
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);

			stage.toDataURL({
	          callback: function(dataUrl) {
	            $("#download").attr("href", dataUrl);
	          }
	        });

	        art.changeColors();
		},
		onChange: function (hsb, hex, rgb) {
			$("#colorSelector" + id).find("div").css('backgroundColor', '#' + hex);

			defaultColors[id] = "#" + hex;
		}
	});
}

/*
** Generate Random Key
*/
function makeKey() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return "modern_art_" + text;
}

/* Loop over all color picker elements
** apply color Picker method and set the preview color
*/
for(var i = 0; i<colorSelectors; i++) { 
	colorPicker(i, art);

	$("#colorSelector" + i).find("div").css('backgroundColor', defaultColors[i]);
}

document.getElementById("shuffle").addEventListener("click", function() {
	return art.shuffleArt();
});


document.getElementById("download").addEventListener("click", function() {
	$(this).attr("download", makeKey());
});