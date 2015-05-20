ModernArt
=============

Create Randomized "Modern" art with Kinetic Js.

Fun little learning project for Kinetic js.

```JS
var height = window.screen.availHeight,
    width  = window.screen.availWidth;

  // Create new Kinetic State
  var stage = new Kinetic.Stage({
    container: 'container',
    width: width,
    height: height
  });
  
  // Create new Art object
  var art = new Art({
    stage: stage,
    colors: ['#006699', '#a60000', '#000000', '#613400', '#035900', '#e04b00', '#858585', '#528ef0']
  });
  
  // generate the art!!!!
  art.create();
  
  // shuffle art to new positions
  window.setInterval(function() {

    art.shuffle();

  }, 3000);

```
