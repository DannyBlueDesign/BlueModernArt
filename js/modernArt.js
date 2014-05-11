/*
** Main Art class.
*/
function Art(opts) {
  this.stage = opts.stage;
  this.colors = opts.colors;
  this.shapeList = [];
  this.layer1 = new Kinetic.Layer();
}

/*
** Initial method to create the modern art
*/
Art.prototype.createArt = function() {
  var shapeList = [];

  /* Loop that draws shapes to the canvas*/
  for(var i = 0; i <= 2700; i += Math.floor((Math.random() * 140) + 1)) {
    for(var y = 0; y <= 900; y += Math.floor((Math.random() * 140) + 1)) {
      var w = Math.round(Math.random() * 10), object;
      
      object = new Kinetic.Rect({
        x: i,
        y: y,
        width: Math.floor((Math.random() * 75) + 1),
        height: Math.floor((Math.random() * 75) + 1),
        fill: this.colors[Math.floor(Math.random() * this.colors.length)],
        opacity: Math.random()
      });

      shapeList.push(object);

      this.layer1.add(object); // add the shape to the layer
    }
  }

  this.stage.add(this.layer1); // add the layer to the stage

  stage.toDataURL({
    callback: function(dataUrl) {
      $("#download").attr("href", dataUrl);
    }
  });

  this.shapeList = shapeList;
};

/*
** Shuffle all of the shapes to a new position on screen
*/
Art.prototype.shuffleArt = function() {
  var shapeCount = 0;

  for(var i = 0; i <= 2700; i += Math.floor((Math.random() * 140) + 1)) {
    for(var y = 0; y <= 900; y += Math.floor((Math.random() * 140) + 1)) {
      var w = Math.round(Math.random() * 10);
      
      var tween = new Kinetic.Tween({
        node: this.shapeList[shapeCount],
        x: i,
        y: y,
        width: Math.floor((Math.random() * 75) + 1),
        height: Math.floor((Math.random() * 75) + 1),
        opacity: Math.random(),
        easing: Kinetic.Easings.StrongEaseOut,
        duration: 2
      });

      tween.play();
      
      shapeCount++;
    }
  }
}

/*
** Change the color mix of the shapes
*/
Art.prototype.changeColors = function() {
  var shapeList = this.shapeList,
      layer = this.layer1,
      colors = this.colors;

  for(var i = 0; i<shapeList.length; i++) {
    shapeList[i].fill(colors[Math.floor(Math.random() * colors.length)]);

    console.log(shapeList[i]);
  }

  layer.draw();
}