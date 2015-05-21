'use strict';

(function() {

  var height   = window.innerHeight,
      width    = window.innerWidth,
      canvasId = 'container',
      canvas   = document.getElementById(canvasId);

  // Create new kinetic stage
  var stage = new Kinetic.Stage({
    container: canvasId,
    width: width,
    height: height
  });

  var colors = ['#8DA1B9', '#95ADB6', '#CBB3BF', '#DBC7BE', '#EF959C'];

  // create new art object
  var art = new Art(stage, colors, 50, 200);

  art.create();

  art.shuffle(0, 0, 5, 5);

  art.shuffle();

  canvas.addEventListener('mousedown', function(e) {

    art.shuffle(e.x, e.y, 5, 5);

  });

  canvas.addEventListener('mouseup', function() {

    art.shuffle();

  });

}());