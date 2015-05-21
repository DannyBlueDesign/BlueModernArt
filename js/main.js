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

  var colors = ['#8DA1B9', '#95ADB6', '#CBB3BF', '#DBC7BE', '#EF959C'];

  // create new art object
  var art = new Art(stage, colors, 0, 0);

  art.create();

  art.shuffle();

  window.setInterval(function() {

    //art.shuffle();

  }, 5000);

  canvas.addEventListener('click', function() {

    art.shuffle();

  });

}());