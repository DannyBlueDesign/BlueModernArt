'use strict';

(function() {

  var height   = window.screen.availHeight,
      width    = window.screen.availWidth,
      canvasId = 'container',
      canvas   = document.getElementById(canvasId);

  // Create new kinetic stage
  var stage = new Kinetic.Stage({
    container: canvasId,
    width: width,
    height: height
  });

  var colors = ['#006699', '#a60000', '#000000', '#613400', '#035900', '#e04b00', '#858585', '#528ef0'];

  // create new art object
  var art = new Art(stage, colors);

  art.create();

  art.shuffle();

  window.setInterval(function() {

    art.shuffle();

  }, 3000);

  canvas.addEventListener('click', function() {

    art.shuffle();

  });

}());