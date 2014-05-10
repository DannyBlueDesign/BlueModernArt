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
** Wrap Jquery color picker plugin in funtion to
** allow looping over all elements
*/
function colorPicker(id) {
	$("#colorSelector" + id).ColorPicker({
		color: defaultColors[id],
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);

			art.clearArt();

			art.createArt();

			stage.toDataURL({
	          callback: function(dataUrl) {
	            $("#download").attr("href", dataUrl);
	          }
	        });
		},
		onChange: function (hsb, hex, rgb) {
			$("#colorSelector" + id).find("div").css('backgroundColor', '#' + hex);

			defaultColors[id] = "#" + hex;
		}
	});
}

for(var i = 0; i<colorSelectors; i++) { 
	colorPicker(i);

	$("#colorSelector" + i).find("div").css('backgroundColor', defaultColors[i]);
}

/*
** Options for the art canvas
*/
var artOptions = {
	stage: stage,
    colors: defaultColors
};

var art = new Art(artOptions);

art.createArt();