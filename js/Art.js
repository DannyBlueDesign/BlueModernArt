
var Art = (function() {

  var POSITION_BASE = 140,
      SIZE_BASE     = 75,
      prototype     = Art.prototype;

  /**
   * @name Art
   *
   * @param opts
   *
   * @constructor
   */
  function Art(opts) {
    this.stage = opts.stage;

    this.colors = opts.colors;

    this.shapeList = [];

    this.layer1 = new Kinetic.Layer();
  }

  /**
   * @name create
   *
   * @memberof Art
   *
   * @description
   * Create Art!!!
   */
  prototype.create = function create() {
    var shapeList = [];

    /* Loop that draws shapes to the canvas*/
    for(var i = 0; i <= 2700; i += _createRandom(POSITION_BASE)) {

      for(var y = 0; y <= 900; y += _createRandom(POSITION_BASE)) {

        var object = new Kinetic.Rect({
          x: i,
          y: y,
          width: _createRandom(SIZE_BASE),
          height: _createRandom(SIZE_BASE),
          fill: this.colors[Math.floor(Math.random() * this.colors.length)],
          opacity: Math.random()
        });

        shapeList.push(object);

        this.layer1.add(object); // add the shape to the layer

      }

    }

    this.stage.add(this.layer1); // add the layer to the stage

    this.shapeList = shapeList;
  };

  /**
   * @name shuffle
   *
   * @memberof Art
   *
   * @description
   * Shuffle all of the shapes to a new position on screen
   */
  prototype.shuffle = function shuffle() {
    var shapeCount = 0,
        shapeList  = this.shapeList;

    for(var i = 0; i <= 2700; i += _createRandom(POSITION_BASE)) {
      for(var y = 0; y <= 900; y += _createRandom(POSITION_BASE)) {

        var tween = new Kinetic.Tween({
          node: shapeList[shapeCount],
          x: i,
          y: y,
          width: _createRandom(SIZE_BASE),
          height: _createRandom(SIZE_BASE),
          opacity: Math.random(),
          easing: Kinetic.Easings.StrongEaseOut,
          duration: 2
        });

        tween.play();
        
        shapeCount++;
      }
    }
  };

  /**
   * @name changeColors
   *
   * @memberof Art
   *
   * @description
   * Change the color mix of the shapes
   */
  prototype.changeColors = function() {
    var shapeList = this.shapeList,
        layer     = this.layer1,
        colors    = this.colors;

    for(var i = 0; i<shapeList.length; i++) {
      shapeList[i].fill(colors[Math.floor(Math.random() * colors.length)]);
    }

    layer.draw();
  };

  /**
   * @name _createRandom
   *
   * @memberof Art
   *
   * @param base
   *
   * @return {number}
   *
   * @private
   */
  function _createRandom(base) {
    return Math.floor((Math.random() * base) + 1)
  }

  return Art

}());