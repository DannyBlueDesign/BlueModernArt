'use strict';
(function() {

  var height   = window.screen.availHeight,
      width    = window.screen.availWidth,
      canvasId = 'container',
      canvas   = document.getElementById(canvasId);

  /* Create New Kinetic Stage */
  var stage = new Kinetic.Stage({
    container: 'container',
    width: width,
    height: height
  });

  var art = new Art({
    stage: stage,
    colors: ['#006699', '#a60000', '#000000', '#613400', '#035900', '#e04b00', '#858585', '#528ef0']
  });

  art.create();

  art.shuffle();

  window.setInterval(function() {

    art.shuffle();

  }, 4000);

  canvas.addEventListener('click', function() {
    art.shuffle();
  });

}());