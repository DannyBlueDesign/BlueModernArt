/*
** Main Art class.
*/
function Art(opts) {
  this.stage = opts.stage;
  this.colors = opts.colors;
}

Art.prototype.createArt = function() {
  /*
  ** Create a layer for each shape.
  */
  var layer1 = new Kinetic.Layer();
      layer2 = new Kinetic.Layer();

  for(var i = 0; i <= 3000; i += Math.floor((Math.random() * 125) + 1)) {
    for(var y = 0; y <= 3000; y += Math.floor((Math.random() * 125) + 1)) {
      var w = Math.round(Math.random() * 10), object;

      if(w === 0) {
        object = new Kinetic.Circle({
          x: i,
          y: y,
          radius: Math.floor((Math.random() * 50) + 1),
          fill: this.colors[Math.floor(Math.random() * this.colors.length)],
          opacity: Math.random()
        });

        layer1.add(object); // add the shape to the layer
      } 
      else {
        object = new Kinetic.Rect({
          x: i,
          y: y,
          width: Math.floor((Math.random() * 60) + 1),
          height: Math.floor((Math.random() * 60) + 1),
          fill: this.colors[Math.floor(Math.random() * this.colors.length)],
          opacity: Math.random()
        });

        layer2.add(object); // add the shape to the layer
      }
    }
  }

  this.stage.add(layer1, layer2); // add the layer to the stage

  stage.toDataURL({
    callback: function(dataUrl) {
      $("#download").attr("href", dataUrl);
    }
  });
};

Art.prototype.clearArt = function() {
  this.stage.clear();
}